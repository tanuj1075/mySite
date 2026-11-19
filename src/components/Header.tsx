import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, User, Menu, X, Scale } from 'lucide-react';

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
