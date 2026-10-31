import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, Shield, ExternalLink, Lock, Menu, X, ArrowRight, Check, Sliders, ShieldCheck, UserCheck } from 'lucide-react';
import { ShoeProduct, Order } from '../../types';
import { AdminSection } from './AdminSidebar';

interface AdminHeaderProps {
  onToggleSidebar?: () => void;
  onNavigateStorefront: () => void;
  onLogoutAdmin: () => void;
  onOpenAuditLog: () => void;
  adminName?: string;
  adminRole?: string;
  products?: ShoeProduct[];
  orders?: Order[];
  onSelectSection?: (section: AdminSection) => void;
  onSelectProduct?: (productId: string) => void;
  onSelectOrder?: (orderId: string) => void;
  onShowToast: (msg: string) => void;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({
  onToggleSidebar,
  onNavigateStorefront,
  onLogoutAdmin,
  onOpenAuditLog,
  adminName = 'A. Vance',
  adminRole = 'SUPER',
  products = [],
  orders = [],
  onSelectSection,
  onSelectProduct,
  onSelectOrder,
  onShowToast,
}) => {
  // Live Search
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Notifications Popover
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const [notifications, setNotifications] = useState([
    {
      id: 'notif-1',
      title: 'CRITICAL LOW STOCK',
      detail: 'Travertine Cream US 7.0 depleted in Milan Hub',
      time: '12m ago',
      read: false,
      section: 'LOW_STOCK_RADAR' as AdminSection,
    },
    {
      id: 'notif-2',
      title: 'NEW ORDER #VNT-9821',
      detail: '₹42,500 via Milan Malpensa Air Freight Hub',
      time: '45m ago',
      read: false,
      section: 'ORDERS' as AdminSection,
    },
    {
      id: 'notif-3',
      title: 'EXCHANGE REQUEST LOGGED',
      detail: 'Return #EX-8492 awaiting atelier QC review',
      time: '2h ago',
      read: false,
      section: 'RETURNS_EXCHANGES' as AdminSection,
    },
  ]);

  // Profile Menu Popover & Settings Modal
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  // Settings form states
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [sessionTimeout, setSessionTimeout] = useState('30');
  const [telemetryLevel, setTelemetryLevel] = useState('MAXIMUM');

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsSearchDropdownOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(e.target as Node)) {
        setIsNotificationsOpen(false);
      }
      if (profileMenuRef.current && !profileMenuRef.current.contains(e.target as Node)) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const unreadNotificationsCount = notifications.filter((n) => !n.read).length;

