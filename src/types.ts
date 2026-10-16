export interface CartItem {
  id: string;
  code: string;
  name: string;
  edition: string;
  price: number;
  mrp?: number;
  discountPercent?: number;
  brand?: string;
  image: string;
  colorway: string;
  specification: string; // e.g. "Size 9" or "US 10 / EU 44"
  availableSizes: string[];
  allocationStatus: string;
  quantity: number;
  productId?: string;
  selectedColor?: string;
  selectedSize?: string;
  isOutOfStock?: boolean;
}

export interface Address {
  id: string;
  name: string;
  isPrimary?: boolean;
  tag?: string;
  line1: string;
  line2?: string;
  city: string;
  state?: string;
  postalCode: string;
  country: string;
  phone?: string;
}

export type PaymentMethod = 'CARD' | 'COD';

export interface CheckoutState {
  currentStep: number; // 1 to 5
  selectedAddressId: string;
  paymentMethod: PaymentMethod;
  selectedBank?: string;
  selectedWallet?: string;
  couponCode?: string;
  discountAmount?: number;
  pincodeChecked?: boolean;
  pincodeDeliveryEstimate?: string;
}

export interface WishlistItem {
  id: string;
  code: string;
  name: string;
  brand?: string;
  price: number;
  mrp?: number;
  image: string;
  colorway: string;
  specification: string;
  rating?: number;
  availableSizes?: string[];
  productId?: string;
}

export interface ArchiveSpecimen {
  id: string;
  code: string;
  specCode: string;
  name: string;
  year: string;
  era: string;
  badge: 'VAULTED' | 'MUSEUM PIECE' | 'PROTOTYPE' | 'DECOMMISSIONED';
  badgeColor?: string;
  description: string;
  composition: string;
  outsoleOrChassis: string;
  image: string;
  dimensions?: string;
  weight?: string;
  materialDetails?: string;
  unitsMade?: number;
  price?: number;
}

export interface MaterialDossierItem {
  layerId: string;
  code: string;
  name: string;
  title: string;
  description: string;
  tensileStrength: string;
  tensileVal: number; // 0-100%
  elasticModulus: string;
  elasticVal: number; // 0-100%
  thermalExpansion: string;
}

// ----------------------------------------------------
// FULL E-COMMERCE STRUCTURE TYPES
// ----------------------------------------------------

export interface ProductImagesByAngle {
  front: string;
  side?: string;
  back?: string;
  top?: string;
  sole?: string;
  lifestyle?: string;
  onFeet?: string;
}

export interface ProductColorVariant {
  name: string;
  hex: string;
  images: ProductImagesByAngle;
}

export interface SizeStock {
  size: string; // e.g. "6", "7", "8", "9", "10", "11", "12"
  stock: number;
  sku: string;
}

export interface ReviewItem {
  id: string;
  productId: string;
  author: string;
  avatar?: string;
  rating: number; // 1-5
  verifiedBuyer: boolean;
  date: string;
  title: string;
  comment: string;
  fitFeedback: 'Runs Small' | 'True to Size' | 'Runs Large';
  comfortRating: number; // 1-5
  fitRating: number; // 1-5
  qualityRating: number; // 1-5
  designRating: number; // 1-5
  photos?: string[];
  helpfulCount: number;
}

export interface ShoeProduct {
  id: string;
  sku: string;
  code: string;
  sourceProductId?: string;
  sourceProductUrl?: string;
  sourceUrl?: string;
  sourceStore?: string;
  sourceCategory?: string;
  sourceTags?: string[];
  sourceSku?: string;
  shortDescription?: string;
  productImages?: string[];
  color?: string;
  features?: string[];
  sizeSystem?: string;
  inventoryCountsAreExact?: boolean;
  tags?: string[];
  model?: string;
  source?: string;
  currency?: string;
  sourceMrp?: number;
  sourcePrice?: number;
  sourceSizes?: string[];
  sourceCurrency?: string;
  sourceImageUrl?: string;
  verifiedAt?: string;
  exchangeRateDate?: string;
  sourceProductName?: string;
  sourceAvailability?: string;
  exchangeRateUSDToINR?: number;
  retailerProductGroupId?: string;
  name: string;
  brand: string; // e.g. 'VANTA ATELIER', 'NIKE', 'ADIDAS', 'PUMA', 'NEW BALANCE', 'CONVERSE', 'VANS', 'SALOMON'
  category: 'Sneakers' | 'Running' | 'Walking' | 'Football' | 'Basketball' | 'Training' | 'Formal Shoes' | 'Casual Shoes' | 'Sandals' | 'Slippers' | 'Boots';
  gender: 'Men' | 'Women' | 'Kids' | 'Unisex';
  sport?: 'Running' | 'Walking' | 'Football' | 'Basketball' | 'Training' | 'Lifestyle' | 'Skateboarding';
  collections: string[]; // e.g. ['New Drops', 'Limited Edition', 'Streetwear', 'Premium Sneakers', 'Trending Now', 'Running Collection', 'Retro Collection']
  
  price: number;
  mrp: number;
  discountPercent: number; // calculated or preset
  
  rating: number;
  reviewsCount: number;
  
