import React, { useState } from 'react';
import {
  LayoutDashboard,
  Package,
  Boxes,
  ShoppingBag,
  RotateCcw,
  Sparkles,
  Ticket,
  MessageSquare,
  Users,
  Settings,
  Plus,
  Trash2,
  Edit2,
  Check,
  X,
  AlertTriangle,
  TrendingUp,
  ArrowRight,
  Search,
} from 'lucide-react';
import { ShoeProduct, Order, ExchangeReturnRequest, SneakerDrop, Coupon, SizeStock } from '../types';
import { BRANDS, CATEGORIES, ALL_SIZES } from '../data/footwearCatalog';

interface AdminPanelViewProps {
  isOpen: boolean;
  onClose: () => void;
  products: ShoeProduct[];
  onUpdateProductStock: (productId: string, colorName: string, size: string, newStock: number) => void;
  onAddNewProduct: (product: ShoeProduct) => void;
  orders: Order[];
  onUpdateOrderStatus: (orderId: string, newStatus: any) => void;
  exchanges: ExchangeReturnRequest[];
  onUpdateExchangeStatus: (exchangeId: string, status: 'Approved' | 'Rejected') => void;
  drops: SneakerDrop[];
  onAddNewDrop: (drop: SneakerDrop) => void;
  onUpdateDropStatus: (dropId: string, status: any) => void;
  coupons: Coupon[];
  onAddNewCoupon: (coupon: Coupon) => void;
  onShowToast: (msg: string) => void;
}

