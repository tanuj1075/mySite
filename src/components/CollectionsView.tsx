import React, { useState } from 'react';
import { ArrowRight, Heart, ShoppingBag, ShieldCheck, Truck, RotateCcw, Lock, Sparkles, Tag, Activity, Footprints, Layers } from 'lucide-react';
import { CartItem, ShoeProduct } from '../types';
import { formatCurrency } from '../lib/currency';

interface CollectionsViewProps {
  products?: ShoeProduct[];
  onClaimVoidRunner: () => void;
  onQuickAddProduct: (item: CartItem) => void;
  onNavigate: (nav: string) => void;
  onShowToast: (msg: string) => void;
  onInspectSpecimen?: (specimen: any) => void;
  onSelectCategoryFilter?: (cat: string) => void;
  onSelectProduct?: (product: ShoeProduct) => void;
  wishlistIds?: string[];
  onToggleWishlist?: (product: ShoeProduct) => void;
}

export const CollectionsView: React.FC<CollectionsViewProps> = ({
  products = [],
  onQuickAddProduct,
  onNavigate,
  onShowToast,
  onSelectCategoryFilter,
  onSelectProduct,
  wishlistIds = [],
  onToggleWishlist,
}) => {
  // Category Icons bar matching Reference Panel 1
  const categoryPills = [
    { label: 'Men', filter: 'Men', icon: Footprints },
    { label: 'Women', filter: 'Women', icon: Sparkles },
    { label: 'Kids', filter: 'Kids', icon: Footprints },
    { label: 'Sneakers', filter: 'Sneakers', icon: Layers },
    { label: 'Sports', filter: 'Running', icon: Activity },
    { label: 'New Arrivals', filter: 'New Arrivals', icon: Sparkles, navKey: 'NEW DROPS' },
    { label: 'Sale', filter: 'Sale', icon: Tag },
  ];

  const handleCategoryClick = (filter: string, navKey?: string) => {
    if (navKey) {
      onNavigate(navKey);
    } else {
      if (onSelectCategoryFilter) {
        onSelectCategoryFilter(filter);
      }
      onNavigate('SHOP');
    }
  };

  // Curated Featured Collections (3 items matching Reference Panel 1)
  const featuredCollections = [
    {
      id: 'featured-1',
      title: 'Retro Court Series',
      subtitle: 'Vintage low-top silhouettes reimagined with modern calfskin comfort.',
      image: '/assets/images/cream_runner_pedestal_1788842341279.jpg',
      category: 'Sneakers',
    },
    {
      id: 'featured-2',
      title: 'Monochrome High OG',
      subtitle: 'Brutalist high-top architecture engineered for unmatched ankle support.',
      image: '/assets/images/core_silhouettes_shoe_1788838314612.jpg',
      category: 'Basketball',
    },
    {
      id: 'featured-3',
      title: 'Heritage Street Runners',
      subtitle: 'Chiseled wedge geometry with dual-density Italian foam outsoles.',
      image: '/assets/images/taupe_runner_pedestal_1788842355799.jpg',
      category: 'Running',
    },
  ];

  // Best Sellers (Pull from database or fallback to top iconic models)
  const bestSellers: ShoeProduct[] = products.length >= 4 ? products.slice(0, 4) : [
    {
      id: 'nike-af1-07',
      name: "Air Force 1 '07",
      brand: 'NIKE',
      price: 11999,
      mrp: 14999,
      discountPercent: 20,
      category: 'Sneakers',
      colors: [
        {
          name: 'White',
          hex: '#ffffff',
          images: { front: '/assets/images/cream_runner_pedestal_1788842341279.jpg' },
        },
      ],
      rating: 4.8,
    } as unknown as ShoeProduct,
    {
      id: 'jordan-1-retro',
      name: 'Jordan 1 Retro High',
      brand: 'JORDAN',
      price: 16999,
      mrp: 19999,
      discountPercent: 15,
      category: 'Sneakers',
      colors: [
        {
          name: 'Black & White',
          hex: '#000000',
          images: { front: '/assets/images/core_silhouettes_shoe_1788838314612.jpg' },
        },
      ],
      rating: 4.9,
    } as unknown as ShoeProduct,
    {
      id: 'nb-550-white',
      name: 'New Balance 550',
      brand: 'NEW BALANCE',
      price: 12499,
      mrp: 14999,
      discountPercent: 17,
      category: 'Sneakers',
      colors: [
        {
          name: 'Sea Salt',
          hex: '#eae3d5',
          images: { front: '/assets/images/taupe_runner_pedestal_1788842355799.jpg' },
        },
      ],
      rating: 4.7,
    } as unknown as ShoeProduct,
    {
      id: 'adidas-samba-og',
      name: 'Adidas Samba OG',
      brand: 'ADIDAS',
      price: 10999,
      mrp: 12999,
      discountPercent: 15,
      category: 'Sneakers',
      colors: [
        {
          name: 'Core Black',
          hex: '#111111',
          images: { front: '/assets/images/kinesis_zero_shoe_1788838347108.jpg' },
        },
      ],
      rating: 4.8,
    } as unknown as ShoeProduct,
  ];

  const handleQuickAdd = (product: ShoeProduct, e: React.MouseEvent) => {
    e.stopPropagation();
    const frontImg = product.colors?.[0]?.images?.front || '/assets/images/cream_runner_pedestal_1788842341279.jpg';
    const colorName = product.colors?.[0]?.name || 'Standard Edition';
    const cartItem: CartItem = {
      id: `${product.id}-size-9`,
      productId: product.id,
      code: product.sku || product.id,
      name: product.name,
      edition: `${product.brand} // Size 9`,
      price: product.price,
      image: frontImg,
      colorway: colorName,
      specification: 'Size 9',
      availableSizes: ['7', '8', '9', '10', '11'],
      allocationStatus: 'Secured Allocation',
      quantity: 1,
      selectedColor: colorName,
      selectedSize: '9',
    };
    onQuickAddProduct(cartItem);
    onShowToast(`ADDED TO BAG: ${product.name}`);
  };

  const handleCardClick = (product: ShoeProduct) => {
    if (onSelectProduct) {
      onSelectProduct(product);
    } else {
      onNavigate('SHOP');
    }
  };

  return (
    <div className="w-full bg-[#F7F2EC] dark:bg-[#09090b] text-[#242321] dark:text-[#f4f4f6] font-sans transition-colors pb-16">
      {/* 1. HERO SECTION (Exact Match to Reference Panel 1) */}
      <section className="relative overflow-hidden pt-4 pb-12 sm:pb-20 max-w-[1440px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[520px]">
          {/* Left Column: Branding, Typography & CTA */}
          <div className="lg:col-span-6 z-10 space-y-5">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#77716B] dark:text-[#A8A49E] block">
              STEP INTO MORE
            </span>
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold text-[#242321] dark:text-white leading-[1.05] tracking-tight">
              VANTA <br />
              <span className="text-[#B4532A]">ARCHIVE</span>
            </h1>
            <p className="text-base sm:text-lg text-[#77716B] dark:text-[#A8A49E] font-normal max-w-md leading-relaxed">
              Style. Comfort. Performance.Conceived at the intersection of monolithic brutalist architecture and technical leather craft.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <button
                id="hero-shop-now-btn"
                onClick={() => onNavigate('SHOP')}
                className="bg-[#B4532A] hover:bg-[#9C431F] text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('COLLECTIONS')}
                className="border border-[#E9D9CA] dark:border-[#333230] bg-white/70 dark:bg-[#121215] text-[#242321] dark:text-[#f4f4f6] hover:border-[#B4532A] font-semibold text-sm px-6 py-3.5 rounded-xl transition-all cursor-pointer"
              >
                Explore Lookbook
              </button>
            </div>
          </div>

          {/* Right Column: Curved Warm Beige Backdrop & Floating Sneaker */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Organic Curved Backdrop Shape */}
            <div className="w-[320px] h-[320px] sm:w-[460px] sm:h-[460px] rounded-[48px] bg-gradient-to-br from-[#E9D9CA] via-[#E4D2C1] to-[#DAC4B1] dark:from-[#242429] dark:to-[#18181c] shadow-2xl relative flex items-center justify-center overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-700">
              <div className="absolute inset-0 bg-radial-gradient opacity-20 pointer-events-none"></div>
            </div>

            {/* Hero Sneaker Cutout Floating Over Backdrop */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <img
                src="/assets/images/cream_runner_pedestal_1788842341279.jpg"
                alt="VANTA ARCHIVE Hero Sneaker Specimen"
                className="w-[300px] sm:w-[460px] object-contain drop-shadow-[0_24px_38px_rgba(36,35,33,0.35)] transform hover:scale-105 transition-transform duration-500 pointer-events-auto cursor-pointer rounded-2xl"
                onClick={() => onNavigate('SHOP')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY ICON PILLS (Exact Match to Reference Panel 1) */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-12 py-8">
        <div className="grid grid-cols-4 sm:grid-cols-7 gap-3 sm:gap-6 justify-center">
          {categoryPills.map((pill) => {
            const Icon = pill.icon;
            return (
              <button
                key={pill.label}
                onClick={() => handleCategoryClick(pill.filter, pill.navKey)}
                className="flex flex-col items-center gap-2 group cursor-pointer focus:outline-none"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white dark:bg-[#18181c] border border-[#E9D9CA] dark:border-[#2A2A32] shadow-sm group-hover:border-[#B4532A] group-hover:shadow-md flex items-center justify-center text-[#242321] dark:text-[#f4f4f6] group-hover:text-[#B4532A] transition-all">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#242321] dark:text-[#f4f4f6] group-hover:text-[#B4532A] transition-colors">
                  {pill.label}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. FEATURED COLLECTION SECTION (Exact Match to Reference Panel 1) */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-12 py-10 sm:py-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#242321] dark:text-white">
              FEATURED COLLECTION
            </h2>
            <p className="text-xs sm:text-sm text-[#77716B] dark:text-[#A8A49E] mt-1">
              Discover our handpicked sneakers for every style and occasion.
            </p>
          </div>
          <button
            onClick={() => onNavigate('SHOP')}
            className="text-xs sm:text-sm font-bold text-[#B4532A] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Explore Collection</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Elevated Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCollections.map((col) => (
            <div
              key={col.id}
              onClick={() => handleCategoryClick(col.category)}
              className="bg-white dark:bg-[#18181c] border border-[#E9D9CA] dark:border-[#2A2A32] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="aspect-[4/3] bg-[#F7F2EC] dark:bg-[#121215] overflow-hidden relative">
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-2">
                <span className="text-[10px] uppercase font-bold text-[#B4532A] tracking-wider block">
                  {col.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#242321] dark:text-white group-hover:text-[#B4532A] transition-colors">
                  {col.title}
                </h3>
                <p className="text-xs text-[#77716B] dark:text-[#A8A49E] line-clamp-2">
                  {col.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BEST SELLERS GRID (Exact Match to Reference Panel 1) */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-12 py-10 sm:py-14">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#242321] dark:text-white">
              BEST SELLERS
            </h2>
            <p className="text-xs sm:text-sm text-[#77716B] dark:text-[#A8A49E] mt-1">
              Loved by sneakerheads worldwide.
            </p>
          </div>
          <button
            onClick={() => onNavigate('SHOP')}
            className="text-xs sm:text-sm font-bold text-[#B4532A] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Clean Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => {
            const frontImage = product.colors?.[0]?.images?.front || '/assets/images/cream_runner_pedestal_1788842341279.jpg';
            const isWishlisted = wishlistIds.includes(product.id);

            return (
              <div
                key={product.id}
                onClick={() => handleCardClick(product)}
                className="bg-white dark:bg-[#18181c] border border-[#E9D9CA] dark:border-[#2A2A32] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
              >
                {/* Image Stage + Wishlist Heart */}
                <div className="relative aspect-square bg-[#F7F2EC] dark:bg-[#121215] flex items-center justify-center p-4 overflow-hidden">
                  <img
                    src={frontImage}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  {onToggleWishlist && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(product);
                      }}
                      className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-sm ${
                        isWishlisted
                          ? 'bg-[#B4532A] text-white'
                          : 'bg-white/90 dark:bg-[#242429] text-[#77716B] hover:text-[#B4532A]'
                      }`}
                      aria-label="Wishlist"
                    >
                      <Heart className="w-4 h-4" fill={isWishlisted ? 'currentColor' : 'none'} />
                    </button>
                  )}
                  {product.discountPercent && (
                    <span className="absolute bottom-3 left-3 bg-[#B4532A] text-white font-bold text-[10px] px-2 py-0.5 rounded-full">
                      {product.discountPercent}% OFF
                    </span>
                  )}
                </div>

                {/* Product Meta & Actions */}
                <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#77716B] dark:text-[#A8A49E]">
                      {product.brand}
                    </span>
                    <h3 className="text-sm font-bold text-[#242321] dark:text-white line-clamp-1 group-hover:text-[#B4532A] transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-2">
                      <span className="text-base font-extrabold text-[#242321] dark:text-white">
                        {formatCurrency(product.price)}
                      </span>
                      {product.mrp && product.mrp > product.price && (
                        <span className="text-xs text-[#77716B] line-through">
                          {formatCurrency(product.mrp)}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={(e) => handleQuickAdd(product, e)}
                      className="w-8 h-8 rounded-full bg-[#F7F2EC] dark:bg-[#242429] hover:bg-[#B4532A] text-[#242321] dark:text-[#f4f4f6] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                      title="Add to Bag"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. PROMOTIONAL SALE BANNER (Exact Match to Reference Panel 1 Bottom) */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-12 py-6">
        <div className="bg-[#242321] text-white rounded-3xl p-8 sm:p-12 overflow-hidden relative shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="z-10 space-y-4 max-w-md">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E9D9CA]">
              LIMITED TIME
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              UP TO 40% OFF
            </h2>
            <p className="text-xs sm:text-sm text-[#A8A49E] leading-relaxed">
              On selected archival grails and performance runners. Don't miss out on verified atelier allocations.
            </p>
            <button
              onClick={() => onNavigate('SHOP')}
              className="bg-[#B4532A] hover:bg-[#9C431F] text-white text-xs sm:text-sm font-semibold px-7 py-3 rounded-xl transition-all cursor-pointer inline-flex items-center gap-2 shadow-lg"
            >
              <span>Shop Sale</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="relative w-full md:w-1/2 flex items-center justify-center">
            <img
              src="/assets/images/kinesis_zero_shoe_1788838347108.jpg"
              alt="Archival Grail Promo Sneaker"
              className="w-[280px] sm:w-[380px] object-contain transform rotate-[-8deg] hover:rotate-0 transition-transform duration-500 drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)] rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* 6. TRUST PILLARS (Why Choose VANTA ARCHIVE) */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white dark:bg-[#18181c] border border-[#E9D9CA] dark:border-[#2A2A32] rounded-2xl shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#E9D9CA]/40 dark:bg-[#242429] flex items-center justify-center text-[#B4532A] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#242321] dark:text-white">100% Authentic</h4>
              <p className="text-xs text-[#77716B] dark:text-[#A8A49E] mt-1">
                Every specimen verified with cryptographic RFID provenance.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white dark:bg-[#18181c] border border-[#E9D9CA] dark:border-[#2A2A32] rounded-2xl shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#E9D9CA]/40 dark:bg-[#242429] flex items-center justify-center text-[#B4532A] shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#242321] dark:text-white">Express Delivery</h4>
              <p className="text-xs text-[#77716B] dark:text-[#A8A49E] mt-1">
                Complimentary worldwide expedited dispatch on all orders.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white dark:bg-[#18181c] border border-[#E9D9CA] dark:border-[#2A2A32] rounded-2xl shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#E9D9CA]/40 dark:bg-[#242429] flex items-center justify-center text-[#B4532A] shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#242321] dark:text-white">30-Day Returns</h4>
              <p className="text-xs text-[#77716B] dark:text-[#A8A49E] mt-1">
                Hassle-free size replacement and returns protocol.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white dark:bg-[#18181c] border border-[#E9D9CA] dark:border-[#2A2A32] rounded-2xl shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#E9D9CA]/40 dark:bg-[#242429] flex items-center justify-center text-[#B4532A] shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#242321] dark:text-white">Secure Payments</h4>
              <p className="text-xs text-[#77716B] dark:text-[#A8A49E] mt-1">
                256-bit SSL encryption &amp; verified settlement protection.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