  colors: ProductColorVariant[];
  sizeInventory: Record<string, SizeStock[]>; // Key is color name
  
  // Specifications
  upper: string;
  sole: string;
  closure: string;
  fitType: 'Regular Fit' | 'Narrow Fit' | 'Wide Fit' | 'Not specified';
  occasion: string;
  use: string;
  weight: string;
  waterResistance: 'Yes' | 'No' | 'Water Repellent' | 'Not specified';
  countryOfOrigin: string;
  warranty: string;
  description: string;
  
  // Review-based indicators
  fitIndicator: 'Runs Small' | 'True to Size' | 'Runs Large' | 'Not specified';
  comfortScore: number | null; // out of 5
  width: 'Narrow' | 'Medium' | 'Wide' | 'Not specified';
  recommended: string;
  
  isNewArrival?: boolean;
  isSale?: boolean;
  isLimitedDrop?: boolean;
  dropTimeLeftSeconds?: number;
}

export interface OrderItem {
  productId: string;
  sku: string;
  name: string;
  brand: string;
  color: string;
  size: string;
  sizeSystem?: string;
  price: number;
  quantity: number;
  image: string;
}

export interface OrderTimelineStep {
  status: 'Order Placed' | 'Confirmed' | 'Packed' | 'Shipped' | 'Out for Delivery' | 'Delivered';
  date: string;
  time: string;
  description: string;
  completed: boolean;
  current?: boolean;
}

export interface Order {
  id: string; // e.g. #VN-10245 or #SH10245
  date: string;
  items: OrderItem[];
  subtotal?: number;
  discount?: number;
  couponCode?: string;
  shipping?: number;
  total: number;
  paymentAmount?: number;
  shippingAddress: Address;
  paymentMethod: string;
  currency?: string;
  exchangeRate?: number;
  paymentStatus: 'PAID' | 'COD' | 'PENDING' | 'FAILED' | 'REFUNDED' | 'Paid' | 'Pending';
  orderStatus: 'Order Placed' | 'Confirmed' | 'Packed' | 'Shipped' | 'Out for Delivery' | 'Delivered' | 'Cancelled';
  expectedDelivery: string;
  estimatedDeliveryMin?: string;
  estimatedDeliveryMax?: string;
  deliveryDaysMin?: number;
  deliveryDaysMax?: number;
  trackingNumber: string;
  carrier: string;
  timeline: OrderTimelineStep[];
}

export interface ExchangeReturnRequest {
  id: string;
  orderId: string;
  type: 'EXCHANGE' | 'RETURN';
  productId: string;
  productName: string;
  productImage: string;
  currentSize: string;
  requestedSize?: string;
  reason: string;
  date: string;
  status: 'Pending' | 'Approved' | 'Rejected' | 'Pickup Scheduled' | 'Completed';
  adminNotes?: string;
}

export interface SneakerDrop {
  id: string;
  productId: string;
  productName: string;
  brand: string;
  edition: string;
  image: string;
  price: number;
  mrp: number;
  launchDate: string; // e.g. "2026-08-25"
  launchTime: string; // e.g. "10:00 AM"
  stock: number;
  status: 'Scheduled' | 'Active' | 'Paused' | 'Completed';
  targetTimestamp: number; // Unix epoch ms
  notifySubscribers: string[];
}

export interface Coupon {
  code: string;
  discountPercent: number;
  minOrderValue: number;
  maxDiscount?: number;
  description: string;
  isActive: boolean;
}

export interface CustomerItem {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  tier: string;
  lifetimeOrders: number;
  totalSpent: number;
  status: 'VERIFIED' | 'VIP' | 'SUSPENDED';
  memberSince: string;
  addresses?: Address[];
}

export interface AdminNotification {
  id: string;
  type: 'ORDER' | 'STOCK' | 'EXCHANGE' | 'REVIEW' | 'DROP' | 'SECURITY';
  title: string;
  detail: string;
  time: string;
  read: boolean;
  targetSection?: string;
  targetId?: string;
}

export interface BannerItem {
  id: string;
  title: string;
  subtitle: string;
  linkText: string;
  linkUrl: string;
  isActive: boolean;
  type: 'ANNOUNCEMENT' | 'HERO' | 'PROMO';
}

export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  productCount: number;
  isActive: boolean;
}

export interface BrandItem {
  id: string;
  name: string;
  country: string;
  description: string;
  productCount: number;
  isActive: boolean;
}

export interface CollectionItem {
  id: string;
  name: string;
  tagline: string;
  productCount: number;
  status: 'ACTIVE' | 'UPCOMING' | 'ARCHIVED';
  image?: string;
}

export type NavSection =
  | 'HOME'
  | 'SHOP'
  | 'COLLECTIONS'
  | 'ARCHIVES'
  | 'NEW DROPS'
  | 'ABOUT'
  | 'BAG'
  | 'PRODUCT_DETAILS'
  | 'COMPARE'
  | 'MY_ORDERS'
  | 'ORDER_TRACKING'
  | 'ORDER_SUCCESS'
  | 'RETURNS_EXCHANGES'
  | 'ADMIN'
  | 'ADMIN_LOGIN'
  | 'SIZE_GUIDE'
  | 'LOGIN';
