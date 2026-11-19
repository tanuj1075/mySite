import React, { useState, useMemo } from 'react';
import {
  Filter,
  ArrowUpDown,
  Check,
  X,
  Heart,
  Eye,
  ShoppingBag,
  Scale,
  Star,
  ChevronDown,
  RotateCcw,
} from 'lucide-react';
import { ShoeProduct, CartItem, SizeStock } from '../types';
import { BRANDS, CATEGORIES, GENDERS, ALL_SIZES } from '../data/footwearCatalog';
import { formatCurrency } from '../lib/currency';

interface ProductListingViewProps {
  products: ShoeProduct[];
  onSelectProduct: (product: ShoeProduct) => void;
  onAddToCart: (item: CartItem) => void;
  onToggleWishlist: (product: ShoeProduct) => void;
  wishlistIds: string[];
  onToggleCompare: (product: ShoeProduct) => void;
  compareIds: string[];
  initialCategoryFilter?: string;
  initialBrandFilter?: string;
  onShowToast: (msg: string) => void;
}

export const ProductListingView: React.FC<ProductListingViewProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  onToggleCompare,
  compareIds,
  initialCategoryFilter,
  initialBrandFilter,
  onShowToast,
}) => {
  const PRICE_CEILING = useMemo(() => {
    if (!products.length) return 50000;
    const maxVal = Math.max(...products.map((p) => p.price));
    return maxVal > 0 ? Math.ceil(maxVal / 500) * 500 : 50000;
  }, [products]);

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategoryFilter || 'ALL');
  const [selectedBrand, setSelectedBrand] = useState<string>(initialBrandFilter || 'ALL');
  const [selectedGender, setSelectedGender] = useState<string>('ALL');
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSport, setSelectedSport] = useState<string>('ALL');
  const [minRating, setMinRating] = useState<number>(0);
  const [onlyInStock, setOnlyInStock] = useState<boolean>(false);
  const [maxPrice, setMaxPrice] = useState<number>(PRICE_CEILING);
  const [visibleCount, setVisibleCount] = useState<number>(24);

  // Preserve custom price filter unless ceiling is lower or initial load
  const isCustomPriceRef = React.useRef(false);
  React.useEffect(() => {
    if (!isCustomPriceRef.current || maxPrice > PRICE_CEILING) {
      setMaxPrice(PRICE_CEILING);
    }
  }, [PRICE_CEILING]);

  const availableColors = useMemo(() => {
    const colorSet = new Set<string>();
    products.forEach((p) => {
      p.colors?.forEach((c) => {
        if (c.name) colorSet.add(c.name.trim());
      });
    });
    return Array.from(colorSet).slice(0, 10);
  }, [products]);

  const [sortBy, setSortBy] = useState<
    'POPULAR' | 'NEWEST' | 'PRICE_ASC' | 'PRICE_DESC' | 'RATING' | 'DISCOUNT' | 'TRENDING'
  >('POPULAR');

  // Reset pagination when any filter changes
  React.useEffect(() => {
    setVisibleCount(24);
  }, [
    selectedCategory,
    selectedBrand,
    selectedGender,
    selectedSizes,
    selectedColors,
    selectedSport,
    minRating,
    onlyInStock,
    maxPrice,
    sortBy,
  ]);

  // Mobile filters drawer toggle
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Toggle helper for multi-selects
  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (colorName: string) => {
    setSelectedColors((prev) =>
      prev.includes(colorName) ? prev.filter((c) => c !== colorName) : [...prev, colorName]
    );
  };

  const resetFilters = () => {
    setSelectedCategory('ALL');
    setSelectedBrand('ALL');
    setSelectedGender('ALL');
    setSelectedSizes([]);
    setSelectedColors([]);
    setSelectedSport('ALL');
    setMinRating(0);
    setOnlyInStock(false);
    isCustomPriceRef.current = false;
    setMaxPrice(PRICE_CEILING);
    setSortBy('POPULAR');
    onShowToast('CATALOG MATRIX RESET // DEFAULT CANON RESTORED');
  };

  // Filter Computation
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // 1. Category
      if (selectedCategory !== 'ALL' && product.category !== selectedCategory) {
        return false;
      }

      // 2. Brand
      if (selectedBrand !== 'ALL' && product.brand.toUpperCase() !== selectedBrand.toUpperCase()) {
        return false;
      }

      // 3. Gender
      if (selectedGender !== 'ALL' && product.gender !== selectedGender && product.gender !== 'Unisex') {
        return false;
      }

      // 4. Sport / Use
      if (selectedSport !== 'ALL' && product.use !== selectedSport) {
        return false;
      }

      // 5. Price Max
      if (product.price > maxPrice) {
        return false;
      }

      // 6. Minimum Rating
      if (minRating > 0 && product.rating < minRating) {
        return false;
      }

      // 7. Size Availability Filter (checks inventory exact sizes)
      if (selectedSizes.length > 0) {
        let hasSelectedSizeInStock = false;
        Object.values(product.sizeInventory || {}).forEach((sizeList: any) => {
          if (Array.isArray(sizeList)) {
            sizeList.forEach((st: any) => {
              if (selectedSizes.includes(st.size) && st.stock > 0) {
                hasSelectedSizeInStock = true;
              }
            });
          }
        });
        if (!hasSelectedSizeInStock) return false;
      }

      // 8. Colors Filter
      if (selectedColors.length > 0) {
        const matchesColor = product.colors.some((c) => selectedColors.includes(c.name));
        if (!matchesColor) return false;
      }

      // 9. In Stock Only
      if (onlyInStock) {
        let totalStock = 0;
        Object.values(product.sizeInventory || {}).forEach((sizeList: any) => {
          if (Array.isArray(sizeList)) {
            sizeList.forEach((st: any) => {
              totalStock += st.stock;
            });
          }
        });
        if (totalStock <= 0) return false;
      }

      return true;
    });
  }, [
    products,
    selectedCategory,
    selectedBrand,
    selectedGender,
    selectedSport,
    maxPrice,
    minRating,
    selectedSizes,
    selectedColors,
    onlyInStock,
  ]);

  // Sort Computation
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    switch (sortBy) {
      case 'PRICE_ASC':
        return list.sort((a, b) => a.price - b.price);
      case 'PRICE_DESC':
        return list.sort((a, b) => b.price - a.price);
      case 'RATING':
        return list.sort((a, b) => b.rating - a.rating);
      case 'DISCOUNT':
        return list.sort((a, b) => b.discountPercent - a.discountPercent);
      case 'NEWEST':
        return list.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
      case 'TRENDING':
        return list.sort((a, b) => b.reviewsCount - a.reviewsCount);
      case 'POPULAR':
      default:
        return list.sort((a, b) => b.reviewsCount * b.rating - a.reviewsCount * a.rating);
    }
  }, [filteredProducts, sortBy]);

  return (
    <div className="w-full bg-[#09090b] text-[#f4f4f6] font-mono pb-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-6">
        
        {/* Page Header */}
        <div className="border-b border-[#242429] pb-8 mb-8">
          <div className="flex items-center gap-2 text-[10px] text-[#c9a96e] uppercase tracking-[0.2em] mb-3 font-bold">
            <span className="w-1.5 h-1.5 bg-[#c9a96e] inline-block"></span>
            <span>VANTA CATALOG // SPECIFICATION REGISTRY</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="font-headline text-4xl sm:text-6xl font-bold tracking-tight uppercase text-[#f4f4f6] leading-none mb-3">
                {selectedCategory === 'ALL'
                  ? selectedBrand === 'ALL'
                    ? 'ALL FOOTWEAR'
                    : `${selectedBrand} COLLECTION`
                  : `${selectedCategory.toUpperCase()} COLLECTION`}
              </h1>
              <p className="font-mono text-xs text-[#8e8e98] max-w-xl">
                Showing {Math.min(visibleCount, sortedProducts.length)} of {sortedProducts.length} products ({products.length} in catalog). Filtered by architectural
                material, size-level inventory, and brand canon.
              </p>
            </div>

            {/* Sort Dropdown & Mobile Filter Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="lg:hidden flex items-center gap-2 bg-[#121215] border border-[#242429] px-4 py-2 text-xs font-bold text-[#f4f4f6] uppercase cursor-pointer"
              >
                <Filter className="w-3.5 h-3.5 text-[#c9a96e]" />
                <span>FILTERS ({selectedSizes.length > 0 ? selectedSizes.length : ''})</span>
              </button>

              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-[#c9a96e] uppercase">SORT:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-[#121215] border border-[#242429] text-[#f4f4f6] text-[11px] px-3 py-2 font-mono uppercase focus:outline-none focus:border-[#8e8e98] cursor-pointer"
                >
                  <option value="POPULAR">POPULAR CANON</option>
                  <option value="NEWEST">NEWEST DROPS</option>
                  <option value="PRICE_ASC">PRICE: LOW → HIGH</option>
                  <option value="PRICE_DESC">PRICE: HIGH → LOW</option>
                  <option value="RATING">HIGHEST RATED</option>
                  <option value="DISCOUNT">MAX DISCOUNT</option>
                  <option value="TRENDING">TRENDING NOW</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Category / Brand Shortcut Strip */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-[#242429] text-[11px]">
          <span className="text-[10px] text-[#c9a96e] font-bold uppercase mr-1">QUICK PILLS:</span>
          {['ALL', 'Sneakers', 'Running', 'Casual Shoes', 'Formal Shoes', 'Boots'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 uppercase transition-all cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-[#f4f4f6] text-[#09090b] border-[#f4f4f6] font-bold'
                  : 'bg-[#121215] text-[#8e8e98] border-[#242429] hover:text-[#f4f4f6] hover:border-[#3a3a42]'
              }`}
            >
              {cat}
            </button>
          ))}
          <div className="h-4 w-[1px] bg-[#242429] mx-2 hidden sm:block" />
          {['VANTA ATELIER', 'CAMPUS', 'NIKE', 'ADIDAS', 'PUMA', 'RED TAPE', 'NEW BALANCE'].map((br) => (
            <button
              key={br}
              onClick={() => setSelectedBrand(selectedBrand === br ? 'ALL' : br)}
              className={`px-3 py-1.5 uppercase transition-all cursor-pointer border text-[10px] ${
                selectedBrand === br
                  ? 'bg-[#f4f4f6] text-[#09090b] border-[#f4f4f6] font-bold'
                  : 'bg-[#121215] text-[#8e8e98] border-[#242429] hover:text-[#f4f4f6] hover:border-[#3a3a42]'
              }`}
            >
              {br}
            </button>
          ))}
        </div>

        {/* Main Grid: Left Filter Sidebar (3 cols) + Right Product Grid (9 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDEBAR FILTERS */}
          <div
            className={`lg:col-span-3 space-y-6 bg-[#121215] border border-[#242429] p-5 ${
              mobileFiltersOpen ? 'block' : 'hidden lg:block'
            }`}
          >
            <div className="flex items-center justify-between border-b border-[#242429] pb-3">
              <span className="text-xs font-bold text-[#f4f4f6] uppercase tracking-wider flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-[#c9a96e]" />
                FILTER MATRIX
              </span>
              <button
                onClick={resetFilters}
                className="text-[10px] text-[#c9a96e] hover:text-[#f4f4f6] flex items-center gap-1 underline cursor-pointer transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                RESET ALL
              </button>
            </div>

            {/* 1. SIZE-LEVEL INVENTORY FILTER */}
            <div className="space-y-2 border-b border-[#242429] pb-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#f4f4f6] uppercase">
                  SIZE (US / EU)
                </span>
                <span className="text-[9px] text-[#c9a96e]">
                  {selectedSizes.length > 0 ? `${selectedSizes.length} selected` : 'Any Size'}
                </span>
              </div>
              <p className="text-[9px] text-[#8e8e98]">
                Displays only shoes with verified stock in these exact sizes:
              </p>
              <div className="grid grid-cols-4 gap-1.5 pt-1">
                {ALL_SIZES.map((size) => {
                  const isSelected = selectedSizes.includes(size);
                  return (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`py-1.5 text-center text-xs border font-mono transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-[#f4f4f6] text-[#09090b] border-[#f4f4f6] font-bold'
                          : 'bg-[#18181c] text-[#8e8e98] border-[#242429] hover:border-[#3a3a42] hover:text-[#f4f4f6]'
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. BRAND CANON */}
            <div className="space-y-2 border-b border-[#242429] pb-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#f4f4f6] uppercase">BRAND CANON</span>
                <span className="text-[9px] text-[#c9a96e]">{selectedBrand}</span>
              </div>
              <div className="max-h-48 overflow-y-auto space-y-1 pr-1">
                <button
                  onClick={() => setSelectedBrand('ALL')}
                  className={`w-full text-left px-2 py-1 text-xs uppercase flex items-center justify-between border cursor-pointer ${
                    selectedBrand === 'ALL'
                      ? 'bg-[#18181c] border-[#f4f4f6] text-[#f4f4f6] font-bold'
                      : 'border-transparent text-[#8e8e98] hover:text-[#f4f4f6]'
                  }`}
                >
                  <span>ALL BRANDS</span>
                  {selectedBrand === 'ALL' && <Check className="w-3 h-3 text-[#c9a96e]" />}
                </button>
                {BRANDS.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`w-full text-left px-2 py-1 text-xs uppercase flex items-center justify-between border cursor-pointer ${
                      selectedBrand === brand
                        ? 'bg-[#18181c] border-[#f4f4f6] text-[#f4f4f6] font-bold'
                        : 'border-transparent text-[#8e8e98] hover:text-[#f4f4f6]'
                    }`}
                  >
                    <span>{brand}</span>
                    {selectedBrand === brand && <Check className="w-3 h-3 text-[#c9a96e]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. CATEGORY / SILHOUETTE */}
            <div className="space-y-2 border-b border-[#242429] pb-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#f4f4f6] uppercase">CATEGORY</span>
                <span className="text-[9px] text-[#c9a96e]">{selectedCategory}</span>
              </div>
              <div className="max-h-44 overflow-y-auto space-y-1 pr-1">
                <button
                  onClick={() => setSelectedCategory('ALL')}
                  className={`w-full text-left px-2 py-1 text-xs uppercase flex items-center justify-between border cursor-pointer ${
                    selectedCategory === 'ALL'
                      ? 'bg-[#18181c] border-[#f4f4f6] text-[#f4f4f6] font-bold'
                      : 'border-transparent text-[#8e8e98] hover:text-[#f4f4f6]'
                  }`}
                >
                  <span>ALL CATEGORIES</span>
                  {selectedCategory === 'ALL' && <Check className="w-3 h-3 text-[#c9a96e]" />}
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-2 py-1 text-xs uppercase flex items-center justify-between border cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#18181c] border-[#f4f4f6] text-[#f4f4f6] font-bold'
                        : 'border-transparent text-[#8e8e98] hover:text-[#f4f4f6]'
                    }`}
                  >
                    <span>{cat}</span>
                    {selectedCategory === cat && <Check className="w-3 h-3 text-[#c9a96e]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. GENDER / DEMOGRAPHIC */}
            <div className="space-y-2 border-b border-[#242429] pb-4">
              <span className="text-[11px] font-bold text-[#f4f4f6] uppercase block">
                DEMOGRAPHIC
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {['ALL', ...GENDERS].map((g) => (
                  <button
                    key={g}
                    onClick={() => setSelectedGender(g)}
                    className={`py-1.5 px-2 text-center text-xs uppercase border transition-colors cursor-pointer ${
                      selectedGender === g
                        ? 'bg-[#f4f4f6] text-[#09090b] border-[#f4f4f6] font-bold'
                        : 'bg-[#18181c] text-[#8e8e98] border-[#242429] hover:border-[#3a3a42] hover:text-[#f4f4f6]'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* 5. PRICE RANGE SLIDER */}
            <div className="space-y-2 border-b border-[#242429] pb-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#f4f4f6] uppercase">MAX PRICE</span>
                <span className="font-bold text-[#c9a96e]">{formatCurrency(maxPrice)}</span>
              </div>
              <input
                type="range"
                min="0"
                max={PRICE_CEILING}
                step="500"
                value={maxPrice}
                onChange={(e) => {
                  isCustomPriceRef.current = true;
                  setMaxPrice(Number(e.target.value));
                }}
                className="w-full accent-[#c9a96e] cursor-pointer"
              />
              <div className="flex justify-between text-[9px] text-[#8e8e98]">
                <span>{formatCurrency(0)}</span>
                <span>{formatCurrency(PRICE_CEILING)}</span>
              </div>
            </div>

            {/* 6. MINIMUM RATING & AVAILABILITY */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-xs cursor-pointer text-[#f4f4f6] font-bold">
                <input
                  type="checkbox"
                  checked={onlyInStock}
                  onChange={(e) => setOnlyInStock(e.target.checked)}
                  className="accent-[#c9a96e]"
                />
                <span>IN STOCK ONLY</span>
              </label>

              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#c9a96e] uppercase block">
                  CUSTOMER RATING:
                </span>
                <div className="flex gap-1">
                  {[0, 4.0, 4.5, 4.8].map((rt) => (
                    <button
                      key={rt}
                      onClick={() => setMinRating(rt)}
                      className={`flex-1 py-1 text-[10px] border transition-colors cursor-pointer ${
                        minRating === rt
                          ? 'bg-[#f4f4f6] text-[#09090b] border-[#f4f4f6] font-bold'
                          : 'bg-[#18181c] text-[#8e8e98] border-[#242429] hover:border-[#3a3a42]'
                      }`}
                    >
                      {rt === 0 ? 'All' : `${rt}★+`}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PRODUCT CARDS GRID */}
          <div className="lg:col-span-9">
            {sortedProducts.length === 0 ? (
              <div className="bg-[#121215] border border-[#242429] p-12 text-center space-y-4">
                <h3 className="text-base font-bold uppercase text-[#f4f4f6]">
                  NO MATCHING FOOTWEAR SPECIFICATIONS FOUND
                </h3>
                <p className="text-xs text-[#8e8e98] max-w-md mx-auto">
                  Adjust your active filters or clear the size criteria to view available archival
                  allocations.
                </p>
                <button
                  onClick={resetFilters}
                  className="bg-[#f4f4f6] text-[#09090b] px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#c9a96e] transition-colors cursor-pointer"
                >
                  RESET ALL FILTERS
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedProducts.slice(0, visibleCount).map((shoe) => {
                  const isWish = wishlistIds.includes(shoe.id);
                  const isComp = compareIds.includes(shoe.id);

                  // Extract all available sizes from all colors
                  const allSizesInStock = Array.from(
                    new Set(
                      ((Object.values(shoe.sizeInventory) as SizeStock[][]))
                        .flat()
                        .filter((s) => s.stock > 0)
                        .map((s) => s.size)
                    )
                  ).sort((a, b) => Number(a) - Number(b));

                  const totalStock = ((Object.values(shoe.sizeInventory) as SizeStock[][]))
                    .flat()
                    .reduce((sum, s) => sum + s.stock, 0);

                  const frontImg = shoe.colors[0]?.images.front;
                  const sideImg = shoe.colors[0]?.images.side || shoe.colors[0]?.images.lifestyle || frontImg;

                  return (
                    <div
                      key={shoe.id}
                      className="border border-[#242429] bg-[#121215] flex flex-col justify-between group hover:border-[#3a3a42] transition-all duration-300 hover:-translate-y-1 shadow-xl"
                    >
                      <div className="p-5">
                        {/* Card Header: Brand, Code, Wishlist */}
                        <div className="flex items-center justify-between text-[10px] mb-3">
                          <span className="text-[#c9a96e] font-bold tracking-wider uppercase">
                            {shoe.brand} // {shoe.code}
                          </span>
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onToggleWishlist(shoe);
                              }}
                              className={`p-1 transition-colors cursor-pointer ${
                                isWish ? 'text-[#c9a96e]' : 'text-[#8e8e98] hover:text-[#f4f4f6]'
                              }`}
                              title={isWish ? 'Remove from Wishlist' : 'Add to Wishlist'}
                            >
                              <Heart className={`w-4 h-4 ${isWish ? 'fill-current' : ''}`} />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onToggleCompare(shoe);
                              }}
                              className={`p-1 transition-colors cursor-pointer ${
                                isComp ? 'text-[#c9a96e]' : 'text-[#8e8e98] hover:text-[#f4f4f6]'
                              }`}
                              title="Add to comparison"
                            >
                              <Scale className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {/* Image Preview with Dual-Angle Hover Reveal */}
                        <div
                          onClick={() => onSelectProduct(shoe)}
                          className="relative aspect-[4/3] bg-[#09090b] border border-[#242429] overflow-hidden mb-4 cursor-pointer"
                        >
                          {/* Primary Front Angle */}
                          <img
                            src={frontImg}
                            alt={shoe.name}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              if (!target.src.includes('cream_runner_pedestal')) {
                                target.src = '/assets/images/cream_runner_pedestal_1788842341279.jpg';
                              }
                            }}
                            className={`w-full h-full object-cover transition-all duration-700 ${
                              sideImg !== frontImg ? 'group-hover:opacity-0' : 'group-hover:scale-105'
                            }`}
                          />

                          {/* Secondary Side Angle on Hover */}
                          {sideImg && sideImg !== frontImg && (
                            <img
                              src={sideImg}
                              alt={`${shoe.name} side profile`}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                              }}
                              className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                            />
                          )}

                          {shoe.discountPercent > 0 && (
                            <div className="absolute top-2 left-2 bg-[#f4f4f6] text-[#09090b] px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase">
                              {shoe.discountPercent}% OFF
                            </div>
                          )}
                          {shoe.isLimitedDrop && (
                            <div className="absolute bottom-2 left-2 bg-[#121215]/90 border border-[#242429] px-2 py-0.5 text-[9px] font-bold text-[#c9a96e]">
                              LIMITED DROP
                            </div>
                          )}
                          {totalStock > 0 && totalStock <= 10 && (
                            <div className="absolute top-2 right-2 bg-red-950/80 border border-red-500/50 text-red-300 px-2 py-0.5 text-[8px] font-bold tracking-wider uppercase animate-pulse">
                              ONLY {totalStock} LEFT
                            </div>
                          )}
                        </div>

                        {/* Product Title & Rating */}
                        <div className="space-y-1 mb-3">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] text-[#8e8e98] uppercase">
                              {shoe.category} • {shoe.gender}
                            </span>
                            <div className="flex items-center gap-1 text-[10px] font-bold text-[#f4f4f6]">
                              {shoe.reviewsCount > 0 ? (
                                <>
                                  <Star className="w-3 h-3 fill-[#c9a96e] text-[#c9a96e]" />
                                  <span>{shoe.rating}</span>
                                </>
                              ) : (
                                <span className="text-[#8e8e98]">Not rated</span>
                              )}
                            </div>
                          </div>

                          <h3
                            onClick={() => onSelectProduct(shoe)}
                            className="font-headline text-lg font-bold uppercase text-[#f4f4f6] tracking-tight hover:text-[#c9a96e] cursor-pointer leading-snug transition-colors"
                          >
                            {shoe.name}
                          </h3>
                        </div>

                        {/* Price & MRP */}
                        <div className="flex items-baseline gap-2 mb-3">
                          <span className="text-base font-bold text-[#f4f4f6]">
                            {formatCurrency(shoe.price)}
                          </span>
                          <span className="text-xs text-[#52525b] line-through">
                            {formatCurrency(shoe.mrp)}
                          </span>
                        </div>

                        {/* Colorway Swatches Preview */}
                        {shoe.colors && shoe.colors.length > 1 && (
                          <div className="flex items-center gap-1.5 mb-3">
                            <span className="text-[8px] uppercase tracking-wider text-[#c9a96e] font-bold mr-1">
                              {shoe.colors.length} TONES:
                            </span>
                            {shoe.colors.map((c) => (
                              <span
                                key={c.name}
                                title={c.name}
                                className="w-2.5 h-2.5 rounded-full border border-[#3a3a42]"
                                style={{ backgroundColor: c.hex }}
                              />
                            ))}
                          </div>
                        )}

                        {/* Available Sizes List */}
                        <div className="space-y-1 pt-2 border-t border-[#242429]">
                          <span className="text-[9px] font-bold text-[#c9a96e] uppercase block">
                            AVAILABLE SIZES:
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {allSizesInStock.map((sz) => (
                              <span
                                key={sz}
                                className="px-1.5 py-0.5 bg-[#18181c] border border-[#242429] text-[9px] text-[#8e8e98] font-bold"
                              >
                                {sz}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Quick Action Bar */}
                      <div className="grid grid-cols-2 gap-2 p-4 pt-0">
                        <button
                          onClick={() => onSelectProduct(shoe)}
                          className="btn-tactile py-2 bg-[#18181c] hover:bg-[#242429] text-[#f4f4f6] border border-[#242429] hover:border-[#8e8e98] text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1 cursor-pointer transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>DETAILS</span>
                        </button>
                        <button
                          onClick={() => onSelectProduct(shoe)}
                          className="btn-tactile py-2 bg-[#f4f4f6] hover:bg-[#c9a96e] text-[#09090b] text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1 cursor-pointer transition-colors"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>SELECT SIZE</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

                {/* Pagination / Load more */}
                {visibleCount < sortedProducts.length && (
                  <div className="mt-10 flex flex-col items-center justify-center gap-3">
                    <p className="text-xs text-[#8e8e98] font-mono">
                      Showing {Math.min(visibleCount, sortedProducts.length)} of {sortedProducts.length} products
                    </p>
                    <button
                      onClick={() => setVisibleCount((prev) => prev + 24)}
                      className="px-8 py-3 bg-[#f4f4f6] hover:bg-[#c9a96e] text-[#09090b] text-xs font-bold uppercase tracking-widest border border-[#f4f4f6] transition-colors cursor-pointer shadow-lg"
                    >
                      LOAD MORE (+24)
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
