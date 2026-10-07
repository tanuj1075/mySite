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
  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategoryFilter || 'ALL');
  const [selectedBrand, setSelectedBrand] = useState<string>(initialBrandFilter || 'ALL');
  const [selectedGender, setSelectedGender] = useState<string>('ALL');
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSport, setSelectedSport] = useState<string>('ALL');
  const [minRating, setMinRating] = useState<number>(0);
  const [onlyInStock, setOnlyInStock] = useState<boolean>(false);
  const [maxPrice, setMaxPrice] = useState<number>(700);

  // Sorting
  const [sortBy, setSortBy] = useState<
    'POPULAR' | 'NEWEST' | 'PRICE_ASC' | 'PRICE_DESC' | 'RATING' | 'DISCOUNT' | 'TRENDING'
  >('POPULAR');

  // Mobile filters drawer toggle
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Toggle size filter
  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategory('ALL');
    setSelectedBrand('ALL');
    setSelectedGender('ALL');
    setSelectedSizes([]);
    setSelectedColors([]);
    setSelectedSport('ALL');
    setMinRating(0);
    setOnlyInStock(false);
    setMaxPrice(700);
  };

  // Filtered and Sorted products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category filter
      if (selectedCategory !== 'ALL') {
        if (selectedCategory === 'Men' || selectedCategory === 'Women' || selectedCategory === 'Kids') {
          if (p.gender !== selectedCategory && p.gender !== 'Unisex') return false;
        } else if (p.category !== selectedCategory) {
          return false;
        }
      }

      // Brand filter
      if (selectedBrand !== 'ALL' && p.brand !== selectedBrand) {
        return false;
      }

      // Gender filter
      if (selectedGender !== 'ALL' && p.gender !== selectedGender && p.gender !== 'Unisex') {
        return false;
      }

      // Sport filter
      if (selectedSport !== 'ALL' && p.sport !== selectedSport) {
        return false;
      }

      // Rating filter
      if (minRating > 0 && p.rating < minRating) {
        return false;
      }

      // Max price
      if (p.price > maxPrice) {
        return false;
      }

      // Size-level inventory filter!
      // A product matches if ANY of its colors has stock > 0 for the selected size
      if (selectedSizes.length > 0) {
        const inventoryArrays = Object.values(p.sizeInventory) as SizeStock[][];
        const hasMatchingSizeInStock = selectedSizes.some((targetSize) => {
          return inventoryArrays.some((sizeStocks) => {
            const match = sizeStocks.find((s) => s.size === targetSize);
            return match && match.stock > 0;
          });
        });
        if (!hasMatchingSizeInStock) return false;
      }

      // In Stock filter
      if (onlyInStock) {
        const inventoryArrays = Object.values(p.sizeInventory) as SizeStock[][];
        const totalStock = inventoryArrays
          .flat()
          .reduce((acc, curr) => acc + curr.stock, 0);
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
    minRating,
    maxPrice,
    selectedSizes,
    onlyInStock,
  ]);

  // Sort
  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      if (sortBy === 'PRICE_ASC') return a.price - b.price;
      if (sortBy === 'PRICE_DESC') return b.price - a.price;
      if (sortBy === 'RATING') return b.rating - a.rating;
      if (sortBy === 'DISCOUNT') return b.discountPercent - a.discountPercent;
      if (sortBy === 'NEWEST') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      if (sortBy === 'TRENDING') return b.reviewsCount - a.reviewsCount;
      return b.rating * b.reviewsCount - a.rating * a.reviewsCount; // POPULAR
    });
  }, [filteredProducts, sortBy]);

  return (
    <div className="w-full bg-[#ede7dd] text-[#1a1816] font-mono pb-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-6">
        
        {/* Page Header */}
        <div className="border-b border-[#d5cdc0] pb-8 mb-8">
          <div className="flex items-center gap-2 text-[10px] text-[#7b6e54] uppercase tracking-[0.2em] mb-3 font-bold">
            <span className="w-1.5 h-1.5 bg-[#1a1816] inline-block"></span>
            <span>VANTA CATALOG // SPECIFICATION REGISTRY</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="font-headline text-4xl sm:text-6xl font-bold tracking-tight uppercase text-[#1a1816] leading-none mb-3">
                {selectedCategory === 'ALL'
                  ? selectedBrand === 'ALL'
                    ? 'ALL FOOTWEAR'
                    : `${selectedBrand} COLLECTION`
                  : `${selectedCategory.toUpperCase()} COLLECTION`}
              </h1>
              <p className="font-mono text-xs text-[#59544c] max-w-xl">
                Showing {sortedProducts.length} certified specifications. Filtered by architectural
                material, size-level inventory, and brand canon.
              </p>
            </div>

            {/* Sort Dropdown & Mobile Filter Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="lg:hidden flex items-center gap-2 bg-[#f5efe6] border border-[#d5cdc0] px-4 py-2 text-xs font-bold text-[#1a1816] uppercase"
              >
                <Filter className="w-3.5 h-3.5" />
                <span>FILTERS ({selectedSizes.length > 0 ? selectedSizes.length : ''})</span>
              </button>

              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-[#7b6e54] uppercase">SORT:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-[#f5efe6] border border-[#d5cdc0] text-[#1a1816] text-[11px] px-3 py-2 font-mono uppercase focus:outline-none focus:border-[#1a1816] cursor-pointer"
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
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-[#d5cdc0] text-[11px]">
          <span className="text-[10px] text-[#7b6e54] font-bold uppercase mr-1">QUICK PILLS:</span>
          {['ALL', 'Sneakers', 'Running', 'Casual Shoes', 'Formal Shoes', 'Boots'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 uppercase transition-all cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-[#1a1816] text-[#f5efe6] border-[#1a1816] font-bold'
                  : 'bg-[#f5efe6] text-[#59544c] border-[#d5cdc0] hover:text-[#1a1816]'
              }`}
            >
              {cat}
            </button>
          ))}
          <div className="h-4 w-[1px] bg-[#d5cdc0] mx-2 hidden sm:block" />
          {['VANTA ATELIER', 'NIKE', 'ADIDAS', 'NEW BALANCE'].map((br) => (
            <button
              key={br}
              onClick={() => setSelectedBrand(selectedBrand === br ? 'ALL' : br)}
              className={`px-3 py-1.5 uppercase transition-all cursor-pointer border text-[10px] ${
                selectedBrand === br
                  ? 'bg-[#1a1816] text-[#f5efe6] border-[#1a1816] font-bold'
                  : 'bg-[#f5efe6] text-[#59544c] border-[#d5cdc0] hover:text-[#1a1816]'
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
            className={`lg:col-span-3 space-y-6 bg-[#f5efe6] border border-[#d5cdc0] p-5 ${
              mobileFiltersOpen ? 'block' : 'hidden lg:block'
            }`}
          >
            <div className="flex items-center justify-between border-b border-[#d5cdc0] pb-3">
              <span className="text-xs font-bold text-[#1a1816] uppercase tracking-wider flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5" />
                FILTER MATRIX
              </span>
              <button
                onClick={resetFilters}
                className="text-[10px] text-[#7b6e54] hover:text-[#1a1816] flex items-center gap-1 underline cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                RESET ALL
              </button>
            </div>

            {/* 1. SIZE-LEVEL INVENTORY FILTER */}
            <div className="space-y-2 border-b border-[#d5cdc0] pb-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#1a1816] uppercase">
                  SIZE (US)
                </span>
                <span className="text-[9px] text-[#7b6e54]">
                  {selectedSizes.length > 0 ? `${selectedSizes.length} selected` : 'Any Size'}
                </span>
              </div>
              <p className="text-[9px] text-[#59544c]">
                Displays only shoes with verified stock in these exact sizes:
              </p>
              <div className="grid grid-cols-4 gap-1.5 pt-1">
                {ALL_SIZES.map((size) => {
                  const isSelected = selectedSizes.includes(size);
                  return (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`py-2 text-xs font-bold border transition-colors cursor-pointer text-center ${
                        isSelected
                          ? 'bg-[#141312] text-[#f5efe6] border-[#141312]'
                          : 'bg-[#ede7dd] text-[#1a1816] border-[#d5cdc0] hover:border-[#1a1816]'
                      }`}
                    >
                      US {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. BRAND FILTER */}
            <div className="space-y-2 border-b border-[#d5cdc0] pb-4">
              <span className="text-[11px] font-bold text-[#1a1816] uppercase block">
                BRAND
              </span>
              <div className="space-y-1 max-h-44 overflow-y-auto pr-1">
                <label className="flex items-center gap-2 text-xs cursor-pointer hover:text-[#1a1816] text-[#59544c]">
                  <input
                    type="radio"
                    name="brand"
                    checked={selectedBrand === 'ALL'}
                    onChange={() => setSelectedBrand('ALL')}
                    className="accent-[#1a1816]"
                  />
                  <span>ALL BRANDS</span>
                </label>
                {BRANDS.map((brand) => (
                  <label
                    key={brand}
                    className="flex items-center gap-2 text-xs cursor-pointer hover:text-[#1a1816] text-[#59544c]"
                  >
                    <input
                      type="radio"
                      name="brand"
                      checked={selectedBrand === brand}
                      onChange={() => setSelectedBrand(brand)}
                      className="accent-[#1a1816]"
                    />
                    <span>{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 3. CATEGORY FILTER */}
            <div className="space-y-2 border-b border-[#d5cdc0] pb-4">
              <span className="text-[11px] font-bold text-[#1a1816] uppercase block">
                CATEGORY
              </span>
              <div className="space-y-1 max-h-44 overflow-y-auto pr-1">
                <label className="flex items-center gap-2 text-xs cursor-pointer hover:text-[#1a1816] text-[#59544c]">
                  <input
                    type="radio"
                    name="cat"
                    checked={selectedCategory === 'ALL'}
                    onChange={() => setSelectedCategory('ALL')}
                    className="accent-[#1a1816]"
                  />
                  <span>ALL CATEGORIES</span>
                </label>
                {CATEGORIES.map((cat) => (
                  <label
                    key={cat}
                    className="flex items-center gap-2 text-xs cursor-pointer hover:text-[#1a1816] text-[#59544c]"
                  >
                    <input
                      type="radio"
                      name="cat"
                      checked={selectedCategory === cat}
                      onChange={() => setSelectedCategory(cat)}
                      className="accent-[#1a1816]"
                    />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 4. GENDER / DEMOGRAPHIC */}
            <div className="space-y-2 border-b border-[#d5cdc0] pb-4">
              <span className="text-[11px] font-bold text-[#1a1816] uppercase block">
                DEPARTMENT
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {['ALL', 'Men', 'Women', 'Kids'].map((g) => (
                  <button
                    key={g}
                    onClick={() => setSelectedGender(g)}
                    className={`py-1.5 px-2 text-[10px] uppercase font-bold border transition-colors cursor-pointer ${
                      selectedGender === g
                        ? 'bg-[#1a1816] text-[#f5efe6] border-[#1a1816]'
                        : 'bg-[#ede7dd] text-[#59544c] border-[#d5cdc0] hover:text-[#1a1816]'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* 5. PRICE RANGE SLIDER */}
            <div className="space-y-2 border-b border-[#d5cdc0] pb-4">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-bold text-[#1a1816] uppercase">MAX PRICE</span>
                <span className="font-bold text-[#1a1816]">${maxPrice}</span>
              </div>
              <input
                type="range"
                min="80"
                max="700"
                step="20"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#1a1816] cursor-pointer"
              />
              <div className="flex justify-between text-[9px] text-[#7b6e54]">
                <span>{formatCurrency(80)}</span>
                <span>{formatCurrency(700)}</span>
              </div>
            </div>

            {/* 6. MINIMUM RATING & AVAILABILITY */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-xs cursor-pointer text-[#1a1816] font-bold">
                <input
                  type="checkbox"
                  checked={onlyInStock}
                  onChange={(e) => setOnlyInStock(e.target.checked)}
                  className="accent-[#1a1816]"
                />
                <span>IN STOCK ONLY</span>
              </label>

              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#7b6e54] uppercase block">
                  CUSTOMER RATING:
                </span>
                <div className="flex gap-1">
                  {[0, 4.0, 4.5, 4.8].map((rt) => (
                    <button
                      key={rt}
                      onClick={() => setMinRating(rt)}
                      className={`flex-1 py-1 text-[10px] border transition-colors cursor-pointer ${
                        minRating === rt
                          ? 'bg-[#1a1816] text-[#f5efe6] border-[#1a1816] font-bold'
                          : 'bg-[#ede7dd] text-[#59544c] border-[#d5cdc0]'
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
              <div className="bg-[#f5efe6] border border-[#d5cdc0] p-12 text-center space-y-4">
                <h3 className="text-base font-bold uppercase text-[#1a1816]">
                  NO MATCHING FOOTWEAR SPECIFICATIONS FOUND
                </h3>
                <p className="text-xs text-[#59544c] max-w-md mx-auto">
                  Adjust your active filters or clear the size criteria to view available archival
                  allocations.
                </p>
                <button
                  onClick={resetFilters}
                  className="bg-[#141312] text-[#f5efe6] px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#35322e] transition-colors cursor-pointer"
                >
                  RESET ALL FILTERS
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedProducts.map((shoe) => {
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

                  return (
                    <div
                      key={shoe.id}
                      className="border border-[#d5cdc0] bg-[#f5efe6] flex flex-col justify-between group hover:border-[#1a1816] transition-all duration-300 hover:-translate-y-1 shadow-sm"
                    >
                      <div className="p-5">
                        {/* Card Header: Brand, Code, Wishlist */}
                        <div className="flex items-center justify-between text-[10px] mb-3">
                          <span className="text-[#7b6e54] font-bold tracking-wider uppercase">
                            {shoe.brand} // {shoe.code}
                          </span>
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onToggleWishlist(shoe);
                              }}
                              className={`p-1 transition-colors cursor-pointer ${
                                isWish ? 'text-[#1a1816]' : 'text-[#8e8474] hover:text-[#1a1816]'
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
                                isComp ? 'text-[#1a1816]' : 'text-[#8e8474] hover:text-[#1a1816]'
                              }`}
                              title="Add to comparison"
                            >
                              <Scale className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {/* Image Preview with Hover Scale */}
                        <div
                          onClick={() => onSelectProduct(shoe)}
                          className="relative aspect-[4/3] bg-[#ede7dd] border border-[#d5cdc0] overflow-hidden mb-4 cursor-pointer"
                        >
                          <img
                            src={shoe.colors[0]?.images.front}
                            alt={shoe.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          {shoe.discountPercent > 0 && (
                            <div className="absolute top-2 left-2 bg-[#141312] text-[#f5efe6] px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase">
                              {shoe.discountPercent}% OFF
                            </div>
                          )}
                          {shoe.isLimitedDrop && (
                            <div className="absolute bottom-2 left-2 bg-[#ede7dd]/90 border border-[#d5cdc0] px-2 py-0.5 text-[9px] font-bold text-[#1a1816]">
                              LIMITED DROP
                            </div>
                          )}
                        </div>

                        {/* Product Title & Rating */}
                        <div className="space-y-1 mb-3">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] text-[#59544c] uppercase">
                              {shoe.category} • {shoe.gender}
                            </span>
                            <div className="flex items-center gap-1 text-[10px] font-bold text-[#1a1816]">
                              {shoe.reviewsCount > 0 ? (
                                <>
                                  <Star className="w-3 h-3 fill-[#1a1816]" />
                                  <span>{shoe.rating}</span>
                                </>
                              ) : (
                                <span className="text-[#7b6e54]">Not rated</span>
                              )}
                            </div>
                          </div>

                          <h3
                            onClick={() => onSelectProduct(shoe)}
                            className="font-headline text-lg font-bold uppercase text-[#1a1816] tracking-tight hover:underline cursor-pointer leading-snug"
                          >
                            {shoe.name}
                          </h3>
                        </div>

                        {/* Price & MRP */}
                        <div className="flex items-baseline gap-2 mb-3">
                          <span className="text-base font-bold text-[#1a1816]">
                            {formatCurrency(shoe.price)}
                          </span>
                          <span className="text-xs text-[#8e8474] line-through">
                            {formatCurrency(shoe.mrp)}
                          </span>
                        </div>

                        {/* Available Sizes List */}
                        <div className="space-y-1 pt-2 border-t border-[#d5cdc0]">
                          <span className="text-[9px] font-bold text-[#7b6e54] uppercase block">
                            AVAILABLE SIZES:
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {allSizesInStock.map((sz) => (
                              <span
                                key={sz}
                                className="px-1.5 py-0.5 bg-[#ede7dd] border border-[#d5cdc0] text-[9px] text-[#1a1816] font-bold"
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
                          className="py-2 bg-[#ede7dd] hover:bg-[#ded6c9] text-[#1a1816] border border-[#d5cdc0] hover:border-[#1a1816] text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1 cursor-pointer transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>DETAILS</span>
                        </button>
                        <button
                          onClick={() => onSelectProduct(shoe)}
                          className="py-2 bg-[#141312] hover:bg-[#35322e] text-[#f5efe6] text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1 cursor-pointer transition-colors"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>SELECT SIZE</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
