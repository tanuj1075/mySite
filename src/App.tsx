/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ReservationBanner } from './components/ReservationBanner';
import { CartItemList } from './components/CartItemList';
import { CheckoutProtocol } from './components/CheckoutProtocol';
import { CollectionsView } from './components/CollectionsView';
import { ArchivesView } from './components/ArchivesView';
import { NewDropsView } from './components/NewDropsView';
import { AboutView } from './components/AboutView';
import { ProductListingView } from './components/ProductListingView';
import { ProductDetailsView } from './components/ProductDetailsView';
import { SizeGuideModal } from './components/SizeGuideModal';
import { NotifyMeModal } from './components/NotifyMeModal';
import { CompareModal } from './components/CompareModal';
import { OrderSuccessView } from './components/OrderSuccessView';
import { OrderTrackingView } from './components/OrderTrackingView';
import { ReturnsExchangeModal } from './components/ReturnsExchangeModal';
import { AdminPanelView } from './components/AdminPanelView';
import { SpecimenInspectModal } from './components/SpecimenInspectModal';
import { NewAddressModal } from './components/NewAddressModal';
import { SizeSelectorModal } from './components/SizeSelectorModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { AccountModal } from './components/AccountModal';
import { LoginView } from './components/LoginView';
import { AdminLoginView } from './components/AdminLoginView';
import { Footer } from './components/Footer';
import { adminApi, authApi, clearAdminSession, clearSession, customerApi } from './lib/api';
import { UpiPaymentModal } from './components/UpiPaymentModal';

import { INITIAL_CART_ITEMS, INITIAL_ADDRESSES } from './data/mockData';
import {
  INITIAL_FOOTWEAR_CATALOG,
  INITIAL_ORDERS,
  INITIAL_EXCHANGES,
  INITIAL_DROPS,
  INITIAL_COUPONS,
} from './data/footwearCatalog';
import {
  CartItem,
  Address,
  WishlistItem,
  ArchiveSpecimen,
  NavSection,
  ShoeProduct,
  Order,
  OrderTimelineStep,
  ExchangeReturnRequest,
  SneakerDrop,
  Coupon,
  PaymentMethod,
} from './types';

type AdminRoute = 'login' | 'panel' | null;

function readAdminRoute(): AdminRoute {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  if (pathname === '/admin') return 'panel';
  if (pathname === '/admin/login') return 'login';
  return null;
}

function toOrderRecord(record: Record<string, unknown>): Order {
  const statusMap: Record<string, Order['orderStatus']> = {
    ORDER_PLACED: 'Order Placed',
    CONFIRMED: 'Confirmed',
    PACKED: 'Packed',
    SHIPPED: 'Shipped',
    OUT_FOR_DELIVERY: 'Out for Delivery',
    DELIVERED: 'Delivered',
    CANCELLED: 'Cancelled',
  };
  const items = (record.items as Array<Record<string, unknown>> ?? []).map((item) => {
    const catalog = (item.product as { catalog?: { sizeSystem?: string } } | undefined)?.catalog;
    return {
      productId: String(item.productId),
      sku: String(item.sku),
      name: String(item.name),
      brand: String(item.brand),
      color: String(item.color),
      size: String(item.size),
      sizeSystem: catalog?.sizeSystem ?? 'US',
      price: Number(item.price),
      quantity: Number(item.quantity),
      image: String(item.image),
    };
  });
    const createdDate = new Date(String(record.createdAt ?? Date.now()));
    const estMin = record.estimatedDeliveryMin ? new Date(String(record.estimatedDeliveryMin)) : null;
    const estMax = record.estimatedDeliveryMax ? new Date(String(record.estimatedDeliveryMax)) : null;
    const daysMin = record.deliveryDaysMin ? Number(record.deliveryDaysMin) : null;
    const daysMax = record.deliveryDaysMax ? Number(record.deliveryDaysMax) : null;

    let expectedDelivery = '3–5 business days';
    if (estMin && estMax) {
      const minStr = estMin.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
      const maxStr = estMax.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
      expectedDelivery = `${minStr} – ${maxStr}${daysMin && daysMax ? ` (${daysMin}–${daysMax} business days)` : ''}`;
    }

    const orderStatus = statusMap[String(record.orderStatus)] ?? 'Order Placed';
    const statusOrder: Order['orderStatus'][] = ['Order Placed', 'Confirmed', 'Packed', 'Shipped', 'Out for Delivery', 'Delivered'];
    const currentIdx = statusOrder.indexOf(orderStatus);

    const timeline: OrderTimelineStep[] = [
      {
        status: 'Order Placed',
        date: createdDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
        time: createdDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        description: 'Order placed cryptographically on vault ledger.',
        completed: currentIdx >= 0,
        current: currentIdx === 0,
      },
      {
        status: 'Confirmed',
        date: currentIdx >= 1 ? createdDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : 'Expected',
        time: currentIdx >= 1 ? createdDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--:--',
        description: 'Allocation verified & inventory locked.',
        completed: currentIdx >= 1,
        current: currentIdx === 1,
      },
      {
        status: 'Packed',
        date: currentIdx >= 2 ? createdDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : 'Expected',
        time: currentIdx >= 2 ? '--:--' : '--:--',
        description: 'Hand-inspected, serialized in stasis archive crate.',
        completed: currentIdx >= 2,
        current: currentIdx === 2,
      },
      {
        status: 'Shipped',
        date: currentIdx >= 3 ? createdDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : (estMin ? estMin.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }) : 'Expected'),
        time: currentIdx >= 3 ? '--:--' : '--:--',
        description: `En route with ${String(record.carrier ?? 'VANTA Logistics')} dispatch.`,
        completed: currentIdx >= 3,
        current: currentIdx === 3,
      },
      {
        status: 'Out for Delivery',
        date: currentIdx >= 4 ? createdDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : (estMax ? estMax.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }) : 'Expected'),
        time: '--:--',
        description: 'Local courier dispatch to destination address.',
        completed: currentIdx >= 4,
        current: currentIdx === 4,
      },
      {
        status: 'Delivered',
        date: currentIdx >= 5 ? createdDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : (estMax ? estMax.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : 'Pending'),
        time: '--:--',
        description: 'Signature verified and sealed at delivery.',
        completed: currentIdx >= 5,
        current: currentIdx === 5,
      },
    ];

    return {
      id: String(record.displayId ?? record.id),
      date: createdDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      items,
      subtotal: Number(record.subtotal),
      discount: Number(record.discount),
      couponCode: typeof record.couponCode === 'string' ? record.couponCode : undefined,
      total: Number(record.total),
      paymentAmount: Number(record.paymentAmount ?? record.total),
      shippingAddress: record.addressSnapshot as Address,
      paymentMethod: String(record.paymentMethod),
      currency: String(record.paymentCurrency ?? 'INR'),
      exchangeRate: Number(record.exchangeRate ?? 1),
      paymentStatus: String(record.paymentStatus) as Order['paymentStatus'],
      orderStatus,
      expectedDelivery,
      estimatedDeliveryMin: estMin ? estMin.toISOString() : undefined,
      estimatedDeliveryMax: estMax ? estMax.toISOString() : undefined,
      deliveryDaysMin: daysMin ?? undefined,
      deliveryDaysMax: daysMax ?? undefined,
      trackingNumber: String(record.trackingNumber ?? ''),
      carrier: String(record.carrier ?? 'VANTA Logistics'),
      timeline,
    };
  }

