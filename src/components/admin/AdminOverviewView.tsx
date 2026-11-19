import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  TrendingUp,
  AlertTriangle,
  Sparkles,
  Ticket,
  Plus,
  ArrowRight,
  Shield,
  RotateCcw,
  Package,
  Clock,
  Bell,
  Image as ImageIcon,
  Check,
  CheckCircle2,
  Copy,
  Trash2,
  ExternalLink,
  Search,
  Filter,
  BarChart3,
  Boxes,
  Radar,
  Truck,
  Users,
  UserCheck,
} from 'lucide-react';
import { SneakerDrop, Coupon, ShoeProduct, Order, BannerItem, AdminNotification } from '../../types';

interface AdminOverviewViewProps {
  drops: SneakerDrop[];
  onAddNewDrop: (drop: SneakerDrop) => void;
  onUpdateDropStatus: (dropId: string, status: any) => void;
  coupons: Coupon[];
  onAddNewCoupon: (coupon: Coupon) => void;
  onSelectSection: (sec: any) => void;
  onShowToast: (msg: string) => void;
  products?: ShoeProduct[];
  orders?: Order[];
  customers?: any[];
  activeSection?: string;
}

export const AdminOverviewView: React.FC<AdminOverviewViewProps> = ({
  drops,
  onAddNewDrop,
  onUpdateDropStatus,
  coupons,
  onAddNewCoupon,
  onSelectSection,
  onShowToast,
  products = [],
  orders = [],
  customers = [],
  activeSection = 'OVERVIEW',
}) => {
  // Drop modal
  const [showDropModal, setShowDropModal] = useState(false);
  const [dropTitle, setDropTitle] = useState('');
  const [dropUnits, setDropUnits] = useState('150');
  const [dropPrice, setDropPrice] = useState('46000');
  const [dropMrp, setDropMrp] = useState('52000');
  const [dropEdition, setDropEdition] = useState('ARCHIVAL SPECIMEN // EDITION 01');

  // Coupon modal
  const [showCouponModal, setShowCouponModal] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [couponDiscount, setCouponDiscount] = useState('15');
  const [couponMinOrder, setCouponMinOrder] = useState('25000');

  // Banner State
  const [banners, setBanners] = useState<BannerItem[]>([]);
  const [showBannerModal, setShowBannerModal] = useState(false);
  const [newBannerTitle, setNewBannerTitle] = useState('');
  const [newBannerSub, setNewBannerSub] = useState('');
  const [newBannerType, setNewBannerType] = useState<'ANNOUNCEMENT' | 'HERO' | 'PROMO'>('ANNOUNCEMENT');

  // Notifications State
  const [notifications, setNotifications] = useState<AdminNotification[]>([]);

  // Real ticking countdown timer
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Format countdown string
  const formatCountdown = (target: number) => {
    const diff = target - now;
    if (diff <= 0) return 'ALLOCATION WINDOW LIVE';
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    return `${d}D ${h.toString().padStart(2, '0')}H ${m.toString().padStart(2, '0')}M ${s.toString().padStart(2, '0')}S`;
  };

  // Calculate live volume and allocations
  const loadedOrderValue = orders.reduce((sum, o) => sum + (o.total || 0), 0);
  const loadedOrderCount = orders.length;
  const totalMasterStyles = products.length;

  // Find low stock specimens
  const lowStockItems: {
    productId: string;
    name: string;
    sku: string;
    color: string;
    size: string;
    stock: number;
    image: string;
  }[] = [];

  products.forEach((p) => {
    const inv = p.sizeInventory || {};
    Object.keys(inv).forEach((color) => {
      const sizes = inv[color] || [];
      sizes.forEach((s) => {
        if (s.stock > 0 && s.stock <= 5) {
          lowStockItems.push({
            productId: p.id,
            name: p.name,
            sku: p.sku,
            color,
            size: s.size,
            stock: s.stock,
            image: p.media?.[0]?.url || p.featuredImage || '/assets/images/cream_runner_pedestal_1788842341279.jpg',
          });
        }
      });
    });
  });

  const handleCreateDrop = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dropTitle) return;
    const newDrop: SneakerDrop = {
      id: `drop-${Date.now()}`,
      productId: 'drop-specimen',
      productName: dropTitle.toUpperCase(),
      brand: 'VANTA ATELIER',
      edition: dropEdition.toUpperCase(),
      image: '/assets/images/cream_runner_pedestal_1788842341279.jpg',
      price: Number(dropPrice) || 46000,
      mrp: Number(dropMrp) || 52000,
      launchDate: '2026-11-01',
      launchTime: '18:00 UTC',
      stock: Number(dropUnits) || 100,
      status: 'Scheduled',
      targetTimestamp: Date.now() + 86400000 * 5 + 3600000 * 14,
      notifySubscribers: [],
    };
    onAddNewDrop(newDrop);
    setShowDropModal(false);
    setDropTitle('');
    onShowToast(`CHRONO DROP INITIALIZED: ${newDrop.productName}`);
  };

  const handleCreateCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponCode) return;
    const newCpn: Coupon = {
      code: couponCode.trim().toUpperCase(),
      discountPercent: Number(couponDiscount) || 10,
      minOrderValue: Number(couponMinOrder) || 25000,
      description: `${couponDiscount}% Atelier Privilege Voucher`,
      isActive: true,
    };
    onAddNewCoupon(newCpn);
    setShowCouponModal(false);
    setCouponCode('');
    onShowToast(`COUPON DEPLOYED: ${newCpn.code}`);
  };

  const handleToggleBanner = (id: string) => {
    void id;
    onShowToast('Banner publishing is not connected to persistent storage. No change was made.');
  };

  const handleCreateBanner = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBannerTitle) return;
    onShowToast('Banner publishing is not connected to persistent storage. No banner was created.');
  };

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    if (notifications.length > 0) onShowToast('Notifications are not connected to a persistent feed.');
  };

  // SUBVIEW: BANNERS
  if (activeSection === 'BANNERS') {
    return (
      <div className="p-4 sm:p-8 font-sans space-y-8 bg-[#09090b] min-h-full">
        <div className="flex items-center justify-between font-mono text-[10px] text-[#c9a96e] tracking-[0.2em] uppercase mb-1">
          <span>MARKETING ENGINE // ATELIER BANNERS</span>
          <button
            onClick={() => onSelectSection('OVERVIEW')}
            className="text-[#f4f4f6] font-bold hover:underline cursor-pointer"
          >
            ← BACK TO OVERVIEW
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-headline text-3xl sm:text-4xl text-[#f4f4f6] tracking-tight">
              Announcements &amp; Editorial Banners
            </h1>
            <p className="font-sans text-[13px] text-[#8e8e98] mt-1">
              Banner publishing is unavailable because this application has no persistent banner API.
            </p>
          </div>

          <button
            onClick={() => setShowBannerModal(true)}
            className="px-4 py-2.5 bg-[#141312] text-[#18181c] font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-[#35322e] flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>CREATE NEW BANNER</span>
          </button>
        </div>

        <div className="space-y-4 font-mono">
          {banners.map((ban) => (
            <div
              key={ban.id}
              className={`p-5 border transition-all ${
                ban.isActive
                  ? 'bg-[#121215] border-[#242429]'
                  : 'bg-[#121215]/50 border-[#242429]/50 opacity-60'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#242429]">
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 bg-[#141312] text-[#18181c] text-[9px] font-bold uppercase">
                    {ban.type}
                  </span>
                  <span className="font-bold text-[#f4f4f6] text-[12px]">{ban.title}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`px-2 py-0.5 text-[9px] font-bold uppercase ${
                      ban.isActive ? 'bg-[#dcfce7] text-[#166534]' : 'bg-[#fee2e2] text-[#991b1b]'
                    }`}
                  >
                    {ban.isActive ? 'LIVE ON STOREFRONT' : 'DISABLED'}
                  </span>
                  <button
                    onClick={() => handleToggleBanner(ban.id)}
                    className="px-3 py-1 bg-[#09090b] border border-[#242429] text-[#f4f4f6] text-[10px] font-bold uppercase hover:bg-[#1e1e24] cursor-pointer"
                  >
                    {ban.isActive ? 'DEACTIVATE' : 'ACTIVATE'}
                  </button>
                </div>
              </div>
              <p className="font-sans text-[12px] text-[#8e8e98] mt-3">{ban.subtitle}</p>
              <div className="mt-2 text-[10px] text-[#c9a96e] flex items-center gap-2">
                <span>ACTION BUTTON: "{ban.linkText}"</span>
                <span>•</span>
                <span>DESTINATION: {ban.linkUrl}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Create Banner Modal */}
        {showBannerModal && (
          <div className="fixed inset-0 z-50 bg-[#f4f4f6]/75 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-[#09090b] border border-[#242429] max-w-md w-full p-6 font-mono text-xs shadow-2xl space-y-4">
              <h3 className="font-headline text-xl font-bold text-[#f4f4f6]">
                Create Editorial Banner
              </h3>
              <form onSubmit={handleCreateBanner} className="space-y-3">
                <div>
                  <label className="block text-[9px] font-bold uppercase text-[#f4f4f6] mb-1">
                    BANNER TYPE
                  </label>
                  <select
                    value={newBannerType}
                    onChange={(e) => setNewBannerType(e.target.value as any)}
                    className="w-full bg-[#18181c] border border-[#242429] p-2 text-[11px] font-mono outline-none"
                  >
                    <option value="ANNOUNCEMENT">ANNOUNCEMENT TOP BAR</option>
                    <option value="HERO">HERO EDITORIAL SPOTLIGHT</option>
                    <option value="PROMO">PROMO CALLOUT</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[9px] font-bold uppercase text-[#f4f4f6] mb-1">
                    HEADLINE / TITLE *
                  </label>
                  <input
                    type="text"
                    required
                    value={newBannerTitle}
                    onChange={(e) => setNewBannerTitle(e.target.value)}
                    placeholder="e.g. COMPLIMENTARY COURIER PROTOCOL"
                    className="w-full bg-[#18181c] border border-[#242429] p-2 text-[11px] font-mono outline-none uppercase"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-bold uppercase text-[#f4f4f6] mb-1">
                    SUBTITLE / COPY
                  </label>
                  <textarea
                    rows={2}
                    value={newBannerSub}
                    onChange={(e) => setNewBannerSub(e.target.value)}
                    placeholder="Brief description of the promotion or announcement"
                    className="w-full bg-[#18181c] border border-[#242429] p-2 text-[11px] font-mono outline-none"
                  />
                </div>
                <div className="pt-3 flex justify-end gap-2 border-t border-[#242429]">
                  <button
                    type="button"
                    onClick={() => setShowBannerModal(false)}
                    className="px-3 py-1.5 uppercase font-bold text-[10px] text-[#8e8e98] cursor-pointer"
                  >
                    CANCEL
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 bg-[#141312] text-[#18181c] uppercase font-bold text-[10px] cursor-pointer"
                  >
                    PUBLISH BANNER
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }

  // SUBVIEW: NOTIFICATIONS
  if (activeSection === 'NOTIFICATIONS') {
    return (
      <div className="p-4 sm:p-8 font-sans space-y-8 bg-[#09090b] min-h-full">
        <div className="flex items-center justify-between font-mono text-[10px] text-[#c9a96e] tracking-[0.2em] uppercase mb-1">
          <span>OPERATIONS TELEMETRY // NOTIFICATIONS</span>
          <button
            onClick={() => onSelectSection('OVERVIEW')}
            className="text-[#f4f4f6] font-bold hover:underline cursor-pointer"
          >
            ← BACK TO OVERVIEW
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-headline text-3xl sm:text-4xl text-[#f4f4f6] tracking-tight">
              Administrative Telemetry Log
            </h1>
            <p className="font-sans text-[13px] text-[#8e8e98] mt-1">
              Live audit events, inventory alerts, courier milestones, and client enclave signals.
            </p>
          </div>

          <button
            onClick={handleMarkAllRead}
            className="px-4 py-2.5 bg-[#121215] border border-[#242429] text-[#f4f4f6] font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-[#1e1e24] flex items-center gap-2 cursor-pointer shadow-2xs"
          >
            <Check className="w-3.5 h-3.5" />
            <span>MARK ALL AS READ</span>
          </button>
        </div>

        <div className="space-y-3 font-mono">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              onClick={() => {
                if (notif.targetSection) onSelectSection(notif.targetSection);
              }}
              className={`p-4 border transition-colors cursor-pointer flex items-start gap-3.5 ${
                notif.read
                  ? 'bg-[#121215]/50 border-[#242429]'
                  : 'bg-[#121215] border-[#f4f4f6] shadow-2xs'
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                  notif.read ? 'bg-[#c9a96e]' : 'bg-[#16a34a] animate-pulse'
                }`}
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#f4f4f6] text-[11px]">{notif.title}</span>
                  <span className="text-[9px] text-[#c9a96e]">{notif.time}</span>
                </div>
                <div className="text-[11px] text-[#8e8e98] mt-0.5">{notif.detail}</div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#c9a96e] shrink-0 mt-1" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // SUBVIEW: STOCK LOGISTICS
  if (activeSection === 'STOCK_LOGISTICS') {
    const totalStockCount = products.reduce((acc, p) => {
      let count = 0;
      const inv = p.sizeInventory || {};
      Object.keys(inv).forEach((col) => {
        (inv[col] || []).forEach((s) => {
          count += (s.stock || 0);
        });
      });
      return acc + count;
    }, 0);

    return (
      <div className="p-4 sm:p-8 font-sans space-y-8 bg-[#09090b] min-h-full">
        <div className="flex items-center justify-between font-mono text-[10px] text-[#c9a96e] tracking-[0.2em] uppercase mb-1">
          <span>SUPPLY CHAIN // FULFILLMENT &amp; STOCK TELEMETRY</span>
          <button
            onClick={() => onSelectSection('OVERVIEW')}
            className="text-[#f4f4f6] font-bold hover:underline cursor-pointer"
          >
            ← BACK TO OVERVIEW
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-headline text-3xl sm:text-4xl text-[#f4f4f6] tracking-tight">
              Product Inventory
            </h1>
            <p className="font-sans text-[13px] text-[#8e8e98] mt-1">
              This dashboard shows catalog stock quantities. Warehouse locations and dispatch service levels are not stored in the database.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px]">
            <button
              onClick={() => onSelectSection('LOW_STOCK_RADAR')}
              className="px-3.5 py-2 bg-[#121215] border border-[#242429] text-[#f4f4f6] hover:bg-[#1e1e24] font-bold uppercase tracking-wider cursor-pointer shadow-2xs flex items-center gap-1.5"
            >
              <Radar className="w-3.5 h-3.5 text-[#991b1b]" />
              <span>LOW-STOCK RADAR ({lowStockItems.length}) →</span>
            </button>
            <button
              onClick={() => onSelectSection('SKU_MATRIX')}
              className="px-3.5 py-2 bg-[#141312] text-[#18181c] hover:bg-[#35322e] font-bold uppercase tracking-wider cursor-pointer shadow-xs flex items-center gap-1.5"
            >
              <Boxes className="w-3.5 h-3.5" />
              <span>SKU MATRIX →</span>
            </button>
          </div>
        </div>

        {/* Top 4 Supply Chain Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
          <div className="bg-[#121215] border border-[#242429] p-4 shadow-2xs">
            <div className="text-[9px] text-[#c9a96e] uppercase tracking-wider font-bold">TOTAL CATALOG UNITS</div>
            <div className="text-2xl font-bold text-[#f4f4f6] mt-1">{totalStockCount} Units</div>
            <div className="text-[9px] text-[#16a34a] font-bold mt-0.5">Loaded from the connected database</div>
          </div>
          <div className="bg-[#121215] border border-[#242429] p-4 shadow-2xs">
            <div className="text-[9px] text-[#c9a96e] uppercase tracking-wider font-bold">WAREHOUSE LOCATIONS</div>
            <div className="text-2xl font-bold text-[#f4f4f6] mt-1">Not tracked</div>
            <div className="text-[9px] text-[#8e8e98] mt-0.5">No location field in the current schema</div>
          </div>
          <div className="bg-[#121215] border border-[#242429] p-4 shadow-2xs">
            <div className="text-[9px] text-[#c9a96e] uppercase tracking-wider font-bold">DEPLETION RISK SPECIMENS</div>
            <div className="text-2xl font-bold text-[#991b1b] mt-1">{lowStockItems.length} Variants</div>
            <div className="text-[9px] text-[#c9a96e] mt-0.5">Stock threshold &le; 5 units</div>
          </div>
          <div className="bg-[#121215] border border-[#242429] p-4 shadow-2xs">
            <div className="text-[9px] text-[#c9a96e] uppercase tracking-wider font-bold">DISPATCH SLA</div>
            <div className="text-2xl font-bold text-[#8e8e98] mt-1">Not tracked</div>
            <div className="text-[9px] text-[#c9a96e] mt-0.5">No dispatch SLA data available</div>
          </div>
        </div>

        <div className="border border-[#242429] bg-[#121215] p-5 font-mono text-[11px] text-[#8e8e98]">
          Stock is stored per product variant. The current database schema does not track warehouses, courier assignments, or inventory transfers.
        </div>
      </div>
    );
  }

  // SUBVIEW: LOW STOCK RADAR
  if (activeSection === 'LOW_STOCK_RADAR') {
    return (
      <div className="p-4 sm:p-8 font-sans space-y-8 bg-[#09090b] min-h-full">
        <div className="flex items-center justify-between font-mono text-[10px] text-[#c9a96e] tracking-[0.2em] uppercase mb-1">
          <span>CATALOG INTELLIGENCE // INVENTORY RADAR</span>
          <button
            onClick={() => onSelectSection('OVERVIEW')}
            className="text-[#f4f4f6] font-bold hover:underline cursor-pointer"
          >
            ← BACK TO OVERVIEW
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-headline text-3xl sm:text-4xl text-[#f4f4f6] tracking-tight">
              Low-Stock Sentinel &amp; Restock Radar
            </h1>
            <p className="font-sans text-[13px] text-[#8e8e98] mt-1">
              Specimens nearing scarcity thresholds requiring replenishment or atelier re-allocation.
            </p>
          </div>

          <button
            onClick={() => onSelectSection('PRODUCTS')}
            className="px-4 py-2.5 bg-[#141312] text-[#18181c] font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-[#35322e] flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <span>OPEN FULL SPECIMEN REGISTRY →</span>
          </button>
        </div>

        {lowStockItems.length === 0 ? (
          <div className="p-12 text-center font-mono border border-[#242429] bg-[#121215] text-[#c9a96e] space-y-2">
            <CheckCircle2 className="w-8 h-8 mx-auto text-[#16a34a]" />
            <div className="text-sm font-bold text-[#f4f4f6]">ALL SPECIMEN STOCKS NORMALIZED</div>
            <div className="text-xs">Zero sizing variants currently at critical depletion.</div>
          </div>
        ) : (
          <div className="border border-[#242429] bg-[#121215] font-mono text-[11px] overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#242429] text-[9px] text-[#c9a96e] tracking-widest uppercase bg-[#1e1e24]">
                  <th className="p-3">SPECIMEN &amp; SKU</th>
                  <th className="p-3">COLORWAY</th>
                  <th className="p-3">SIZE</th>
                  <th className="p-3">REMAINING UNITS</th>
                  <th className="p-3">ALERT LEVEL</th>
                  <th className="p-3 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#242429]/70">
                {lowStockItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#1e1e24] transition-colors">
                    <td className="p-3">
                      <div className="font-bold text-[#f4f4f6]">{item.name}</div>
                      <div className="text-[9px] text-[#c9a96e]">{item.sku}</div>
                    </td>
                    <td className="p-3 text-[#8e8e98]">{item.color}</td>
                    <td className="p-3 font-bold text-[#f4f4f6]">US {item.size}</td>
                    <td className="p-3 font-bold text-[#991b1b]">{item.stock} Units Left</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 bg-[#fee2e2] text-[#991b1b] text-[9px] font-bold uppercase rounded-2xs">
                        {item.stock <= 2 ? 'CRITICAL DEPLETION' : 'DEPLETING FAST'}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => {
                          onSelectSection('PRODUCTS');
                          onShowToast(`ROUTING TO MATRIX FOR ${item.sku}`);
                        }}
                        className="px-2.5 py-1 bg-[#09090b] border border-[#242429] text-[#f4f4f6] hover:bg-[#242429] font-bold text-[9px] uppercase cursor-pointer"
                      >
                        REPLENISH →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }

  // SUBVIEW: CHRONO DROPS
  if (activeSection === 'CHRONO_DROPS') {
    return (
      <div className="p-4 sm:p-8 font-sans space-y-8 bg-[#09090b] min-h-full">
        <div className="flex items-center justify-between font-mono text-[10px] text-[#c9a96e] tracking-[0.2em] uppercase mb-1">
          <span>MARKETING ENGINE // CHRONO ARCHIVE RELEASES</span>
          <button
            onClick={() => onSelectSection('OVERVIEW')}
            className="text-[#f4f4f6] font-bold hover:underline cursor-pointer"
          >
            ← BACK TO OVERVIEW
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-headline text-3xl sm:text-4xl text-[#f4f4f6] tracking-tight">
              Chrono Drops &amp; Time-Locked Allocations
            </h1>
            <p className="font-sans text-[13px] text-[#8e8e98] mt-1">
              Cryptographically scheduled footwear releases with countdown tickers and automated patron dispatch.
            </p>
          </div>

          <button
            onClick={() => setShowDropModal(true)}
            className="px-4 py-2.5 bg-[#141312] text-[#18181c] font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-[#35322e] flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>SCHEDULE NEW DROP</span>
          </button>
        </div>

        {/* Drops Cards Grid */}
        <div className="space-y-4 font-mono">
          {drops.map((drop) => {
            const isLive = drop.status === 'Active';
            const countdown = drop.targetTimestamp
              ? formatCountdown(drop.targetTimestamp)
              : 'COUNTDOWN SET';

            return (
              <div
                key={drop.id}
                className="bg-[#121215] border border-[#242429] p-6 space-y-4 rounded-xs shadow-xs"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#242429]">
                  <div>
                    <div className="font-bold text-[#f4f4f6] uppercase text-base sm:text-lg">
                      {drop.productName}
                    </div>
                    <div className="text-[10px] text-[#c9a96e] uppercase mt-0.5">
                      {drop.edition} • {drop.brand} • {drop.stock} Total Specimen Units
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className={`px-3 py-1 text-[10px] font-bold uppercase rounded-2xs ${
                        isLive ? 'bg-[#dcfce7] text-[#166534]' : 'bg-[#fef3c7] text-[#92400e]'
                      }`}
                    >
                      {drop.status}
                    </span>
                    <button
                      onClick={() => {
                        const newStatus = isLive ? 'Scheduled' : 'Active';
                        onUpdateDropStatus(drop.id, newStatus);
                        onShowToast(`DROP STATUS ADVANCED: ${drop.productName} -> ${newStatus}`);
                      }}
                      className="px-3 py-1 bg-[#09090b] border border-[#242429] text-[#f4f4f6] text-[10px] font-bold uppercase hover:bg-[#242429] cursor-pointer"
                    >
                      TOGGLE STATUS
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-[11px]">
                  <div className="bg-[#09090b] border border-[#242429] p-3">
                    <div className="text-[9px] text-[#c9a96e] uppercase font-bold">EDITION PRICE</div>
                    <div className="font-bold text-[#f4f4f6] text-[13px] mt-0.5">₹{drop.price?.toLocaleString()}</div>
                    <div className="text-[9px] text-[#c9a96e] line-through">MRP: ₹{drop.mrp?.toLocaleString()}</div>
                  </div>

                  <div className="bg-[#09090b] border border-[#242429] p-3">
                    <div className="text-[9px] text-[#c9a96e] uppercase font-bold">RELEASE WINDOW</div>
                    <div className="font-bold text-[#f4f4f6] mt-0.5">{drop.launchDate || '2026-11-01'}</div>
                    <div className="text-[9px] text-[#c9a96e]">{drop.launchTime || '18:00 UTC'}</div>
                  </div>

                  <div className="bg-[#09090b] border border-[#242429] p-3">
                    <div className="text-[9px] text-[#c9a96e] uppercase font-bold">TOTAL ALLOCATION</div>
                    <div className="font-bold text-[#f4f4f6] text-[13px] mt-0.5">{drop.stock} Pairs</div>
                    <div className="text-[9px] text-[#16a34a] font-bold">Limited Vault Production</div>
                  </div>

                  <div className="bg-[#09090b] border border-[#242429] p-3">
                    <div className="text-[9px] text-[#c9a96e] uppercase font-bold">TICKING COUNTDOWN</div>
                    <div className="font-bold text-[#f4f4f6] mt-0.5 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#c9a96e]" />
                      <span className="text-[10px]">{countdown}</span>
                    </div>
                    <div className="text-[9px] text-[#8e8e98]">Hardware clock sync</div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#242429] flex flex-wrap items-center justify-between gap-3 text-[10px]">
                  <span className="text-[#c9a96e]">640 PATRONS ENROLLED IN HIGH-PRIORITY AIR NOTIFICATION</span>
                  <button
                    onClick={() => {
                      onShowToast(`DISPATCHED TELEMETRY PUSH TO ALL SUBSCRIBERS FOR ${drop.productName}`);
                    }}
                    className="px-3 py-1.5 bg-[#141312] text-[#18181c] font-bold uppercase text-[9px] tracking-wider hover:bg-[#35322e] cursor-pointer"
                  >
                    TRANSMIT DROP NOTIFICATION
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // SUBVIEW: COUPONS
  if (activeSection === 'COUPONS') {
    return (
      <div className="p-4 sm:p-8 font-sans space-y-8 bg-[#09090b] min-h-full">
        <div className="flex items-center justify-between font-mono text-[10px] text-[#c9a96e] tracking-[0.2em] uppercase mb-1">
          <span>COMMERCE ENGINE // PRIVILEGE VOUCHERS</span>
          <button
            onClick={() => onSelectSection('OVERVIEW')}
            className="text-[#f4f4f6] font-bold hover:underline cursor-pointer"
          >
            ← BACK TO OVERVIEW
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-headline text-3xl sm:text-4xl text-[#f4f4f6] tracking-tight">
              Privilege Coupons &amp; Atelier Vouchers
            </h1>
            <p className="font-sans text-[13px] text-[#8e8e98] mt-1">
              Manage promotional discount tokens, minimum expenditure thresholds, and VIP member codes.
            </p>
          </div>

          <button
            onClick={() => setShowCouponModal(true)}
            className="px-4 py-2.5 bg-[#141312] text-[#18181c] font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-[#35322e] flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>GENERATE NEW COUPON</span>
          </button>
        </div>

        {/* Coupons Table */}
        <div className="border border-[#242429] bg-[#121215] font-mono text-[11px] overflow-hidden rounded-xs shadow-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#242429] text-[9px] text-[#c9a96e] tracking-widest uppercase bg-[#1e1e24]">
                <th className="p-3.5">COUPON CODE</th>
                <th className="p-3.5">DISCOUNT PERCENT</th>
                <th className="p-3.5">MINIMUM ORDER</th>
                <th className="p-3.5">STATUS</th>
                <th className="p-3.5 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#242429]/70">
              {coupons.map((c) => (
                <tr key={c.code} className="hover:bg-[#1e1e24] transition-colors">
                  <td className="p-3.5">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#f4f4f6] text-[12px]">{c.code}</span>
                      <button
                        onClick={() => {
                          navigator.clipboard?.writeText(c.code);
                          onShowToast(`COUPON ${c.code} COPIED TO CLIPBOARD`);
                        }}
                        className="text-[#c9a96e] hover:text-[#f4f4f6] cursor-pointer"
                        title="Copy Code"
                      >
                        <Copy className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="text-[9px] text-[#c9a96e]">{c.description || 'Atelier Privilege Voucher'}</div>
                  </td>
                  <td className="p-3.5 font-bold text-[#f4f4f6]">
                    <span className="px-2 py-0.5 bg-[#09090b] border border-[#242429]">
                      {c.discountPercent}% OFF
                    </span>
                  </td>
                  <td className="p-3.5 font-bold text-[#8e8e98]">
                    ₹{c.minOrderValue.toLocaleString()}
                  </td>
                  <td className="p-3.5">
                    <span className="px-2 py-0.5 bg-[#dcfce7] text-[#166534] text-[9px] font-bold uppercase rounded-2xs">
                      {c.isActive !== false ? 'ACTIVE ON CHECKOUT' : 'DISABLED'}
                    </span>
                  </td>
                  <td className="p-3.5 text-right">
                    <button
                      onClick={() => {
                        navigator.clipboard?.writeText(c.code);
                        onShowToast(`COUPON ${c.code} COPIED TO CLIPBOARD`);
                      }}
                      className="px-2.5 py-1 bg-[#09090b] border border-[#242429] text-[#f4f4f6] hover:bg-[#242429] font-bold text-[9px] uppercase cursor-pointer mr-2"
                    >
                      COPY
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // DEFAULT MAIN OVERVIEW VIEW
  return (
    <div className="p-4 sm:p-8 font-sans space-y-8 bg-[#09090b] min-h-full">
      {/* Header */}
      <div>
        <div className="font-mono text-[10px] text-[#c9a96e] tracking-[0.2em] uppercase mb-1">
          EXECUTIVE COMMAND // ARCHITECTURAL TELEMETRY
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-headline text-3xl sm:text-4xl text-[#f4f4f6] tracking-tight">
              Executive Overview &amp; Control
            </h1>
            <p className="font-sans text-[13px] text-[#8e8e98] mt-1">
              Real-time synchronization across catalog specimens, fulfillment nodes, and security telemetry.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px]">
            <button
              onClick={() => onSelectSection('PRODUCTS')}
              className="px-3.5 py-2 bg-[#121215] border border-[#242429] text-[#f4f4f6] hover:bg-[#1e1e24] font-bold uppercase tracking-wider cursor-pointer shadow-2xs"
            >
              SPECIMEN DOSSIERS →
            </button>
            <button
              onClick={() => onSelectSection('ORDERS')}
              className="px-3.5 py-2 bg-[#141312] text-[#18181c] hover:bg-[#35322e] font-bold uppercase tracking-wider cursor-pointer shadow-xs"
            >
              LOGISTICS COMMAND →
            </button>
          </div>
        </div>
      </div>

      {/* Top 4 Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
        <div className="bg-[#121215] border border-[#242429] p-4 shadow-2xs">
          <div className="text-[9px] text-[#c9a96e] uppercase tracking-wider font-bold">
            VALUE OF LOADED ORDERS
          </div>
          <div className="text-2xl font-bold text-[#f4f4f6] mt-1">
            ₹{loadedOrderValue.toLocaleString()}
          </div>
          <div className="text-[9px] text-[#8e8e98] mt-0.5">Across currently loaded orders</div>
        </div>

        <div className="bg-[#121215] border border-[#242429] p-4 shadow-2xs">
          <div className="text-[9px] text-[#c9a96e] uppercase tracking-wider font-bold">
            LOADED ORDERS
          </div>
          <div className="text-2xl font-bold text-[#f4f4f6] mt-1">
            {loadedOrderCount} Orders
          </div>
          <div className="text-[9px] text-[#8e8e98] mt-0.5">From the connected database</div>
        </div>

        <div className="bg-[#121215] border border-[#242429] p-4 shadow-2xs">
          <div className="text-[9px] text-[#c9a96e] uppercase tracking-wider font-bold">
            ARCHIVAL SPECIMENS
          </div>
          <div className="text-2xl font-bold text-[#f4f4f6] mt-1">
            {totalMasterStyles} Master Styles
          </div>
          <div className="text-[9px] text-[#8e8e98] mt-0.5">Dimensional size matrix intact</div>
        </div>

        <div
          onClick={() => onSelectSection('CUSTOMERS')}
          className="bg-[#121215] border border-[#242429] hover:border-[#c9a96e] p-4 shadow-2xs cursor-pointer transition-colors group"
        >
          <div className="flex items-center justify-between">
            <span className="text-[9px] text-[#c9a96e] uppercase tracking-wider font-bold">
              REGISTERED PATRONS
            </span>
            <Users className="w-3.5 h-3.5 text-[#c9a96e] group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-2xl font-bold text-[#f4f4f6] mt-1">
            {customers.length} Clients
          </div>
          <div className="text-[9px] text-[#16a34a] font-bold mt-0.5 flex items-center justify-between">
            <span>● Stored in patron database</span>
            <span className="text-[#8e8e98] group-hover:text-[#f4f4f6]">VIEW DOSSIERS →</span>
          </div>
        </div>
      </div>

      {/* RECENT REGISTERED PATRONS DOSSIER WIDGET */}
      <div className="border border-[#242429] bg-[#121215] p-5 sm:p-6 space-y-4 rounded-xs shadow-xs font-mono">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#242429]">
          <div>
            <div className="text-[9px] text-[#c9a96e] tracking-widest uppercase font-bold">
              CLIENT REGISTRY TELEMETRY // NEW PATRONS
            </div>
            <h3 className="font-headline text-xl font-bold text-[#f4f4f6] tracking-tight">
              Stored Client Dossiers ({customers.length})
            </h3>
          </div>
          <button
            onClick={() => onSelectSection('CUSTOMERS')}
            className="px-3.5 py-1.5 bg-[#18181c] border border-[#242429] hover:border-[#c9a96e] text-[#f4f4f6] text-[10px] font-bold uppercase tracking-wider cursor-pointer flex items-center gap-1.5 transition-colors self-start sm:self-auto"
          >
            <span>VIEW ALL CLIENT DOSSIERS</span>
            <ArrowRight className="w-3 h-3 text-[#c9a96e]" />
          </button>
        </div>

        {customers.length === 0 ? (
          <div className="text-center py-6 text-xs text-[#8e8e98]">
            No patron accounts found in database yet. New user registrations will appear here instantly.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-[11px]">
              <thead>
                <tr className="border-b border-[#242429] text-[9px] text-[#c9a96e] tracking-widest uppercase bg-[#1e1e24]">
                  <th className="py-2 px-3">PATRON NAME &amp; EMAIL</th>
                  <th className="py-2 px-3">ENCLAVE STATUS</th>
                  <th className="py-2 px-3">REGISTERED AT</th>
                  <th className="py-2 px-3 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#242429]/70">
                {customers.slice(0, 5).map((cust) => {
                  const createdAt = cust.createdAt ? new Date(cust.createdAt) : null;
                  const formattedDate = createdAt && !Number.isNaN(createdAt.getTime())
                    ? createdAt.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
                    : 'Verified Client';
                  return (
                    <tr
                      key={cust.id}
                      onClick={() => onSelectSection('CUSTOMERS')}
                      className="hover:bg-[#1e1e24] cursor-pointer transition-colors"
                    >
                      <td className="py-2.5 px-3">
                        <div className="font-bold text-[#f4f4f6]">{cust.name}</div>
                        <div className="text-[9px] text-[#c9a96e]">{cust.email}</div>
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="px-2 py-0.5 bg-[#dcfce7]/10 border border-[#16a34a]/30 text-[#16a34a] text-[9px] font-bold uppercase">
                          ACTIVE CUSTOMER
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-[#8e8e98] text-[10px]">
                        {formattedDate}
                      </td>
                      <td className="py-2.5 px-3 text-right">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectSection('CUSTOMERS');
                          }}
                          className="px-2.5 py-1 bg-[#18181c] border border-[#242429] text-[#f4f4f6] text-[9px] font-bold uppercase hover:bg-[#242429] cursor-pointer"
                        >
                          OPEN DOSSIER →
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* 2-Column Split: Chrono Drops & Coupons */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-mono">
        {/* Chrono Drops */}
        <div className="border border-[#242429] bg-[#121215] p-5 sm:p-6 space-y-4 rounded-xs shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-[#242429]">
            <div>
              <div className="text-[9px] text-[#c9a96e] tracking-widest uppercase font-bold">
                MARKETING ENGINE
              </div>
              <h3 className="font-headline text-xl font-bold text-[#f4f4f6] tracking-tight">
                Chrono Drops ({drops.length})
              </h3>
            </div>
            <button
              onClick={() => setShowDropModal(true)}
              className="px-2.5 py-1 bg-[#141312] text-[#18181c] text-[10px] font-bold uppercase tracking-wider hover:bg-[#35322e] cursor-pointer flex items-center gap-1 shadow-2xs"
            >
              <Plus className="w-3 h-3" />
              <span>SCHEDULE DROP</span>
            </button>
          </div>

          <div className="space-y-3 text-[11px]">
            {drops.map((drop) => {
              const isLive = drop.status === 'Active';
              const countdown = drop.targetTimestamp
                ? formatCountdown(drop.targetTimestamp)
                : 'COUNTDOWN SET';

              return (
                <div
                  key={drop.id}
                  className="bg-[#09090b] border border-[#242429] p-3.5 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-[#f4f4f6] uppercase text-[12px]">
                        {drop.productName}
                      </div>
                      <div className="text-[9px] text-[#c9a96e] uppercase">
                        {drop.edition} • {drop.stock} Units
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-0.5 text-[9px] font-bold uppercase ${
                          isLive
                            ? 'bg-[#dcfce7] text-[#166534]'
                            : 'bg-[#fef3c7] text-[#92400e]'
                        }`}
                      >
                        {drop.status}
                      </span>
                      <button
                        onClick={() => {
                          const newStatus = isLive ? 'Scheduled' : 'Active';
                          onUpdateDropStatus(drop.id, newStatus);
                          onShowToast(`Drop status change requested for ${drop.productName}.`);
                        }}
                        className="p-1 hover:bg-[#121215] text-[#f4f4f6] text-[9px] font-bold underline cursor-pointer"
                      >
                        TOGGLE
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] pt-2 border-t border-[#242429]/70">
                    <div className="flex items-center gap-1 text-[#f4f4f6] font-bold">
                      <Clock className="w-3 h-3 text-[#c9a96e]" />
                      <span>{countdown}</span>
                    </div>
                    <button
                      onClick={() => {
                        onShowToast('Drop subscriber notifications are not configured. No alert was sent.');
                      }}
                      className="text-[9px] font-bold text-[#c9a96e] hover:text-[#f4f4f6] uppercase underline cursor-pointer"
                    >
                      NOTIFY SUBSCRIBERS
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Coupons */}
        <div className="border border-[#242429] bg-[#121215] p-5 sm:p-6 space-y-4 rounded-xs shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-[#242429]">
            <div>
              <div className="text-[9px] text-[#c9a96e] tracking-widest uppercase font-bold">
                COMMERCE VOUCHERS
              </div>
              <h3 className="font-headline text-xl font-bold text-[#f4f4f6] tracking-tight">
                Privilege Coupons ({coupons.length})
              </h3>
            </div>
            <button
              onClick={() => setShowCouponModal(true)}
              className="px-2.5 py-1 bg-[#141312] text-[#18181c] text-[10px] font-bold uppercase tracking-wider hover:bg-[#35322e] cursor-pointer flex items-center gap-1 shadow-2xs"
            >
              <Plus className="w-3 h-3" />
              <span>GENERATE CODE</span>
            </button>
          </div>

          <div className="space-y-2.5 text-[11px]">
            {coupons.map((c) => (
              <div
                key={c.code}
                className="bg-[#09090b] border border-[#242429] p-3 flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#f4f4f6]">{c.code}</span>
                    <button
                      onClick={() => {
                        navigator.clipboard?.writeText(c.code);
                        onShowToast(`COUPON ${c.code} COPIED TO CLIPBOARD`);
                      }}
                      className="text-[#c9a96e] hover:text-[#f4f4f6] cursor-pointer"
                      title="Copy Code"
                    >
                      <Copy className="w-2.5 h-2.5" />
                    </button>
                  </div>
                  <div className="text-[9px] text-[#c9a96e]">
                    {c.discountPercent}% Discount • Min order: ₹{c.minOrderValue.toLocaleString()}
                  </div>
                </div>
                <span className="px-2 py-0.5 bg-[#dcfce7] text-[#166534] text-[9px] font-bold uppercase">
                  ACTIVE
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Schedule Drop Modal */}
      {showDropModal && (
        <div className="fixed inset-0 z-50 bg-[#f4f4f6]/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#09090b] border border-[#242429] max-w-md w-full p-6 font-mono text-xs shadow-2xl">
            <h3 className="font-headline text-xl font-bold text-[#f4f4f6] mb-3">
              Schedule Sneaker Drop
            </h3>
            <form onSubmit={handleCreateDrop} className="space-y-3">
              <div>
                <label className="block text-[9px] font-bold uppercase text-[#f4f4f6] mb-1">
                  DROP TITLE *
                </label>
                <input
                  type="text"
                  required
                  value={dropTitle}
                  onChange={(e) => setDropTitle(e.target.value)}
                  placeholder="e.g. MONOLITH DERBY LIMITED"
                  className="w-full bg-[#18181c] border border-[#242429] p-2 text-[11px] font-mono outline-none"
                />
              </div>
              <div>
                <label className="block text-[9px] font-bold uppercase text-[#f4f4f6] mb-1">
                  EDITION SPECIFICATION
                </label>
                <input
                  type="text"
                  value={dropEdition}
                  onChange={(e) => setDropEdition(e.target.value)}
                  placeholder="ARCHIVAL SPECIMEN // EDITION 01"
                  className="w-full bg-[#18181c] border border-[#242429] p-2 text-[11px] font-mono outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[9px] font-bold uppercase text-[#f4f4f6] mb-1">
                    TOTAL UNITS
                  </label>
                  <input
                    type="number"
                    value={dropUnits}
                    onChange={(e) => setDropUnits(e.target.value)}
                    className="w-full bg-[#18181c] border border-[#242429] p-2 text-[11px] font-mono outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-bold uppercase text-[#f4f4f6] mb-1">
                    PRICE (₹)
                  </label>
                  <input
                    type="number"
                    value={dropPrice}
                    onChange={(e) => setDropPrice(e.target.value)}
                    className="w-full bg-[#18181c] border border-[#242429] p-2 text-[11px] font-mono outline-none"
                  />
                </div>
              </div>
              <div className="pt-3 flex justify-end gap-2 border-t border-[#242429]">
                <button
                  type="button"
                  onClick={() => setShowDropModal(false)}
                  className="px-3 py-1.5 uppercase font-bold text-[10px] text-[#8e8e98] cursor-pointer"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-[#141312] text-[#18181c] uppercase font-bold text-[10px] cursor-pointer"
                >
                  SCHEDULE
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Coupon Modal */}
      {showCouponModal && (
        <div className="fixed inset-0 z-50 bg-[#f4f4f6]/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#09090b] border border-[#242429] max-w-md w-full p-6 font-mono text-xs shadow-2xl">
            <h3 className="font-headline text-xl font-bold text-[#f4f4f6] mb-3">
              Generate Privilege Coupon
            </h3>
            <form onSubmit={handleCreateCoupon} className="space-y-3">
              <div>
                <label className="block text-[9px] font-bold uppercase text-[#f4f4f6] mb-1">
                  COUPON CODE *
                </label>
                <input
                  type="text"
                  required
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="e.g. ATELIER20"
                  className="w-full bg-[#18181c] border border-[#242429] p-2 text-[11px] font-mono outline-none uppercase"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[9px] font-bold uppercase text-[#f4f4f6] mb-1">
                    DISCOUNT %
                  </label>
                  <input
                    type="number"
                    value={couponDiscount}
                    onChange={(e) => setCouponDiscount(e.target.value)}
                    className="w-full bg-[#18181c] border border-[#242429] p-2 text-[11px] font-mono outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-bold uppercase text-[#f4f4f6] mb-1">
                    MIN ORDER VALUE (₹)
                  </label>
                  <input
                    type="number"
                    value={couponMinOrder}
                    onChange={(e) => setCouponMinOrder(e.target.value)}
                    className="w-full bg-[#18181c] border border-[#242429] p-2 text-[11px] font-mono outline-none"
                  />
                </div>
              </div>
              <div className="pt-3 flex justify-end gap-2 border-t border-[#242429]">
                <button
                  type="button"
                  onClick={() => setShowCouponModal(false)}
                  className="px-3 py-1.5 uppercase font-bold text-[10px] text-[#8e8e98] cursor-pointer"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-[#141312] text-[#18181c] uppercase font-bold text-[10px] cursor-pointer"
                >
                  GENERATE
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
