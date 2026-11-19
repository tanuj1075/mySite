import React, { useState, useEffect } from 'react';
import {
  Star,
  Check,
  AlertCircle,
  Shield,
  Truck,
  RotateCcw,
  Ruler,
  Heart,
  Scale,
  ShoppingBag,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Camera,
  ThumbsUp,
  MapPin,
  Bell,
  Play,
  Pause,
  RefreshCw,
} from 'lucide-react';
import { ShoeProduct, CartItem, ReviewItem } from '../types';
import { INITIAL_REVIEWS } from '../data/footwearCatalog';
import { formatCurrency } from '../lib/currency';

interface ProductDetailsViewProps {
  product: ShoeProduct;
  onAddToCart: (item: CartItem) => void;
  onBuyNow: (item: CartItem) => void;
  onToggleWishlist: (product: ShoeProduct) => void;
  isWishlisted: boolean;
  onOpenSizeGuide: () => void;
  onOpenCompare: (product: ShoeProduct) => void;
  isCompared: boolean;
  onOpenNotifyMe: (productName: string, size?: string, color?: string) => void;
  onBackToCatalog: () => void;
  onShowToast: (msg: string) => void;
}

export const ProductDetailsView: React.FC<ProductDetailsViewProps> = ({
  product,
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
  isWishlisted,
  onOpenSizeGuide,
  onOpenCompare,
  isCompared,
  onOpenNotifyMe,
  onBackToCatalog,
  onShowToast,
}) => {
  // Active color variant (default to first)
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const activeColor = product.colors[selectedColorIndex] || product.colors[0];
  const sizeLabel = product.sizeSystem && product.sizeSystem !== 'Size' ? product.sizeSystem : 'Size';

  // Active angle in gallery
  const [activeAngle, setActiveAngle] = useState<'front' | 'side' | 'back' | 'top' | 'sole' | 'lifestyle'>('front');
  const [isAutoRotating, setIsAutoRotating] = useState(false);

  // Selected size state
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  // Validation error state
  const [sizeError, setSizeError] = useState(false);

  // Delivery pincode checker state
  const [pincode, setPincode] = useState('10014');
  const [pincodeStatus, setPincodeStatus] = useState<string | null>('✓ Delivery available in 3–5 days to 10014');

  // Customer Reviews state
  const [reviews, setReviews] = useState<ReviewItem[]>(
    INITIAL_REVIEWS.filter((r) => r.productId === product.id)
  );
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewFit, setNewReviewFit] = useState<'Runs Small' | 'True to Size' | 'Runs Large'>('True to Size');
  const [newReviewComment, setNewReviewComment] = useState('');

  // Angle image list
  const angleKeys: Array<'front' | 'side' | 'back' | 'top' | 'sole' | 'lifestyle'> = [
    'front',
    'side',
    'back',
    'top',
    'sole',
    'lifestyle',
  ];

  // Auto-rotation effect for 360 Turntable Simulator
  useEffect(() => {
    if (!isAutoRotating) return;
    const interval = setInterval(() => {
      setActiveAngle((prev) => {
        const available = angleKeys.filter((k) => !!activeColor.images[k]);
        if (available.length <= 1) return prev;
        const currentIdx = available.indexOf(prev);
        const nextIdx = (currentIdx + 1) % available.length;
        return available[nextIdx];
      });
    }, 1800);
    return () => clearInterval(interval);
  }, [isAutoRotating, activeColor]);

  // Color change resets size selection and active angle
  const handleColorChange = (index: number) => {
    setSelectedColorIndex(index);
    setSelectedSize(null);
    setSizeError(false);
    setActiveAngle('front');
    setIsAutoRotating(false);
    onShowToast(`SPECIFICATION COLORWAY SET: ${product.colors[index].name.toUpperCase()}`);
  };

  // 360 scrubber steps
  const handlePrevAngle = () => {
    setIsAutoRotating(false);
    const available = angleKeys.filter((k) => !!activeColor.images[k]);
    if (available.length <= 1) return;
    const currentIdx = available.indexOf(activeAngle);
    const prevIdx = (currentIdx - 1 + available.length) % available.length;
    setActiveAngle(available[prevIdx]);
  };

  const handleNextAngle = () => {
    setIsAutoRotating(false);
    const available = angleKeys.filter((k) => !!activeColor.images[k]);
    if (available.length <= 1) return;
    const currentIdx = available.indexOf(activeAngle);
    const nextIdx = (currentIdx + 1) % available.length;
    setActiveAngle(available[nextIdx]);
  };

  // Inventory for current active color
  const sizeStockList = product.sizeInventory[activeColor.name] || [];

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
    setSizeError(false);
  };

  // Check out of stock condition
  const selectedSizeInfo = sizeStockList.find((s) => s.size === selectedSize);
  const isSelectedSizeOutOfStock = selectedSizeInfo ? selectedSizeInfo.stock <= 0 : false;

  // Add to Bag validation
  const handleAddToCartClick = () => {
    if (!selectedSize) {
      setSizeError(true);
      onShowToast('MANDATORY ATTRIBUTE: SELECT SIZE SPECIFICATION');
      return;
    }

    if (isSelectedSizeOutOfStock) {
      onShowToast(`SPECIFICATION SIZE ${selectedSize} IS DEPLETED // VAULT RESERVATION REQUIRED`);
      return;
    }

    const cartItem: CartItem = {
      id: `${product.id}-${activeColor.name}-${selectedSize}`,
      productId: product.id,
      code: product.code,
      name: product.name,
      edition: `${product.brand} // ${activeColor.name.toUpperCase()}`,
      price: product.price,
      image: activeColor.images.front,
      colorway: activeColor.name,
      specification: `${sizeLabel} ${selectedSize}`,
      availableSizes: sizeStockList.map((s) => `${sizeLabel} ${s.size}`),
      allocationStatus: 'Vault Allocation Secured',
      quantity: 1,
      selectedColor: activeColor.name,
      selectedSize: selectedSize,
    };

    onAddToCart(cartItem);
    onShowToast(`ALLOCATED: ${product.name} [${sizeLabel} ${selectedSize}]`);
  };

  // Buy Now validation
  const handleBuyNowClick = () => {
    if (!selectedSize) {
      setSizeError(true);
      onShowToast('MANDATORY ATTRIBUTE: SELECT SIZE SPECIFICATION');
      return;
    }

    if (isSelectedSizeOutOfStock) {
      onShowToast(`SPECIFICATION SIZE ${selectedSize} IS DEPLETED // VAULT RESERVATION REQUIRED`);
      return;
    }

    const cartItem: CartItem = {
      id: `${product.id}-${activeColor.name}-${selectedSize}`,
      productId: product.id,
      code: product.code,
      name: product.name,
      edition: `${product.brand} // ${activeColor.name.toUpperCase()}`,
      price: product.price,
      image: activeColor.images.front,
      colorway: activeColor.name,
      specification: `${sizeLabel} ${selectedSize}`,
      availableSizes: sizeStockList.map((s) => `${sizeLabel} ${s.size}`),
      allocationStatus: 'Immediate Protocol Checkout',
      quantity: 1,
      selectedColor: activeColor.name,
      selectedSize: selectedSize,
    };

    onBuyNow(cartItem);
  };

  // Pincode validation handler
  const handlePincodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.length >= 5) {
      setPincodeStatus(`✓ Dispatches via Armored Freight to Postal Zone ${pincode} in 2–4 days`);
      onShowToast(`LOGISTICS VERIFIED // TRANSIT ZONE ${pincode} ACTIVE`);
    } else {
      setPincodeStatus('Invalid code format. Enter at least 5 digits.');
    }
  };

  // Submit new review
  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewAuthor.trim() || !newReviewComment.trim()) return;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      productId: product.id,
      author: newReviewAuthor.trim(),
      rating: newReviewRating,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      title: 'Architectural Performance Review',
      comment: newReviewComment.trim(),
      fitFeedback: newReviewFit,
      comfortRating: newReviewRating,
      fitRating: newReviewRating,
      qualityRating: newReviewRating,
      designRating: newReviewRating,
      helpfulCount: 0,
      verifiedBuyer: true,
    };

    setReviews([newRev, ...reviews]);
    setShowReviewForm(false);
    setNewReviewAuthor('');
    setNewReviewComment('');
    onShowToast('DOSSIER RECORDED // THANK YOU FOR YOUR ATELIER FEEDBACK');
  };

  return (
    <div className="w-full bg-[#09090b] text-[#f4f4f6] font-mono pb-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-6">
        
        {/* Breadcrumb Path */}
        <div className="flex items-center gap-2 text-[10px] text-[#c9a96e] uppercase tracking-wider mb-6 pb-3 border-b border-[#242429]">
          <button
            onClick={onBackToCatalog}
            className="hover:text-[#f4f4f6] underline cursor-pointer transition-colors"
          >
            CATALOG
          </button>
          <ChevronRight className="w-3 h-3 text-[#52525b]" />
          <span>{product.brand}</span>
          <ChevronRight className="w-3 h-3 text-[#52525b]" />
          <span>{product.category}</span>
          <ChevronRight className="w-3 h-3 text-[#52525b]" />
          <span className="text-[#f4f4f6] font-bold">{product.name}</span>
        </div>

        {/* Top Product Layout: Left Gallery (7 cols) + Right Details (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start pb-16 border-b border-[#242429]">
          
          {/* LEFT: Multi-Angle Interactive Product Gallery (VANTA 360° LAB) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Stage Display */}
            <div className="relative aspect-[4/3] bg-[#121215] border border-[#242429] overflow-hidden group shadow-2xl">
              <img
                src={activeColor.images[activeAngle] || activeColor.images.front}
                alt={`${product.name} - ${activeAngle} view`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('cream_runner_pedestal')) {
                    target.src = '/assets/images/cream_runner_pedestal_1788842341279.jpg';
                  }
                }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Angle Tag Badge & 360 Indicator */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="bg-[#18181c]/95 backdrop-blur-sm border border-[#242429] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#f4f4f6] flex items-center gap-1.5 shadow-md">
                  <span className={`w-1.5 h-1.5 rounded-full ${isAutoRotating ? 'bg-emerald-400 animate-ping' : 'bg-[#c9a96e]'}`}></span>
                  <span>VANTA 360° LAB // {activeAngle.toUpperCase()}</span>
                </div>
              </div>

              {/* Wishlist & Compare floating actions */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`w-9 h-9 border flex items-center justify-center transition-colors cursor-pointer ${
                    isWishlisted
                      ? 'bg-[#c9a96e] text-[#09090b] border-[#c9a96e]'
                      : 'bg-[#18181c]/90 backdrop-blur-sm text-[#f4f4f6] border-[#242429] hover:border-[#8e8e98]'
                  }`}
                  title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={() => onOpenCompare(product)}
                  className={`w-9 h-9 border flex items-center justify-center transition-colors cursor-pointer ${
                    isCompared
                      ? 'bg-[#c9a96e] text-[#09090b] border-[#c9a96e]'
                      : 'bg-[#18181c]/90 backdrop-blur-sm text-[#f4f4f6] border-[#242429] hover:border-[#8e8e98]'
                  }`}
                  title="Compare with another shoe"
                >
                  <Scale className="w-4 h-4" />
                </button>
              </div>

              {/* Interactive Left / Right 360 Scrubber Overlay Arrows */}
              <button
                onClick={handlePrevAngle}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#18181c]/85 hover:bg-[#242429] border border-[#242429] text-[#f4f4f6] flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-md"
                title="Rotate to previous angle"
                aria-label="Previous angle"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextAngle}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#18181c]/85 hover:bg-[#242429] border border-[#242429] text-[#f4f4f6] flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-md"
                title="Rotate to next angle"
                aria-label="Next angle"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Bottom 360 Controls & Resolution Tag */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="bg-[#18181c]/90 backdrop-blur-sm border border-[#242429] px-2.5 py-1 text-[9px] text-[#c9a96e] pointer-events-auto">
                  ARCHIVAL RESOLUTION // ATELIER VERIFIED
                </div>

                <button
                  onClick={() => setIsAutoRotating(!isAutoRotating)}
                  className="pointer-events-auto bg-[#f4f4f6] hover:bg-[#c9a96e] text-[#09090b] border border-[#f4f4f6] px-3 py-1 font-mono text-[9px] font-bold tracking-wider uppercase flex items-center gap-1.5 transition-colors cursor-pointer shadow-lg"
                >
                  {isAutoRotating ? (
                    <>
                      <Pause className="w-3 h-3" />
                      <span>PAUSE 360°</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3" />
                      <span>AUTO-ROTATE 360°</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Thumbnail Multi-Angle Switcher */}
            <div className="grid grid-cols-6 gap-2 sm:gap-3">
              {angleKeys.map((ang) => {
                const imgUrl = activeColor.images[ang];
                if (!imgUrl) return null;
                const isCurrent = activeAngle === ang;
                return (
                  <button
                    key={ang}
                    onClick={() => {
                      setIsAutoRotating(false);
                      setActiveAngle(ang);
                    }}
                    className={`border p-1 bg-[#121215] transition-all cursor-pointer flex flex-col items-center gap-1 ${
                      isCurrent
                        ? 'border-[#f4f4f6] ring-1 ring-[#f4f4f6]'
                        : 'border-[#242429] hover:border-[#8e8e98]'
                    }`}
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-[#09090b]">
                      <img src={imgUrl} alt={ang} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[9px] uppercase font-bold text-[#8e8e98] tracking-wider">
                      {ang}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Product Purchasing Protocol, Color, Size, Specs */}
          <div className="lg:col-span-5 space-y-6">
            {/* Header / Brand & Rating */}
            <div className="space-y-2 border-b border-[#242429] pb-5">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#c9a96e] font-bold tracking-[0.2em] uppercase">
                  {product.brand} // {product.code}
                </span>
                <div className="flex items-center gap-1 text-[11px] font-bold text-[#f4f4f6]">
                  {product.reviewsCount > 0 ? (
                    <>
                      <Star className="w-3.5 h-3.5 fill-[#c9a96e] text-[#c9a96e]" />
                      <span>{product.rating}</span>
                      <span className="text-[#8e8e98] font-normal">
                        ({product.reviewsCount} reviews)
                      </span>
                    </>
                  ) : (
                    <span className="text-[#8e8e98] font-normal">No ratings yet</span>
                  )}
                </div>
              </div>

              <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#f4f4f6] leading-none">
                {product.name}
              </h1>

              <div className="flex items-baseline gap-3 pt-2">
                <span className="text-2xl sm:text-3xl font-bold text-[#f4f4f6]">
                  {formatCurrency(product.price)}
                </span>
                <span className="text-sm text-[#52525b] line-through font-normal">
                  {formatCurrency(product.mrp)}
                </span>
                <span className="text-xs bg-[#f4f4f6] text-[#09090b] px-2 py-0.5 font-bold tracking-wider uppercase">
                  {product.discountPercent}% OFF
                </span>
              </div>
            </div>

            {/* COLOR SELECTION */}
            <div className="space-y-3 border-b border-[#242429] pb-5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#f4f4f6] uppercase">
                  COLORWAY: <strong className="font-normal text-[#c9a96e]">{activeColor.name}</strong>
                </span>
                <span className="text-[10px] text-[#8e8e98]">
                  {product.colors.length} COLOR VARIANTS
                </span>
              </div>

              <div className="flex items-center gap-3">
                {product.colors.map((c, idx) => (
                  <button
                    key={c.name}
                    onClick={() => handleColorChange(idx)}
                    className={`relative w-9 h-9 border p-0.5 transition-all cursor-pointer ${
                      selectedColorIndex === idx
                        ? 'border-[#f4f4f6] scale-105 ring-1 ring-[#f4f4f6]'
                        : 'border-[#242429] hover:border-[#8e8e98]'
                    }`}
                    title={c.name}
                  >
                    <div
                      className="w-full h-full"
                      style={{ backgroundColor: c.hex }}
                    />
                    {selectedColorIndex === idx && (
                      <Check className="w-3 h-3 text-white absolute inset-0 m-auto mix-blend-difference" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* SIZE SELECTION & SIZE GUIDE */}
            <div className="space-y-3 border-b border-[#242429] pb-5">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#f4f4f6] uppercase">
                    SELECT SIZE (US / EU):
                  </span>
                  {selectedSize && (
                    <span className="text-[#c9a96e] font-bold">{sizeLabel} {selectedSize}</span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={onOpenSizeGuide}
                  className="text-[10px] text-[#c9a96e] hover:text-[#f4f4f6] font-bold uppercase flex items-center gap-1 cursor-pointer underline transition-colors"
                >
                  <Ruler className="w-3 h-3" />
                  <span>SIZE GUIDE & FIT CHART</span>
                </button>
              </div>

              {/* Size grid */}
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {sizeStockList.map((s) => {
                  const isAvailable = s.stock > 0;
                  const isChosen = selectedSize === s.size;
                  return (
                    <button
                      key={s.size}
                      onClick={() => handleSizeSelect(s.size)}
                      className={`relative py-3 px-2 text-xs font-bold text-center border transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                        isChosen
                          ? 'bg-[#f4f4f6] text-[#09090b] border-[#f4f4f6]'
                          : isAvailable
                          ? 'bg-[#18181c] text-[#f4f4f6] border-[#242429] hover:border-[#8e8e98]'
                          : 'bg-[#121215] text-[#52525b] border-[#242429]/40 opacity-40'
                      }`}
                    >
                      <span>{sizeLabel} {s.size}</span>
                      <span className="text-[8px] tracking-tighter">
                        {isAvailable
                          ? product.inventoryCountsAreExact === false ? 'Available' : `${s.stock} left`
                          : 'Out of Stock'}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Compulsory Size Validation Error */}
              {sizeError && (
                <div className="p-3 bg-red-950/40 border border-red-500/50 text-red-300 text-[11px] font-bold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>PLEASE SELECT A SIZE. SIZE SELECTION IS COMPULSORY FOR FOOTWEAR.</span>
                </div>
              )}

              {/* Out of Stock Alert for selected size with Notify Me */}
              {selectedSize && isSelectedSizeOutOfStock && (
                <div className="p-3 bg-[#18181c] border border-[#3a3a42] text-xs space-y-2">
                  <div className="text-red-400 font-bold flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4" />
                    <span>Size {sizeLabel} {selectedSize} is currently out of stock.</span>
                  </div>
                  <button
                    onClick={() => onOpenNotifyMe(product.name, selectedSize, activeColor.name)}
                    className="bg-[#f4f4f6] text-[#09090b] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 hover:bg-[#c9a96e] transition-colors cursor-pointer"
                  >
                    <Bell className="w-3.5 h-3.5" />
                    <span>NOTIFY ME WHEN AVAILABLE</span>
                  </button>
                </div>
              )}
            </div>

            {/* ACTION CTA BUTTONS: ADD TO BAG & BUY NOW */}
            <div className="space-y-3 pt-2">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleAddToCartClick}
                  className="btn-tactile w-full py-4 bg-[#18181c] hover:bg-[#242429] text-[#f4f4f6] border border-[#242429] hover:border-[#8e8e98] text-xs font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>ADD TO BAG</span>
                </button>
                <button
                  onClick={handleBuyNowClick}
                  className="btn-tactile w-full py-4 bg-[#f4f4f6] hover:bg-[#c9a96e] text-[#09090b] text-xs font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-lg"
                >
                  <span>BUY NOW</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2 text-[10px] text-[#8e8e98] pt-2 text-center">
                <div className="flex flex-col items-center gap-1 p-2 bg-[#121215] border border-[#242429]">
                  <Truck className="w-4 h-4 text-[#c9a96e]" />
                  <span className="font-bold text-[#f4f4f6]">EXPRESS COURIER</span>
                  <span>Dispatches in 24h</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2 bg-[#121215] border border-[#242429]">
                  <RotateCcw className="w-4 h-4 text-[#c9a96e]" />
                  <span className="font-bold text-[#f4f4f6]">SIZE EXCHANGE</span>
                  <span>14-day replacement</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2 bg-[#121215] border border-[#242429]">
                  <Shield className="w-4 h-4 text-[#c9a96e]" />
                  <span className="font-bold text-[#f4f4f6]">AUTHENTICITY</span>
                  <span>Verified NFC Chip</span>
                </div>
              </div>
            </div>

            {/* PINCODE ESTIMATOR */}
            <div className="bg-[#121215] border border-[#242429] p-4 space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-bold text-[#f4f4f6] uppercase flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#c9a96e]" />
                  ESTIMATE DELIVERY PINCODE
                </span>
              </div>
              <form onSubmit={handlePincodeCheck} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter postal pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className="bg-[#18181c] border border-[#242429] px-3 py-1.5 text-xs text-[#f4f4f6] placeholder:text-[#52525b] w-44 focus:outline-none focus:border-[#8e8e98] transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#f4f4f6] text-[#09090b] px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider hover:bg-[#c9a96e] transition-colors cursor-pointer"
                >
                  CHECK
                </button>
              </form>
              {pincodeStatus && (
                <div className="text-[11px] font-semibold text-[#c9a96e]">{pincodeStatus}</div>
              )}
            </div>

            {/* FIT INFORMATION SECTION */}
            <div className="bg-[#121215] border border-[#242429] p-5 space-y-4">
              <div className="text-xs font-bold uppercase text-[#f4f4f6] border-b border-[#242429] pb-2">
                FIT & ANATOMICAL BEHAVIOR
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                <div className="p-2 bg-[#18181c] border border-[#242429]">
                  <span className="text-[9px] text-[#c9a96e] block uppercase">LAST FIT</span>
                  <strong className="text-[#f4f4f6]">{product.fitType}</strong>
                </div>
                <div className="p-2 bg-[#18181c] border border-[#242429]">
                  <span className="text-[9px] text-[#c9a96e] block uppercase">WIDTH</span>
                  <strong className="text-[#f4f4f6]">{product.width}</strong>
                </div>
                <div className="p-2 bg-[#18181c] border border-[#242429]">
                  <span className="text-[9px] text-[#c9a96e] block uppercase">COMFORT</span>
                  <strong className="text-[#f4f4f6]">
                    {product.comfortScore === null ? 'Not rated' : `⭐ ${product.comfortScore} / 5.0`}
                  </strong>
                </div>
              </div>

              {/* Review-Based Fit Indicator Bar */}
              {product.fitIndicator === 'Not specified' ? (
                <div className="text-[10px] text-[#8e8e98] text-center pt-1">
                  Fit information not available.
                </div>
              ) : (
              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between text-[10px] text-[#8e8e98] uppercase font-bold">
                  <span>Runs Small</span>
                  <span className="text-[#f4f4f6]">True to Size</span>
                  <span>Runs Large</span>
                </div>
                <div className="w-full bg-[#18181c] border border-[#242429] h-2 relative">
                  <div
                    className={`absolute top-0 bottom-0 w-8 bg-[#c9a96e] ${
                      product.fitIndicator === 'Runs Small'
                        ? 'left-4'
                        : product.fitIndicator === 'Runs Large'
                        ? 'right-4'
                        : 'left-1/2 -translate-x-1/2'
                    }`}
                  />
                </div>
                <div className="text-[10px] text-[#8e8e98] text-center pt-1">
                  Recommendation: <strong className="text-[#f4f4f6]">{product.recommended}</strong>
                </div>
              </div>
              )}
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: TECHNICAL SPECIFICATIONS GRID & REVIEWS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 pt-16">
          
          {/* TECHNICAL SPECIFICATIONS (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="border-b border-[#242429] pb-4">
              <span className="text-[10px] text-[#c9a96e] uppercase tracking-wider font-bold block mb-1">
                ARCHITECTURAL BREAKDOWN
              </span>
              <h3 className="text-2xl font-bold uppercase text-[#f4f4f6]">
                TECHNICAL SPECIFICATIONS
              </h3>
            </div>

            <div className="bg-[#121215] border border-[#242429] divide-y divide-[#242429] text-xs shadow-xl">
              <div className="p-3.5 flex justify-between">
                <span className="text-[#c9a96e] uppercase font-bold">UPPER</span>
                <span className="text-[#f4f4f6] font-semibold text-right max-w-xs">
                  {product.upper}
                </span>
              </div>
              <div className="p-3.5 flex justify-between">
                <span className="text-[#c9a96e] uppercase font-bold">SOLE & CHASSIS</span>
                <span className="text-[#f4f4f6] font-semibold text-right max-w-xs">
                  {product.sole}
                </span>
              </div>
              <div className="p-3.5 flex justify-between">
                <span className="text-[#c9a96e] uppercase font-bold">CLOSURE</span>
                <span className="text-[#f4f4f6] font-semibold">{product.closure}</span>
              </div>
              <div className="p-3.5 flex justify-between">
                <span className="text-[#c9a96e] uppercase font-bold">PRIMARY USE</span>
                <span className="text-[#f4f4f6] font-semibold">{product.use}</span>
              </div>
              <div className="p-3.5 flex justify-between">
                <span className="text-[#c9a96e] uppercase font-bold">WEIGHT</span>
                <span className="text-[#f4f4f6] font-semibold">{product.weight} per half-pair</span>
              </div>
              <div className="p-3.5 flex justify-between">
                <span className="text-[#c9a96e] uppercase font-bold">WATER RESISTANCE</span>
                <span className="text-[#f4f4f6] font-semibold">{product.waterResistance}</span>
              </div>
              <div className="p-3.5 flex justify-between">
                <span className="text-[#c9a96e] uppercase font-bold">PROVENANCE</span>
                <span className="text-[#f4f4f6] font-semibold">{product.countryOfOrigin}</span>
              </div>
              <div className="p-3.5 flex justify-between">
                <span className="text-[#c9a96e] uppercase font-bold">WARRANTY</span>
                <span className="text-[#f4f4f6] font-semibold">{product.warranty}</span>
              </div>
            </div>

            <div className="p-5 bg-[#121215] border border-[#242429] space-y-2">
              <span className="text-[10px] text-[#c9a96e] uppercase font-bold block">
                ATELIER MANIFESTO STATEMENT
              </span>
              <p className="text-xs text-[#8e8e98] leading-relaxed">{product.description}</p>
            </div>
          </div>

          {/* CUSTOMER REVIEWS & PHOTOS (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-end justify-between border-b border-[#242429] pb-4">
              <div>
                <span className="text-[10px] text-[#c9a96e] uppercase tracking-wider font-bold block mb-1">
                  VERIFIED CLIENT DOSSIERS
                </span>
                <h3 className="text-2xl font-bold uppercase text-[#f4f4f6]">
                  CUSTOMER REVIEWS ({reviews.length})
                </h3>
              </div>
              <button
                onClick={() => setShowReviewForm(!showReviewForm)}
                className="bg-[#f4f4f6] text-[#09090b] px-4 py-2 text-[10px] font-bold uppercase tracking-wider hover:bg-[#c9a96e] transition-colors cursor-pointer"
              >
                {showReviewForm ? 'CANCEL' : 'WRITE A REVIEW'}
              </button>
            </div>

            {/* Review Breakdown Scores */}
            <div className="grid grid-cols-4 gap-2 bg-[#121215] border border-[#242429] p-4 text-center text-[10px]">
              <div>
                <span className="text-[#c9a96e] block">COMFORT</span>
                <strong className="text-sm text-[#f4f4f6] block">5.0 / 5.0</strong>
              </div>
              <div>
                <span className="text-[#c9a96e] block">FIT ACCURACY</span>
                <strong className="text-sm text-[#f4f4f6] block">4.9 / 5.0</strong>
              </div>
              <div>
                <span className="text-[#c9a96e] block">MATERIAL QUALITY</span>
                <strong className="text-sm text-[#f4f4f6] block">5.0 / 5.0</strong>
              </div>
              <div>
                <span className="text-[#c9a96e] block">DESIGN PRECISION</span>
                <strong className="text-sm text-[#f4f4f6] block">5.0 / 5.0</strong>
              </div>
            </div>

            {/* Write Review Form */}
            {showReviewForm && (
              <form onSubmit={handleAddReview} className="bg-[#121215] border border-[#242429] p-5 space-y-4 text-xs">
                <div className="font-bold text-[#f4f4f6] uppercase">SUBMIT ARCHITECTURAL REVIEW</div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-[#8e8e98] uppercase">YOUR NAME / TITLE:</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Liam T. // Designer"
                    value={newReviewAuthor}
                    onChange={(e) => setNewReviewAuthor(e.target.value)}
                    className="w-full bg-[#18181c] border border-[#242429] px-3 py-2 text-[#f4f4f6] placeholder:text-[#52525b] focus:outline-none focus:border-[#8e8e98] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#8e8e98] uppercase">OVERALL RATING:</label>
                    <select
                      value={newReviewRating}
                      onChange={(e) => setNewReviewRating(Number(e.target.value))}
                      className="w-full bg-[#18181c] border border-[#242429] px-3 py-2 text-[#f4f4f6] focus:outline-none cursor-pointer"
                    >
                      <option value={5}>⭐⭐⭐⭐⭐ (5 - Exceptional)</option>
                      <option value={4}>⭐⭐⭐⭐ (4 - Very Good)</option>
                      <option value={3}>⭐⭐⭐ (3 - Average)</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#8e8e98] uppercase">FIT FEEDBACK:</label>
                    <select
                      value={newReviewFit}
                      onChange={(e) => setNewReviewFit(e.target.value as any)}
                      className="w-full bg-[#18181c] border border-[#242429] px-3 py-2 text-[#f4f4f6] focus:outline-none cursor-pointer"
                    >
                      <option value="True to Size">True to Size</option>
                      <option value="Runs Small">Runs Small</option>
                      <option value="Runs Large">Runs Large</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-[#8e8e98] uppercase">ASSESSMENT COMMENTS:</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Share feedback on leather contouring, cushioning, and durability..."
                    value={newReviewComment}
                    onChange={(e) => setNewReviewComment(e.target.value)}
                    className="w-full bg-[#18181c] border border-[#242429] px-3 py-2 text-[#f4f4f6] placeholder:text-[#52525b] focus:outline-none focus:border-[#8e8e98] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#f4f4f6] text-[#09090b] px-5 py-2.5 font-bold uppercase tracking-wider hover:bg-[#c9a96e] transition-colors cursor-pointer"
                >
                  PUBLISH REVIEW
                </button>
              </form>
            )}

            {/* Reviews List */}
            <div className="space-y-4">
              {reviews.map((r) => (
                <div
                  key={r.id}
                  className="bg-[#121215] border border-[#242429] p-5 space-y-3"
                >
                  <div className="flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#f4f4f6] uppercase">{r.author}</span>
                      {r.verifiedBuyer && (
                        <span className="bg-[#18181c] border border-[#242429] px-1.5 py-0.5 text-[#c9a96e] font-bold">
                          ✓ VERIFIED CLIENT
                        </span>
                      )}
                    </div>
                    <span className="text-[#8e8e98]">{r.date}</span>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] text-[#f4f4f6]">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#c9a96e] text-[#c9a96e]" />
                    ))}
                    <span className="text-[10px] text-[#c9a96e] ml-2">
                      FIT: {r.fitFeedback.toUpperCase()}
                    </span>
                  </div>

                  <h5 className="font-bold text-xs uppercase text-[#f4f4f6]">{r.title}</h5>
                  <p className="text-xs text-[#8e8e98] leading-relaxed">{r.comment}</p>

                  {r.photos && r.photos.length > 0 && (
                    <div className="flex gap-2 pt-1">
                      {r.photos.map((ph, idx) => (
                        <div
                          key={idx}
                          className="w-16 h-16 border border-[#242429] overflow-hidden bg-[#09090b]"
                        >
                          <img
                            src={ph}
                            alt="Customer review photo"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-2 pt-2 text-[10px] text-[#8e8e98]">
                    <button className="flex items-center gap-1 hover:text-[#f4f4f6] cursor-pointer transition-colors">
                      <ThumbsUp className="w-3 h-3" />
                      <span>Helpful ({r.helpfulCount})</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