function toExchangeRecord(record: Record<string, unknown>): ExchangeReturnRequest {
  return {
    id: String(record.id),
    orderId: String(record.orderId),
    type: String(record.type) as ExchangeReturnRequest['type'],
    productId: String(record.productId),
    productName: String(record.productName),
    productImage: String(record.productImage),
    currentSize: String(record.currentSize),
    requestedSize: typeof record.requestedSize === 'string' ? record.requestedSize : undefined,
    reason: String(record.reason),
    date: new Date(String(record.createdAt ?? Date.now())).toISOString().slice(0, 10),
    status: String(record.status) as ExchangeReturnRequest['status'],
    adminNotes: typeof record.adminNotes === 'string' ? record.adminNotes : undefined,
  };
}

function toDropRecord(record: Record<string, unknown>): SneakerDrop {
  return {
    id: String(record.id),
    productId: String(record.productId),
    productName: String(record.productName),
    brand: String(record.brand),
    edition: String(record.edition),
    image: String(record.image),
    price: Number(record.price),
    mrp: Number(record.mrp),
    launchDate: String(record.launchDate),
    launchTime: String(record.launchTime),
    stock: Number(record.stock),
    status: String(record.status) as SneakerDrop['status'],
    targetTimestamp: Number(record.targetTimestamp),
    notifySubscribers: Array.isArray(record.notifySubscribers) ? record.notifySubscribers.map(String) : [],
  };
}

function toCouponRecord(record: Record<string, unknown>): Coupon {
  return {
    code: String(record.code),
    discountPercent: Number(record.discountPercent),
    minOrderValue: Number(record.minOrderValue),
    maxDiscount: record.maxDiscount == null ? undefined : Number(record.maxDiscount),
    description: String(record.description),
    isActive: Boolean(record.isActive),
  };
}

