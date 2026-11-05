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
  activeSection?: string;
}

const INITIAL_BANNERS: BannerItem[] = [
  {
    id: 'ban-1',
    title: 'GLOBAL AIR FREIGHT PROTOCOL',
    subtitle: 'Priority air courier dispatch active across 42 atelier metropolitan nodes.',
    linkText: 'DISPATCH TELEMETRY',
    linkUrl: '#orders',
    isActive: true,
    type: 'ANNOUNCEMENT',
  },
  {
    id: 'ban-2',
    title: 'ARCHIVAL CAPSULE 04 // MONOLITH SERIES',
    subtitle: 'Limited allocations in raw travertine nubuck and carbon graphite.',
    linkText: 'INSPECT DOSSIER',
    linkUrl: '#catalog',
    isActive: true,
    type: 'HERO',
  },
  {
    id: 'ban-3',
    title: 'VIP CONCIERGE ACCESS GATED',
    subtitle: 'Private appointments and bespoke size calibrations open for Tier 01 Patrons.',
    linkText: 'PATRON PORTAL',
    linkUrl: '#patrons',
    isActive: false,
    type: 'PROMO',
  },
];

const INITIAL_NOTIFICATIONS: AdminNotification[] = [
  {
    id: 'notif-1',
    type: 'ORDER',
    title: 'PRIORITY AIR DISPATCH QUEUED',
    detail: 'Order #VNT-9821 allocated to Milan Malpensa DHL air courier node.',
    time: '4 MINS AGO',
    read: false,
    targetSection: 'ORDERS',
    targetId: 'ord-9821',
  },
  {
    id: 'notif-2',
    type: 'STOCK',
    title: 'CRITICAL INVENTORY RADAR TRIGGER',
    detail: 'X-01 Core Runner Travertine (Size US 9) reached minimum threshold of 2 units.',
    time: '18 MINS AGO',
    read: false,
    targetSection: 'PRODUCTS',
    targetId: '1',
  },
  {
    id: 'notif-3',
    type: 'EXCHANGE',
    title: 'EXCHANGE QC APPRAISAL COMPLETE',
    detail: 'Optical scan passed for Case #EX-104; replacement ready for allocation.',
    time: '42 MINS AGO',
    read: false,
    targetSection: 'RETURNS_EXCHANGES',
    targetId: 'ex-104',
  },
  {
    id: 'notif-4',
    type: 'DROP',
    title: 'CHRONO DROP REGISTRATION SPIKE',
    detail: '640 patrons subscribed to the upcoming Monolith Derby Limited allocation.',
    time: '2 HOURS AGO',
    read: true,
    targetSection: 'CHRONO_DROPS',
  },
  {
    id: 'notif-5',
    type: 'SECURITY',
    title: 'IMMUTABLE AUDIT ENTRY LOGGED',
    detail: 'TLS 1.3 handshake re-keyed; Argon2id root enclave verified at 100%.',
    time: '3 HOURS AGO',
    read: true,
    targetSection: 'SECURITY_CLUSTER',
  },
];

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
  const [banners, setBanners] = useState<BannerItem[]>(INITIAL_BANNERS);
  const [showBannerModal, setShowBannerModal] = useState(false);
  const [newBannerTitle, setNewBannerTitle] = useState('');
  const [newBannerSub, setNewBannerSub] = useState('');
  const [newBannerType, setNewBannerType] = useState<'ANNOUNCEMENT' | 'HERO' | 'PROMO'>('ANNOUNCEMENT');

  // Notifications State
  const [notifications, setNotifications] = useState<AdminNotification[]>(INITIAL_NOTIFICATIONS);

  // Timeframe selector for chart
  const [timeframe, setTimeframe] = useState<'7D' | '30D' | '90D'>('7D');

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
  const grossDailyVolume = orders.reduce((sum, o) => sum + (o.total || 0), 0) || 548500;
  const activeAllocationsCount = orders.length > 0 ? orders.length : 1428;
  const totalMasterStyles = products.length > 0 ? products.length : 48;

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
    setBanners((prev) =>
      prev.map((b) => (b.id === id ? { ...b, isActive: !b.isActive } : b))
    );
    onShowToast('BANNER STATUS UPDATED');
  };

  const handleCreateBanner = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBannerTitle) return;
    const newB: BannerItem = {
      id: `ban-${Date.now()}`,
      title: newBannerTitle.toUpperCase(),
      subtitle: newBannerSub,
      linkText: 'DISCOVER MORE',
      linkUrl: '#',
      isActive: true,
      type: newBannerType,
    };
    setBanners([newB, ...banners]);
    setShowBannerModal(false);
    setNewBannerTitle('');
    setNewBannerSub('');
    onShowToast(`BANNER CREATED: ${newB.title}`);
  };

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    onShowToast('ALL NOTIFICATIONS MARKED AS READ');
  };

  // SUBVIEW: BANNERS
  if (activeSection === 'BANNERS') {
    return (
      <div className="p-4 sm:p-8 font-sans space-y-8 bg-[#faf7f2] min-h-full">
        <div className="flex items-center justify-between font-mono text-[10px] text-[#7b6e54] tracking-[0.2em] uppercase mb-1">
          <span>MARKETING ENGINE // ATELIER BANNERS</span>
          <button
            onClick={() => onSelectSection('OVERVIEW')}
            className="text-[#1a1816] font-bold hover:underline cursor-pointer"
          >
            ← BACK TO OVERVIEW
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-headline text-3xl sm:text-4xl text-[#1a1816] tracking-tight">
              Announcements &amp; Editorial Banners
            </h1>
            <p className="font-sans text-[13px] text-[#59544c] mt-1">
              Configure storefront notice ribbons, hero editorial spotlights, and gated VIP promos.
            </p>
          </div>

          <button
            onClick={() => setShowBannerModal(true)}
            className="px-4 py-2.5 bg-[#141312] text-[#f5efe6] font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-[#35322e] flex items-center gap-2 cursor-pointer shadow-xs"
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
                  ? 'bg-[#ede7dd] border-[#d5cdc0]'
                  : 'bg-[#ede7dd]/50 border-[#d5cdc0]/50 opacity-60'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#d5cdc0]">
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 bg-[#141312] text-[#f5efe6] text-[9px] font-bold uppercase">
                    {ban.type}
                  </span>
                  <span className="font-bold text-[#1a1816] text-[12px]">{ban.title}</span>
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
                    className="px-3 py-1 bg-[#faf7f2] border border-[#d5cdc0] text-[#1a1816] text-[10px] font-bold uppercase hover:bg-[#e4ddcf] cursor-pointer"
                  >
                    {ban.isActive ? 'DEACTIVATE' : 'ACTIVATE'}
                  </button>
                </div>
              </div>
              <p className="font-sans text-[12px] text-[#59544c] mt-3">{ban.subtitle}</p>
              <div className="mt-2 text-[10px] text-[#7b6e54] flex items-center gap-2">
                <span>ACTION BUTTON: "{ban.linkText}"</span>
                <span>•</span>
                <span>DESTINATION: {ban.linkUrl}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Create Banner Modal */}
        {showBannerModal && (
          <div className="fixed inset-0 z-50 bg-[#1a1816]/75 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-[#faf7f2] border border-[#d5cdc0] max-w-md w-full p-6 font-mono text-xs shadow-2xl space-y-4">
              <h3 className="font-headline text-xl font-bold text-[#1a1816]">
                Create Editorial Banner
              </h3>
              <form onSubmit={handleCreateBanner} className="space-y-3">
                <div>
                  <label className="block text-[9px] font-bold uppercase text-[#1a1816] mb-1">
                    BANNER TYPE
                  </label>
                  <select
                    value={newBannerType}
                    onChange={(e) => setNewBannerType(e.target.value as any)}
                    className="w-full bg-white border border-[#d5cdc0] p-2 text-[11px] font-mono outline-none"
                  >
                    <option value="ANNOUNCEMENT">ANNOUNCEMENT TOP BAR</option>
                    <option value="HERO">HERO EDITORIAL SPOTLIGHT</option>
                    <option value="PROMO">PROMO CALLOUT</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[9px] font-bold uppercase text-[#1a1816] mb-1">
                    HEADLINE / TITLE *
                  </label>
                  <input
                    type="text"
                    required
                    value={newBannerTitle}
                    onChange={(e) => setNewBannerTitle(e.target.value)}
                    placeholder="e.g. COMPLIMENTARY COURIER PROTOCOL"
                    className="w-full bg-white border border-[#d5cdc0] p-2 text-[11px] font-mono outline-none uppercase"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-bold uppercase text-[#1a1816] mb-1">
                    SUBTITLE / COPY
                  </label>
                  <textarea
                    rows={2}
                    value={newBannerSub}
                    onChange={(e) => setNewBannerSub(e.target.value)}
                    placeholder="Brief description of the promotion or announcement"
                    className="w-full bg-white border border-[#d5cdc0] p-2 text-[11px] font-mono outline-none"
                  />
                </div>
                <div className="pt-3 flex justify-end gap-2 border-t border-[#d5cdc0]">
                  <button
                    type="button"
                    onClick={() => setShowBannerModal(false)}
                    className="px-3 py-1.5 uppercase font-bold text-[10px] text-[#59544c] cursor-pointer"
                  >
                    CANCEL
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 bg-[#141312] text-[#f5efe6] uppercase font-bold text-[10px] cursor-pointer"
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
      <div className="p-4 sm:p-8 font-sans space-y-8 bg-[#faf7f2] min-h-full">
        <div className="flex items-center justify-between font-mono text-[10px] text-[#7b6e54] tracking-[0.2em] uppercase mb-1">
          <span>OPERATIONS TELEMETRY // NOTIFICATIONS</span>
          <button
            onClick={() => onSelectSection('OVERVIEW')}
            className="text-[#1a1816] font-bold hover:underline cursor-pointer"
          >
            ← BACK TO OVERVIEW
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-headline text-3xl sm:text-4xl text-[#1a1816] tracking-tight">
              Administrative Telemetry Log
            </h1>
            <p className="font-sans text-[13px] text-[#59544c] mt-1">
              Live audit events, inventory alerts, courier milestones, and client enclave signals.
            </p>
          </div>

          <button
            onClick={handleMarkAllRead}
            className="px-4 py-2.5 bg-[#ede7dd] border border-[#d5cdc0] text-[#1a1816] font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-[#e4ddcf] flex items-center gap-2 cursor-pointer shadow-2xs"
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
                  ? 'bg-[#ede7dd]/50 border-[#d5cdc0]'
                  : 'bg-[#ede7dd] border-[#1a1816] shadow-2xs'
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                  notif.read ? 'bg-[#7b6e54]' : 'bg-[#16a34a] animate-pulse'
                }`}
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#1a1816] text-[11px]">{notif.title}</span>
                  <span className="text-[9px] text-[#7b6e54]">{notif.time}</span>
                </div>
                <div className="text-[11px] text-[#59544c] mt-0.5">{notif.detail}</div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#7b6e54] shrink-0 mt-1" />
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
    }, 0) || 342;

    const fulfillmentHubs = [
      { name: 'MILAN CENTRAL ATELIER (MXP)', code: 'HUB-01', allocation: Math.round(totalStockCount * 0.52), status: 'OPTIMAL CAPACITY', speed: 'Priority 10:30 Air' },
      { name: 'PARIS ARCHIVAL VAULT (CDG)', code: 'HUB-02', allocation: Math.round(totalStockCount * 0.25), status: 'NORMAL FLOW', speed: 'EU Express Overnight' },
      { name: 'TOKYO KINETIC NODE (NRT)', code: 'HUB-03', allocation: Math.round(totalStockCount * 0.15), status: 'EXPEDITE ACTIVE', speed: 'APAC Transit Hub' },
      { name: 'NEW YORK METRO TERMINAL (JFK)', code: 'HUB-04', allocation: Math.round(totalStockCount * 0.08), status: 'ALLOCATION RESTOCKING', speed: 'Americas Courier' },
    ];

    return (
      <div className="p-4 sm:p-8 font-sans space-y-8 bg-[#faf7f2] min-h-full">
        <div className="flex items-center justify-between font-mono text-[10px] text-[#7b6e54] tracking-[0.2em] uppercase mb-1">
          <span>SUPPLY CHAIN // FULFILLMENT &amp; STOCK TELEMETRY</span>
          <button
            onClick={() => onSelectSection('OVERVIEW')}
            className="text-[#1a1816] font-bold hover:underline cursor-pointer"
          >
            ← BACK TO OVERVIEW
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-headline text-3xl sm:text-4xl text-[#1a1816] tracking-tight">
              Stock Logistics &amp; Fulfillment Nodes
            </h1>
            <p className="font-sans text-[13px] text-[#59544c] mt-1">
              Global inventory distribution across 4 metropolitan air courier hubs and dimensional warehouse vaults.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px]">
            <button
              onClick={() => onSelectSection('LOW_STOCK_RADAR')}
              className="px-3.5 py-2 bg-[#ede7dd] border border-[#d5cdc0] text-[#1a1816] hover:bg-[#e4ddcf] font-bold uppercase tracking-wider cursor-pointer shadow-2xs flex items-center gap-1.5"
            >
              <Radar className="w-3.5 h-3.5 text-[#991b1b]" />
              <span>LOW-STOCK RADAR ({lowStockItems.length}) →</span>
            </button>
            <button
              onClick={() => onSelectSection('SKU_MATRIX')}
              className="px-3.5 py-2 bg-[#141312] text-[#f5efe6] hover:bg-[#35322e] font-bold uppercase tracking-wider cursor-pointer shadow-xs flex items-center gap-1.5"
            >
              <Boxes className="w-3.5 h-3.5" />
              <span>SKU MATRIX →</span>
            </button>
          </div>
        </div>

        {/* Top 4 Supply Chain Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
          <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 shadow-2xs">
            <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider font-bold">TOTAL CATALOG UNITS</div>
            <div className="text-2xl font-bold text-[#1a1816] mt-1">{totalStockCount} Units</div>
            <div className="text-[9px] text-[#16a34a] font-bold mt-0.5">Across {products.length || 6} Specimen Silhouettes</div>
          </div>
          <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 shadow-2xs">
            <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider font-bold">ACTIVE FULFILLMENT NODES</div>
            <div className="text-2xl font-bold text-[#1a1816] mt-1">4 Metropolitan Hubs</div>
            <div className="text-[9px] text-[#59544c] mt-0.5">Milan • Paris • Tokyo • New York</div>
          </div>
          <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 shadow-2xs">
            <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider font-bold">DEPLETION RISK SPECIMENS</div>
            <div className="text-2xl font-bold text-[#991b1b] mt-1">{lowStockItems.length} Variants</div>
            <div className="text-[9px] text-[#7b6e54] mt-0.5">Stock threshold &le; 5 units</div>
          </div>
          <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 shadow-2xs">
            <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider font-bold">DISPATCH SLA TIME</div>
            <div className="text-2xl font-bold text-[#16a34a] mt-1">&lt; 3.2 Hours</div>
            <div className="text-[9px] text-[#7b6e54] mt-0.5">Atelier presentation packing</div>
          </div>
        </div>

        {/* Fulfillment Nodes Distribution */}
        <div className="space-y-4 font-mono text-[11px]">
          <div className="text-[10px] text-[#7b6e54] font-bold uppercase tracking-wider">
            METROPOLITAN VAULT DISTRIBUTION
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fulfillmentHubs.map((hub) => (
              <div key={hub.code} className="border border-[#d5cdc0] bg-[#ede7dd] p-4.5 space-y-3 rounded-xs shadow-xs">
                <div className="flex items-center justify-between pb-2 border-b border-[#d5cdc0]">
                  <div className="flex items-center gap-2">
                    <Truck className="w-3.5 h-3.5 text-[#7b6e54]" />
                    <span className="font-bold text-[#1a1816]">{hub.name}</span>
                  </div>
                  <span className="px-2 py-0.5 bg-[#141312] text-[#f5efe6] text-[9px] font-bold">{hub.code}</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-[10px]">
                  <div>
                    <div className="text-[9px] text-[#7b6e54]">STORED STOCK</div>
                    <div className="font-bold text-[#1a1816] text-[13px]">{hub.allocation} Units</div>
                  </div>
                  <div>
                    <div className="text-[9px] text-[#7b6e54]">FLOW STATUS</div>
                    <div className="font-bold text-[#16a34a] text-[10px]">{hub.status}</div>
                  </div>
                  <div>
                    <div className="text-[9px] text-[#7b6e54]">LOGISTICS COURIER</div>
                    <div className="font-bold text-[#59544c] text-[10px]">{hub.speed}</div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#d5cdc0]/70 flex items-center justify-between text-[9px]">
                  <span className="text-[#7b6e54]">NFC QUALITY CONTROL INSPECTED</span>
                  <button
                    onClick={() => {
                      onShowToast(`REALLOCATION TELEMETRY INITIATED FOR ${hub.code}`);
                    }}
                    className="font-bold text-[#1a1816] hover:underline cursor-pointer"
                  >
                    TRIGGER REBALANCE →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // SUBVIEW: LOW STOCK RADAR
  if (activeSection === 'LOW_STOCK_RADAR') {
    return (
      <div className="p-4 sm:p-8 font-sans space-y-8 bg-[#faf7f2] min-h-full">
        <div className="flex items-center justify-between font-mono text-[10px] text-[#7b6e54] tracking-[0.2em] uppercase mb-1">
          <span>CATALOG INTELLIGENCE // INVENTORY RADAR</span>
          <button
            onClick={() => onSelectSection('OVERVIEW')}
            className="text-[#1a1816] font-bold hover:underline cursor-pointer"
          >
            ← BACK TO OVERVIEW
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-headline text-3xl sm:text-4xl text-[#1a1816] tracking-tight">
              Low-Stock Sentinel &amp; Restock Radar
            </h1>
            <p className="font-sans text-[13px] text-[#59544c] mt-1">
              Specimens nearing scarcity thresholds requiring replenishment or atelier re-allocation.
            </p>
          </div>

          <button
            onClick={() => onSelectSection('PRODUCTS')}
            className="px-4 py-2.5 bg-[#141312] text-[#f5efe6] font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-[#35322e] flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <span>OPEN FULL SPECIMEN REGISTRY →</span>
          </button>
        </div>

        {lowStockItems.length === 0 ? (
          <div className="p-12 text-center font-mono border border-[#d5cdc0] bg-[#ede7dd] text-[#7b6e54] space-y-2">
            <CheckCircle2 className="w-8 h-8 mx-auto text-[#16a34a]" />
            <div className="text-sm font-bold text-[#1a1816]">ALL SPECIMEN STOCKS NORMALIZED</div>
            <div className="text-xs">Zero sizing variants currently at critical depletion.</div>
          </div>
        ) : (
          <div className="border border-[#d5cdc0] bg-[#ede7dd] font-mono text-[11px] overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#d5cdc0] text-[9px] text-[#7b6e54] tracking-widest uppercase bg-[#e4ddcf]">
                  <th className="p-3">SPECIMEN &amp; SKU</th>
                  <th className="p-3">COLORWAY</th>
                  <th className="p-3">SIZE</th>
                  <th className="p-3">REMAINING UNITS</th>
                  <th className="p-3">ALERT LEVEL</th>
                  <th className="p-3 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d5cdc0]/70">
                {lowStockItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#e4ddcf] transition-colors">
                    <td className="p-3">
                      <div className="font-bold text-[#1a1816]">{item.name}</div>
                      <div className="text-[9px] text-[#7b6e54]">{item.sku}</div>
                    </td>
                    <td className="p-3 text-[#59544c]">{item.color}</td>
                    <td className="p-3 font-bold text-[#1a1816]">US {item.size}</td>
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
                        className="px-2.5 py-1 bg-[#faf7f2] border border-[#d5cdc0] text-[#1a1816] hover:bg-[#ded6c9] font-bold text-[9px] uppercase cursor-pointer"
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
      <div className="p-4 sm:p-8 font-sans space-y-8 bg-[#faf7f2] min-h-full">
        <div className="flex items-center justify-between font-mono text-[10px] text-[#7b6e54] tracking-[0.2em] uppercase mb-1">
          <span>MARKETING ENGINE // CHRONO ARCHIVE RELEASES</span>
          <button
            onClick={() => onSelectSection('OVERVIEW')}
            className="text-[#1a1816] font-bold hover:underline cursor-pointer"
          >
            ← BACK TO OVERVIEW
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-headline text-3xl sm:text-4xl text-[#1a1816] tracking-tight">
              Chrono Drops &amp; Time-Locked Allocations
            </h1>
            <p className="font-sans text-[13px] text-[#59544c] mt-1">
              Cryptographically scheduled footwear releases with countdown tickers and automated patron dispatch.
            </p>
          </div>

          <button
            onClick={() => setShowDropModal(true)}
            className="px-4 py-2.5 bg-[#141312] text-[#f5efe6] font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-[#35322e] flex items-center gap-2 cursor-pointer shadow-xs"
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
                className="bg-[#ede7dd] border border-[#d5cdc0] p-6 space-y-4 rounded-xs shadow-xs"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#d5cdc0]">
                  <div>
                    <div className="font-bold text-[#1a1816] uppercase text-base sm:text-lg">
                      {drop.productName}
                    </div>
                    <div className="text-[10px] text-[#7b6e54] uppercase mt-0.5">
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
                      className="px-3 py-1 bg-[#faf7f2] border border-[#d5cdc0] text-[#1a1816] text-[10px] font-bold uppercase hover:bg-[#ded6c9] cursor-pointer"
                    >
                      TOGGLE STATUS
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-[11px]">
                  <div className="bg-[#faf7f2] border border-[#d5cdc0] p-3">
                    <div className="text-[9px] text-[#7b6e54] uppercase font-bold">EDITION PRICE</div>
                    <div className="font-bold text-[#1a1816] text-[13px] mt-0.5">₹{drop.price?.toLocaleString()}</div>
                    <div className="text-[9px] text-[#7b6e54] line-through">MRP: ₹{drop.mrp?.toLocaleString()}</div>
                  </div>

                  <div className="bg-[#faf7f2] border border-[#d5cdc0] p-3">
                    <div className="text-[9px] text-[#7b6e54] uppercase font-bold">RELEASE WINDOW</div>
                    <div className="font-bold text-[#1a1816] mt-0.5">{drop.launchDate || '2026-11-01'}</div>
                    <div className="text-[9px] text-[#7b6e54]">{drop.launchTime || '18:00 UTC'}</div>
                  </div>

                  <div className="bg-[#faf7f2] border border-[#d5cdc0] p-3">
                    <div className="text-[9px] text-[#7b6e54] uppercase font-bold">TOTAL ALLOCATION</div>
                    <div className="font-bold text-[#1a1816] text-[13px] mt-0.5">{drop.stock} Pairs</div>
                    <div className="text-[9px] text-[#16a34a] font-bold">Limited Vault Production</div>
                  </div>

                  <div className="bg-[#faf7f2] border border-[#d5cdc0] p-3">
                    <div className="text-[9px] text-[#7b6e54] uppercase font-bold">TICKING COUNTDOWN</div>
                    <div className="font-bold text-[#1a1816] mt-0.5 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#7b6e54]" />
                      <span className="text-[10px]">{countdown}</span>
                    </div>
                    <div className="text-[9px] text-[#59544c]">Hardware clock sync</div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#d5cdc0] flex flex-wrap items-center justify-between gap-3 text-[10px]">
                  <span className="text-[#7b6e54]">640 PATRONS ENROLLED IN HIGH-PRIORITY AIR NOTIFICATION</span>
                  <button
                    onClick={() => {
                      onShowToast(`DISPATCHED TELEMETRY PUSH TO ALL SUBSCRIBERS FOR ${drop.productName}`);
                    }}
                    className="px-3 py-1.5 bg-[#141312] text-[#f5efe6] font-bold uppercase text-[9px] tracking-wider hover:bg-[#35322e] cursor-pointer"
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
      <div className="p-4 sm:p-8 font-sans space-y-8 bg-[#faf7f2] min-h-full">
        <div className="flex items-center justify-between font-mono text-[10px] text-[#7b6e54] tracking-[0.2em] uppercase mb-1">
          <span>COMMERCE ENGINE // PRIVILEGE VOUCHERS</span>
          <button
            onClick={() => onSelectSection('OVERVIEW')}
            className="text-[#1a1816] font-bold hover:underline cursor-pointer"
          >
            ← BACK TO OVERVIEW
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-headline text-3xl sm:text-4xl text-[#1a1816] tracking-tight">
              Privilege Coupons &amp; Atelier Vouchers
            </h1>
            <p className="font-sans text-[13px] text-[#59544c] mt-1">
              Manage promotional discount tokens, minimum expenditure thresholds, and VIP member codes.
            </p>
          </div>

          <button
            onClick={() => setShowCouponModal(true)}
            className="px-4 py-2.5 bg-[#141312] text-[#f5efe6] font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-[#35322e] flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>GENERATE NEW COUPON</span>
          </button>
        </div>

        {/* Coupons Table */}
        <div className="border border-[#d5cdc0] bg-[#ede7dd] font-mono text-[11px] overflow-hidden rounded-xs shadow-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#d5cdc0] text-[9px] text-[#7b6e54] tracking-widest uppercase bg-[#e4ddcf]">
                <th className="p-3.5">COUPON CODE</th>
                <th className="p-3.5">DISCOUNT PERCENT</th>
                <th className="p-3.5">MINIMUM ORDER</th>
                <th className="p-3.5">STATUS</th>
                <th className="p-3.5 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d5cdc0]/70">
              {coupons.map((c) => (
                <tr key={c.code} className="hover:bg-[#e4ddcf] transition-colors">
                  <td className="p-3.5">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#1a1816] text-[12px]">{c.code}</span>
                      <button
                        onClick={() => {
                          navigator.clipboard?.writeText(c.code);
                          onShowToast(`COUPON ${c.code} COPIED TO CLIPBOARD`);
                        }}
                        className="text-[#7b6e54] hover:text-[#1a1816] cursor-pointer"
                        title="Copy Code"
                      >
                        <Copy className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="text-[9px] text-[#7b6e54]">{c.description || 'Atelier Privilege Voucher'}</div>
                  </td>
                  <td className="p-3.5 font-bold text-[#1a1816]">
                    <span className="px-2 py-0.5 bg-[#faf7f2] border border-[#d5cdc0]">
                      {c.discountPercent}% OFF
                    </span>
                  </td>
                  <td className="p-3.5 font-bold text-[#59544c]">
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
                      className="px-2.5 py-1 bg-[#faf7f2] border border-[#d5cdc0] text-[#1a1816] hover:bg-[#ded6c9] font-bold text-[9px] uppercase cursor-pointer mr-2"
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
    <div className="p-4 sm:p-8 font-sans space-y-8 bg-[#faf7f2] min-h-full">
      {/* Header */}
      <div>
        <div className="font-mono text-[10px] text-[#7b6e54] tracking-[0.2em] uppercase mb-1">
          EXECUTIVE COMMAND // ARCHITECTURAL TELEMETRY
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-headline text-3xl sm:text-4xl text-[#1a1816] tracking-tight">
              Executive Overview &amp; Control
            </h1>
            <p className="font-sans text-[13px] text-[#59544c] mt-1">
              Real-time synchronization across catalog specimens, fulfillment nodes, and security telemetry.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px]">
            <button
              onClick={() => onSelectSection('PRODUCTS')}
              className="px-3.5 py-2 bg-[#ede7dd] border border-[#d5cdc0] text-[#1a1816] hover:bg-[#e4ddcf] font-bold uppercase tracking-wider cursor-pointer shadow-2xs"
            >
              SPECIMEN DOSSIERS →
            </button>
            <button
              onClick={() => onSelectSection('ORDERS')}
              className="px-3.5 py-2 bg-[#141312] text-[#f5efe6] hover:bg-[#35322e] font-bold uppercase tracking-wider cursor-pointer shadow-xs"
            >
              LOGISTICS COMMAND →
            </button>
          </div>
        </div>
      </div>

      {/* Top 4 Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
        <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 shadow-2xs">
          <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider font-bold">
            GROSS DAILY VOLUME
          </div>
          <div className="text-2xl font-bold text-[#1a1816] mt-1">
            ₹{grossDailyVolume.toLocaleString()}
          </div>
          <div className="text-[9px] text-[#16a34a] font-bold mt-0.5">+18.4% vs last run</div>
        </div>

        <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 shadow-2xs">
          <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider font-bold">
            ACTIVE ALLOCATIONS
          </div>
          <div className="text-2xl font-bold text-[#1a1816] mt-1">
            {activeAllocationsCount} Orders
          </div>
          <div className="text-[9px] text-[#59544c] mt-0.5">Air freight courier nodes live</div>
        </div>

        <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 shadow-2xs">
          <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider font-bold">
            ARCHIVAL SPECIMENS
          </div>
          <div className="text-2xl font-bold text-[#1a1816] mt-1">
            {totalMasterStyles} Master Styles
          </div>
          <div className="text-[9px] text-[#59544c] mt-0.5">Dimensional size matrix intact</div>
        </div>

        <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 shadow-2xs">
          <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider font-bold">
            SECURITY INTEGRITY
          </div>
          <div className="text-2xl font-bold text-[#16a34a] mt-1">100% Verified</div>
          <div className="text-[9px] text-[#7b6e54] mt-0.5">TLS 1.3 // Argon2id Enclave</div>
        </div>
      </div>

      {/* Volume & Fulfillment Analytics Graph */}
      <div className="border border-[#d5cdc0] bg-[#ede7dd] p-5 sm:p-6 space-y-4 rounded-xs shadow-xs font-mono">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#d5cdc0]">
          <div>
            <div className="text-[9px] text-[#7b6e54] tracking-widest uppercase font-bold">
              PROCUREMENT TELEMETRY
            </div>
            <h3 className="font-headline text-xl font-bold text-[#1a1816] tracking-tight">
              Volume &amp; Order Velocity Telemetry
            </h3>
          </div>

          <div className="flex items-center gap-1.5 text-[10px]">
            {(['7D', '30D', '90D'] as const).map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-2.5 py-1 border cursor-pointer font-bold uppercase transition-colors ${
                  timeframe === tf
                    ? 'bg-[#141312] text-[#f5efe6] border-[#141312]'
                    : 'bg-[#faf7f2] border-[#d5cdc0] text-[#59544c] hover:bg-[#ded6c9]'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>

        {/* Minimalist Bar Graph */}
        <div className="pt-2">
          <div className="h-40 flex items-end gap-2 sm:gap-4 justify-between border-b border-[#d5cdc0] pb-2">
            {[
              { day: 'MON', val: 45, rev: '₹4.2L' },
              { day: 'TUE', val: 68, rev: '₹5.8L' },
              { day: 'WED', val: 52, rev: '₹4.6L' },
              { day: 'THU', val: 84, rev: '₹7.1L' },
              { day: 'FRI', val: 95, rev: '₹8.4L' },
              { day: 'SAT', val: 110, rev: '₹9.8L' },
              { day: 'SUN', val: 88, rev: '₹7.6L' },
            ].map((col, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 group cursor-pointer">
                <div className="text-[9px] text-[#7b6e54] opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                  {col.rev}
                </div>
                <div
                  className="w-full bg-[#141312] hover:bg-[#35322e] transition-all rounded-2xs"
                  style={{ height: `${col.val}%` }}
                  title={`${col.day}: ${col.rev}`}
                />
                <div className="text-[9px] text-[#59544c] font-bold">{col.day}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between text-[9px] text-[#7b6e54] mt-2">
            <span>PEAK DEMAND: SATURDAY (110 ALLOCATIONS)</span>
            <span>DATA SYNCHRONIZED ACROSS ALL 42 HUBS</span>
          </div>
        </div>
      </div>

      {/* 2-Column Split: Chrono Drops & Coupons */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-mono">
        {/* Chrono Drops */}
        <div className="border border-[#d5cdc0] bg-[#ede7dd] p-5 sm:p-6 space-y-4 rounded-xs shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-[#d5cdc0]">
            <div>
              <div className="text-[9px] text-[#7b6e54] tracking-widest uppercase font-bold">
                MARKETING ENGINE
              </div>
              <h3 className="font-headline text-xl font-bold text-[#1a1816] tracking-tight">
                Chrono Drops ({drops.length})
              </h3>
            </div>
            <button
              onClick={() => setShowDropModal(true)}
              className="px-2.5 py-1 bg-[#141312] text-[#f5efe6] text-[10px] font-bold uppercase tracking-wider hover:bg-[#35322e] cursor-pointer flex items-center gap-1 shadow-2xs"
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
                  className="bg-[#faf7f2] border border-[#d5cdc0] p-3.5 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-[#1a1816] uppercase text-[12px]">
                        {drop.productName}
                      </div>
                      <div className="text-[9px] text-[#7b6e54] uppercase">
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
                          onShowToast(`DROP STATUS UPDATED: ${drop.productName}`);
                        }}
                        className="p-1 hover:bg-[#ede7dd] text-[#1a1816] text-[9px] font-bold underline cursor-pointer"
                      >
                        TOGGLE
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] pt-2 border-t border-[#d5cdc0]/70">
                    <div className="flex items-center gap-1 text-[#1a1816] font-bold">
                      <Clock className="w-3 h-3 text-[#7b6e54]" />
                      <span>{countdown}</span>
                    </div>
                    <button
                      onClick={() => {
                        onShowToast(`TRANSMITTED DROP ALERT TO 640 SUBSCRIBERS FOR ${drop.productName}`);
                      }}
                      className="text-[9px] font-bold text-[#7b6e54] hover:text-[#1a1816] uppercase underline cursor-pointer"
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
        <div className="border border-[#d5cdc0] bg-[#ede7dd] p-5 sm:p-6 space-y-4 rounded-xs shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-[#d5cdc0]">
            <div>
              <div className="text-[9px] text-[#7b6e54] tracking-widest uppercase font-bold">
                COMMERCE VOUCHERS
              </div>
              <h3 className="font-headline text-xl font-bold text-[#1a1816] tracking-tight">
                Privilege Coupons ({coupons.length})
              </h3>
            </div>
            <button
              onClick={() => setShowCouponModal(true)}
              className="px-2.5 py-1 bg-[#141312] text-[#f5efe6] text-[10px] font-bold uppercase tracking-wider hover:bg-[#35322e] cursor-pointer flex items-center gap-1 shadow-2xs"
            >
              <Plus className="w-3 h-3" />
              <span>GENERATE CODE</span>
            </button>
          </div>

          <div className="space-y-2.5 text-[11px]">
            {coupons.map((c) => (
              <div
                key={c.code}
                className="bg-[#faf7f2] border border-[#d5cdc0] p-3 flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#1a1816]">{c.code}</span>
                    <button
                      onClick={() => {
                        navigator.clipboard?.writeText(c.code);
                        onShowToast(`COUPON ${c.code} COPIED TO CLIPBOARD`);
                      }}
                      className="text-[#7b6e54] hover:text-[#1a1816] cursor-pointer"
                      title="Copy Code"
                    >
                      <Copy className="w-2.5 h-2.5" />
                    </button>
                  </div>
                  <div className="text-[9px] text-[#7b6e54]">
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
        <div className="fixed inset-0 z-50 bg-[#1a1816]/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#faf7f2] border border-[#d5cdc0] max-w-md w-full p-6 font-mono text-xs shadow-2xl">
            <h3 className="font-headline text-xl font-bold text-[#1a1816] mb-3">
              Schedule Sneaker Drop
            </h3>
            <form onSubmit={handleCreateDrop} className="space-y-3">
              <div>
                <label className="block text-[9px] font-bold uppercase text-[#1a1816] mb-1">
                  DROP TITLE *
                </label>
                <input
                  type="text"
                  required
                  value={dropTitle}
                  onChange={(e) => setDropTitle(e.target.value)}
                  placeholder="e.g. MONOLITH DERBY LIMITED"
                  className="w-full bg-white border border-[#d5cdc0] p-2 text-[11px] font-mono outline-none"
                />
              </div>
              <div>
                <label className="block text-[9px] font-bold uppercase text-[#1a1816] mb-1">
                  EDITION SPECIFICATION
                </label>
                <input
                  type="text"
                  value={dropEdition}
                  onChange={(e) => setDropEdition(e.target.value)}
                  placeholder="ARCHIVAL SPECIMEN // EDITION 01"
                  className="w-full bg-white border border-[#d5cdc0] p-2 text-[11px] font-mono outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[9px] font-bold uppercase text-[#1a1816] mb-1">
                    TOTAL UNITS
                  </label>
                  <input
                    type="number"
                    value={dropUnits}
                    onChange={(e) => setDropUnits(e.target.value)}
                    className="w-full bg-white border border-[#d5cdc0] p-2 text-[11px] font-mono outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-bold uppercase text-[#1a1816] mb-1">
                    PRICE (₹)
                  </label>
                  <input
                    type="number"
                    value={dropPrice}
                    onChange={(e) => setDropPrice(e.target.value)}
                    className="w-full bg-white border border-[#d5cdc0] p-2 text-[11px] font-mono outline-none"
                  />
                </div>
              </div>
              <div className="pt-3 flex justify-end gap-2 border-t border-[#d5cdc0]">
                <button
                  type="button"
                  onClick={() => setShowDropModal(false)}
                  className="px-3 py-1.5 uppercase font-bold text-[10px] text-[#59544c] cursor-pointer"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-[#141312] text-[#f5efe6] uppercase font-bold text-[10px] cursor-pointer"
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
        <div className="fixed inset-0 z-50 bg-[#1a1816]/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#faf7f2] border border-[#d5cdc0] max-w-md w-full p-6 font-mono text-xs shadow-2xl">
            <h3 className="font-headline text-xl font-bold text-[#1a1816] mb-3">
              Generate Privilege Coupon
            </h3>
            <form onSubmit={handleCreateCoupon} className="space-y-3">
              <div>
                <label className="block text-[9px] font-bold uppercase text-[#1a1816] mb-1">
                  COUPON CODE *
                </label>
                <input
                  type="text"
                  required
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="e.g. ATELIER20"
                  className="w-full bg-white border border-[#d5cdc0] p-2 text-[11px] font-mono outline-none uppercase"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[9px] font-bold uppercase text-[#1a1816] mb-1">
                    DISCOUNT %
                  </label>
                  <input
                    type="number"
                    value={couponDiscount}
                    onChange={(e) => setCouponDiscount(e.target.value)}
                    className="w-full bg-white border border-[#d5cdc0] p-2 text-[11px] font-mono outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-bold uppercase text-[#1a1816] mb-1">
                    MIN ORDER VALUE (₹)
                  </label>
                  <input
                    type="number"
                    value={couponMinOrder}
                    onChange={(e) => setCouponMinOrder(e.target.value)}
                    className="w-full bg-white border border-[#d5cdc0] p-2 text-[11px] font-mono outline-none"
                  />
                </div>
              </div>
              <div className="pt-3 flex justify-end gap-2 border-t border-[#d5cdc0]">
                <button
                  type="button"
                  onClick={() => setShowCouponModal(false)}
                  className="px-3 py-1.5 uppercase font-bold text-[10px] text-[#59544c] cursor-pointer"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-[#141312] text-[#f5efe6] uppercase font-bold text-[10px] cursor-pointer"
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
