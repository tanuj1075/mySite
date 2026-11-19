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
  catalogLoading?: boolean;
  catalogError?: string | null;
  onRetryCatalog?: () => void;
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
  catalogLoading = false,
  catalogError = null,
  onRetryCatalog,
}) => {
  const PRICE_CEILING = useMemo(() => {
    if (!products.length) return 50000;
    const maxVal = Math.max(...products.map((p) => p.price));
    return maxVal > 0 ? Math.ceil(maxVal / 500) * 500 : 50000;
  }, [products]);

  // Filter States
  const initialGender = GENDERS.find((gender) => gender.toLowerCase() === initialCategoryFilter?.toLowerCase());
  const [selectedCategory, setSelectedCategory] = useState<string>(initialGender ? 'ALL' : initialCategoryFilter || 'ALL');
  const [selectedBrand, setSelectedBrand] = useState<string>(initialBrandFilter || 'ALL');
  const [selectedGender, setSelectedGender] = useState<string>(initialGender || 'ALL');
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSport, setSelectedSport] = useState<string>('ALL');
  const [minRating, setMinRating] = useState<number>(0);
  const [onlyInStock, setOnlyInStock] = useState<boolean>(false);
  const [maxPrice, setMaxPrice] = useState<number>(PRICE_CEILING);
  const [visibleCount, setVisibleCount] = useState<number>(24);

  React.useEffect(() => {
    const gender = GENDERS.find((value) => value.toLowerCase() === initialCategoryFilter?.toLowerCase());
    if (gender) {
      setSelectedGender(gender);
      setSelectedCategory('ALL');
      return;
    }
    setSelectedGender('ALL');
    setSelectedSport(initialCategoryFilter === 'Running' ? 'Running' : 'ALL');
    const specialFilter = ['Running', 'Sale', 'New Arrivals'].includes(initialCategoryFilter ?? '');
    setSelectedCategory(specialFilter ? 'ALL' : initialCategoryFilter || 'ALL');
  }, [initialCategoryFilter]);

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
      if (initialCategoryFilter === 'Sale' && !(product.isSale || product.mrp > product.price)) return false;
      if (initialCategoryFilter === 'New Arrivals' && !product.isNewArrival) return false;

      // 2. Brand
      if (selectedBrand !== 'ALL' && product.brand.toUpperCase() !== selectedBrand.toUpperCase()) {
        return false;
      }

      // 3. Gender
      if (selectedGender !== 'ALL' && product.gender !== selectedGender && product.gender !== 'Unisex') {
        return false;
      }

      // 4. Sport / Use
      if (selectedSport !== 'ALL' && product.sport !== selectedSport && !product.use.toLowerCase().includes(selectedSport.toLowerCase())) {
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
    initialCategoryFilter,
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
    <div className="w-full bg-[#F7F2EC] dark:bg-[#09090b] text-[#242321] dark:text-[#f4f4f6] font-sans pb-24 transition-colors">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-6">
        
        {/* Collection Header Banner (Exact Match to Reference Panel 2) */}
        <div className="bg-gradient-to-r from-[#242321] via-[#2F2D2A] to-[#3D3A36] text-white rounded-3xl p-8 sm:p-12 mb-8 flex items-center justify-between overflow-hidden shadow-lg relative">
          <div className="space-y-2 z-10 max-w-md">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E9D9CA]">
              OUR COLLECTION
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              SNEAKERS
            </h1>
            <p className="text-sm text-[#A8A49E]">
              Step up your game. Handcrafted performance leather &amp; modern street grails.
            </p>
          </div>
          <div className="hidden sm:block relative w-64 h-36">
            <img
              src="/assets/images/cream_runner_pedestal_1788842341279.jpg"
              alt="Collection Sneaker"
              className="w-full h-full object-contain transform rotate-[-6deg] drop-shadow-2xl rounded-xl"
            />
          </div>
        </div>

        {/* Quick Filter Header & Sort Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#E9D9CA] dark:border-[#242429] mb-8">
          <div>
            <span className="text-sm font-bold text-[#242321] dark:text-white">
              {filteredProducts.length} Products Found
            </span>
            <span className="text-xs text-[#77716B] dark:text-[#8e8e98] ml-2">
              (out of {products.length} in active catalog)
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="lg:hidden flex items-center gap-2 bg-white dark:bg-[#121215] border border-[#E9D9CA] dark:border-[#242429] px-4 py-2 rounded-xl text-xs font-semibold text-[#242321] dark:text-[#f4f4f6] cursor-pointer"
            >
              <Filter className="w-4 h-4 text-[#B4532A]" />
              <span>Filters ({selectedSizes.length > 0 ? selectedSizes.length : ''})</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#77716B] dark:text-[#8e8e98]">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white dark:bg-[#121215] border border-[#E9D9CA] dark:border-[#242429] text-[#242321] dark:text-[#f4f4f6] text-xs font-medium px-3.5 py-2 rounded-xl focus:outline-none focus:border-[#B4532A] cursor-pointer shadow-sm"
              >
                <option value="POPULAR">Popularity</option>
                <option value="NEWEST">Newest Drops</option>
                <option value="PRICE_ASC">Price: Low to High</option>
                <option value="PRICE_DESC">Price: High to Low</option>
                <option value="RATING">Highest Rated</option>
                <option value="DISCOUNT">Biggest Discount</option>
                <option value="TRENDING">Trending Now</option>
              </select>
            </div>
          </div>
        </div>

        {catalogError && (
          <div role="alert" className="mb-6 rounded-2xl border border-[#E9D9CA] bg-white p-5 text-sm text-[#242321]">
            <p>The live catalog could not be loaded. {catalogError}</p>
            {onRetryCatalog && <button onClick={onRetryCatalog} className="mt-3 rounded-full bg-[#B4532A] px-4 py-2 text-xs font-semibold text-white">Retry catalog</button>}
          </div>
        )}
        {catalogLoading && products.length === 0 && <p className="mb-6 text-sm text-[#77716B]">Loading the live catalog…</p>}

        {/* Main Grid: Left Filter Sidebar (3 cols) + Right Product Grid (9 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDEBAR FILTERS (Matching Reference Panel 2) */}
          <div
            className={`lg:col-span-3 space-y-6 bg-white dark:bg-[#121215] border border-[#E9D9CA] dark:border-[#242429] p-6 rounded-2xl shadow-sm ${
              mobileFiltersOpen ? 'block' : 'hidden lg:block'
            }`}
          >
            <div className="flex items-center justify-between border-b border-[#E9D9CA] dark:border-[#242429] pb-3">
              <span className="text-sm font-bold text-[#242321] dark:text-white uppercase tracking-wider flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#B4532A]" />
                Filter By
              </span>
              <button
                onClick={resetFilters}
                className="text-xs text-[#B4532A] hover:underline flex items-center gap-1 font-semibold cursor-pointer transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
            </div>

            {/* Price Range Slider */}
            <div className="space-y-3 border-b border-[#E9D9CA] dark:border-[#242429] pb-5">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-[#242321] dark:text-white">Price Range</span>
                <span className="text-[#B4532A]">{formatCurrency(maxPrice)}</span>
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
                className="w-full accent-[#B4532A] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#77716B]">
                <span>{formatCurrency(0)}</span>
                <span>{formatCurrency(PRICE_CEILING)}</span>
              </div>
            </div>

            {/* Brand Checkboxes */}
            <div className="space-y-3 border-b border-[#E9D9CA] dark:border-[#242429] pb-5">
              <span className="text-xs font-bold text-[#242321] dark:text-white uppercase tracking-wider block">
                Brands
              </span>
              <div className="max-h-48 overflow-y-auto space-y-1.5 pr-1">
                <button
                  onClick={() => setSelectedBrand('ALL')}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                    selectedBrand === 'ALL'
                      ? 'bg-[#B4532A] text-white font-bold'
                      : 'text-[#77716B] hover:bg-[#F7F2EC] dark:hover:bg-[#18181c] dark:text-[#8e8e98]'
                  }`}
                >
                  <span>All Brands</span>
                  <span>({products.length})</span>
                </button>
                {BRANDS.map((brand) => {
                  const count = products.filter((p) => p.brand.toLowerCase() === brand.toLowerCase()).length;
                  if (count === 0) return null;
                  return (
                    <button
                      key={brand}
                      onClick={() => setSelectedBrand(selectedBrand === brand ? 'ALL' : brand)}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                        selectedBrand === brand
                          ? 'bg-[#B4532A] text-white font-bold'
                          : 'text-[#77716B] hover:bg-[#F7F2EC] dark:hover:bg-[#18181c] dark:text-[#8e8e98]'
                      }`}
                    >
                      <span>{brand}</span>
                      <span className="text-[10px] opacity-75">({count})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sizes Chips */}
            <div className="space-y-3 border-b border-[#E9D9CA] dark:border-[#242429] pb-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#242321] dark:text-white uppercase tracking-wider">
                  Size
                </span>
                {selectedSizes.length > 0 && (
                  <span className="text-[10px] text-[#B4532A] font-semibold">
                    {selectedSizes.length} selected
                  </span>
                )}
              </div>
              <div className="grid grid-cols-4 gap-2">
                {ALL_SIZES.map((size) => {
                  const isSelected = selectedSizes.includes(size);
                  return (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`py-2 text-center text-xs rounded-xl font-bold transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-[#B4532A] text-white border-[#B4532A] shadow-sm'
                          : 'bg-[#F7F2EC] dark:bg-[#18181c] text-[#77716B] dark:text-[#8e8e98] border-[#E9D9CA] dark:border-[#2A2A32] hover:border-[#B4532A]'
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Colors Swatches */}
            {availableColors.length > 0 && (
              <div className="space-y-3 pb-2">
                <span className="text-xs font-bold text-[#242321] dark:text-white uppercase tracking-wider block">
                  Color
                </span>
                <div className="flex flex-wrap gap-2">
                  {availableColors.map((colorName) => {
                    const isSelected = selectedColors.includes(colorName);
                    return (
                      <button
                        key={colorName}
                        onClick={() => toggleColor(colorName)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#B4532A] text-white border-[#B4532A]'
                            : 'bg-[#F7F2EC] dark:bg-[#18181c] text-[#77716B] dark:text-[#8e8e98] border-[#E9D9CA] dark:border-[#2A2A32] hover:border-[#B4532A]'
                        }`}
                      >
                        {colorName}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
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
                      className="bg-white dark:bg-[#18181c] border border-[#E9D9CA] dark:border-[#2A2A32] rounded-2xl flex flex-col justify-between group hover:border-[#B4532A] transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl overflow-hidden"
                    >
                      <div className="p-5">
                        {/* Card Header: Brand, Code, Wishlist */}
                        <div className="flex items-center justify-between text-[11px] mb-3">
                          <span className="text-[#B4532A] font-bold tracking-wider uppercase text-[10px]">
                            {shoe.brand}
                          </span>
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onToggleWishlist(shoe);
                              }}
                              className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                                isWish ? 'bg-[#B4532A] text-white' : 'bg-[#F7F2EC] dark:bg-[#242429] text-[#77716B] hover:text-[#B4532A]'
                              }`}
                              title={isWish ? 'Remove from Wishlist' : 'Add to Wishlist'}
                            >
                              <Heart className={`w-3.5 h-3.5 ${isWish ? 'fill-current' : ''}`} />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onToggleCompare(shoe);
                              }}
                              className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                                isComp ? 'bg-[#B4532A] text-white' : 'bg-[#F7F2EC] dark:bg-[#242429] text-[#77716B] hover:text-[#B4532A]'
                              }`}
                              title="Add to comparison"
                            >
                              <Scale className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        {/* Image Preview with Dual-Angle Hover Reveal */}
                        <div
                          onClick={() => onSelectProduct(shoe)}
                          className="relative aspect-[4/3] bg-[#F7F2EC] dark:bg-[#121215] rounded-xl overflow-hidden mb-4 cursor-pointer flex items-center justify-center p-3"
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
                            className={`w-full h-full object-contain transition-all duration-500 ${
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
                              className="w-full h-full object-contain absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 p-3"
                            />
                          )}

                          {shoe.discountPercent > 0 && (
                            <div className="absolute top-2 left-2 bg-[#B4532A] text-white px-2 py-0.5 text-[9px] font-bold rounded-full">
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
                      <div className="grid grid-cols-2 gap-2 p-5 pt-0">
                        <button
                          onClick={() => onSelectProduct(shoe)}
                          className="py-2.5 bg-[#F7F2EC] dark:bg-[#242429] hover:bg-[#E9D9CA]/60 text-[#242321] dark:text-[#f4f4f6] text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                          <span>Details</span>
                        </button>
                        <button
                          onClick={() => onSelectProduct(shoe)}
                          className="py-2.5 bg-[#B4532A] hover:bg-[#9C431F] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 cursor-pointer transition-colors shadow-sm"
                        >
                          <ShoppingBag className="w-4 h-4" />
                          <span>Select Size</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

                {/* Pagination / Load more */}
                {visibleCount < sortedProducts.length && (
                  <div className="mt-12 flex flex-col items-center justify-center gap-3">
                    <p className="text-xs text-[#77716B] dark:text-[#8e8e98]">
                      Showing {Math.min(visibleCount, sortedProducts.length)} of {sortedProducts.length} products
                    </p>
                    <button
                      onClick={() => setVisibleCount((prev) => prev + 24)}
                      className="px-8 py-3 bg-[#B4532A] hover:bg-[#9C431F] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md"
                    >
                      Load More Sneakers (+24)
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
