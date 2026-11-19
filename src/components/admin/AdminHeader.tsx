import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, ExternalLink, Lock, Menu, X, ArrowRight, Sliders, ShieldCheck } from 'lucide-react';
import { ShoeProduct, Order } from '../../types';
import { AdminSection } from './AdminSidebar';

interface AdminHeaderProps {
  onToggleSidebar?: () => void;
  onNavigateStorefront: () => void;
  onLogoutAdmin: () => void;
  onOpenAuditLog: () => void;
  adminName?: string;
  adminEmail?: string;
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
  adminName = 'Administrator',
  adminEmail = '',
  adminRole = 'ADMIN',
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
  const [notifications, setNotifications] = useState<Array<{
    id: string; title: string; detail: string; time: string; read: boolean; section: AdminSection;
  }>>([]);

  // Profile Menu Popover & Settings Modal
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

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
  const adminInitials = adminName.trim().split(/\s+/).map((part) => part[0]).join('').slice(0, 2).toUpperCase() || 'AD';

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
      <header className="h-14 bg-[#0d0d10] border-b border-[#242429] px-4 md:px-6 flex items-center justify-between font-mono text-xs select-none shrink-0 z-30 relative">
        {/* Left branding & Console Tag */}
        <div className="flex items-center gap-4">
          {onToggleSidebar && (
            <button
              onClick={onToggleSidebar}
              className="text-[#8e8e98] hover:text-[#f4f4f6] p-1.5 transition-colors cursor-pointer"
              title="Toggle Console Sidebar"
            >
              <Menu className="w-4 h-4" />
            </button>
          )}
          <div className="flex items-baseline gap-2">
            <span className="font-headline text-lg sm:text-xl font-bold tracking-tight text-[#f4f4f6] uppercase">
              VANTA
            </span>
            <span className="text-[10px] text-[#c9a96e] tracking-widest uppercase font-bold hidden sm:inline">
              ADMIN CONSOLE // V-01
            </span>
          </div>
        </div>

