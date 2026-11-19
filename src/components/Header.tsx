import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, User, Menu, X, Scale, Sun, Moon, Globe, ChevronDown } from 'lucide-react';
import { CURRENCY_CONFIGS, SupportedCurrency, getActiveCurrency, setActiveCurrency, subscribeCurrency } from '../lib/currency';
import { getTheme, setTheme, toggleTheme, subscribeTheme, ThemeMode } from '../lib/theme';

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
  const [theme, setCurrentTheme] = useState<ThemeMode>(getTheme());
  const [currency, setCurrentCurrency] = useState<SupportedCurrency>(getActiveCurrency());
  const [isCurrencyMenuOpen, setIsCurrencyMenuOpen] = useState(false);

  useEffect(() => {
    const unsubTheme = subscribeTheme((t) => setCurrentTheme(t));
    const unsubCurr = subscribeCurrency((c) => setCurrentCurrency(c));
    return () => {
      unsubTheme();
      unsubCurr();
    };
  }, []);

  const activeCurrencyConfig = CURRENCY_CONFIGS[currency] || CURRENCY_CONFIGS.INR;

  // Primary top navigation categories specified in guide:
  // Men, Women, Kids, Sneakers, Sports, New Arrivals, Sale
  const categoryShortcuts = [
    { label: 'MEN', filter: 'Men' },
    { label: 'WOMEN', filter: 'Women' },
    { label: 'KIDS', filter: 'Kids' },
    { label: 'SNEAKERS', filter: 'Sneakers' },
    { label: 'SPORTS', filter: 'Running' },
    { label: 'NEW ARRIVALS', filter: 'New Arrivals' },
    { label: 'SALE', filter: 'Sale' },
  ];

  const mainNavLinks = [
    { key: 'SHOP', label: 'CATALOG' },
    { key: 'COLLECTIONS', label: 'COLLECTIONS' },
    { key: 'ARCHIVES', label: 'ARCHIVES' },
    { key: 'NEW DROPS', label: 'NEW DROPS' },
    { key: 'ABOUT', label: 'ABOUT' },
  ];

  const handleCategoryClick = (filter: string) => {
    if (onSelectCategoryFilter) {
      onSelectCategoryFilter(filter);
    }
    onSelectNav('SHOP');
    setMobileMenuOpen(false);
  };

  const handleNavClick = (key: string) => {
    onSelectNav(key);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 w-full z-40 bg-[#09090b]/95 backdrop-blur-md border-b border-[#242429]"
    >
      {/* Top Category & Department Micro-Bar */}
      <div className="hidden md:flex border-b border-[#242429] bg-[#09090b] px-5 md:px-16 py-1 items-center justify-between font-mono text-[10px] text-[#8e8e98]">
        <div className="flex items-center gap-4">
          <span className="text-[#c9a96e] font-bold tracking-widest">ATELIER DIRECT:</span>
          {categoryShortcuts.map((cat) => (
            <button
              key={cat.label}
              onClick={() => handleCategoryClick(cat.filter)}
              className="text-[#8e8e98] hover:text-[#f4f4f6] transition-colors cursor-pointer font-semibold uppercase tracking-wider"
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[#52525b] hidden lg:inline">FREE COMPLIMENTARY SIZE EXCHANGE ON ALL ORDERS</span>
          
          {/* Quick Currency indicator in micro-bar */}
          <button
            onClick={() => setIsCurrencyMenuOpen((prev) => !prev)}
            className="flex items-center gap-1 text-[#8e8e98] hover:text-[#c9a96e] transition-colors cursor-pointer"
            title="Worldwide Auto-Detected Currency"
          >
            <Globe className="w-3 h-3 text-[#c9a96e]" />
            <span>{activeCurrencyConfig.flag} {activeCurrencyConfig.code} ({activeCurrencyConfig.symbol})</span>
          </button>

          {/* Quick Theme toggle in micro-bar */}
          <button
            onClick={() => toggleTheme()}
            className="flex items-center gap-1 text-[#8e8e98] hover:text-[#c9a96e] transition-colors cursor-pointer"
            title={`Toggle Theme (${theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'})`}
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-3 h-3 text-[#c9a96e]" />
                <span>LIGHT MODE</span>
              </>
            ) : (
              <>
                <Moon className="w-3 h-3 text-[#121215]" />
                <span>DARK MODE</span>
              </>
            )}
          </button>

          <button
            onClick={() => onSelectNav('LOGIN')}
            className={`font-bold hover:underline cursor-pointer tracking-wider ${
              activeNav === 'LOGIN' ? 'text-[#c9a96e] underline' : 'text-[#f4f4f6]'
            }`}
          >
            {currentUser ? `[CLIENT: ${currentUser.name}]` : '[CLIENT LOGIN]'}
          </button>
          {isAdminAuthenticated && (
            <button
              onClick={onOpenAdminPortal}
              className="font-bold cursor-pointer tracking-wider text-[#c9a96e] bg-[#121215] hover:bg-[#18181c] px-2 py-0.5 border border-[#3a3a42] text-[10px] transition-colors"
              title="Open Atelier Administrator Console"
            >
              [ADMIN CONSOLE ⚡]
            </button>
          )}
        </div>
      </div>

      {/* Main Primary Header Bar */}
      <div className="h-14 sm:h-16 max-w-[1440px] mx-auto px-5 md:px-16 flex items-center justify-between">
        {/* Brand Logo & Wordmark */}
        <div className="flex items-center gap-6">
          <button
            id="brand-logo-btn"
            onClick={() => onSelectNav('COLLECTIONS')}
            className="flex items-center gap-2.5 text-left group focus:outline-none cursor-pointer"
          >
            <span className="font-headline text-2xl sm:text-3xl font-extrabold tracking-tight uppercase text-[#f4f4f6] group-hover:tracking-wider transition-all duration-300">
              VANTA
            </span>
            <span className="hidden sm:inline-block font-mono text-[9px] uppercase tracking-[0.25em] text-[#c9a96e] border-l border-[#242429] pl-2.5 py-0.5">
              ARCHIVE // ATELIER
            </span>
          </button>
        </div>

        {/* Navigation Bar (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8" id="primary-navigation">
          {mainNavLinks.map((link) => {
            const isActive = activeNav === link.key;
            return (
              <button
                key={link.key}
                id={`nav-${link.key.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => onSelectNav(link.key)}
                className={`font-mono text-[11px] font-bold tracking-[0.14em] transition-all uppercase cursor-pointer ${
                  isActive
                    ? 'text-[#f4f4f6] border-b-2 border-[#f4f4f6] pb-0.5'
                    : 'text-[#8e8e98] hover:text-[#f4f4f6] pb-0.5 border-b-2 border-transparent'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls & Utilities */}
        <div className="flex items-center gap-2 sm:gap-3.5" id="header-utilities">
          {/* Search Trigger */}
          <button
            id="search-trigger-btn"
            onClick={onOpenSearch}
            className="text-[#8e8e98] hover:text-[#f4f4f6] transition-colors p-1.5 focus:outline-none cursor-pointer"
            aria-label="Search Catalog"
            title="Search Catalog"
          >
            <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </button>

          {/* Compare Modal Trigger */}
          {onOpenCompare && (
            <button
              id="compare-trigger-btn"
              onClick={onOpenCompare}
              className="text-[#8e8e98] hover:text-[#f4f4f6] transition-colors relative p-1.5 focus:outline-none cursor-pointer"
              aria-label="Compare Models"
              title="Compare Models"
            >
              <Scale className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              {compareCount > 0 && (
                <span className="absolute -top-0.5 -right-1 bg-[#c9a96e] text-[#09090b] font-mono text-[9px] font-bold px-1 py-0.2 leading-tight">
                  {compareCount}
                </span>
              )}
            </button>
          )}

          {/* Wishlist Trigger */}
          <button
            id="wishlist-trigger-btn"
            onClick={onOpenWishlist}
            className="text-[#8e8e98] hover:text-[#f4f4f6] transition-colors relative p-1.5 focus:outline-none cursor-pointer"
            aria-label="View Wishlist"
            title="View Wishlist"
          >
            <Heart className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            <span className="absolute -top-0.5 -right-1 bg-[#c9a96e] text-[#09090b] font-mono text-[9px] font-bold px-1 py-0.2 leading-tight">
              {wishlistCount}
            </span>
          </button>

          {/* Bag / Cart Trigger */}
          <button
            id="bag-trigger-btn"
            onClick={() => onSelectNav('BAG')}
            className={`transition-colors relative p-1.5 focus:outline-none cursor-pointer ${
              activeNav === 'BAG' ? 'text-[#f4f4f6]' : 'text-[#8e8e98] hover:text-[#f4f4f6]'
            }`}
            aria-label="View Cart Bag"
            title="View Cart Bag"
          >
            <ShoppingBag className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            <span className="absolute -top-0.5 -right-1 bg-[#f4f4f6] text-[#09090b] font-mono text-[9px] font-bold px-1 py-0.2 leading-tight">
              {cartCount < 10 ? `0${cartCount}` : cartCount}
            </span>
          </button>

          {/* Worldwide Currency Selector Dropdown */}
          <div className="relative">
            <button
              id="header-currency-selector-btn"
              onClick={() => setIsCurrencyMenuOpen(!isCurrencyMenuOpen)}
              className="flex items-center gap-1 px-2 py-1 bg-[#121215] border border-[#242429] hover:border-[#c9a96e] text-[10px] font-mono font-bold text-[#f4f4f6] tracking-wider transition-all cursor-pointer"
              title="Change Display Currency Worldwide"
            >
              <Globe className="w-3 h-3 text-[#c9a96e]" />
              <span>{activeCurrencyConfig.code}</span>
              <ChevronDown className="w-2.5 h-2.5 text-[#8e8e98]" />
            </button>

            {isCurrencyMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-[#121215] border border-[#c9a96e]/40 shadow-2xl z-50 py-1 font-mono text-[10px] max-h-64 overflow-y-auto">
                <div className="px-2.5 py-1 text-[9px] uppercase tracking-wider text-[#c9a96e] border-b border-[#242429] font-bold">
                  WORLDWIDE CURRENCY
                </div>
                {Object.values(CURRENCY_CONFIGS).map((c) => (
                  <button
                    key={c.code}
                    onClick={() => {
                      setActiveCurrency(c.code);
                      setIsCurrencyMenuOpen(false);
                    }}
                    className={`w-full text-left px-2.5 py-1.5 flex items-center justify-between hover:bg-[#18181c] cursor-pointer transition-colors ${
                      currency === c.code ? 'text-[#c9a96e] font-bold bg-[#18181c]' : 'text-[#f4f4f6]'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <span>{c.flag}</span>
                      <span>{c.code}</span>
                    </span>
                    <span className="text-[#8e8e98]">{c.symbol}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Segmented Theme Switcher */}
          <div
            id="header-theme-switcher"
            className="flex items-center border border-[#242429] bg-[#121215] p-0.5"
            title="Theme Selection: Dark / Light"
          >
            <button
              id="header-dark-theme-btn"
              onClick={() => setTheme('dark')}
              className={`flex items-center gap-1 px-2 py-1 text-[9px] font-mono font-bold tracking-wider transition-all cursor-pointer ${
                theme === 'dark'
                  ? 'bg-[#c9a96e] text-[#09090b]'
                  : 'text-[#8e8e98] hover:text-[#f4f4f6]'
              }`}
              title="Obsidian Dark Luxury Theme"
            >
              <Moon className="w-3 h-3" />
              <span className="hidden sm:inline">DARK</span>
            </button>
            <button
              id="header-light-theme-btn"
              onClick={() => setTheme('light')}
              className={`flex items-center gap-1 px-2 py-1 text-[9px] font-mono font-bold tracking-wider transition-all cursor-pointer ${
                theme === 'light'
                  ? 'bg-[#c9a96e] text-[#09090b]'
                  : 'text-[#8e8e98] hover:text-[#f4f4f6]'
              }`}
              title="Alabaster Light Luxury Theme"
            >
              <Sun className="w-3 h-3" />
              <span className="hidden sm:inline">LIGHT</span>
            </button>
          </div>

          {/* Account Profile / Login Trigger */}
          <button
            id="user-account-btn"
            onClick={() => onSelectNav('LOGIN')}
            className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center transition-colors cursor-pointer border ${
              activeNav === 'LOGIN'
                ? 'bg-[#c9a96e] text-[#09090b] border-[#c9a96e]'
                : 'bg-[#121215] text-[#f4f4f6] border-[#242429] hover:border-[#8e8e98]'
            }`}
            aria-label="Private Client Account / Login"
            title="Private Client Account / Login"
          >
            {currentUser ? (
              <span className="font-mono text-[11px] font-bold">{currentUser.name.charAt(0)}</span>
            ) : (
              <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f4f4f6]" />
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#f4f4f6] p-1.5 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#09090b] border-b border-[#242429] px-5 py-4 flex flex-col gap-3 font-mono text-xs shadow-2xl">
          <div className="text-[10px] text-[#c9a96e] font-bold uppercase pb-1 border-b border-[#242429]">
            DEPARTMENTS & CATEGORIES
          </div>
          <div className="grid grid-cols-2 gap-1.5 pb-2">
            {categoryShortcuts.map((cat) => (
              <button
                key={cat.label}
                onClick={() => handleCategoryClick(cat.filter)}
                className="text-left py-1.5 px-2 bg-[#121215] border border-[#242429] text-[10px] font-bold uppercase text-[#8e8e98] hover:text-[#f4f4f6] hover:border-[#3a3a42]"
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="text-[10px] text-[#c9a96e] font-bold uppercase pb-1 border-b border-[#242429] pt-2">
            GLOBAL SETTINGS & PREFERENCES
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => toggleTheme()}
              className="py-2 px-3 bg-[#121215] border border-[#242429] flex items-center justify-between text-[#f4f4f6] font-bold text-[10px] cursor-pointer"
            >
              <span>THEME:</span>
              <span className="text-[#c9a96e]">{theme === 'dark' ? '🌙 OBSIDIAN' : '☀️ ALABASTER'}</span>
            </button>
            <button
              onClick={() => setIsCurrencyMenuOpen((prev) => !prev)}
              className="py-2 px-3 bg-[#121215] border border-[#242429] flex items-center justify-between text-[#f4f4f6] font-bold text-[10px] cursor-pointer"
            >
              <span>CURRENCY:</span>
              <span className="text-[#c9a96e]">{activeCurrencyConfig.flag} {activeCurrencyConfig.code}</span>
            </button>
          </div>

          <div className="text-[10px] text-[#c9a96e] font-bold uppercase pb-1 border-b border-[#242429]">
            PRIMARY NAVIGATION
          </div>
          {mainNavLinks.map((link) => (
            <button
              key={link.key}
              onClick={() => handleNavClick(link.key)}
              className={`text-left py-2 px-3 border transition-colors cursor-pointer ${
                activeNav === link.key
                  ? 'bg-[#18181c] border-[#f4f4f6] text-[#f4f4f6] font-bold'
                  : 'bg-[#121215] border-[#242429] text-[#8e8e98] hover:text-[#f4f4f6]'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('BAG')}
            className={`text-left py-2 px-3 border transition-colors cursor-pointer flex justify-between items-center ${
              activeNav === 'BAG'
                ? 'bg-[#18181c] border-[#f4f4f6] text-[#f4f4f6] font-bold'
                : 'bg-[#121215] border-[#242429] text-[#8e8e98] hover:text-[#f4f4f6]'
            }`}
          >
            <span>BAG // ALLOCATIONS</span>
            <span className="text-[#c9a96e] font-bold">[{cartCount}]</span>
          </button>
          {isAdminAuthenticated && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdminPortal();
              }}
              className="text-left py-2 px-3 bg-[#18181c] border border-[#3a3a42] font-bold text-[#c9a96e] uppercase tracking-wider"
            >
              PORTAL_ADM // ENTERPRISE CONSOLE
            </button>
          )}
        </div>
      )}
    </header>
  );
};
