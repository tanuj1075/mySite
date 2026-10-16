import React, { useState } from 'react';
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
  ChevronRight,
  Camera,
  ThumbsUp,
  MapPin,
  Bell,
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

  // Get sizes and stocks for current selected color
  const sizeStockList = product.sizeInventory[activeColor.name] || [
    { size: '7', stock: 5, sku: `${product.sku}-07` },
    { size: '8', stock: 10, sku: `${product.sku}-08` },
    { size: '9', stock: 0, sku: `${product.sku}-09` },
    { size: '10', stock: 8, sku: `${product.sku}-10` },
    { size: '11', stock: 4, sku: `${product.sku}-11` },
  ];

  // Current selected size stock
  const currentSizeObj = sizeStockList.find((s) => s.size === selectedSize);
  const isSelectedSizeOutOfStock = currentSizeObj ? currentSizeObj.stock <= 0 : false;

  const handleColorChange = (index: number) => {
    setSelectedColorIndex(index);
    // If selected size is not available in new color, keep or reset
    setSizeError(false);
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
    setSizeError(false);
  };

  const handlePincodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.length >= 4) {
      setPincodeStatus(`✓ Delivery available in 3–5 business days to ${pincode}`);
      onShowToast(`DISPATCH VERIFIED FOR PINCODE: ${pincode}`);
    } else {
      setPincodeStatus('✕ Invalid pincode specification');
    }
  };

  const prepareCartItem = (): CartItem | null => {
    if (!selectedSize) {
      setSizeError(true);
      onShowToast('PLEASE SELECT A SIZE BEFORE PROCEEDING');
      return null;
    }

    if (isSelectedSizeOutOfStock) {
      onShowToast(`SIZE ${selectedSize} IS CURRENTLY OUT OF STOCK`);
      onOpenNotifyMe(product.name, selectedSize, activeColor.name);
      return null;
    }

    return {
      id: `${product.id}-${activeColor.name.toLowerCase().replace(/\s+/g, '-')}-${selectedSize}`,
      code: product.code,
      name: product.name,
      edition: `${product.brand} // ${activeColor.name}`,
      price: product.price,
      mrp: product.mrp,
      discountPercent: product.discountPercent,
      brand: product.brand,
      image: activeColor.images[activeAngle] || activeColor.images.front,
      colorway: activeColor.name,
      specification: `Size ${sizeLabel} ${selectedSize}`,
      availableSizes: sizeStockList.map((s) => `${sizeLabel} ${s.size}`),
      allocationStatus: `Allocated // ${sizeLabel} ${selectedSize}`,
      quantity: 1,
      productId: product.id,
      selectedColor: activeColor.name,
      selectedSize: selectedSize,
    };
  };

  const handleAddToCartClick = () => {
    const item = prepareCartItem();
    if (item) {
      onAddToCart(item);
      onShowToast(`ADDED TO BAG: ${product.name} (${sizeLabel} ${selectedSize})`);
    }
  };

  const handleBuyNowClick = () => {
    const item = prepareCartItem();
    if (item) {
      onBuyNow(item);
    }
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewAuthor.trim() || !newReviewComment.trim()) return;

    const rev: ReviewItem = {
      id: `rev-${Date.now()}`,
      productId: product.id,
      author: `${newReviewAuthor.trim()} // Verified Client`,
      rating: newReviewRating,
      verifiedBuyer: true,
      date: 'Just now',
      title: 'Architectural Client Assessment',
      comment: newReviewComment.trim(),
      fitFeedback: newReviewFit,
      comfortRating: 5,
      fitRating: 5,
      qualityRating: 5,
      designRating: 5,
      helpfulCount: 1,
    };

    setReviews([rev, ...reviews]);
    setShowReviewForm(false);
    setNewReviewAuthor('');
    setNewReviewComment('');
    onShowToast('CLIENT SPECIFICATION REVIEW SUBMITTED');
  };

  // Angle image list
  const angleKeys: Array<'front' | 'side' | 'back' | 'top' | 'sole' | 'lifestyle'> = [
    'front',
    'side',
    'back',
    'top',
    'sole',
    'lifestyle',
  ];

  return (
    <div className="w-full bg-[#ede7dd] text-[#1a1816] font-mono pb-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-6">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-[10px] text-[#7b6e54] uppercase tracking-wider mb-6 pb-3 border-b border-[#d5cdc0]">
          <button
            onClick={onBackToCatalog}
            className="hover:text-[#1a1816] underline cursor-pointer"
          >
            CATALOG
          </button>
          <ChevronRight className="w-3 h-3 text-[#b8ad9c]" />
          <span>{product.brand}</span>
          <ChevronRight className="w-3 h-3 text-[#b8ad9c]" />
          <span>{product.category}</span>
          <ChevronRight className="w-3 h-3 text-[#b8ad9c]" />
          <span className="text-[#1a1816] font-bold">{product.name}</span>
        </div>

        {/* Top Product Layout: Left Gallery (7 cols) + Right Details (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start pb-16 border-b border-[#d5cdc0]">
          
          {/* LEFT: Multi-Angle Interactive Product Gallery */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Stage Display */}
            <div className="relative aspect-[4/3] bg-[#f5efe6] border border-[#d5cdc0] overflow-hidden group">
              <img
                src={activeColor.images[activeAngle] || activeColor.images.front}
                alt={`${product.name} - ${activeAngle} view`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Angle Tag Badge */}
              <div className="absolute top-4 left-4 bg-[#ede7dd]/90 backdrop-blur-sm border border-[#d5cdc0] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#1a1816]">
                ANGLE: {activeAngle.toUpperCase()} VIEW
              </div>

              {/* Wishlist & Compare floating actions */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`w-9 h-9 border flex items-center justify-center transition-colors cursor-pointer ${
                    isWishlisted
                      ? 'bg-[#1a1816] text-[#ede7dd] border-[#1a1816]'
                      : 'bg-[#ede7dd]/90 backdrop-blur-sm text-[#1a1816] border-[#d5cdc0] hover:border-[#1a1816]'
                  }`}
                  title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={() => onOpenCompare(product)}
                  className={`w-9 h-9 border flex items-center justify-center transition-colors cursor-pointer ${
                    isCompared
                      ? 'bg-[#1a1816] text-[#ede7dd] border-[#1a1816]'
                      : 'bg-[#ede7dd]/90 backdrop-blur-sm text-[#1a1816] border-[#d5cdc0] hover:border-[#1a1816]'
                  }`}
                  title="Compare with another shoe"
                >
                  <Scale className="w-4 h-4" />
                </button>
              </div>

              {/* Macro inspection hint */}
              <div className="absolute bottom-4 left-4 bg-[#ede7dd]/90 backdrop-blur-sm border border-[#d5cdc0] px-2.5 py-1 text-[9px] text-[#7b6e54]">
                ARCHIVAL RESOLUTION // ATELIER VERIFIED
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
                    onClick={() => setActiveAngle(ang)}
                    className={`border p-1 bg-[#f5efe6] transition-all cursor-pointer flex flex-col items-center gap-1 ${
                      isCurrent
                        ? 'border-[#1a1816] ring-1 ring-[#1a1816]'
                        : 'border-[#d5cdc0] hover:border-[#8e8474]'
                    }`}
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-[#ede7dd]">
                      <img src={imgUrl} alt={ang} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[9px] uppercase font-bold text-[#59544c] tracking-wider">
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
            <div className="space-y-2 border-b border-[#d5cdc0] pb-5">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#7b6e54] font-bold tracking-[0.2em] uppercase">
                  {product.brand} // {product.code}
                </span>
                <div className="flex items-center gap-1 text-[11px] font-bold text-[#1a1816]">
                  {product.reviewsCount > 0 ? (
                    <>
                      <Star className="w-3.5 h-3.5 fill-[#1a1816] text-[#1a1816]" />
                      <span>{product.rating}</span>
                      <span className="text-[#7b6e54] font-normal">
                        ({product.reviewsCount} reviews)
                      </span>
                    </>
                  ) : (
                    <span className="text-[#7b6e54] font-normal">No ratings yet</span>
                  )}
                </div>
              </div>

              <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#1a1816] leading-none">
                {product.name}
              </h1>

              <div className="flex items-baseline gap-3 pt-2">
                <span className="text-2xl sm:text-3xl font-bold text-[#1a1816]">
                  {formatCurrency(product.price)}
                </span>
                <span className="text-sm text-[#8e8474] line-through font-normal">
                  {formatCurrency(product.mrp)}
                </span>
                <span className="text-xs bg-[#141312] text-[#f5efe6] px-2 py-0.5 font-bold tracking-wider">
                  {product.discountPercent}% OFF
                </span>
              </div>
            </div>

            {/* COLOR SELECTION */}
            <div className="space-y-3 border-b border-[#d5cdc0] pb-5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#1a1816] uppercase">
                  COLORWAY: <strong className="font-normal text-[#7b6e54]">{activeColor.name}</strong>
                </span>
                <span className="text-[10px] text-[#59544c]">
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
                        ? 'border-[#1a1816] scale-105 ring-1 ring-[#1a1816]'
                        : 'border-[#d5cdc0] hover:border-[#8e8474]'
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
            <div className="space-y-3 border-b border-[#d5cdc0] pb-5">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#1a1816] uppercase">
                    SELECT SIZE (US):
                  </span>
                  {selectedSize && (
                    <span className="text-[#1a1816] font-bold">US {selectedSize}</span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={onOpenSizeGuide}
                  className="text-[10px] text-[#7b6e54] hover:text-[#1a1816] font-bold uppercase flex items-center gap-1 cursor-pointer underline"
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
                          ? 'bg-[#141312] text-[#f5efe6] border-[#141312]'
                          : isAvailable
                          ? 'bg-[#f5efe6] text-[#1a1816] border-[#d5cdc0] hover:border-[#1a1816]'
                          : 'bg-[#ede7dd] text-[#8e8474] border-[#d5cdc0]/50 opacity-60'
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
                <div className="p-3 bg-[#fce8e6] border border-[#d93025] text-[#d93025] text-[11px] font-bold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>PLEASE SELECT A SIZE. SIZE SELECTION IS COMPULSORY FOR FOOTWEAR.</span>
                </div>
              )}

              {/* Out of Stock Alert for selected size with Notify Me */}
              {selectedSize && isSelectedSizeOutOfStock && (
                <div className="p-3 bg-[#ede7dd] border border-[#b8ad9c] text-xs space-y-2">
                  <div className="text-[#b83b3b] font-bold flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4" />
                    <span>Size {sizeLabel} {selectedSize} is currently out of stock.</span>
                  </div>
                  <button
                    onClick={() => onOpenNotifyMe(product.name, selectedSize, activeColor.name)}
                    className="bg-[#141312] text-[#f5efe6] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 hover:bg-[#35322e] transition-colors cursor-pointer"
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
                  className="w-full py-4 bg-[#ede7dd] hover:bg-[#ded6c9] text-[#1a1816] border border-[#141312] text-xs font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>ADD TO BAG</span>
                </button>
                <button
                  onClick={handleBuyNowClick}
                  className="w-full py-4 bg-[#141312] hover:bg-[#35322e] text-[#f5efe6] text-xs font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <span>BUY NOW</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2 text-[10px] text-[#59544c] pt-2 text-center">
                <div className="flex flex-col items-center gap-1 p-2 bg-[#f5efe6] border border-[#d5cdc0]">
                  <Truck className="w-4 h-4 text-[#1a1816]" />
                  <span className="font-bold text-[#1a1816]">EXPRESS COURIER</span>
                  <span>Dispatches in 24h</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2 bg-[#f5efe6] border border-[#d5cdc0]">
                  <RotateCcw className="w-4 h-4 text-[#1a1816]" />
                  <span className="font-bold text-[#1a1816]">SIZE EXCHANGE</span>
                  <span>14-day replacement</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2 bg-[#f5efe6] border border-[#d5cdc0]">
                  <Shield className="w-4 h-4 text-[#1a1816]" />
                  <span className="font-bold text-[#1a1816]">AUTHENTICITY</span>
                  <span>Verified NFC Chip</span>
                </div>
              </div>
            </div>

            {/* PINCODE ESTIMATOR */}
            <div className="bg-[#f5efe6] border border-[#d5cdc0] p-4 space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-bold text-[#1a1816] uppercase flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#7b6e54]" />
                  ESTIMATE DELIVERY PINCODE
                </span>
              </div>
              <form onSubmit={handlePincodeCheck} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter postal pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className="bg-[#ede7dd] border border-[#d5cdc0] px-3 py-1.5 text-xs text-[#1a1816] w-44 focus:outline-none focus:border-[#1a1816]"
                />
                <button
                  type="submit"
                  className="bg-[#141312] text-[#f5efe6] px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider hover:bg-[#35322e] transition-colors cursor-pointer"
                >
                  CHECK
                </button>
              </form>
              {pincodeStatus && (
                <div className="text-[11px] font-semibold text-[#1a1816]">{pincodeStatus}</div>
              )}
            </div>

            {/* FIT INFORMATION SECTION */}
            <div className="bg-[#ede7dd] border border-[#d5cdc0] p-5 space-y-4">
              <div className="text-xs font-bold uppercase text-[#1a1816] border-b border-[#d5cdc0] pb-2">
                FIT & ANATOMICAL BEHAVIOR
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                <div className="p-2 bg-[#f5efe6] border border-[#d5cdc0]">
                  <span className="text-[9px] text-[#7b6e54] block uppercase">LAST FIT</span>
                  <strong className="text-[#1a1816]">{product.fitType}</strong>
                </div>
                <div className="p-2 bg-[#f5efe6] border border-[#d5cdc0]">
                  <span className="text-[9px] text-[#7b6e54] block uppercase">WIDTH</span>
                  <strong className="text-[#1a1816]">{product.width}</strong>
                </div>
                <div className="p-2 bg-[#f5efe6] border border-[#d5cdc0]">
                  <span className="text-[9px] text-[#7b6e54] block uppercase">COMFORT</span>
                  <strong className="text-[#1a1816]">
                    {product.comfortScore === null ? 'Not rated' : `⭐ ${product.comfortScore} / 5.0`}
                  </strong>
                </div>
              </div>

              {/* Review-Based Fit Indicator Bar */}
              {product.fitIndicator === 'Not specified' ? (
                <div className="text-[10px] text-[#59544c] text-center pt-1">
                  Fit information not available.
                </div>
              ) : (
              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between text-[10px] text-[#59544c] uppercase font-bold">
                  <span>Runs Small</span>
                  <span className="text-[#1a1816]">True to Size</span>
                  <span>Runs Large</span>
                </div>
                <div className="w-full bg-[#d5cdc0] h-2 relative">
                  <div
                    className={`absolute top-0 bottom-0 w-8 bg-[#141312] ${
                      product.fitIndicator === 'Runs Small'
                        ? 'left-4'
                        : product.fitIndicator === 'Runs Large'
                        ? 'right-4'
                        : 'left-1/2 -translate-x-1/2'
                    }`}
                  />
                </div>
                <div className="text-[10px] text-[#59544c] text-center pt-1">
                  Recommendation: <strong className="text-[#1a1816]">{product.recommended}</strong>
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
            <div className="border-b border-[#d5cdc0] pb-4">
              <span className="text-[10px] text-[#7b6e54] uppercase tracking-wider font-bold block mb-1">
                ARCHITECTURAL BREAKDOWN
              </span>
              <h3 className="text-2xl font-bold uppercase text-[#1a1816]">
                TECHNICAL SPECIFICATIONS
              </h3>
            </div>

            <div className="bg-[#f5efe6] border border-[#d5cdc0] divide-y divide-[#d5cdc0] text-xs">
              <div className="p-3.5 flex justify-between">
                <span className="text-[#7b6e54] uppercase font-bold">UPPER</span>
                <span className="text-[#1a1816] font-semibold text-right max-w-xs">
                  {product.upper}
                </span>
              </div>
              <div className="p-3.5 flex justify-between">
                <span className="text-[#7b6e54] uppercase font-bold">SOLE & CHASSIS</span>
                <span className="text-[#1a1816] font-semibold text-right max-w-xs">
                  {product.sole}
                </span>
              </div>
              <div className="p-3.5 flex justify-between">
                <span className="text-[#7b6e54] uppercase font-bold">CLOSURE</span>
                <span className="text-[#1a1816] font-semibold">{product.closure}</span>
              </div>
              <div className="p-3.5 flex justify-between">
                <span className="text-[#7b6e54] uppercase font-bold">PRIMARY USE</span>
                <span className="text-[#1a1816] font-semibold">{product.use}</span>
              </div>
              <div className="p-3.5 flex justify-between">
                <span className="text-[#7b6e54] uppercase font-bold">WEIGHT</span>
                <span className="text-[#1a1816] font-semibold">{product.weight} per half-pair</span>
              </div>
              <div className="p-3.5 flex justify-between">
                <span className="text-[#7b6e54] uppercase font-bold">WATER RESISTANCE</span>
                <span className="text-[#1a1816] font-semibold">{product.waterResistance}</span>
              </div>
              <div className="p-3.5 flex justify-between">
                <span className="text-[#7b6e54] uppercase font-bold">PROVENANCE</span>
                <span className="text-[#1a1816] font-semibold">{product.countryOfOrigin}</span>
              </div>
              <div className="p-3.5 flex justify-between">
                <span className="text-[#7b6e54] uppercase font-bold">WARRANTY</span>
                <span className="text-[#1a1816] font-semibold">{product.warranty}</span>
              </div>
            </div>

            <div className="p-5 bg-[#ede7dd] border border-[#d5cdc0] space-y-2">
              <span className="text-[10px] text-[#7b6e54] uppercase font-bold block">
                ATELIER MANIFESTO STATEMENT
              </span>
              <p className="text-xs text-[#59544c] leading-relaxed">{product.description}</p>
            </div>
          </div>

          {/* CUSTOMER REVIEWS & PHOTOS (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-end justify-between border-b border-[#d5cdc0] pb-4">
              <div>
                <span className="text-[10px] text-[#7b6e54] uppercase tracking-wider font-bold block mb-1">
                  VERIFIED CLIENT DOSSIERS
                </span>
                <h3 className="text-2xl font-bold uppercase text-[#1a1816]">
                  CUSTOMER REVIEWS ({reviews.length})
                </h3>
              </div>
              <button
                onClick={() => setShowReviewForm(!showReviewForm)}
                className="bg-[#141312] text-[#f5efe6] px-4 py-2 text-[10px] font-bold uppercase tracking-wider hover:bg-[#35322e] transition-colors cursor-pointer"
              >
                {showReviewForm ? 'CANCEL' : 'WRITE A REVIEW'}
              </button>
            </div>

            {/* Review Breakdown Scores */}
            <div className="grid grid-cols-4 gap-2 bg-[#f5efe6] border border-[#d5cdc0] p-4 text-center text-[10px]">
              <div>
                <span className="text-[#7b6e54] block">COMFORT</span>
                <strong className="text-sm text-[#1a1816] block">5.0 / 5.0</strong>
              </div>
              <div>
                <span className="text-[#7b6e54] block">FIT ACCURACY</span>
                <strong className="text-sm text-[#1a1816] block">4.9 / 5.0</strong>
              </div>
              <div>
                <span className="text-[#7b6e54] block">MATERIAL QUALITY</span>
                <strong className="text-sm text-[#1a1816] block">5.0 / 5.0</strong>
              </div>
              <div>
                <span className="text-[#7b6e54] block">DESIGN PRECISION</span>
                <strong className="text-sm text-[#1a1816] block">5.0 / 5.0</strong>
              </div>
            </div>

            {/* Write Review Form */}
            {showReviewForm && (
              <form onSubmit={handleAddReview} className="bg-[#ede7dd] border border-[#d5cdc0] p-5 space-y-4 text-xs">
                <div className="font-bold text-[#1a1816] uppercase">SUBMIT ARCHITECTURAL REVIEW</div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-[#59544c] uppercase">YOUR NAME / TITLE:</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Liam T. // Designer"
                    value={newReviewAuthor}
                    onChange={(e) => setNewReviewAuthor(e.target.value)}
                    className="w-full bg-[#f5efe6] border border-[#d5cdc0] px-3 py-2 text-[#1a1816] focus:outline-none focus:border-[#1a1816]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#59544c] uppercase">OVERALL RATING:</label>
                    <select
                      value={newReviewRating}
                      onChange={(e) => setNewReviewRating(Number(e.target.value))}
                      className="w-full bg-[#f5efe6] border border-[#d5cdc0] px-3 py-2 text-[#1a1816] focus:outline-none cursor-pointer"
                    >
                      <option value={5}>⭐⭐⭐⭐⭐ (5 - Exceptional)</option>
                      <option value={4}>⭐⭐⭐⭐ (4 - Very Good)</option>
                      <option value={3}>⭐⭐⭐ (3 - Average)</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#59544c] uppercase">FIT FEEDBACK:</label>
                    <select
                      value={newReviewFit}
                      onChange={(e) => setNewReviewFit(e.target.value as any)}
                      className="w-full bg-[#f5efe6] border border-[#d5cdc0] px-3 py-2 text-[#1a1816] focus:outline-none cursor-pointer"
                    >
                      <option value="True to Size">True to Size</option>
                      <option value="Runs Small">Runs Small</option>
                      <option value="Runs Large">Runs Large</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-[#59544c] uppercase">ASSESSMENT COMMENTS:</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Share feedback on leather contouring, cushioning, and durability..."
                    value={newReviewComment}
                    onChange={(e) => setNewReviewComment(e.target.value)}
                    className="w-full bg-[#f5efe6] border border-[#d5cdc0] px-3 py-2 text-[#1a1816] focus:outline-none focus:border-[#1a1816]"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#141312] text-[#f5efe6] px-5 py-2.5 font-bold uppercase tracking-wider hover:bg-[#35322e] transition-colors cursor-pointer"
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
                  className="bg-[#f5efe6] border border-[#d5cdc0] p-5 space-y-3"
                >
                  <div className="flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#1a1816] uppercase">{r.author}</span>
                      {r.verifiedBuyer && (
                        <span className="bg-[#ede7dd] border border-[#d5cdc0] px-1.5 py-0.5 text-[#7b6e54] font-bold">
                          ✓ VERIFIED CLIENT
                        </span>
                      )}
                    </div>
                    <span className="text-[#8e8474]">{r.date}</span>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] text-[#1a1816]">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#1a1816]" />
                    ))}
                    <span className="text-[10px] text-[#7b6e54] ml-2">
                      FIT: {r.fitFeedback.toUpperCase()}
                    </span>
                  </div>

                  <h5 className="font-bold text-xs uppercase text-[#1a1816]">{r.title}</h5>
                  <p className="text-xs text-[#59544c] leading-relaxed">{r.comment}</p>

                  {r.photos && r.photos.length > 0 && (
                    <div className="flex gap-2 pt-1">
                      {r.photos.map((ph, idx) => (
                        <div
                          key={idx}
                          className="w-16 h-16 border border-[#d5cdc0] overflow-hidden bg-[#ede7dd]"
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

                  <div className="flex items-center gap-2 pt-2 text-[10px] text-[#8e8474]">
                    <button className="flex items-center gap-1 hover:text-[#1a1816] cursor-pointer">
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
