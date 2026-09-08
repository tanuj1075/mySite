/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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
import { Footer } from './components/Footer';

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
  ExchangeReturnRequest,
  SneakerDrop,
  Coupon,
} from './types';

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

  // Cart operations
  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (id: string) => {
    const itemToRemove = cartItems.find((i) => i.id === id);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    if (itemToRemove) {
      showToast(`REMOVED ${itemToRemove.name} FROM ARCHIVE QUEUE`);
    }
  };

  const handleMoveToWishlist = (item: CartItem) => {
    setCartItems((prev) => prev.filter((i) => i.id !== item.id));
    setWishlistItems((prev) => {
      if (prev.some((w) => w.id === item.id)) return prev;
      return [
        ...prev,
        {
          id: item.id,
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

  const handleMoveToBag = (item: WishlistItem) => {
    setWishlistItems((prev) => prev.filter((i) => i.id !== item.id));
    setCartItems((prev) => {
      if (prev.some((c) => c.id === item.id)) {
        return prev.map((c) =>
          c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [
        ...prev,
        {
          id: item.id,
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

  const handleSelectSize = (itemId: string, newSize: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, specification: newSize } : item
      )
    );
    showToast(`UPDATED SPECIFICATION TO ${newSize}`);
  };

  const handleAddAddress = (newAddr: Address) => {
    setAddresses((prev) => [...prev, newAddr]);
    setSelectedAddressId(newAddr.id);
    showToast(`DESTINATION REGISTERED: ${newAddr.name}`);
  };

  const handleRestoreDefaultItems = () => {
    setCartItems(INITIAL_CART_ITEMS);
    showToast('ARCHIVE BAG RESTORED TO SPECIFICATION DEFAULTS');
  };

  // Add item to bag
  const handleAddToCart = (item: CartItem) => {
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
  const handleToggleWishlistProduct = (shoe: ShoeProduct) => {
    const isAlreadyWish = wishlistItems.some((w) => w.id === shoe.id);
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
      image: '/src/assets/images/void_runner_heel_1788838329834.jpg',
      colorway: 'Carbon Void / Black',
      specification: 'US 10 / EU 44',
      availableSizes: ['US 9 / EU 42.5', 'US 9.5 / EU 43', 'US 10 / EU 44', 'US 11 / EU 45'],
      allocationStatus: 'Allocation Claimed // Run Serial M084',
      quantity: 1,
    };
    handleAddToCart(voidRunnerItem);
  };

  // Order Placement & Creation
  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      showToast('ALLOCATION QUEUE IS CURRENTLY EMPTY');
      return;
    }

    setIsOrderSubmitting(true);
    setTimeout(() => {
      setIsOrderSubmitting(false);

      const targetAddr =
        addresses.find((a) => a.id === selectedAddressId) || addresses[0];

      const newOrder: Order = {
        id: `SH${Date.now().toString().slice(-5)}`,
        date: new Date().toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
        items: cartItems.map((c) => ({
          id: c.id,
          productId: c.productId || c.id,
          name: c.name,
          brand: c.brand || 'VANTA ATELIER',
          color: c.colorway,
          size: c.selectedSize || '9',
          price: c.price,
          quantity: c.quantity,
          image: c.image,
        })),
        total: subtotal,
        orderStatus: 'Confirmed',
        paymentStatus: 'Paid',
        paymentMethod: 'CRYPTOGRAPHIC CARD // VISA VERIFIED',
        shippingAddress: targetAddr,
        trackingNumber: `VNT-${Math.floor(10000000 + Math.random() * 90000000)}`,
        carrier: 'Armored Vault Express',
        expectedDelivery: '3–5 Business Days',
        timeline: [
          {
            status: 'Order Placed',
            date: 'Today',
            time: 'Just now',
            completed: true,
            description: 'Order cryptographically authorized and logged into the vault.',
          },
          {
            status: 'Confirmed',
            date: 'Today',
            time: 'Just now',
            completed: true,
            description: 'Inventory allocation confirmed and authenticated by atelier.',
          },
          {
            status: 'Packed',
            date: 'Pending',
            time: 'Estimated tomorrow',
            completed: false,
            description: 'Protective archival box sealed with tamper-evident seal.',
          },
          {
            status: 'Shipped',
            date: 'Pending',
            time: 'TBD',
            completed: false,
            description: 'Courier collection and air transit dispatch.',
          },
          {
            status: 'Out for Delivery',
            date: 'Pending',
            time: 'TBD',
            completed: false,
            description: 'Local ground courier delivery route active.',
          },
          {
            status: 'Delivered',
            date: 'Pending',
            time: 'TBD',
            completed: false,
            description: 'Signature delivered to client destination.',
          },
        ],
      };

      setOrders((prev) => [newOrder, ...prev]);
      setCurrentOrder(newOrder);
      setCartItems([]);
      setActiveNav('ORDER_SUCCESS');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      showToast(`ORDER CONFIRMED: #${newOrder.id}`);
    }, 1200);
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
    setProducts((prev) =>
      prev.map((prod) => {
        if (prod.id !== productId) return prod;
        const colorSizes = prod.sizeInventory[colorName] || [];
        const updatedSizes = colorSizes.map((s) =>
          s.size === size ? { ...s, stock: newStock } : s
        );
        return {
          ...prod,
          sizeInventory: {
            ...prod.sizeInventory,
            [colorName]: updatedSizes,
          },
        };
      })
    );
    showToast(`INVENTORY UPDATED: SIZE US ${size} SET TO ${newStock} UNITS`);
  };

  // Add New Product
  const handleAddNewProduct = (newProd: ShoeProduct) => {
    setProducts((prev) => [newProd, ...prev]);
  };

  // Update Order Status
  const handleUpdateOrderStatus = (orderId: string, newStatus: any) => {
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
  const handleUpdateExchangeStatus = (
    exchangeId: string,
    status: 'Approved' | 'Rejected'
  ) => {
    setExchanges((prev) =>
      prev.map((ex) => (ex.id === exchangeId ? { ...ex, status } : ex))
    );
    showToast(`EXCHANGE ${exchangeId} ${status.toUpperCase()}`);
  };

  // Add New Drop
  const handleAddNewDrop = (newDrop: SneakerDrop) => {
    setDrops((prev) => [newDrop, ...prev]);
  };

  // Update Drop Status
  const handleUpdateDropStatus = (dropId: string, status: any) => {
    setDrops((prev) =>
      prev.map((d) => (d.id === dropId ? { ...d, status } : d))
    );
    showToast(`DROP ${dropId} STATUS UPDATED`);
  };

  // Add New Coupon
  const handleAddNewCoupon = (newCoupon: Coupon) => {
    setCoupons((prev) => [newCoupon, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#ede7dd] text-[#1a1816] antialiased flex flex-col justify-between selection:bg-[#1a1816] selection:text-[#ede7dd]">
      {/* Fixed Luxury Brutalist Header */}
      <Header
        cartCount={totalItemCount}
        wishlistCount={wishlistItems.length}
        compareCount={compareList.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAdminPortal={() => setIsAdminPanelOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
        onOpenCompare={() => setIsCompareModalOpen(true)}
        activeNav={activeNav}
        onSelectNav={(nav) => {
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

      {/* Brutalist Footer */}
      <Footer onSelectNav={(nav) => setActiveNav(nav as NavSection)} />

      {/* Size Guide Modal with Measurement Calculator (Section 12) */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
        onSelectSize={(sz) => {
          showToast(`CALIBRATED SIZE SELECTION: US ${sz}`);
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
        onSubmitRequest={(req) => {
          setExchanges((prev) => [req, ...prev]);
          showToast(`EXCHANGE REQUEST REGISTERED: ${req.id}`);
        }}
      />

      {/* Admin Panel Console (Sections 29-35) */}
      <AdminPanelView
        isOpen={isAdminPanelOpen}
        onClose={() => setIsAdminPanelOpen(false)}
        products={products}
        onUpdateProductStock={handleUpdateProductStock}
        onAddNewProduct={handleAddNewProduct}
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
        availableItems={cartItems.length > 0 ? cartItems : INITIAL_CART_ITEMS}
        onSelectItem={(item) => {
          handleAddToCart(item);
        }}
      />

      {/* Client Account Modal */}
      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
      />

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