        {/* Global Console Search Bar with Live Results Dropdown */}
        <div ref={searchContainerRef} className="relative hidden lg:flex items-center flex-1 max-w-md mx-8">
          <div className="w-full bg-[#18181c] border border-[#242429] px-3 py-1.5 flex items-center justify-between text-[#8e8e98] text-[11px] shadow-2xs">
            <div className="flex items-center gap-2 flex-1">
              <Search className="w-3.5 h-3.5 text-[#c9a96e]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchDropdownOpen(true);
                }}
                onFocus={() => setIsSearchDropdownOpen(true)}
                placeholder="Search SKU, Order ID, Customer, Collection..."
                className="bg-transparent border-none outline-none text-[#f4f4f6] placeholder:text-[#52525b] w-full text-[11px] font-mono"
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
                className="text-[#8e8e98] hover:text-[#f4f4f6] p-0.5 cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            ) : (
              <kbd className="bg-[#121215] border border-[#242429] px-1.5 py-0.5 text-[9px] text-[#c9a96e] font-bold">
                ⌘K
              </kbd>
            )}
          </div>

          {/* Search Dropdown Results */}
          {isSearchDropdownOpen && searchQuery.trim().length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-[#121215] border border-[#242429] shadow-2xl z-50 p-2 font-mono text-[11px] max-h-80 overflow-y-auto space-y-3">
              {filteredProducts.length === 0 && filteredOrders.length === 0 && (
                <div className="p-3 text-center text-[#8e8e98] text-[10px]">
                  NO MATCHING SPECIMENS OR ORDERS FOUND
                </div>
              )}

              {/* Products match */}
              {filteredProducts.length > 0 && (
                <div>
                  <div className="text-[9px] font-bold text-[#c9a96e] px-2 py-1 uppercase tracking-wider">
                    SPECIMENS / PRODUCTS ({filteredProducts.length})
                  </div>
                  <div className="space-y-1">
                    {filteredProducts.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => handleSelectSearchedProduct(p.id)}
                        className="w-full text-left p-2 bg-[#18181c] hover:bg-[#242429] border border-[#242429] flex items-center justify-between cursor-pointer transition-colors"
                      >
                        <div>
                          <div className="font-bold text-[#f4f4f6] uppercase">{p.name}</div>
                          <div className="text-[9px] text-[#8e8e98]">SKU: {p.sku} • ₹{p.price.toLocaleString()}</div>
                        </div>
                        <ArrowRight className="w-3 h-3 text-[#c9a96e]" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Orders match */}
              {filteredOrders.length > 0 && (
                <div>
                  <div className="text-[9px] font-bold text-[#c9a96e] px-2 py-1 uppercase tracking-wider">
                    COMMERCE ORDERS ({filteredOrders.length})
                  </div>
                  <div className="space-y-1">
                    {filteredOrders.map((o) => (
                      <button
                        key={o.id}
                        onClick={() => handleSelectSearchedOrder(o.id)}
                        className="w-full text-left p-2 bg-[#18181c] hover:bg-[#242429] border border-[#242429] flex items-center justify-between cursor-pointer transition-colors"
                      >
                        <div>
                          <div className="font-bold text-[#f4f4f6]">ORDER #{o.id} • {o.orderStatus}</div>
                          <div className="text-[9px] text-[#8e8e98]">{o.shippingAddress?.name} • ₹{o.total.toLocaleString()}</div>
                        </div>
                        <ArrowRight className="w-3 h-3 text-[#c9a96e]" />
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
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 bg-[#18181c] border border-[#242429] text-[10px] tracking-wider text-[#f4f4f6]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.6)] animate-pulse"></span>
            <span className="font-bold text-[#c9a96e]">ADMIN ENCLAVE</span>
          </div>

          {/* Notifications Icon with Badge & Interactive Popover */}
          <div ref={notificationsRef} className="relative">
            <button
              onClick={() => setIsNotificationsOpen((prev) => !prev)}
              className="relative text-[#8e8e98] hover:text-[#f4f4f6] p-1.5 transition-colors cursor-pointer"
              title="System Notifications"
            >
              <Bell className="w-4 h-4" />
              {unreadNotificationsCount > 0 && (
                <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#c9a96e] text-[#09090b] text-[8px] font-bold flex items-center justify-center rounded-full">
                  {unreadNotificationsCount}
                </span>
              )}
            </button>

            {/* Notification Dropdown Popover */}
            {isNotificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-[#121215] border border-[#242429] shadow-2xl p-4 font-mono z-50 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#242429]">
                  <div className="text-[10px] font-bold text-[#f4f4f6] uppercase tracking-wider">
                    CONSOLE ALERTS ({unreadNotificationsCount} UNREAD)
                  </div>
                  <button
                    onClick={handleMarkAllNotificationsRead}
                    className="text-[9px] text-[#c9a96e] hover:underline font-bold uppercase cursor-pointer"
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
                      className={`p-2.5 border border-[#242429] cursor-pointer transition-colors ${
                        n.read ? 'bg-[#18181c]/60 text-[#8e8e98]' : 'bg-[#18181c] text-[#f4f4f6] font-medium'
                      } hover:bg-[#242429]`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[10px] text-[#ef4444]">{n.title}</span>
                        <span className="text-[8px] text-[#8e8e98]">{n.time}</span>
                      </div>
                      <div className="text-[10px] text-[#f4f4f6] mt-0.5">{n.detail}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-[#242429] text-center">
                  <button
                    onClick={() => {
                      if (onSelectSection) onSelectSection('NOTIFICATIONS');
                      setIsNotificationsOpen(false);
                    }}
                    className="text-[9px] font-bold uppercase text-[#c9a96e] hover:underline cursor-pointer"
                  >
                    VIEW FULL NOTIFICATION LOG →
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Admin Profile & Role Tag */}
          <div ref={profileMenuRef} className="relative flex items-center gap-2.5 pl-2 border-l border-[#242429]">
            <div className="flex flex-col text-right hidden sm:flex">
              <div className="flex items-center gap-1.5 justify-end">
                <span className="text-[11px] font-bold text-[#f4f4f6] uppercase">{adminName}</span>
                <span className="bg-[#c9a96e] text-[#09090b] text-[8px] font-bold px-1.5 py-0.5 uppercase">
                  {adminRole}
                </span>
              </div>
              <button
                onClick={onOpenAuditLog}
                className="text-[9px] text-[#8e8e98] hover:text-[#c9a96e] hover:underline cursor-pointer uppercase tracking-wider"
              >
                AUDIT LOG
              </button>
            </div>

            {/* Profile Circle Avatar with Dropdown Toggle */}
            <button
              onClick={() => setIsProfileMenuOpen((prev) => !prev)}
              className="w-8 h-8 rounded-full bg-[#18181c] border border-[#242429] text-[#c9a96e] flex items-center justify-center font-bold text-xs uppercase cursor-pointer hover:border-[#c9a96e]"
              title={`${adminName} Profile Menu`}
            >
              {adminInitials}
            </button>

            {/* Profile Menu Dropdown */}
            {isProfileMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-[#121215] border border-[#242429] shadow-2xl p-3 font-mono z-50 space-y-2">
                <div className="pb-2 border-b border-[#242429]">
                  <div className="text-[11px] font-bold text-[#f4f4f6] uppercase">{adminName}</div>
                  <div className="text-[9px] text-[#c9a96e]">ROLE: {adminRole} ADMINISTRATOR</div>
                  <div className="text-[9px] text-[#8e8e98] mt-0.5">{adminEmail}</div>
                </div>

                <div className="space-y-1 text-[10px]">
                  <button
                    onClick={() => {
                      setIsSettingsModalOpen(true);
                      setIsProfileMenuOpen(false);
                    }}
                    className="w-full text-left p-1.5 hover:bg-[#18181c] text-[#f4f4f6] font-bold uppercase flex items-center gap-2 cursor-pointer"
                  >
                    <Sliders className="w-3 h-3 text-[#c9a96e]" />
                    <span>CONSOLE SETTINGS</span>
                  </button>

                  <button
                    onClick={() => {
                      if (onSelectSection) onSelectSection('SECURITY_CLUSTER');
                      setIsProfileMenuOpen(false);
                    }}
                    className="w-full text-left p-1.5 hover:bg-[#18181c] text-[#f4f4f6] font-bold uppercase flex items-center gap-2 cursor-pointer"
                  >
                    <ShieldCheck className="w-3 h-3 text-emerald-500" />
                    <span>SECURITY ENCLAVE</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                      onNavigateStorefront();
                    }}
                    className="w-full text-left p-1.5 hover:bg-[#18181c] text-[#f4f4f6] font-bold uppercase flex items-center gap-2 cursor-pointer"
                  >
                    <ExternalLink className="w-3 h-3 text-[#c9a96e]" />
                    <span>PUBLIC STOREFRONT</span>
                  </button>

                  <div className="pt-2 border-t border-[#242429]">
                    <button
                      onClick={() => {
                        setIsProfileMenuOpen(false);
                        onLogoutAdmin();
                      }}
                      className="w-full text-left p-1.5 bg-[#f4f4f6] text-[#09090b] font-bold uppercase flex items-center justify-between cursor-pointer hover:bg-[#c9a96e]"
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
              className="hidden md:flex items-center gap-1 text-[#8e8e98] hover:text-[#c9a96e] text-[10px] tracking-wider uppercase font-bold pl-2 cursor-pointer"
              title="Return to Public Storefront"
            >
              <span>STORE</span>
              <ExternalLink className="w-3 h-3" />
            </button>

            {/* Lock Console / Logout Button */}
            <button
              onClick={onLogoutAdmin}
              className="bg-[#f4f4f6] hover:bg-[#c9a96e] text-[#09090b] p-1.5 sm:px-2.5 sm:py-1 text-[10px] uppercase font-bold tracking-wider transition-colors cursor-pointer flex items-center gap-1"
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
        <div className="fixed inset-0 z-50 bg-[#09090b]/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#121215] border border-[#242429] max-w-md w-full p-6 font-mono text-xs shadow-2xl space-y-4 animate-fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-[#242429]">
              <div>
                <div className="text-[9px] text-[#c9a96e] tracking-widest uppercase font-bold">
                  ADMINISTRATIVE PARAMETERS
                </div>
                <h3 className="font-headline text-xl font-bold text-[#f4f4f6]">
                  Console Governance Settings
                </h3>
              </div>
              <button
                onClick={() => setIsSettingsModalOpen(false)}
                className="text-[#8e8e98] hover:text-[#f4f4f6] font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-[#18181c] border border-[#242429]">
                <div>
                  <div className="font-bold text-[#f4f4f6]">TWO-FACTOR AUTHENTICATION</div>
                  <div className="text-[9px] text-[#8e8e98]">Cryptographic Argon2id TOTP required</div>
                </div>
                <span className="px-3 py-1 bg-[#121215] border border-[#242429] text-[#c9a96e] font-bold text-[9px] uppercase">Managed per account</span>
              </div>

              <div className="p-3 bg-[#18181c] border border-[#242429] space-y-1.5">
                <div className="text-[9px] font-bold uppercase text-[#c9a96e]">TOKEN LIFETIME</div>
                <div className="text-[11px] text-[#8e8e98]">Access tokens: 15 minutes. Refresh tokens: 30 days.</div>
              </div>

              <div className="p-3 bg-[#18181c] border border-[#242429] space-y-1.5">
                <div className="text-[9px] font-bold uppercase text-[#c9a96e]">SECURITY LOGGING</div>
                <div className="text-[11px] text-[#8e8e98]">Events are written by server routes; log-level controls are not available here.</div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#242429] flex justify-end">
              <button
                onClick={() => {
                  setIsSettingsModalOpen(false);
                }}
                className="px-4 py-2 bg-[#f4f4f6] text-[#09090b] font-bold uppercase text-[10px] hover:bg-[#c9a96e] cursor-pointer"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};