import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, User, Menu, X, Scale, Globe, ChevronDown, Package, Truck, LogOut } from 'lucide-react';
import { CURRENCY_CONFIGS, SupportedCurrency, getActiveCurrency, setActiveCurrency, subscribeCurrency } from '../lib/currency';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  compareCount?: number;
  currentUser?: { name: string; email: string; memberId: string } | null;
  isAdminAuthenticated?: boolean;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenAdminPortal: () => void;
  onOpenAccount: () => void;
  onOpenCompare?: () => void;
  activeNav: string;
  onSelectNav: (nav: string) => void;
  onSelectCategoryFilter?: (category: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  compareCount = 0,
  currentUser,
  isAdminAuthenticated = false,
  onOpenWishlist,
  onOpenSearch,
  onOpenAdminPortal,
  onOpenAccount,
  onOpenCompare,
  activeNav,
  onSelectNav,
  onSelectCategoryFilter,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currency, setCurrentCurrency] = useState<SupportedCurrency>(getActiveCurrency());
  const [isCurrencyMenuOpen, setIsCurrencyMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  useEffect(() => {
    const unsubCurr = subscribeCurrency((c) => setCurrentCurrency(c));
    return () => {
      unsubCurr();
    };
  }, []);

  const activeCurrencyConfig = CURRENCY_CONFIGS[currency] || CURRENCY_CONFIGS.INR;

  // Primary top navigation categories matching reference screenshot Panel 1:
  // Men, Women, Kids, Sneakers, Sports, New Arrivals, Sale
  const categoryShortcuts = [
    { label: 'Men', filter: 'Men' },
    { label: 'Women', filter: 'Women' },
    { label: 'Kids', filter: 'Kids' },
    { label: 'Sneakers', filter: 'Sneakers' },
    { label: 'Sports', filter: 'Running' },
    { label: 'New Arrivals', filter: 'New Arrivals', navKey: 'NEW DROPS' },
    { label: 'Sale', filter: 'Sale' },
  ];

  const handleCategoryClick = (filter: string, navKey?: string) => {
    if (navKey) {
      onSelectNav(navKey);
    } else {
      if (onSelectCategoryFilter) {
        onSelectCategoryFilter(filter);
      }
      onSelectNav('SHOP');
    }
    setMobileMenuOpen(false);
  };

  const handleNavClick = (key: string) => {
    onSelectNav(key);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 w-full z-40 bg-white/95 dark:bg-[#121215]/95 backdrop-blur-md border-b border-[#E9D9CA] dark:border-[#242429] transition-colors"
    >
      {/* Top Status & Concierge Bar */}
      <div
        id="top-status-bar"
        className="hidden md:flex border-b border-[#E9D9CA]/80 dark:border-[#242429] bg-[#F7F2EC] dark:bg-[#09090b] px-5 md:px-12 py-1 items-center justify-between text-[11px] text-[#77716B] dark:text-[#8e8e98] font-sans"
      >
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B4532A]"></span>
          <span className="font-semibold text-[#242321] dark:text-[#f4f4f6]">COMPLIMENTARY WORLDWIDE DELIVERY &amp; 30-DAY RETURNS</span>
        </div>
        <div className="flex items-center gap-4">
          {/* Quick Currency Selector */}
          <button
            onClick={() => setIsCurrencyMenuOpen((prev) => !prev)}
            className="flex items-center gap-1.5 text-[#242321] dark:text-[#8e8e98] hover:text-[#B4532A] transition-colors cursor-pointer font-medium"
            title="Worldwide Auto-Detected Currency"
          >
            <Globe className="w-3.5 h-3.5 text-[#B4532A]" />
            <span>{activeCurrencyConfig.flag} {activeCurrencyConfig.code} ({activeCurrencyConfig.symbol})</span>
          </button>

          {currentUser ? (
            <span className="font-medium text-[#242321] dark:text-[#f4f4f6]">Client: {currentUser.name}</span>
          ) : (
            <button
              onClick={() => onSelectNav('LOGIN')}
              className="text-[#B4532A] font-semibold hover:underline cursor-pointer"
            >
              Sign In
            </button>
          )}

          {isAdminAuthenticated && (
            <button
              onClick={onOpenAdminPortal}
              className="font-bold cursor-pointer text-[#B4532A] bg-[#E9D9CA]/40 dark:bg-[#18181c] px-2.5 py-0.5 rounded border border-[#B4532A]/30 text-[10px] hover:bg-[#B4532A] hover:text-white transition-all"
            >
              ADMIN CONSOLE ⚡
            </button>
          )}
        </div>
      </div>

      {/* Main Reference Header Bar */}
      <div className="h-16 sm:h-20 max-w-[1440px] mx-auto px-5 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="brand-logo-btn"
          onClick={() => onSelectNav('COLLECTIONS')}
          className="flex items-center gap-2 group focus:outline-none cursor-pointer"
        >
          <span className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight uppercase text-[#242321] dark:text-[#f4f4f6]">
            VANTA
          </span>
        </button>

        {/* Primary Categories Navigation (Exact Match to Reference Panel 1) */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium" id="primary-navigation">
          {categoryShortcuts.map((cat) => (
            <button
              key={cat.label}
              onClick={() => handleCategoryClick(cat.filter, cat.navKey)}
              className="text-[#77716B] hover:text-[#242321] dark:text-[#8e8e98] dark:hover:text-[#f4f4f6] transition-colors cursor-pointer py-1"
            >
              {cat.label}
            </button>
          ))}
          <button
            onClick={() => onSelectNav('COLLECTIONS')}
            className={`transition-colors cursor-pointer py-1 ${
              activeNav === 'COLLECTIONS'
                ? 'text-[#B4532A] font-semibold'
                : 'text-[#77716B] hover:text-[#242321] dark:text-[#8e8e98] dark:hover:text-[#f4f4f6]'
            }`}
          >
            Collections
          </button>
          <button
            onClick={() => onSelectNav('ARCHIVES')}
            className={`transition-colors cursor-pointer py-1 ${
              activeNav === 'ARCHIVES'
                ? 'text-[#B4532A] font-semibold'
                : 'text-[#77716B] hover:text-[#242321] dark:text-[#8e8e98] dark:hover:text-[#f4f4f6]'
            }`}
          >
            Archives
          </button>
        </nav>

        {/* Action Controls & Utilities (Exact Match to Reference Top Right) */}
        <div className="flex items-center gap-3 sm:gap-4" id="header-utilities">
          {/* Search Trigger */}
          <button
            id="search-trigger-btn"
            onClick={onOpenSearch}
            className="w-9 h-9 flex items-center justify-center rounded-full text-[#242321] dark:text-[#f4f4f6] hover:bg-[#F7F2EC] dark:hover:bg-[#18181c] transition-colors cursor-pointer"
            aria-label="Search Catalog"
            title="Search Catalog"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Wishlist Trigger */}
          <button
            id="wishlist-trigger-btn"
            onClick={onOpenWishlist}
            className="w-9 h-9 flex items-center justify-center rounded-full text-[#242321] dark:text-[#f4f4f6] hover:bg-[#F7F2EC] dark:hover:bg-[#18181c] transition-colors relative cursor-pointer"
            aria-label="View Wishlist"
            title="View Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#B4532A] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Bag Trigger */}
          <button
            id="bag-trigger-btn"
            onClick={() => onSelectNav('BAG')}
            className="w-9 h-9 flex items-center justify-center rounded-full text-[#242321] dark:text-[#f4f4f6] hover:bg-[#F7F2EC] dark:hover:bg-[#18181c] transition-colors relative cursor-pointer"
            aria-label="View Cart Bag"
            title="View Cart Bag"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-0.5 -right-0.5 bg-[#B4532A] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
              {cartCount}
            </span>
          </button>

          {/* User Account Avatar & Popover */}
          <div className="relative">
            <button
              id="user-account-btn"
              onClick={() => {
                if (currentUser) {
                  setIsUserMenuOpen(!isUserMenuOpen);
                } else {
                  onSelectNav('LOGIN');
                }
              }}
              className="w-9 h-9 rounded-full bg-[#E9D9CA] dark:bg-[#242429] flex items-center justify-center text-[#242321] dark:text-[#f4f4f6] hover:ring-2 hover:ring-[#B4532A] transition-all cursor-pointer font-bold text-xs"
              aria-label="Client Account"
              title={currentUser ? `Account: ${currentUser.name}` : 'Login / Register'}
            >
              {currentUser ? (
                currentUser.name.charAt(0).toUpperCase()
              ) : (
                <User className="w-4 h-4 text-[#242321] dark:text-[#f4f4f6]" />
              )}
            </button>

            {isUserMenuOpen && currentUser && (
              <div className="absolute right-0 top-full mt-2 w-52 bg-white dark:bg-[#121215] border border-[#E9D9CA] dark:border-[#242429] rounded-xl shadow-xl z-50 py-2 text-xs">
                <div className="px-4 py-2 border-b border-[#E9D9CA] dark:border-[#242429]">
                  <p className="font-bold text-[#242321] dark:text-white truncate">{currentUser.name}</p>
                  <p className="text-[11px] text-[#77716B] truncate">{currentUser.email}</p>
                </div>
                <button
                  onClick={() => {
                    onSelectNav('MY_ORDERS');
                    setIsUserMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-[#242321] dark:text-[#f4f4f6] hover:bg-[#F7F2EC] dark:hover:bg-[#18181c] flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <Package className="w-4 h-4 text-[#B4532A]" />
                  <span>My Orders</span>
                </button>
                <button
                  onClick={() => {
                    onSelectNav('ORDER_TRACKING');
                    setIsUserMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-[#242321] dark:text-[#f4f4f6] hover:bg-[#F7F2EC] dark:hover:bg-[#18181c] flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <Truck className="w-4 h-4 text-[#B4532A]" />
                  <span>Track Shipment</span>
                </button>
                <button
                  onClick={() => {
                    onOpenWishlist();
                    setIsUserMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-[#242321] dark:text-[#f4f4f6] hover:bg-[#F7F2EC] dark:hover:bg-[#18181c] flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <Heart className="w-4 h-4 text-[#B4532A]" />
                  <span>Saved Wishlist</span>
                </button>
                <div className="border-t border-[#E9D9CA] dark:border-[#242429] mt-1 pt-1">
                  <button
                    onClick={() => {
                      onSelectNav('LOGIN');
                      setIsUserMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Switch / Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Currency Dropdown Popover */}
          <div className="relative hidden sm:block">
            <button
              id="header-currency-selector-btn"
              onClick={() => setIsCurrencyMenuOpen(!isCurrencyMenuOpen)}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-[#E9D9CA] dark:border-[#242429] bg-white dark:bg-[#121215] text-[11px] font-semibold text-[#242321] dark:text-[#f4f4f6] hover:border-[#B4532A] transition-all cursor-pointer"
              title="Display Currency"
            >
              <span>{activeCurrencyConfig.code}</span>
              <ChevronDown className="w-3 h-3 text-[#77716B]" />
            </button>

            {isCurrencyMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-[#121215] border border-[#E9D9CA] dark:border-[#242429] rounded-xl shadow-xl z-50 py-1 text-[11px] max-h-64 overflow-y-auto">
                <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#77716B] border-b border-[#E9D9CA] dark:border-[#242429]">
                  Select Currency
                </div>
                {Object.values(CURRENCY_CONFIGS).map((c) => (
                  <button
                    key={c.code}
                    onClick={() => {
                      setActiveCurrency(c.code);
                      setIsCurrencyMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-[#F7F2EC] dark:hover:bg-[#18181c] cursor-pointer transition-colors ${
                      currency === c.code ? 'text-[#B4532A] font-bold bg-[#F7F2EC]/60 dark:bg-[#18181c]' : 'text-[#242321] dark:text-[#f4f4f6]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{c.flag}</span>
                      <span>{c.code}</span>
                    </span>
                    <span className="text-[#77716B]">{c.symbol}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#242321] dark:text-[#f4f4f6] p-1.5 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#09090b] border-b border-[#E9D9CA] dark:border-[#242429] px-6 py-5 flex flex-col gap-3 text-sm shadow-xl animate-fade-in">
          <div className="text-[11px] font-bold uppercase text-[#77716B] pb-1 border-b border-[#E9D9CA] dark:border-[#242429]">
            Categories
          </div>
          <div className="grid grid-cols-2 gap-2 pb-3">
            {categoryShortcuts.map((cat) => (
              <button
                key={cat.label}
                onClick={() => handleCategoryClick(cat.filter, cat.navKey)}
                className="text-left py-2 px-3 bg-[#F7F2EC] dark:bg-[#121215] rounded-lg text-xs font-semibold text-[#242321] dark:text-[#f4f4f6] hover:bg-[#E9D9CA]/50"
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="text-[11px] font-bold uppercase text-[#77716B] pb-1 border-b border-[#E9D9CA] dark:border-[#242429]">
            Store Navigation
          </div>
          <button
            onClick={() => handleNavClick('COLLECTIONS')}
            className="text-left py-2 text-sm font-medium text-[#242321] dark:text-[#f4f4f6]"
          >
            Collections
          </button>
          <button
            onClick={() => handleNavClick('ARCHIVES')}
            className="text-left py-2 text-sm font-medium text-[#242321] dark:text-[#f4f4f6]"
          >
            Archives
          </button>
          <button
            onClick={() => handleNavClick('ABOUT')}
            className="text-left py-2 text-sm font-medium text-[#242321] dark:text-[#f4f4f6]"
          >
            About VANTA
          </button>

          <div className="pt-2 border-t border-[#E9D9CA] dark:border-[#242429] flex items-center justify-end">
            <button
              onClick={() => setIsCurrencyMenuOpen((prev) => !prev)}
              className="py-2 px-3 rounded-lg bg-[#F7F2EC] dark:bg-[#121215] text-xs font-bold text-[#B4532A]"
            >
              {activeCurrencyConfig.flag} {activeCurrencyConfig.code}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