export default function App() {
  // Product Catalog State
  const [products, setProducts] = useState<ShoeProduct[]>(INITIAL_FOOTWEAR_CATALOG);
  const [selectedProduct, setSelectedProduct] = useState<ShoeProduct>(INITIAL_FOOTWEAR_CATALOG[0]);
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');
  const [brandFilter, setBrandFilter] = useState<string>('ALL');

  // Primary Cart & Allocations
  const [cartItems, setCartItems] = useState<CartItem[]>(INITIAL_CART_ITEMS);
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [compareList, setCompareList] = useState<ShoeProduct[]>([]);

  // Orders & Post-Purchase State
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);
  const [currentOrder, setCurrentOrder] = useState<Order | null>(INITIAL_ORDERS[0]);
  const [exchanges, setExchanges] = useState<ExchangeReturnRequest[]>(INITIAL_EXCHANGES);
  const [drops, setDrops] = useState<SneakerDrop[]>(INITIAL_DROPS);
  const [coupons, setCoupons] = useState<Coupon[]>(INITIAL_COUPONS);

  // Registered Addresses
  const [addresses, setAddresses] = useState<Address[]>(INITIAL_ADDRESSES);
  const [selectedAddressId, setSelectedAddressId] = useState<string>(
    INITIAL_ADDRESSES[0]?.id || 'addr-default'
  );

  // User Profile State
  const [currentUser, setCurrentUser] = useState<{
    name: string;
    email: string;
    memberId: string;
  } | null>(null);

  // Privileged Admin Authentication State
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(false);
  const [adminRoute, setAdminRoute] = useState<AdminRoute>(() => readAdminRoute());
  const [isAdminSessionLoading, setIsAdminSessionLoading] = useState(() => readAdminRoute() !== null);
  const [adminSessionError, setAdminSessionError] = useState<string | null>(null);
  const [adminSessionAttempt, setAdminSessionAttempt] = useState(0);
  const [adminIdentity, setAdminIdentity] = useState<{
    email: string;
    name: string;
    role: string;
  } | null>(null);

  // Active Navigation Tab: default to 'COLLECTIONS'
  const [activeNav, setActiveNav] = useState<NavSection>('COLLECTIONS');

  // Modal & Drawer States
  const [isNewAddressModalOpen, setIsNewAddressModalOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [isReturnsModalOpen, setIsReturnsModalOpen] = useState(false);
  const [exchangeTargetOrder, setExchangeTargetOrder] = useState<Order | null>(null);
  const [upiPaymentSession, setUpiPaymentSession] = useState<{
    isOpen: boolean;
    orderId: string;
    displayId: string;
    amount: number;
    currency: string;
    upiPaymentUrl: string;
    qrCodeDataUrl: string;
    expiresAt: string;
  } | null>(null);

  // Notify Me Modal
  const [isNotifyMeOpen, setIsNotifyMeOpen] = useState(false);
  const [notifyTarget, setNotifyTarget] = useState<{
    productName: string;
    size?: string;
    color?: string;
  }>({ productName: '' });

  const [sizeSelectorItem, setSizeSelectorItem] = useState<CartItem | null>(null);
  const [inspectingSpecimen, setInspectingSpecimen] = useState<ArchiveSpecimen | null>(null);

  // Status & Notifications
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isOrderSubmitting, setIsOrderSubmitting] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const navigateAdminRoute = (path: string, replace = false) => {
    if (replace) window.history.replaceState({}, '', path);
    else window.history.pushState({}, '', path);
    setAdminRoute(readAdminRoute());
  };

  const restoreCustomerRecords = async (user: { name: string; email: string; memberId: string }) => {
    setCurrentUser(user);
    try {
      const [cart, storedAddresses, storedOrders, storedExchanges, storedWishlist] = await Promise.all([
        customerApi.cart(),
        customerApi.addresses(),
        customerApi.orders(),
        customerApi.exchanges(),
        customerApi.wishlist(),
      ]);
      const restoredCart = cart.items.flatMap((item): CartItem[] => {
        const product = item.product.catalog as ShoeProduct;
        if (!product?.id) return [];
        const color = product.colors?.find((variant) => variant.name === item.color) ?? product.colors?.[0];
        if (!color) return [];
        return [{
          id: item.id,
          productId: item.productId,
          code: product.code,
          name: product.name,
          edition: product.collections?.[0] ?? 'VANTA CATALOG',
          price: product.price,
          mrp: product.mrp,
          brand: product.brand,
          image: color.images.front,
          colorway: item.color,
          specification: item.size,
          selectedColor: item.color,
          selectedSize: item.size,
          availableSizes: product.sizeInventory?.[item.color]?.map((size) => size.size) ?? [],
          allocationStatus: 'Saved to your account',
          quantity: item.quantity,
        }];
      });
      const addresses = storedAddresses.map((address) => ({
        ...address,
        tag: address.tag ?? undefined,
        line2: address.line2 ?? undefined,
        state: address.state ?? undefined,
        phone: address.phone ?? undefined,
      }));
      const orders = storedOrders.map(toOrderRecord);
      setCartItems(restoredCart);
      setAddresses(addresses);
      setSelectedAddressId(addresses[0]?.id ?? '');
      setOrders(orders);
      setCurrentOrder(orders[0] ?? null);
      setExchanges(storedExchanges.map(toExchangeRecord));
      setWishlistItems(storedWishlist.flatMap((entry): WishlistItem[] => {
        const product = (entry.product as { catalog?: ShoeProduct } | undefined)?.catalog;
        if (!product?.id) return [];
        const colorway = String(entry.colorway);
        const color = product.colors?.find((variant) => variant.name === colorway) ?? product.colors?.[0];
        return color ? [{
          id: product.id,
          productId: product.id,
          code: product.code,
          name: product.name,
          brand: product.brand,
          price: product.price,
          mrp: product.mrp,
          image: color.images.front,
          colorway,
          specification: String(entry.specification),
          availableSizes: product.sizeInventory?.[colorway]?.map((size) => size.size) ?? [],
        }] : [];
      }));
    } catch (error) {
      showToast(error instanceof Error ? error.message : 'Could not load saved account records');
    }
  };

  useEffect(() => {
    const handlePopState = () => setAdminRoute(readAdminRoute());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    customerApi.catalog().then((catalog) => {
      if (!catalog.length) return;
      const savedProducts = catalog as ShoeProduct[];
      setProducts(savedProducts);
      setSelectedProduct(savedProducts[0]);
    }).catch(() => undefined);
    customerApi.drops().then((storedDrops) => setDrops(storedDrops.map(toDropRecord))).catch(() => undefined);
    if (authApi.hasSession()) {
      authApi.session().then(restoreCustomerRecords).catch(() => clearSession());
    }
  }, []);

  useEffect(() => {
    if (!adminRoute) {
      setIsAdminSessionLoading(false);
      setAdminSessionError(null);
      return;
    }

    if (adminRoute === 'login' && !adminApi.hasSession()) {
      setIsAdminSessionLoading(false);
      setAdminSessionError(null);
      return;
    }

    if (adminRoute === 'panel' && !adminApi.hasSession()) {
      setIsAdminAuthenticated(false);
      setAdminIdentity(null);
      setIsAdminPanelOpen(false);
      setIsAdminSessionLoading(false);
      setAdminSessionError(null);
      navigateAdminRoute('/admin/login', true);
      return;
    }

    let isCurrent = true;
    setIsAdminSessionLoading(true);
    setAdminSessionError(null);
    adminApi.session().then((admin) => {
      if (!isCurrent) return;
      if (admin.role !== 'ADMIN') throw new Error('Admin role required');
      setIsAdminAuthenticated(true);
      setAdminIdentity({ email: admin.email, name: admin.name, role: admin.role });
      setIsAdminPanelOpen(true);
      Promise.all([adminApi.orders(), adminApi.products(), adminApi.coupons(), adminApi.drops(), adminApi.exchanges()])
        .then(([storedOrders, storedProducts, storedCoupons, storedDrops, storedExchanges]) => {
          setOrders(storedOrders.map(toOrderRecord));
          setProducts(storedProducts.map((product) => product.catalog as ShoeProduct));
          setCoupons(storedCoupons.map(toCouponRecord));
          setDrops(storedDrops.map(toDropRecord));
          setExchanges(storedExchanges.map(toExchangeRecord));
        })
        .catch((error: unknown) => showToast(error instanceof Error ? error.message : 'Could not load saved admin records'));
      if (adminRoute === 'login') navigateAdminRoute('/admin', true);
    }).catch((error: unknown) => {
      if (!isCurrent) return;
      const message = error instanceof Error ? error.message : 'Admin session validation failed';
      const isInvalidSession = /session required|invalid or expired|admin role required|no longer valid|unauthorized|forbidden|not authenticated|failed to authenticate/i.test(message);
      if (isInvalidSession) {
        clearAdminSession();
        setIsAdminAuthenticated(false);
        setAdminIdentity(null);
        setIsAdminPanelOpen(false);
        if (adminRoute === 'panel') navigateAdminRoute('/admin/login', true);
      } else {
        setAdminSessionError(message);
      }
    }).finally(() => {
      if (isCurrent) setIsAdminSessionLoading(false);
    });

    return () => { isCurrent = false; };
  }, [adminRoute, adminSessionAttempt]);

  // Stealth Admin Route & Keyboard Shortcut Detection (Hidden from standard users)
  useEffect(() => {
    const handleCheckAdminRoute = () => {
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      if (
        hash === '#admin' ||
        hash === '#admin-login' ||
        hash === '#adminlogin' ||
        search.includes('admin=true') ||
        search.includes('admin=login') ||
        search === '?admin'
      ) {
        if (isAdminAuthenticated) {
          setIsAdminPanelOpen(true);
        } else {
          setActiveNav('ADMIN_LOGIN');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl + Shift + A or Cmd + Shift + A (Stealth Administrator Keybind)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        if (isAdminAuthenticated) {
          setIsAdminPanelOpen((prev) => !prev);
          showToast('TOGGLED ATELIER ADMIN CONSOLE');
        } else {
          setActiveNav((prev) => (prev === 'ADMIN_LOGIN' ? 'COLLECTIONS' : 'ADMIN_LOGIN'));
          window.scrollTo({ top: 0, behavior: 'smooth' });
          showToast('STEALTH GATEWAY ENGAGED // ADMIN ENCLAVE');
        }
      }
    };

    handleCheckAdminRoute();
    window.addEventListener('hashchange', handleCheckAdminRoute);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('hashchange', handleCheckAdminRoute);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isAdminAuthenticated]);

  // Cart operations
  const handleUpdateQuantity = async (id: string, delta: number) => {
    const item = cartItems.find((cartItem) => cartItem.id === id);
    if (!item) return;
    const quantity = Math.max(1, item.quantity + delta);
    if (currentUser) {
      try {
        await customerApi.updateCartItem(id, quantity);
      } catch (error) {
        showToast(error instanceof Error ? error.message : 'Could not save cart quantity');
        return;
      }
    }
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = async (id: string) => {
    const itemToRemove = cartItems.find((i) => i.id === id);
    if (currentUser) {
      try {
        await customerApi.removeCartItem(id);
      } catch (error) {
        showToast(error instanceof Error ? error.message : 'Could not remove saved cart item');
        return;
      }
    }
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    if (itemToRemove) {
      showToast(`REMOVED ${itemToRemove.name} FROM ARCHIVE QUEUE`);
    }
  };

  const handleMoveToWishlist = async (item: CartItem) => {
    if (currentUser) {
      const productId = item.productId ?? (products.some((product) => product.id === item.id) ? item.id : undefined);
      if (!productId) {
        showToast('THIS SPECIMEN CANNOT BE SAVED TO YOUR WISHLIST');
        return;
      }
      try {
        await customerApi.saveWishlistItem(productId, item.selectedColor ?? item.colorway, item.selectedSize ?? item.specification);
        await customerApi.removeCartItem(item.id);
      } catch (error) {
        showToast(error instanceof Error ? error.message : 'Wishlist transfer could not be saved');
        return;
      }
    }
    setCartItems((prev) => prev.filter((i) => i.id !== item.id));
    setWishlistItems((prev) => {
      const productId = item.productId ?? item.id;
      if (prev.some((w) => w.id === productId)) return prev;
      return [
        ...prev,
        {
          id: productId,
          productId,
          code: item.code,
          name: item.name,
          price: item.price,
          image: item.image,
          colorway: item.colorway,
          specification: item.specification,
        },
      ];
    });
    showToast(`TRANSFERRED ${item.name} TO ARCHIVED WISHLIST`);
  };

  const handleMoveToBag = async (item: WishlistItem) => {
    let cartRecordId = item.id;
    if (currentUser) {
      const productId = item.productId ?? item.id;
      try {
        const savedItem = await customerApi.addCartItem(productId, item.colorway, item.specification, 1);
        await customerApi.removeWishlistItem(productId);
        cartRecordId = savedItem.id;
      } catch (error) {
        showToast(error instanceof Error ? error.message : 'Wishlist item could not be moved to your bag');
        return;
      }
    }
    setWishlistItems((prev) => prev.filter((i) => i.id !== item.id));
    setCartItems((prev) => {
      if (prev.some((c) => c.productId === item.productId && c.colorway === item.colorway && c.specification === item.specification)) {
        return prev.map((c) =>
          c.productId === item.productId && c.colorway === item.colorway && c.specification === item.specification ? { ...c, id: cartRecordId, quantity: c.quantity + 1 } : c
        );
      }
      return [
        ...prev,
        {
          id: cartRecordId,
          productId: item.productId ?? item.id,
          code: item.code,
          name: item.name,
          edition: 'PERMANENT TECH ARCHIVE',
          price: item.price,
          image: item.image,
          colorway: item.colorway,
          specification: item.specification,
          availableSizes: ['US 9 / EU 42.5', 'US 10 / EU 44', 'US 11 / EU 45'],
          allocationStatus: 'Allocation Secured // Vault Unit',
          quantity: 1,
        },
      ];
    });
    showToast(`ALLOCATION RE-ESTABLISHED FOR ${item.name}`);
  };

  const handleSelectSize = async (itemId: string, newSize: string) => {
    const item = cartItems.find((cartItem) => cartItem.id === itemId);
    if (!item) return;
    let cartRecordId = itemId;
    let quantity = item.quantity;
    if (currentUser && item.productId) {
      try {
        const savedItem = await customerApi.addCartItem(item.productId, item.selectedColor ?? item.colorway, newSize, item.quantity);
        await customerApi.removeCartItem(itemId);
        cartRecordId = savedItem.id;
        quantity = savedItem.quantity;
      } catch (error) {
        showToast(error instanceof Error ? error.message : 'Size change could not be saved');
        return;
      }
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, id: cartRecordId, selectedSize: newSize, specification: newSize, quantity } : item
      )
    );
    showToast(`UPDATED SPECIFICATION TO ${newSize}`);
  };

  const handleAddAddress = async (newAddr: Address) => {
    if (!currentUser) {
      showToast('SIGN IN BEFORE SAVING A SHIPPING ADDRESS');
      setActiveNav('LOGIN');
      return;
    }
    try {
      const savedAddress = await customerApi.addAddress(newAddr);
      const address: Address = {
        ...savedAddress,
        tag: savedAddress.tag ?? undefined,
        line2: savedAddress.line2 ?? undefined,
        state: savedAddress.state ?? undefined,
        phone: savedAddress.phone ?? undefined,
      };
      setAddresses((prev) => [...prev, address]);
      setSelectedAddressId(address.id);
      showToast(`DESTINATION SAVED: ${address.name}`);
    } catch (error) {
      showToast(error instanceof Error ? error.message : 'Could not save shipping address');
    }
  };

  const handleRestoreDefaultItems = () => {
    if (currentUser) {
      showToast('DEFAULT DEMO ITEMS CANNOT REPLACE YOUR SAVED ACCOUNT BAG');
      return;
    }
    setCartItems(INITIAL_CART_ITEMS);
    showToast('ARCHIVE BAG RESTORED TO SPECIFICATION DEFAULTS');
  };

  // Add item to bag
  const handleAddToCart = async (item: CartItem) => {
    if (currentUser) {
      const productId = item.productId ?? (products.some((product) => product.id === item.id) ? item.id : undefined);
      if (!productId) {
        showToast('THIS SPECIMEN IS NOT AVAILABLE IN THE SAVED CATALOG');
        return;
      }
      try {
        const savedItem = await customerApi.addCartItem(
          productId,
          item.selectedColor ?? item.colorway,
          item.selectedSize ?? item.specification,
          item.quantity,
        );
        const persistedItem = { ...item, id: savedItem.id, productId, quantity: savedItem.quantity };
        setCartItems((prev) => {
          const existing = prev.find((cartItem) => cartItem.productId === productId
            && (cartItem.selectedColor ?? cartItem.colorway) === (item.selectedColor ?? item.colorway)
            && (cartItem.selectedSize ?? cartItem.specification) === (item.selectedSize ?? item.specification));
          if (existing) return prev.map((cartItem) => cartItem.id === existing.id ? persistedItem : cartItem);
          return [...prev, persistedItem];
        });
        showToast(`SAVED ${item.name} TO YOUR ACCOUNT BAG`);
        return;
      } catch (error) {
        showToast(error instanceof Error ? error.message : 'Could not save item to your account bag');
        return;
      }
    }
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, item];
    });
    showToast(`ALLOCATED ${item.name} TO BAG QUEUE`);
  };

  // Buy Now: Add to bag and immediately jump to Checkout
  const handleBuyNow = (item: CartItem) => {
    handleAddToCart(item);
    setActiveNav('BAG');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Wishlist toggle for products
  const handleToggleWishlistProduct = async (shoe: ShoeProduct) => {
    const isAlreadyWish = wishlistItems.some((w) => w.id === shoe.id);
    if (currentUser) {
      try {
        if (isAlreadyWish) await customerApi.removeWishlistItem(shoe.id);
        else await customerApi.saveWishlistItem(shoe.id, shoe.colors[0]?.name ?? 'Standard', 'Universal Last');
      } catch (error) {
        showToast(error instanceof Error ? error.message : 'Wishlist change could not be saved');
        return;
      }
    }
    if (isAlreadyWish) {
      setWishlistItems((prev) => prev.filter((w) => w.id !== shoe.id));
      showToast(`REMOVED ${shoe.name} FROM WISHLIST`);
    } else {
      setWishlistItems((prev) => [
        ...prev,
        {
          id: shoe.id,
          code: shoe.code,
          name: shoe.name,
          brand: shoe.brand,
          price: shoe.price,
          mrp: shoe.mrp,
          image: shoe.colors[0]?.images.front,
          colorway: shoe.colors[0]?.name || 'Standard',
          specification: 'Universal Last',
        },
      ]);
      showToast(`ADDED ${shoe.name} TO WISHLIST`);
    }
  };

  // Compare products toggle
  const handleToggleCompareProduct = (shoe: ShoeProduct) => {
    const isAlreadyIn = compareList.some((p) => p.id === shoe.id);
    if (isAlreadyIn) {
      setCompareList((prev) => prev.filter((p) => p.id !== shoe.id));
      showToast(`REMOVED ${shoe.name} FROM COMPARISON MATRIX`);
    } else {
      if (compareList.length >= 4) {
        showToast('MAXIMUM 4 PRODUCTS ALLOWED IN COMPARISON MATRIX');
        return;
      }
      setCompareList((prev) => [...prev, shoe]);
      showToast(`ADDED ${shoe.name} TO COMPARISON MATRIX (${compareList.length + 1}/4)`);
    }
  };

  // Claim VOID RUNNER from Chapter 02
  const handleClaimVoidRunner = () => {
    const voidRunnerItem: CartItem = {
      id: 'vn-void-runner',
      code: 'VOID_02',
      name: 'VOID RUNNER SPEC 02',
      edition: 'ACTIVE DROP // SPEC 02 // 500 UNITS',
      price: 590,
      image: '/assets/images/void_runner_heel_1788838329834.jpg',
      colorway: 'Carbon Void / Black',
      specification: 'US 10 / EU 44',
      availableSizes: ['US 9 / EU 42.5', 'US 9.5 / EU 43', 'US 10 / EU 44', 'US 11 / EU 45'],
      allocationStatus: 'Allocation Claimed // Run Serial M084',
      quantity: 1,
    };
    handleAddToCart(voidRunnerItem);
  };

  // Order Placement & Creation
  const handlePlaceOrder = async (paymentMethod: PaymentMethod) => {
    if (cartItems.length === 0) {
      showToast('ALLOCATION QUEUE IS CURRENTLY EMPTY');
      return;
    }
    if (!currentUser || !authApi.hasSession()) {
      showToast('SIGN IN BEFORE PLACING AN ORDER');
      setActiveNav('LOGIN');
      return;
    }
    if (!addresses.some((address) => address.id === selectedAddressId)) {
      showToast('ADD A SAVED SHIPPING ADDRESS BEFORE CHECKOUT');
      setIsNewAddressModalOpen(true);
      return;
    }
    setIsOrderSubmitting(true);
    try {
      const savedOrder = await customerApi.createOrder(
        selectedAddressId,
        paymentMethod === 'COD' ? 'COD' : 'UPI'
      );

      if (paymentMethod === 'COD') {
        const order = toOrderRecord(savedOrder);
        setOrders((prev) => [order, ...prev]);
        setCurrentOrder(order);
        setCartItems([]);
        setActiveNav('ORDER_SUCCESS');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        showToast(`ORDER SAVED: #${order.id} // PAYMENT COD`);
      } else {
        // Genuine UPI payment flow
        const upiSession = await customerApi.initiateUpiPayment(String(savedOrder.id));
        setUpiPaymentSession({
          isOpen: true,
          orderId: String(savedOrder.id),
          displayId: String(savedOrder.displayId || savedOrder.id),
          amount: upiSession.amount,
          currency: upiSession.currency,
          upiPaymentUrl: upiSession.upiPaymentUrl,
          qrCodeDataUrl: upiSession.qrCodeDataUrl,
          expiresAt: upiSession.expiresAt,
        });
      }
    } catch (error) {
      showToast(error instanceof Error ? error.message : 'Order could not be saved');
    } finally {
      setIsOrderSubmitting(false);
    }
  };

  const handleUpiPaymentVerified = (verifiedOrderRecord: Record<string, unknown>) => {
    setUpiPaymentSession(null);
    const order = toOrderRecord(verifiedOrderRecord);
    setOrders((prev) => [order, ...prev.filter((o) => o.id !== order.id)]);
    setCurrentOrder(order);
    setCartItems([]);
    setActiveNav('ORDER_SUCCESS');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast(`PAYMENT VERIFIED // ORDER #${order.id} CONFIRMED`);
  };

  // Subtotal calculation
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalItemCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  // Product Selection Handlers
  const handleSelectProduct = (product: ShoeProduct) => {
    setSelectedProduct(product);
    setActiveNav('PRODUCT_DETAILS');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Size-Level Inventory Stock Update
  const handleUpdateProductStock = (
    productId: string,
    colorName: string,
    size: string,
    newStock: number
  ) => {
    const product = products.find((entry) => entry.id === productId);
    if (!product) return;
    const updatedProduct = {
      ...product,
      sizeInventory: {
        ...product.sizeInventory,
        [colorName]: (product.sizeInventory[colorName] ?? []).map((entry) => entry.size === size ? { ...entry, stock: newStock } : entry),
      },
    };
    void adminApi.saveProduct(updatedProduct).then(() => {
      setProducts((prev) => prev.map((entry) => entry.id === productId ? updatedProduct : entry));
      showToast(`INVENTORY UPDATED: ${product.sizeSystem === 'Size' ? 'SIZE' : `SIZE ${product.sizeSystem ?? 'US'}`} ${size} SET TO ${newStock} UNITS`);
    }).catch((error: unknown) => showToast(error instanceof Error ? error.message : 'Inventory update could not be saved'));
  };

  // Add New Product
  const handleAddNewProduct = async (newProd: ShoeProduct) => {
    try {
      await adminApi.saveProduct(newProd);
      setProducts((prev) => [newProd, ...prev.filter((product) => product.id !== newProd.id)]);
    } catch (error) {
      showToast(error instanceof Error ? error.message : 'Product could not be saved');
    }
  };

  // Delete Product
  const handleDeleteProduct = async (productId: string) => {
    try {
      await adminApi.deleteProduct(productId);
      setProducts((prev) => prev.filter((product) => product.id !== productId));
      showToast(`SPECIMEN ${productId} REMOVED FROM ARCHIVE`);
    } catch (error) {
      showToast(error instanceof Error ? error.message : 'Product could not be removed');
    }
  };

  // Update Product
  const handleUpdateProduct = async (updatedProduct: ShoeProduct) => {
    try {
      await adminApi.saveProduct(updatedProduct);
      setProducts((prev) => prev.map((product) => product.id === updatedProduct.id ? updatedProduct : product));
      showToast(`SPECIMEN ${updatedProduct.name} DOSSIER SYNCHRONIZED`);
    } catch (error) {
      showToast(error instanceof Error ? error.message : 'Product update could not be saved');
    }
  };

  // Update Order Status
  const handleUpdateOrderStatus = async (orderId: string, newStatus: any) => {
    const status = ({ 'Order Placed': 'ORDER_PLACED', Confirmed: 'CONFIRMED', Packed: 'PACKED', Shipped: 'SHIPPED', 'Out for Delivery': 'OUT_FOR_DELIVERY', Delivered: 'DELIVERED', Cancelled: 'CANCELLED' } as Record<string, string>)[String(newStatus)] ?? String(newStatus).toUpperCase().replaceAll(' ', '_');
    try {
      await adminApi.updateOrderStatus(orderId, status);
    } catch (error) {
      showToast(error instanceof Error ? error.message : 'Order status could not be saved');
      return;
    }
    setOrders((prev) =>
      prev.map((o) => {
        if (o.id !== orderId) return o;
        const updatedOrder = { ...o, orderStatus: newStatus };
        if (currentOrder && currentOrder.id === orderId) {
          setCurrentOrder(updatedOrder);
        }
        return updatedOrder;
      })
    );
    showToast(`ORDER #${orderId} STATUS ADVANCED TO: ${newStatus.toUpperCase()}`);
  };

  // Update Exchange Status
  const handleUpdateExchangeStatus = async (
    exchangeId: string,
    status: 'Approved' | 'Rejected'
  ) => {
    try {
      await adminApi.updateExchangeStatus(exchangeId, status);
    } catch (error) {
      showToast(error instanceof Error ? error.message : 'Exchange status could not be saved');
      return;
    }
    setExchanges((prev) =>
      prev.map((ex) => (ex.id === exchangeId ? { ...ex, status } : ex))
    );
    showToast(`EXCHANGE ${exchangeId} ${status.toUpperCase()}`);
  };

  // Add New Drop
  const handleAddNewDrop = async (newDrop: SneakerDrop) => {
    try {
      await adminApi.saveDrop(newDrop as unknown as Record<string, unknown> & { id: string });
      setDrops((prev) => [newDrop, ...prev.filter((drop) => drop.id !== newDrop.id)]);
    } catch (error) {
      showToast(error instanceof Error ? error.message : 'Drop could not be saved');
    }
  };

  // Update Drop Status
  const handleUpdateDropStatus = async (dropId: string, status: any) => {
    try {
      await adminApi.updateDropStatus(dropId, status);
    } catch (error) {
      showToast(error instanceof Error ? error.message : 'Drop status could not be saved');
      return;
    }
    setDrops((prev) =>
      prev.map((d) => (d.id === dropId ? { ...d, status } : d))
    );
    showToast(`DROP ${dropId} STATUS UPDATED`);
  };

  // Add New Coupon
  const handleAddNewCoupon = async (newCoupon: Coupon) => {
    try {
      await adminApi.saveCoupon(newCoupon);
      setCoupons((prev) => [newCoupon, ...prev.filter((coupon) => coupon.code !== newCoupon.code)]);
    } catch (error) {
      showToast(error instanceof Error ? error.message : 'Coupon could not be saved');
    }
  };

  // Render dedicated Login Page matching user design
  if (activeNav === 'LOGIN') {
    return (
      <>
        <LoginView
          onNavigate={(nav) => {
            setActiveNav(nav as NavSection);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          currentUser={currentUser}
          onLoginSuccess={(user) => {
            void restoreCustomerRecords(user);
          }}
          onLogout={() => {
            authApi.logout();
            setCurrentUser(null);
            setCartItems([]);
            setWishlistItems([]);
            setAddresses([]);
            setOrders([]);
            setCurrentOrder(null);
          }}
          onShowToast={showToast}
        />
        {toastMessage && (
          <aside
            aria-live="polite"
            className="fixed bottom-6 right-6 z-50 bg-[#1a1816] border border-[#d5cdc0] text-[#ede7dd] px-4 py-3 font-mono text-[10px] tracking-widest shadow-2xl flex items-center gap-3"
          >
            <span className="w-1.5 h-1.5 bg-[#7b6e54] shrink-0"></span>
            <span>{toastMessage}</span>
          </aside>
        )}
      </>
    );
  }

  if (adminRoute === 'panel' && (!isAdminAuthenticated || isAdminSessionLoading)) {
    return (
      <main className="min-h-screen bg-[#ede7dd] text-[#1a1816] flex items-center justify-center p-6 font-mono text-xs">
        {adminSessionError ? (
          <div className="max-w-md text-center">
            <p className="uppercase tracking-widest">Admin service unavailable</p>
            <p className="mt-3 text-[#59544c]">{adminSessionError}</p>
            <button className="mt-6 border border-[#1a1816] px-4 py-3 uppercase tracking-widest" onClick={() => setAdminSessionAttempt((attempt) => attempt + 1)}>Retry</button>
            <button className="ml-3 underline" onClick={() => navigateAdminRoute('/admin/login', true)}>Admin login</button>
          </div>
        ) : (
          <p className="uppercase tracking-widest">Validating admin session...</p>
        )}
      </main>
    );
  }

  // Render dedicated Admin Login Page (Restricted Admin Gate)
  if (adminRoute === 'login' || activeNav === 'ADMIN_LOGIN' || (activeNav === 'ADMIN' && !isAdminAuthenticated)) {
    return (
      <>
        <AdminLoginView
          onAdminLoginSuccess={(admin) => {
            setIsAdminAuthenticated(true);
            setAdminIdentity(admin);
            setIsAdminPanelOpen(true);
            setActiveNav('COLLECTIONS');
            navigateAdminRoute('/admin');
            showToast(`ACCESS GRANTED // ATELIER MASTER: ${admin.name}`);
          }}
          onNavigateStore={() => {
            setActiveNav('COLLECTIONS');
            if (adminRoute) navigateAdminRoute('/', false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onShowToast={showToast}
        />
        {toastMessage && (
          <aside
            aria-live="polite"
            className="fixed bottom-6 right-6 z-50 bg-[#1a1816] border border-[#d5cdc0] text-[#ede7dd] px-4 py-3 font-mono text-[10px] tracking-widest shadow-2xl flex items-center gap-3"
          >
            <span className="w-1.5 h-1.5 bg-[#7b6e54] shrink-0"></span>
            <span>{toastMessage}</span>
          </aside>
        )}
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#ede7dd] text-[#1a1816] antialiased flex flex-col justify-between selection:bg-[#1a1816] selection:text-[#ede7dd]">
      {/* Fixed Luxury Brutalist Header */}
      <Header
        cartCount={totalItemCount}
        wishlistCount={wishlistItems.length}
        compareCount={compareList.length}
        currentUser={currentUser}
        isAdminAuthenticated={isAdminAuthenticated}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAdminPortal={() => {
          if (!isAdminAuthenticated) {
            setActiveNav('ADMIN_LOGIN');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            showToast('RESTRICTED: PRIVILEGED ADMIN CREDENTIALS REQUIRED');
          } else {
            setIsAdminPanelOpen(true);
          }
        }}
        onOpenAccount={() => {
          setActiveNav('LOGIN');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenCompare={() => setIsCompareModalOpen(true)}
        activeNav={activeNav}
        onSelectNav={(nav) => {
          if ((nav === 'ADMIN' || nav === 'ADMIN_LOGIN') && !isAdminAuthenticated) {
            setActiveNav('ADMIN_LOGIN');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            showToast('RESTRICTED: PRIVILEGED ADMIN CREDENTIALS REQUIRED');
            return;
          }
          setActiveNav(nav as NavSection);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          showToast(`ACCESSED PROTOCOL: ${nav}`);
        }}
        onSelectCategoryFilter={(cat) => {
          setCategoryFilter(cat);
          setActiveNav('SHOP');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Content Area */}
      <main className="w-full pt-16 sm:pt-24 bg-[#ede7dd] flex-1">
        {/* VIEW 1: COLLECTIONS (Hero & Home Experience) */}
        {activeNav === 'COLLECTIONS' && (
          <CollectionsView
            onClaimVoidRunner={handleClaimVoidRunner}
            onQuickAddProduct={handleAddToCart}
            onNavigate={(nav) => {
              setActiveNav(nav as NavSection);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onShowToast={showToast}
          />
        )}

        {/* VIEW 2: PRODUCT LISTING / CATALOG (Section 5) */}
        {activeNav === 'SHOP' && (
          <ProductListingView
            products={products}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlistProduct}
            wishlistIds={wishlistItems.map((w) => w.id)}
            onToggleCompare={handleToggleCompareProduct}
            compareIds={compareList.map((c) => c.id)}
            initialCategoryFilter={categoryFilter}
            initialBrandFilter={brandFilter}
            onShowToast={showToast}
          />
        )}

        {/* VIEW 3: PRODUCT DETAILS PAGE (Sections 8-14 & 27) */}
        {activeNav === 'PRODUCT_DETAILS' && selectedProduct && (
          <ProductDetailsView
            product={selectedProduct}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onToggleWishlist={handleToggleWishlistProduct}
            isWishlisted={wishlistItems.some((w) => w.id === selectedProduct.id)}
            onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
            onOpenCompare={handleToggleCompareProduct}
            isCompared={compareList.some((c) => c.id === selectedProduct.id)}
            onOpenNotifyMe={(productName, size, color) => {
              setNotifyTarget({ productName, size, color });
              setIsNotifyMeOpen(true);
            }}
            onBackToCatalog={() => setActiveNav('SHOP')}
            onShowToast={showToast}
          />
        )}

        {/* VIEW 4: THE PERMANENT ARCHIVE */}
        {activeNav === 'ARCHIVES' && (
          <ArchivesView
            onInspectSpecimen={(specimen) => setInspectingSpecimen(specimen)}
            onRequestAccess={(specimen) => {
              if (specimen.price) {
                const cartItem: CartItem = {
                  id: specimen.id,
                  code: specimen.specCode,
                  name: specimen.name,
                  edition: `${specimen.badge} // ${specimen.year}`,
                  price: specimen.price,
                  image: specimen.image,
                  colorway: 'Obsidian Archive Specimen',
                  specification: 'US 10 / EU 44',
                  availableSizes: ['US 9 / EU 42.5', 'US 10 / EU 44', 'US 11 / EU 45'],
                  allocationStatus: `Allocation Secured // ${specimen.code}`,
                  quantity: 1,
                };
                handleAddToCart(cartItem);
              } else {
                setInspectingSpecimen(specimen);
              }
            }}
            onNavigate={(nav) => setActiveNav(nav as NavSection)}
            onShowToast={showToast}
          />
        )}

        {/* VIEW 5: NEW DROPS */}
        {activeNav === 'NEW DROPS' && (
          <NewDropsView onClaimDrop={handleAddToCart} onShowToast={showToast} />
        )}

        {/* VIEW 6: ABOUT / MANIFESTO */}
        {activeNav === 'ABOUT' && (
          <AboutView onNavigate={(nav) => setActiveNav(nav as NavSection)} />
        )}

        {/* VIEW 7: ORDER SUCCESS (Section 24) */}
        {activeNav === 'ORDER_SUCCESS' && currentOrder && (
          <OrderSuccessView
            order={currentOrder}
            onTrackOrder={(orderId) => {
              setActiveNav('ORDER_TRACKING');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onContinueShopping={() => {
              setActiveNav('SHOP');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onRequestExchange={(order) => {
              setExchangeTargetOrder(order);
              setIsReturnsModalOpen(true);
            }}
          />
        )}

        {/* VIEW 8: ORDER TRACKING (Section 25) */}
        {activeNav === 'ORDER_TRACKING' && currentOrder && (
          <OrderTrackingView
            order={currentOrder}
            onBackToOrders={() => {
              setActiveNav('SHOP');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onRequestExchange={(order) => {
              setExchangeTargetOrder(order);
              setIsReturnsModalOpen(true);
            }}
          />
        )}

        {/* VIEW 9: BAG // ALLOCATION CHECKOUT PROTOCOL (Sections 15, 20-23) */}
        {activeNav === 'BAG' && (
          <div className="w-full">
            <ReservationBanner initialMinutes={14} initialSeconds={27} />
            <div className="max-w-[1440px] mx-auto w-full px-5 md:px-16 py-10 lg:py-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-7">
                  <CartItemList
                    items={cartItems}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemoveItem={handleRemoveItem}
                    onMoveToWishlist={handleMoveToWishlist}
                    onOpenSizeSelector={(item) => setSizeSelectorItem(item)}
                    onRestoreDefaultItems={handleRestoreDefaultItems}
                  />
                </div>
                <div className="lg:col-span-5">
                  <CheckoutProtocol
                    addresses={addresses}
                    selectedAddressId={selectedAddressId}
                    onSelectAddress={(id) => setSelectedAddressId(id)}
                    onOpenNewAddressModal={() => setIsNewAddressModalOpen(true)}
                    subtotal={subtotal}
                    onPlaceOrder={handlePlaceOrder}
                    isOrderSubmitting={isOrderSubmitting}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Brutalist Footer with Stealth Admin Trigger */}
      <Footer
        onSelectNav={(nav) => setActiveNav(nav as NavSection)}
        onOpenAdminLogin={() => {
          if (isAdminAuthenticated) {
            setIsAdminPanelOpen(true);
          } else {
            setActiveNav('ADMIN_LOGIN');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
          showToast('STEALTH GATEWAY ENGAGED // ADMIN ENCLAVE');
        }}
        isAdminAuthenticated={isAdminAuthenticated}
      />

      {/* Floating Admin Status Pill (Only Visible to Authenticated Administrator) */}
      {isAdminAuthenticated && (
        <div className="fixed bottom-6 left-6 z-40 flex items-center gap-2">
          <button
            onClick={() => setIsAdminPanelOpen(true)}
            className="bg-[#1a1816] text-[#ede7dd] border border-[#7b6e54] px-3 py-1.5 font-mono text-[10px] uppercase font-bold tracking-wider hover:bg-[#35322e] transition-colors shadow-2xl flex items-center gap-2 cursor-pointer"
            title="Open Atelier Administrator Console"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>ADMIN ACTIVE // CONSOLE ⚡</span>
          </button>
        </div>
      )}

      {/* Size Guide Modal with Measurement Calculator (Section 12) */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
        sizeSystem={selectedProduct.sizeSystem}
        sizes={Object.values(selectedProduct.sizeInventory).flat()}
        onSelectSize={(sz) => {
          showToast(`CALIBRATED SIZE SELECTION: ${selectedProduct.sizeSystem === 'Size' ? 'SIZE' : selectedProduct.sizeSystem ?? 'US'} ${sz}`);
        }}
      />

      {/* Notify Me Modal for Out of Stock items (Section 17) */}
      <NotifyMeModal
        isOpen={isNotifyMeOpen}
        onClose={() => setIsNotifyMeOpen(false)}
        productName={notifyTarget.productName}
        size={notifyTarget.size}
        color={notifyTarget.color}
        onSubmitNotification={(contact, prod, sz) => {
          showToast(`RESTOCK ALERT SCHEDULED FOR: ${contact}`);
        }}
      />

      {/* Product Comparison Modal (Section 19) */}
      <CompareModal
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
        compareProducts={compareList}
        onRemoveFromCompare={(id) =>
          setCompareList((prev) => prev.filter((p) => p.id !== id))
        }
        onClearCompare={() => setCompareList([])}
        onSelectProduct={(p) => {
          handleSelectProduct(p);
          setIsCompareModalOpen(false);
        }}
        onQuickAddToCart={handleAddToCart}
      />

      {/* Returns & Size Exchange Modal (Section 26) */}
      <ReturnsExchangeModal
        isOpen={isReturnsModalOpen}
        onClose={() => setIsReturnsModalOpen(false)}
        order={exchangeTargetOrder}
        onSubmitRequest={async (req) => {
          if (!currentUser) throw new Error('Sign in before submitting a return or exchange');
          const saved = await customerApi.createExchange({
            orderId: req.orderId,
            type: req.type,
            productId: req.productId,
            productName: req.productName,
            productImage: req.productImage,
            currentSize: req.currentSize,
            requestedSize: req.requestedSize,
            reason: req.reason,
            adminNotes: req.adminNotes,
          });
          const persistedRequest = toExchangeRecord(saved);
          setExchanges((prev) => [persistedRequest, ...prev]);
          showToast(`EXCHANGE REQUEST SAVED: ${persistedRequest.id}`);
        }}
      />

      {/* Admin Panel Console (Sections 29-35) - Strictly gated to authenticated admins */}
      <AdminPanelView
        isOpen={isAdminPanelOpen && isAdminAuthenticated}
        onClose={() => {
          setIsAdminPanelOpen(false);
          if (adminRoute === 'panel') navigateAdminRoute('/', false);
        }}
        onLogoutAdmin={() => {
          void adminApi.logout().catch(() => undefined);
          setIsAdminAuthenticated(false);
          setAdminIdentity(null);
          setIsAdminPanelOpen(false);
          navigateAdminRoute('/admin/login', true);
          showToast('ADMIN SESSION TERMINATED // CONSOLE LOCKED');
        }}
        products={products}
        onUpdateProductStock={handleUpdateProductStock}
        onAddNewProduct={handleAddNewProduct}
        onDeleteProduct={handleDeleteProduct}
        onUpdateProduct={handleUpdateProduct}
        orders={orders}
        onUpdateOrderStatus={handleUpdateOrderStatus}
        exchanges={exchanges}
        onUpdateExchangeStatus={handleUpdateExchangeStatus}
        drops={drops}
        onAddNewDrop={handleAddNewDrop}
        onUpdateDropStatus={handleUpdateDropStatus}
        coupons={coupons}
        onAddNewCoupon={handleAddNewCoupon}
        onShowToast={showToast}
      />

      {/* Specimen Inspection Modal */}
      <SpecimenInspectModal
        isOpen={!!inspectingSpecimen}
        onClose={() => setInspectingSpecimen(null)}
        specimen={inspectingSpecimen}
        onClaimAllocation={handleAddToCart}
      />

      {/* Add New Destination Modal */}
      <NewAddressModal
        isOpen={isNewAddressModalOpen}
        onClose={() => setIsNewAddressModalOpen(false)}
        onAddAddress={handleAddAddress}
      />

      {/* Size Selector Modal */}
      <SizeSelectorModal
        isOpen={!!sizeSelectorItem}
        onClose={() => setSizeSelectorItem(null)}
        item={sizeSelectorItem}
        onSelectSize={handleSelectSize}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        items={wishlistItems}
        onMoveToBag={handleMoveToBag}
        onRemoveFromWishlist={(id) =>
          setWishlistItems((prev) => prev.filter((i) => i.id !== id))
        }
      />

      {/* Quick Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={products}
        onSelectProduct={(product) => {
          handleSelectProduct(product);
        }}
      />

      {/* Client Account Modal */}
      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
      />

      {/* Genuine UPI Payment Enclave Modal */}
      {upiPaymentSession && (
        <UpiPaymentModal
          isOpen={upiPaymentSession.isOpen}
          onClose={() => {
            setUpiPaymentSession(null);
            showToast('UPI TRANSACTION SUSPENDED // ALLOCATION PRESERVED IN BAG');
          }}
          orderId={upiPaymentSession.orderId}
          displayId={upiPaymentSession.displayId}
          amount={upiPaymentSession.amount}
          currency={upiPaymentSession.currency}
          upiPaymentUrl={upiPaymentSession.upiPaymentUrl}
          qrCodeDataUrl={upiPaymentSession.qrCodeDataUrl}
          expiresAt={upiPaymentSession.expiresAt}
          onPaymentVerified={handleUpiPaymentVerified}
          onShowToast={showToast}
        />
      )}


      {/* Tactile Brutalist Feedback Toast */}
      {toastMessage && (
        <aside
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 bg-[#1a1816] border border-[#d5cdc0] text-[#ede7dd] px-4 py-3 font-mono text-[10px] tracking-widest shadow-2xl flex items-center gap-3"
        >
          <span className="w-1.5 h-1.5 bg-[#7b6e54] shrink-0"></span>
          <span>{toastMessage}</span>
        </aside>
      )}
    </div>
  );
}