  const filteredProducts = searchQuery.trim()
    ? products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 5)
    : [];

  const filteredOrders = searchQuery.trim()
    ? orders
        .filter(
          (o) =>
            o.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            o.shippingAddress?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            o.trackingNumber?.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 4)
    : [];

  const handleSelectSearchedProduct = (prodId: string) => {
    setIsSearchDropdownOpen(false);
    setSearchQuery('');
    if (onSelectSection) onSelectSection('PRODUCTS');
    if (onSelectProduct) onSelectProduct(prodId);
    onShowToast(`LOADED SPECIMEN DOSSIER // SKU`);
  };

  const handleSelectSearchedOrder = (ordId: string) => {
    setIsSearchDropdownOpen(false);
    setSearchQuery('');
    if (onSelectSection) onSelectSection('ORDERS');
    if (onSelectOrder) onSelectOrder(ordId);
    onShowToast(`NAVIGATED TO ORDER #${ordId}`);
  };

  const handleMarkAllNotificationsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    onShowToast('ALL TELEMETRY ALERTS MARKED READ');
  };

  return (
    <>
      <header className="h-14 bg-[#ede7dd] border-b border-[#d5cdc0] px-4 md:px-6 flex items-center justify-between font-mono text-xs select-none shrink-0 z-30 relative">
        {/* Left branding & Console Tag */}
        <div className="flex items-center gap-4">
          {onToggleSidebar && (
            <button
              onClick={onToggleSidebar}
              className="text-[#59544c] hover:text-[#1a1816] p-1.5 transition-colors cursor-pointer"
              title="Toggle Console Sidebar"
            >
              <Menu className="w-4 h-4" />
            </button>
          )}
          <div className="flex items-baseline gap-2">
            <span className="font-headline text-lg sm:text-xl font-bold tracking-tight text-[#1a1816] uppercase">
              VANTA
            </span>
            <span className="text-[10px] text-[#7b6e54] tracking-widest uppercase font-bold hidden sm:inline">
              ADMIN CONSOLE // V-01
            </span>
          </div>
        </div>

        {/* Global Console Search Bar with Live Results Dropdown */}
        <div ref={searchContainerRef} className="relative hidden lg:flex items-center flex-1 max-w-md mx-8">
          <div className="w-full bg-[#faf7f2] border border-[#d5cdc0] px-3 py-1.5 flex items-center justify-between text-[#59544c] text-[11px] rounded-xs shadow-2xs">
            <div className="flex items-center gap-2 flex-1">
              <Search className="w-3.5 h-3.5 text-[#7b6e54]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchDropdownOpen(true);
                }}
                onFocus={() => setIsSearchDropdownOpen(true)}
                placeholder="Search SKU, Order ID, Customer, Collection..."
                className="bg-transparent border-none outline-none text-[#1a1816] placeholder:text-[#9c9384] w-full text-[11px] font-mono"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    onShowToast(`TELEMETRY QUERY: "${searchQuery}"`);
                  }
                }}
              />
            </div>
            {searchQuery ? (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setIsSearchDropdownOpen(false);
                }}
                className="text-[#7b6e54] hover:text-[#1a1816] p-0.5 cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            ) : (
              <kbd className="bg-[#ede7dd] border border-[#d5cdc0] px-1.5 py-0.5 text-[9px] text-[#7b6e54] font-bold rounded-2xs">
                ⌘K
              </kbd>
            )}
          </div>

          {/* Search Dropdown Results */}
          {isSearchDropdownOpen && searchQuery.trim().length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-[#ede7dd] border border-[#d5cdc0] shadow-xl z-50 p-2 font-mono text-[11px] max-h-80 overflow-y-auto space-y-3">
              {filteredProducts.length === 0 && filteredOrders.length === 0 && (
                <div className="p-3 text-center text-[#7b6e54] text-[10px]">
                  NO MATCHING SPECIMENS OR ORDERS FOUND
                </div>
              )}

              {/* Products match */}
              {filteredProducts.length > 0 && (
                <div>
                  <div className="text-[9px] font-bold text-[#7b6e54] px-2 py-1 uppercase tracking-wider">
                    SPECIMENS / PRODUCTS ({filteredProducts.length})
                  </div>
                  <div className="space-y-1">
                    {filteredProducts.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => handleSelectSearchedProduct(p.id)}
                        className="w-full text-left p-2 bg-[#faf7f2] hover:bg-[#ded6c9] border border-[#d5cdc0] flex items-center justify-between cursor-pointer transition-colors"
                      >
                        <div>
                          <div className="font-bold text-[#1a1816] uppercase">{p.name}</div>
                          <div className="text-[9px] text-[#7b6e54]">SKU: {p.sku} • ₹{p.price.toLocaleString()}</div>
                        </div>
                        <ArrowRight className="w-3 h-3 text-[#7b6e54]" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Orders match */}
              {filteredOrders.length > 0 && (
                <div>
                  <div className="text-[9px] font-bold text-[#7b6e54] px-2 py-1 uppercase tracking-wider">
                    COMMERCE ORDERS ({filteredOrders.length})
                  </div>
                  <div className="space-y-1">
                    {filteredOrders.map((o) => (
                      <button
                        key={o.id}
                        onClick={() => handleSelectSearchedOrder(o.id)}
                        className="w-full text-left p-2 bg-[#faf7f2] hover:bg-[#ded6c9] border border-[#d5cdc0] flex items-center justify-between cursor-pointer transition-colors"
                      >
                        <div>
                          <div className="font-bold text-[#1a1816]">ORDER #{o.id} • {o.orderStatus}</div>
                          <div className="text-[9px] text-[#7b6e54]">{o.shippingAddress?.name} • ₹{o.total.toLocaleString()}</div>
                        </div>
                        <ArrowRight className="w-3 h-3 text-[#7b6e54]" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Telemetry, Notifications & Admin Identity Profile */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* 360° Shield Status Indicator */}
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 bg-[#ede7dd] border border-[#d5cdc0] text-[10px] tracking-wider text-[#1a1816]">
            <span className="w-2 h-2 rounded-full bg-[#16a34a] shadow-[0_0_6px_rgba(22,163,74,0.6)] animate-pulse"></span>
            <span className="font-bold">360° SHIELD ACTIVE</span>
            <span className="text-[#7b6e54]">// TLS 1.3 // 0 THREATS</span>
          </div>

          {/* Notifications Icon with Badge & Interactive Popover */}
          <div ref={notificationsRef} className="relative">
            <button
              onClick={() => setIsNotificationsOpen((prev) => !prev)}
              className="relative text-[#59544c] hover:text-[#1a1816] p-1.5 transition-colors cursor-pointer"
              title="System Notifications"
            >
              <Bell className="w-4 h-4" />
              {unreadNotificationsCount > 0 && (
                <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#141312] text-[#f5efe6] text-[8px] font-bold flex items-center justify-center rounded-full">
                  {unreadNotificationsCount}
                </span>
              )}
            </button>

            {/* Notification Dropdown Popover */}
            {isNotificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-[#ede7dd] border border-[#d5cdc0] shadow-2xl p-4 font-mono z-50 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#d5cdc0]">
                  <div className="text-[10px] font-bold text-[#1a1816] uppercase tracking-wider">
                    CONSOLE ALERTS ({unreadNotificationsCount} UNREAD)
                  </div>
                  <button
                    onClick={handleMarkAllNotificationsRead}
                    className="text-[9px] text-[#7b6e54] hover:text-[#1a1816] hover:underline font-bold uppercase cursor-pointer"
                  >
                    MARK ALL READ
                  </button>
                </div>

                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      onClick={() => {
                        if (onSelectSection) onSelectSection(n.section);
                        setIsNotificationsOpen(false);
                        onShowToast(`ROUTED TO ${n.section}`);
                      }}
                      className={`p-2.5 border border-[#d5cdc0] cursor-pointer transition-colors ${
                        n.read ? 'bg-[#faf7f2]/60 text-[#59544c]' : 'bg-[#faf7f2] text-[#1a1816] font-medium'
                      } hover:bg-[#ded6c9]`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[10px] text-[#991b1b]">{n.title}</span>
                        <span className="text-[8px] text-[#7b6e54]">{n.time}</span>
                      </div>
                      <div className="text-[10px] text-[#1a1816] mt-0.5">{n.detail}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-[#d5cdc0] text-center">
                  <button
                    onClick={() => {
                      if (onSelectSection) onSelectSection('NOTIFICATIONS');
                      setIsNotificationsOpen(false);
                    }}
                    className="text-[9px] font-bold uppercase text-[#1a1816] hover:underline cursor-pointer"
                  >
                    VIEW FULL NOTIFICATION LOG →
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Admin Profile & Role Tag */}
          <div ref={profileMenuRef} className="relative flex items-center gap-2.5 pl-2 border-l border-[#d5cdc0]">
            <div className="flex flex-col text-right hidden sm:flex">
              <div className="flex items-center gap-1.5 justify-end">
                <span className="text-[11px] font-bold text-[#1a1816] uppercase">{adminName}</span>
                <span className="bg-[#141312] text-[#f5efe6] text-[8px] font-bold px-1.5 py-0.5 rounded-2xs uppercase">
                  {adminRole}
                </span>
              </div>
              <button
                onClick={onOpenAuditLog}
                className="text-[9px] text-[#7b6e54] hover:text-[#1a1816] hover:underline cursor-pointer uppercase tracking-wider"
              >
                AUDIT LOG
              </button>
            </div>

            {/* Profile Circle Avatar with Dropdown Toggle */}
            <button
              onClick={() => setIsProfileMenuOpen((prev) => !prev)}
              className="w-8 h-8 rounded-full bg-[#141312] text-[#f5efe6] flex items-center justify-center font-bold text-xs uppercase cursor-pointer hover:opacity-90"
              title={`${adminName} Profile Menu`}
            >
              AV
            </button>

            {/* Profile Menu Dropdown */}
            {isProfileMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-[#ede7dd] border border-[#d5cdc0] shadow-2xl p-3 font-mono z-50 space-y-2">
                <div className="pb-2 border-b border-[#d5cdc0]">
                  <div className="text-[11px] font-bold text-[#1a1816] uppercase">{adminName}</div>
                  <div className="text-[9px] text-[#7b6e54]">ROLE: {adminRole} ADMINISTRATOR</div>
                  <div className="text-[8px] text-[#16a34a] font-bold mt-0.5">ENCLAVE: VERIFIED LEVEL 4</div>
                </div>

                <div className="space-y-1 text-[10px]">
                  <button
                    onClick={() => {
                      setIsSettingsModalOpen(true);
                      setIsProfileMenuOpen(false);
                    }}
                    className="w-full text-left p-1.5 hover:bg-[#ded6c9] text-[#1a1816] font-bold uppercase flex items-center gap-2 cursor-pointer"
                  >
                    <Sliders className="w-3 h-3" />
                    <span>CONSOLE SETTINGS</span>
                  </button>

                  <button
                    onClick={() => {
                      if (onSelectSection) onSelectSection('SECURITY_CLUSTER');
                      setIsProfileMenuOpen(false);
                    }}
                    className="w-full text-left p-1.5 hover:bg-[#ded6c9] text-[#1a1816] font-bold uppercase flex items-center gap-2 cursor-pointer"
                  >
                    <ShieldCheck className="w-3 h-3" />
                    <span>SECURITY ENCLAVE</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                      onNavigateStorefront();
                    }}
                    className="w-full text-left p-1.5 hover:bg-[#ded6c9] text-[#1a1816] font-bold uppercase flex items-center gap-2 cursor-pointer"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>PUBLIC STOREFRONT</span>
                  </button>

                  <div className="pt-2 border-t border-[#d5cdc0]">
                    <button
                      onClick={() => {
                        setIsProfileMenuOpen(false);
                        onLogoutAdmin();
                      }}
                      className="w-full text-left p-1.5 bg-[#141312] text-[#f5efe6] font-bold uppercase flex items-center justify-between cursor-pointer hover:bg-[#35322e]"
                    >
                      <span>LOCK CONSOLE</span>
                      <Lock className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Storefront Exit Button */}
            <button
              onClick={onNavigateStorefront}
              className="hidden md:flex items-center gap-1 text-[#59544c] hover:text-[#1a1816] text-[10px] tracking-wider uppercase font-bold pl-2 hover:underline cursor-pointer"
              title="Return to Public Storefront"
            >
              <span>STORE</span>
              <ExternalLink className="w-3 h-3" />
            </button>

            {/* Lock Console / Logout Button */}
            <button
              onClick={onLogoutAdmin}
              className="bg-[#141312] hover:bg-[#35322e] text-[#f5efe6] p-1.5 sm:px-2.5 sm:py-1 text-[10px] uppercase font-bold tracking-wider transition-colors cursor-pointer flex items-center gap-1"
              title="Lock Console and Terminate Admin Session"
            >
              <Lock className="w-3 h-3" />
              <span className="hidden lg:inline">LOCK</span>
            </button>
          </div>
        </div>
      </header>

      {/* Settings Modal */}
      {isSettingsModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#1a1816]/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#ede7dd] border border-[#d5cdc0] max-w-md w-full p-6 font-mono text-xs shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#d5cdc0]">
              <div>
                <div className="text-[9px] text-[#7b6e54] tracking-widest uppercase font-bold">
                  ADMINISTRATIVE PARAMETERS
                </div>
                <h3 className="font-headline text-xl font-bold text-[#1a1816]">
                  Console Governance Settings
                </h3>
              </div>
              <button
                onClick={() => setIsSettingsModalOpen(false)}
                className="text-[#59544c] hover:text-[#1a1816] font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-[#faf7f2] border border-[#d5cdc0]">
                <div>
                  <div className="font-bold text-[#1a1816]">TWO-FACTOR AUTHENTICATION</div>
                  <div className="text-[9px] text-[#7b6e54]">Cryptographic Argon2id TOTP required</div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setTwoFactorEnabled(!twoFactorEnabled);
                    onShowToast(`2FA ENFORCEMENT: ${!twoFactorEnabled ? 'ENABLED' : 'DISABLED'}`);
                  }}
                  className={`px-3 py-1 font-bold text-[9px] uppercase cursor-pointer ${
                    twoFactorEnabled ? 'bg-[#166534] text-white' : 'bg-[#991b1b] text-white'
                  }`}
                >
                  {twoFactorEnabled ? 'ACTIVE' : 'DISABLED'}
                </button>
              </div>

              <div className="p-3 bg-[#faf7f2] border border-[#d5cdc0] space-y-1.5">
                <label className="block text-[9px] font-bold uppercase text-[#1a1816]">
                  INACTIVITY SESSION TIMEOUT (MINUTES)
                </label>
                <select
                  value={sessionTimeout}
                  onChange={(e) => {
                    setSessionTimeout(e.target.value);
                    onShowToast(`SESSION TIMEOUT CONFIGURED: ${e.target.value} MINS`);
                  }}
                  className="w-full bg-white border border-[#d5cdc0] p-1.5 text-[11px] font-mono outline-none font-bold"
                >
                  <option value="15">15 Minutes (High Security)</option>
                  <option value="30">30 Minutes (Recommended)</option>
                  <option value="60">60 Minutes</option>
                  <option value="120">120 Minutes</option>
                </select>
              </div>

              <div className="p-3 bg-[#faf7f2] border border-[#d5cdc0] space-y-1.5">
                <label className="block text-[9px] font-bold uppercase text-[#1a1816]">
                  AUDIT TELEMETRY LOG LEVEL
                </label>
                <select
                  value={telemetryLevel}
                  onChange={(e) => {
                    setTelemetryLevel(e.target.value);
                    onShowToast(`TELEMETRY LOG LEVEL: ${e.target.value}`);
                  }}
                  className="w-full bg-white border border-[#d5cdc0] p-1.5 text-[11px] font-mono outline-none font-bold"
                >
                  <option value="MAXIMUM">MAXIMUM (Record all mutations & access)</option>
                  <option value="STANDARD">STANDARD (Record state alterations only)</option>
                  <option value="MINIMAL">MINIMAL (Critical alerts only)</option>
                </select>
              </div>
            </div>

            <div className="pt-3 border-t border-[#d5cdc0] flex justify-end">
              <button
                onClick={() => {
                  setIsSettingsModalOpen(false);
                  onShowToast('CONSOLE SETTINGS SAVED & APPLIED');
                }}
                className="px-4 py-2 bg-[#141312] text-[#f5efe6] font-bold uppercase text-[10px] hover:bg-[#35322e] cursor-pointer"
              >
                APPLY &amp; CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