export const AdminPanelView: React.FC<AdminPanelViewProps> = ({
  isOpen,
  onClose,
  products,
  onUpdateProductStock,
  onAddNewProduct,
  orders,
  onUpdateOrderStatus,
  exchanges,
  onUpdateExchangeStatus,
  drops,
  onAddNewDrop,
  onUpdateDropStatus,
  coupons,
  onAddNewCoupon,
  onShowToast,
}) => {
  const [activeTab, setActiveTab] = useState<
    'DASHBOARD' | 'PRODUCTS' | 'INVENTORY' | 'ORDERS' | 'EXCHANGES' | 'DROPS' | 'COUPONS'
  >('DASHBOARD');

  // Search in inventory
  const [inventorySearch, setInventorySearch] = useState('');

  // Add Product Form Modal State
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [newProdName, setNewProdName] = useState('');
  const [newProdBrand, setNewProdBrand] = useState(BRANDS[0]);
  const [newProdCategory, setNewProdCategory] = useState<any>('Sneakers');
  const [newProdPrice, setNewProdPrice] = useState(380);
  const [newProdMrp, setNewProdMrp] = useState(480);
  const [newProdColor, setNewProdColor] = useState('Obsidian Void');
  const [newProdUpper, setNewProdUpper] = useState('Ballistic Cordura 1000D');
  const [newProdSole, setNewProdSole] = useState('Vibram Basalt Rubber');
  const [newProdWeight, setNewProdWeight] = useState('310g');

  // Add Drop Form Modal State
  const [showAddDropModal, setShowAddDropModal] = useState(false);
  const [dropProductName, setDropProductName] = useState('');
  const [dropDate, setDropDate] = useState('2026-09-25');
  const [dropTime, setDropTime] = useState('10:00 AM UTC');
  const [dropStock, setDropStock] = useState(100);

  // Add Coupon Form State
  const [showAddCouponModal, setShowAddCouponModal] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [couponDiscount, setCouponDiscount] = useState(15);
  const [couponMinOrder, setCouponMinOrder] = useState(200);

  if (!isOpen) return null;

  // Handle Create Product
  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProdName.trim()) return;

    const discountPercent = Math.round(((newProdMrp - newProdPrice) / newProdMrp) * 100);
    const sku = `VN-${newProdName.slice(0, 3).toUpperCase()}-${Date.now().toString().slice(-3)}`;

    const sizeStocks = ALL_SIZES.map((sz) => ({
      size: sz,
      stock: 12,
      sku: `${sku}-${sz}`,
    }));

    const newShoe: ShoeProduct = {
      id: `vn-prod-${Date.now()}`,
      sku,
      code: `SPEC_${Date.now().toString().slice(-4)}`,
      name: newProdName.trim(),
      brand: newProdBrand,
      category: newProdCategory,
      gender: 'Unisex',
      sport: 'Lifestyle',
      collections: ['New Drops', 'Premium Sneakers'],
      price: Number(newProdPrice),
      mrp: Number(newProdMrp),
      discountPercent: discountPercent > 0 ? discountPercent : 0,
      rating: 5.0,
      reviewsCount: 1,
      colors: [
        {
          name: newProdColor,
          hex: '#1a1816',
          images: {
            front: '/src/assets/images/cream_runner_pedestal_1788842341279.jpg',
            side: '/src/assets/images/hero_welt_macro_1788842274475.jpg',
            back: '/src/assets/images/craft_heel_detail_1788842306184.jpg',
            top: '/src/assets/images/blueprint_deconstruct_1788842375340.jpg',
            sole: '/src/assets/images/core_silhouettes_shoe_1788838314612.jpg',
          },
        },
      ],
      sizeInventory: {
        [newProdColor]: sizeStocks,
      },
      upper: newProdUpper,
      sole: newProdSole,
      closure: 'Woven Laces',
      fitType: 'Regular Fit',
      occasion: 'All-Terrain Urban',
      use: 'Urban Movement',
      weight: newProdWeight,
      waterResistance: 'Yes',
      countryOfOrigin: 'Montebelluna, Italy',
      warranty: '2-Year Craft Guarantee',
      description: 'Manufactured through mathematical stasis protocols.',
      fitIndicator: 'True to Size',
      comfortScore: 5.0,
      width: 'Medium',
      recommended: 'True to Size',
      isNewArrival: true,
    };

    onAddNewProduct(newShoe);
    setShowAddProductModal(false);
    setNewProdName('');
    onShowToast(`PRODUCT REGISTERED IN CANON: ${newShoe.name}`);
  };

  // Handle Create Drop
  const handleCreateDrop = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dropProductName.trim()) return;

    const newDrop: SneakerDrop = {
      id: `drop-${Date.now().toString().slice(-4)}`,
      productId: 'vn-shoe-01',
      productName: dropProductName.trim(),
      brand: 'VANTA ATELIER',
      edition: 'STASIS PROTOCOL // LIMITED BATCH',
      image: '/src/assets/images/void_runner_heel_1788838329834.jpg',
      price: 520,
      mrp: 680,
      launchDate: dropDate,
      launchTime: dropTime,
      stock: Number(dropStock),
      status: 'Scheduled',
      targetTimestamp: Date.now() + 5 * 24 * 3600 * 1000,
      notifySubscribers: [],
    };

    onAddNewDrop(newDrop);
    setShowAddDropModal(false);
    setDropProductName('');
    onShowToast(`DROP SCHEDULED: ${newDrop.productName}`);
  };

  // Handle Create Coupon
  const handleCreateCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponCode.trim()) return;

    const newCpn: Coupon = {
      code: couponCode.trim().toUpperCase(),
      discountPercent: Number(couponDiscount),
      minOrderValue: Number(couponMinOrder),
      description: `${couponDiscount}% privilege allocation voucher`,
      isActive: true,
    };

    onAddNewCoupon(newCpn);
    setShowAddCouponModal(false);
    setCouponCode('');
    onShowToast(`COUPON DEPLOYED: ${newCpn.code}`);
  };

  // Compute total sales & inventory counts
  const totalSalesAmount = orders.reduce((acc, o) => acc + o.total, 0) + 48500;
  const totalOrdersCount = orders.length + 420;
  const totalProductsCount = products.length + 1120;
  const pendingExchangesCount = exchanges.filter((e) => e.status === 'Pending').length;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1a1816]/75 backdrop-blur-sm flex items-center justify-center p-2 sm:p-6 overflow-y-auto font-mono"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#ede7dd] border border-[#d5cdc0] max-w-7xl w-full h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header Bar */}
        <div className="bg-[#e4ddcf] border-b border-[#d5cdc0] p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#141312] text-[#f5efe6] flex items-center justify-center">
              <Settings className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#1a1816] uppercase tracking-wider block">
                VANTA ATELIER // ENTERPRISE CONSOLE & TELEMETRY
              </span>
              <span className="text-[10px] text-[#7b6e54]">
                AUTHENTICATED AS ATELIER MASTER // PRODUCTION RUNNER V4.2
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#59544c] hover:text-[#1a1816] p-1.5 cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Subnav Tabs */}
        <div className="flex overflow-x-auto border-b border-[#d5cdc0] bg-[#f5efe6] px-4 text-xs font-bold divide-x divide-[#d5cdc0]">
          <button
            onClick={() => setActiveTab('DASHBOARD')}
            className={`py-3 px-4 uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'DASHBOARD'
                ? 'bg-[#141312] text-[#f5efe6]'
                : 'text-[#59544c] hover:bg-[#ede7dd]'
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>DASHBOARD METRICS</span>
          </button>

          <button
            onClick={() => setActiveTab('INVENTORY')}
            className={`py-3 px-4 uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'INVENTORY'
                ? 'bg-[#141312] text-[#f5efe6]'
                : 'text-[#59544c] hover:bg-[#ede7dd]'
            }`}
          >
            <Boxes className="w-3.5 h-3.5" />
            <span>SIZE-LEVEL INVENTORY</span>
          </button>

          <button
            onClick={() => setActiveTab('PRODUCTS')}
            className={`py-3 px-4 uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'PRODUCTS'
                ? 'bg-[#141312] text-[#f5efe6]'
                : 'text-[#59544c] hover:bg-[#ede7dd]'
            }`}
          >
            <Package className="w-3.5 h-3.5" />
            <span>PRODUCTS CANON</span>
          </button>

          <button
            onClick={() => setActiveTab('ORDERS')}
            className={`py-3 px-4 uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'ORDERS'
                ? 'bg-[#141312] text-[#f5efe6]'
                : 'text-[#59544c] hover:bg-[#ede7dd]'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>ORDERS ({orders.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('EXCHANGES')}
            className={`py-3 px-4 uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'EXCHANGES'
                ? 'bg-[#141312] text-[#f5efe6]'
                : 'text-[#59544c] hover:bg-[#ede7dd]'
            }`}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>EXCHANGES & RETURNS ({pendingExchangesCount})</span>
          </button>

          <button
            onClick={() => setActiveTab('DROPS')}
            className={`py-3 px-4 uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'DROPS'
                ? 'bg-[#141312] text-[#f5efe6]'
                : 'text-[#59544c] hover:bg-[#ede7dd]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>SNEAKER DROPS ({drops.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('COUPONS')}
            className={`py-3 px-4 uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'COUPONS'
                ? 'bg-[#141312] text-[#f5efe6]'
                : 'text-[#59544c] hover:bg-[#ede7dd]'
            }`}
          >
            <Ticket className="w-3.5 h-3.5" />
            <span>COUPONS ({coupons.length})</span>
          </button>
        </div>

        {/* Content Pane */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* TAB 1: DASHBOARD METRICS */}
          {activeTab === 'DASHBOARD' && (
            <div className="space-y-6">
              {/* Stat Cards Grid (Section 30) */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                <div className="bg-[#f5efe6] border border-[#d5cdc0] p-4">
                  <span className="text-[10px] text-[#7b6e54] uppercase font-bold block">
                    TODAY'S SALES
                  </span>
                  <div className="text-xl font-bold text-[#1a1816] mt-1">
                    ${totalSalesAmount.toLocaleString()}
                  </div>
                  <span className="text-[9px] text-[#59544c]">+18.4% vs last run</span>
                </div>

                <div className="bg-[#f5efe6] border border-[#d5cdc0] p-4">
                  <span className="text-[10px] text-[#7b6e54] uppercase font-bold block">
                    ORDERS
                  </span>
                  <div className="text-xl font-bold text-[#1a1816] mt-1">
                    {totalOrdersCount}
                  </div>
                  <span className="text-[9px] text-[#59544c]">All allocations</span>
                </div>

                <div className="bg-[#f5efe6] border border-[#d5cdc0] p-4">
                  <span className="text-[10px] text-[#7b6e54] uppercase font-bold block">
                    CUSTOMERS
                  </span>
                  <div className="text-xl font-bold text-[#1a1816] mt-1">
                    6,250
                  </div>
                  <span className="text-[9px] text-[#59544c]">Authenticated clients</span>
                </div>

                <div className="bg-[#f5efe6] border border-[#d5cdc0] p-4">
                  <span className="text-[10px] text-[#7b6e54] uppercase font-bold block">
                    PRODUCTS
                  </span>
                  <div className="text-xl font-bold text-[#1a1816] mt-1">
                    {totalProductsCount}
                  </div>
                  <span className="text-[9px] text-[#59544c]">{products.length} live models</span>
                </div>

                <div className="bg-[#f5efe6] border border-[#d5cdc0] p-4">
                  <span className="text-[10px] text-[#7b6e54] uppercase font-bold block">
                    LOW STOCK
                  </span>
                  <div className="text-xl font-bold text-[#b83b3b] mt-1">
                    38
                  </div>
                  <span className="text-[9px] text-[#b83b3b]">Vault alert</span>
                </div>

                <div className="bg-[#f5efe6] border border-[#d5cdc0] p-4">
                  <span className="text-[10px] text-[#7b6e54] uppercase font-bold block">
                    PENDING EXCHANGES
                  </span>
                  <div className="text-xl font-bold text-[#7b6e54] mt-1">
                    {pendingExchangesCount + 14}
                  </div>
                  <span className="text-[9px] text-[#59544c]">Action required</span>
                </div>

                <div className="bg-[#f5efe6] border border-[#d5cdc0] p-4">
                  <span className="text-[10px] text-[#7b6e54] uppercase font-bold block">
                    UPCOMING DROPS
                  </span>
                  <div className="text-xl font-bold text-[#1a1816] mt-1">
                    {drops.length}
                  </div>
                  <span className="text-[9px] text-[#59544c]">Live countdowns</span>
                </div>
              </div>

              {/* Graphical Visualizers: Revenue & Orders breakdown */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Revenue Bar Chart (8 Cols) */}
                <div className="lg:col-span-8 bg-[#f5efe6] border border-[#d5cdc0] p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-[#d5cdc0] pb-3">
                    <span className="text-xs font-bold uppercase text-[#1a1816]">
                      REVENUE & DISPATCH PERFORMANCE (HOURLY)
                    </span>
                    <span className="text-[10px] text-[#7b6e54] font-bold">
                      UPDATED 2 MIN AGO
                    </span>
                  </div>

                  <div className="h-44 flex items-end gap-3 pt-6 px-2 border-b border-[#d5cdc0]">
                    {[
                      { hr: '08:00', val: 35 },
                      { hr: '10:00', val: 65 },
                      { hr: '12:00', val: 95 },
                      { hr: '14:00', val: 80 },
                      { hr: '16:00', val: 55 },
                      { hr: '18:00', val: 75 },
                      { hr: '20:00', val: 90 },
                      { hr: '22:00', val: 40 },
                    ].map((bar) => (
                      <div key={bar.hr} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                        <div
                          className="w-full bg-[#141312] hover:bg-[#7b6e54] transition-colors cursor-pointer"
                          style={{ height: `${bar.val}%` }}
                        />
                        <span className="text-[9px] text-[#59544c]">{bar.hr}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between text-[11px] text-[#59544c]">
                    <span>PEAK VELOCITY: 12:00 UTC ($95,000 / HR)</span>
                    <span className="font-bold text-[#1a1816]">PROCESSED ON MAIN PROTOCOL</span>
                  </div>
                </div>

                {/* Top Metrics Column (4 Cols) */}
                <div className="lg:col-span-4 bg-[#f5efe6] border border-[#d5cdc0] p-6 space-y-4">
                  <span className="text-xs font-bold uppercase text-[#1a1816] block border-b border-[#d5cdc0] pb-2">
                    SALES BREAKDOWN CANON
                  </span>

                  <div className="space-y-3 text-xs">
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="font-bold text-[#1a1816]">TOP BRAND: VANTA ATELIER</span>
                        <span>46%</span>
                      </div>
                      <div className="w-full bg-[#ede7dd] h-2">
                        <div className="bg-[#141312] h-2 w-[46%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="font-bold text-[#1a1816]">TOP SIZE: US 9 & US 10</span>
                        <span>58%</span>
                      </div>
                      <div className="w-full bg-[#ede7dd] h-2">
                        <div className="bg-[#141312] h-2 w-[58%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="font-bold text-[#1a1816]">CATEGORY: RUNNING & SNEAKERS</span>
                        <span>72%</span>
                      </div>
                      <div className="w-full bg-[#ede7dd] h-2">
                        <div className="bg-[#141312] h-2 w-[72%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SIZE-LEVEL INVENTORY (SECTION 32 MANDATE) */}
          {activeTab === 'INVENTORY' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#f5efe6] border border-[#d5cdc0] p-4">
                <div>
                  <span className="text-xs font-bold uppercase text-[#1a1816] block">
                    SIZE-LEVEL INVENTORY MATRIX
                  </span>
                  <p className="text-[10px] text-[#59544c]">
                    Product → Color → Size → SKU → Stock. Edit numerical stock values in real-time.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Search by shoe or SKU..."
                    value={inventorySearch}
                    onChange={(e) => setInventorySearch(e.target.value)}
                    className="bg-[#ede7dd] border border-[#d5cdc0] px-3 py-1.5 text-xs text-[#1a1816] w-64 focus:outline-none"
                  />
                </div>
              </div>

              <div className="bg-[#f5efe6] border border-[#d5cdc0] overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse divide-y divide-[#d5cdc0]">
                  <thead>
                    <tr className="bg-[#e4ddcf] text-[10px] font-bold text-[#1a1816] uppercase">
                      <th className="p-3">PRODUCT</th>
                      <th className="p-3">COLORWAY</th>
                      <th className="p-3">SIZE</th>
                      <th className="p-3">SKU</th>
                      <th className="p-3">LIVE STOCK</th>
                      <th className="p-3">STATUS</th>
                      <th className="p-3 text-right">QUICK ADJUST</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#d5cdc0] text-[11px]">
                    {products
                      .filter((p) =>
                        p.name.toLowerCase().includes(inventorySearch.toLowerCase()) ||
                        p.sku.toLowerCase().includes(inventorySearch.toLowerCase())
                      )
                      .flatMap((p) =>
                        Object.entries(p.sizeInventory).flatMap(([colorName, sizes]) =>
                          (sizes as SizeStock[]).map((s) => (
                            <tr key={`${p.id}-${colorName}-${s.size}`} className="hover:bg-[#ede7dd]/50">
                              <td className="p-3 font-bold text-[#1a1816]">{p.name}</td>
                              <td className="p-3 text-[#59544c]">{colorName}</td>
                              <td className="p-3 font-bold text-[#1a1816]">US {s.size}</td>
                              <td className="p-3 text-[#7b6e54] font-mono">{s.sku}</td>
                              <td className="p-3">
                                <input
                                  type="number"
                                  min="0"
                                  value={s.stock}
                                  onChange={(e) =>
                                    onUpdateProductStock(p.id, colorName, s.size, Number(e.target.value))
                                  }
                                  className="w-16 bg-[#ede7dd] border border-[#d5cdc0] px-2 py-1 font-bold text-center text-[#1a1816]"
                                />
                              </td>
                              <td className="p-3">
                                {s.stock === 0 ? (
                                  <span className="bg-[#fce8e6] text-[#d93025] px-2 py-0.5 text-[9px] font-bold">
                                    OUT OF STOCK
                                  </span>
                                ) : s.stock < 5 ? (
                                  <span className="bg-[#fff0d4] text-[#b87400] px-2 py-0.5 text-[9px] font-bold">
                                    LOW STOCK ({s.stock})
                                  </span>
                                ) : (
                                  <span className="bg-[#e6f4ea] text-[#137333] px-2 py-0.5 text-[9px] font-bold">
                                    IN STOCK ({s.stock})
                                  </span>
                                )}
                              </td>
                              <td className="p-3 text-right">
                                <div className="inline-flex gap-1">
                                  <button
                                    onClick={() =>
                                      onUpdateProductStock(p.id, colorName, s.size, Math.max(0, s.stock - 1))
                                    }
                                    className="px-2 py-0.5 bg-[#ede7dd] border border-[#d5cdc0] hover:bg-[#ded6c9] cursor-pointer font-bold"
                                  >
                                    -1
                                  </button>
                                  <button
                                    onClick={() =>
                                      onUpdateProductStock(p.id, colorName, s.size, s.stock + 5)
                                    }
                                    className="px-2 py-0.5 bg-[#141312] text-[#f5efe6] hover:bg-[#35322e] cursor-pointer font-bold"
                                  >
                                    +5 RESTOCK
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        )
                      )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: PRODUCTS CANON (SECTION 31) */}
          {activeTab === 'PRODUCTS' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-[#f5efe6] border border-[#d5cdc0] p-4">
                <span className="text-xs font-bold uppercase text-[#1a1816]">
                  REGISTERED FOOTWEAR SPECIMENS ({products.length})
                </span>
                <button
                  onClick={() => setShowAddProductModal(true)}
                  className="bg-[#141312] text-[#f5efe6] px-4 py-2 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 hover:bg-[#35322e] transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>ADD NEW SHOE</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((p) => (
                  <div key={p.id} className="bg-[#f5efe6] border border-[#d5cdc0] p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] text-[#7b6e54] font-bold uppercase">{p.brand}</span>
                        <h4 className="font-bold text-xs uppercase text-[#1a1816]">{p.name}</h4>
                      </div>
                      <span className="text-xs font-bold text-[#1a1816]">${p.price.toFixed(2)}</span>
                    </div>
                    <div className="aspect-[16/9] bg-[#ede7dd] border border-[#d5cdc0] overflow-hidden">
                      <img src={p.colors[0]?.images.front} alt={p.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-[10px] text-[#59544c] space-y-0.5">
                      <div>SKU: {p.sku}</div>
                      <div>CATEGORY: {p.category} // {p.gender}</div>
                      <div>WEIGHT: {p.weight}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: ORDERS MANAGEMENT */}
          {activeTab === 'ORDERS' && (
            <div className="space-y-4">
              <div className="bg-[#f5efe6] border border-[#d5cdc0] p-4">
                <span className="text-xs font-bold uppercase text-[#1a1816] block">
                  ALL CLIENT ALLOCATIONS ({orders.length})
                </span>
              </div>

              <div className="bg-[#f5efe6] border border-[#d5cdc0] divide-y divide-[#d5cdc0]">
                {orders.map((ord) => (
                  <div key={ord.id} className="p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <strong className="text-[#1a1816] font-bold text-sm">ORDER #{ord.id}</strong>
                        <span className="text-[10px] text-[#7b6e54]">{ord.date}</span>
                      </div>
                      <div className="text-[11px] text-[#59544c]">
                        Client: <strong className="text-[#1a1816]">{ord.shippingAddress.name}</strong> • Total: <strong className="text-[#1a1816]">${ord.total.toFixed(2)}</strong> ({ord.paymentStatus})
                      </div>
                      <div className="text-[10px] text-[#7b6e54]">
                        Items: {ord.items.map((i) => `${i.name} (US ${i.size})`).join(', ')}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold text-[#7b6e54] uppercase">STATUS:</span>
                      <select
                        value={ord.orderStatus}
                        onChange={(e) => onUpdateOrderStatus(ord.id, e.target.value)}
                        className="bg-[#ede7dd] border border-[#d5cdc0] px-3 py-1.5 font-bold uppercase text-[#1a1816] focus:outline-none cursor-pointer"
                      >
                        <option value="Order Placed">Order Placed</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Packed">Packed</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Out for Delivery">Out for Delivery</option>
                        <option value="Delivered">Delivered</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: RETURNS & EXCHANGES (SECTION 35) */}
          {activeTab === 'EXCHANGES' && (
            <div className="space-y-4">
              <div className="bg-[#f5efe6] border border-[#d5cdc0] p-4">
                <span className="text-xs font-bold uppercase text-[#1a1816] block">
                  SIZE EXCHANGE & RETURN REQUESTS ({exchanges.length})
                </span>
                <p className="text-[10px] text-[#59544c]">
                  Review client exchange requests. Approving will automatically schedule courier pickup and allocate new size.
                </p>
              </div>

              <div className="bg-[#f5efe6] border border-[#d5cdc0] divide-y divide-[#d5cdc0]">
                {exchanges.map((ex) => (
                  <div key={ex.id} className="p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <strong className="text-sm font-bold text-[#1a1816]">{ex.id}</strong>
                        <span className="bg-[#ede7dd] border border-[#d5cdc0] px-2 py-0.5 text-[10px] font-bold uppercase text-[#1a1816]">
                          {ex.type}
                        </span>
                        <span className="text-[10px] text-[#7b6e54]">ORDER #{ex.orderId}</span>
                      </div>
                      <div className="text-[11px] font-bold text-[#1a1816] uppercase">
                        {ex.productName}
                      </div>
                      <div className="text-[10px] text-[#59544c]">
                        Current Size: <strong>US {ex.currentSize}</strong> → Requested Size:{' '}
                        <strong className="text-[#1a1816]">US {ex.requestedSize || 'N/A'}</strong>
                      </div>
                      <p className="text-[10px] text-[#7b6e54] italic">Reason: "{ex.reason}"</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-1 text-[10px] font-bold uppercase ${
                        ex.status === 'Approved'
                          ? 'bg-[#e6f4ea] text-[#137333]'
                          : ex.status === 'Rejected'
                          ? 'bg-[#fce8e6] text-[#d93025]'
                          : 'bg-[#fff0d4] text-[#b87400]'
                      }`}>
                        {ex.status}
                      </span>

                      {ex.status === 'Pending' && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => onUpdateExchangeStatus(ex.id, 'Approved')}
                            className="bg-[#141312] text-[#f5efe6] px-3 py-1.5 font-bold uppercase text-[10px] hover:bg-[#35322e] cursor-pointer"
                          >
                            APPROVE
                          </button>
                          <button
                            onClick={() => onUpdateExchangeStatus(ex.id, 'Rejected')}
                            className="bg-[#ede7dd] border border-[#d5cdc0] text-[#59544c] px-3 py-1.5 font-bold uppercase text-[10px] hover:text-[#1a1816] cursor-pointer"
                          >
                            REJECT
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: DROPS MANAGEMENT (SECTION 33) */}
          {activeTab === 'DROPS' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-[#f5efe6] border border-[#d5cdc0] p-4">
                <span className="text-xs font-bold uppercase text-[#1a1816]">
                  SNEAKER LAUNCH DROPS ({drops.length})
                </span>
                <button
                  onClick={() => setShowAddDropModal(true)}
                  className="bg-[#141312] text-[#f5efe6] px-4 py-2 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 hover:bg-[#35322e] transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>CREATE NEW DROP</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {drops.map((d) => (
                  <div key={d.id} className="bg-[#f5efe6] border border-[#d5cdc0] p-5 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] text-[#7b6e54] font-bold uppercase">{d.brand}</span>
                        <h4 className="font-bold text-sm uppercase text-[#1a1816]">{d.productName}</h4>
                      </div>
                      <span className="bg-[#ede7dd] border border-[#d5cdc0] px-2 py-0.5 text-[9px] font-bold uppercase">
                        {d.status}
                      </span>
                    </div>

                    <div className="text-xs text-[#59544c] space-y-1">
                      <div>LAUNCH DATE: <strong className="text-[#1a1816]">{d.launchDate} at {d.launchTime}</strong></div>
                      <div>ALLOTMENT STOCK: <strong className="text-[#1a1816]">{d.stock} UNITS</strong></div>
                      <div>SUBSCRIBER QUEUE: <strong className="text-[#1a1816]">{d.notifySubscribers.length} Clients</strong></div>
                    </div>

                    <div className="flex gap-2 pt-2 border-t border-[#d5cdc0]">
                      <button
                        onClick={() => onUpdateDropStatus(d.id, d.status === 'Active' ? 'Paused' : 'Active')}
                        className="flex-1 py-1.5 bg-[#141312] text-[#f5efe6] text-[10px] font-bold uppercase hover:bg-[#35322e] cursor-pointer"
                      >
                        {d.status === 'Active' ? 'PAUSE DROP' : 'PUBLISH DROP'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: COUPONS MANAGEMENT */}
          {activeTab === 'COUPONS' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-[#f5efe6] border border-[#d5cdc0] p-4">
                <span className="text-xs font-bold uppercase text-[#1a1816]">
                  PROMOTIONAL VOUCHERS & COUPONS ({coupons.length})
                </span>
                <button
                  onClick={() => setShowAddCouponModal(true)}
                  className="bg-[#141312] text-[#f5efe6] px-4 py-2 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 hover:bg-[#35322e] transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>ADD COUPON</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {coupons.map((c) => (
                  <div key={c.code} className="bg-[#f5efe6] border border-[#d5cdc0] p-5 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-base font-bold text-[#1a1816] tracking-widest">{c.code}</span>
                      <span className="bg-[#ede7dd] border border-[#d5cdc0] px-2 py-0.5 text-[9px] font-bold text-[#7b6e54]">
                        {c.discountPercent}% OFF
                      </span>
                    </div>
                    <p className="text-xs text-[#59544c]">{c.description}</p>
                    <div className="text-[10px] text-[#7b6e54]">
                      Min Order Value: ${c.minOrderValue}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* MODAL: ADD SHOE PRODUCT */}
        {showAddProductModal && (
          <div className="fixed inset-0 z-60 bg-[#1a1816]/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#f5efe6] border border-[#d5cdc0] max-w-lg w-full p-6 space-y-4 shadow-2xl text-xs">
              <div className="flex justify-between items-center border-b border-[#d5cdc0] pb-3">
                <span className="font-bold text-sm uppercase text-[#1a1816]">
                  REGISTER NEW FOOTWEAR SPECIMEN
                </span>
                <button onClick={() => setShowAddProductModal(false)}>
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleCreateProduct} className="space-y-3">
                <div>
                  <label className="font-bold block mb-1">SHOE MODEL NAME:</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Kinesis Low"
                    value={newProdName}
                    onChange={(e) => setNewProdName(e.target.value)}
                    className="w-full bg-[#ede7dd] border border-[#d5cdc0] p-2"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold block mb-1">BRAND:</label>
                    <select
                      value={newProdBrand}
                      onChange={(e) => setNewProdBrand(e.target.value)}
                      className="w-full bg-[#ede7dd] border border-[#d5cdc0] p-2"
                    >
                      {BRANDS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-bold block mb-1">CATEGORY:</label>
                    <select
                      value={newProdCategory}
                      onChange={(e) => setNewProdCategory(e.target.value as any)}
                      className="w-full bg-[#ede7dd] border border-[#d5cdc0] p-2"
                    >
                      {CATEGORIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold block mb-1">PRICE ($):</label>
                    <input
                      type="number"
                      required
                      value={newProdPrice}
                      onChange={(e) => setNewProdPrice(Number(e.target.value))}
                      className="w-full bg-[#ede7dd] border border-[#d5cdc0] p-2"
                    />
                  </div>
                  <div>
                    <label className="font-bold block mb-1">MRP ($):</label>
                    <input
                      type="number"
                      required
                      value={newProdMrp}
                      onChange={(e) => setNewProdMrp(Number(e.target.value))}
                      className="w-full bg-[#ede7dd] border border-[#d5cdc0] p-2"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold block mb-1">UPPER & CHASSIS MATERIAL:</label>
                  <input
                    type="text"
                    value={newProdUpper}
                    onChange={(e) => setNewProdUpper(e.target.value)}
                    className="w-full bg-[#ede7dd] border border-[#d5cdc0] p-2"
                  />
                </div>

                <div className="flex gap-2 pt-3 border-t border-[#d5cdc0]">
                  <button
                    type="button"
                    onClick={() => setShowAddProductModal(false)}
                    className="flex-1 py-2 border border-[#d5cdc0] font-bold"
                  >
                    CANCEL
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2 bg-[#141312] text-[#f5efe6] font-bold"
                  >
                    REGISTER SHOE
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL: ADD SNEAKER DROP */}
        {showAddDropModal && (
          <div className="fixed inset-0 z-60 bg-[#1a1816]/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#f5efe6] border border-[#d5cdc0] max-w-md w-full p-6 space-y-4 shadow-2xl text-xs">
              <div className="flex justify-between items-center border-b border-[#d5cdc0] pb-3">
                <span className="font-bold text-sm uppercase text-[#1a1816]">
                  SCHEDULE SNEAKER DROP
                </span>
                <button onClick={() => setShowAddDropModal(false)}>
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleCreateDrop} className="space-y-3">
                <div>
                  <label className="font-bold block mb-1">PRODUCT SPECIMEN NAME:</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Void Runner X Limited"
                    value={dropProductName}
                    onChange={(e) => setDropProductName(e.target.value)}
                    className="w-full bg-[#ede7dd] border border-[#d5cdc0] p-2"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold block mb-1">LAUNCH DATE:</label>
                    <input
                      type="date"
                      value={dropDate}
                      onChange={(e) => setDropDate(e.target.value)}
                      className="w-full bg-[#ede7dd] border border-[#d5cdc0] p-2"
                    />
                  </div>
                  <div>
                    <label className="font-bold block mb-1">LAUNCH TIME:</label>
                    <input
                      type="text"
                      value={dropTime}
                      onChange={(e) => setDropTime(e.target.value)}
                      className="w-full bg-[#ede7dd] border border-[#d5cdc0] p-2"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold block mb-1">AVAILABLE ALLOTMENT STOCK:</label>
                  <input
                    type="number"
                    value={dropStock}
                    onChange={(e) => setDropStock(Number(e.target.value))}
                    className="w-full bg-[#ede7dd] border border-[#d5cdc0] p-2"
                  />
                </div>

                <div className="flex gap-2 pt-3 border-t border-[#d5cdc0]">
                  <button
                    type="button"
                    onClick={() => setShowAddDropModal(false)}
                    className="flex-1 py-2 border border-[#d5cdc0] font-bold"
                  >
                    CANCEL
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2 bg-[#141312] text-[#f5efe6] font-bold"
                  >
                    SCHEDULE DROP
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL: ADD COUPON */}
        {showAddCouponModal && (
          <div className="fixed inset-0 z-60 bg-[#1a1816]/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#f5efe6] border border-[#d5cdc0] max-w-sm w-full p-6 space-y-4 shadow-2xl text-xs">
              <div className="flex justify-between items-center border-b border-[#d5cdc0] pb-3">
                <span className="font-bold text-sm uppercase text-[#1a1816]">
                  DEPLOY PRIVILEGE VOUCHER
                </span>
                <button onClick={() => setShowAddCouponModal(false)}>
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleCreateCoupon} className="space-y-3">
                <div>
                  <label className="font-bold block mb-1">VOUCHER CODE:</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. FLASH25"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="w-full bg-[#ede7dd] border border-[#d5cdc0] p-2 uppercase tracking-wider"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold block mb-1">DISCOUNT %:</label>
                    <input
                      type="number"
                      value={couponDiscount}
                      onChange={(e) => setCouponDiscount(Number(e.target.value))}
                      className="w-full bg-[#ede7dd] border border-[#d5cdc0] p-2"
                    />
                  </div>
                  <div>
                    <label className="font-bold block mb-1">MIN ORDER ($):</label>
                    <input
                      type="number"
                      value={couponMinOrder}
                      onChange={(e) => setCouponMinOrder(Number(e.target.value))}
                      className="w-full bg-[#ede7dd] border border-[#d5cdc0] p-2"
                    />
                  </div>
                </div>

                <div className="flex gap-2 pt-3 border-t border-[#d5cdc0]">
                  <button
                    type="button"
                    onClick={() => setShowAddCouponModal(false)}
                    className="flex-1 py-2 border border-[#d5cdc0] font-bold"
                  >
                    CANCEL
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2 bg-[#141312] text-[#f5efe6] font-bold"
                  >
                    DEPLOY COUPON
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
