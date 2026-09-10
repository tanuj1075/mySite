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
      className="fixed top-0 left-0 w-full z-40 bg-[#ede7dd]/95 backdrop-blur-md border-b border-[#d5cdc0]"
    >
      {/* Top Category & Department Micro-Bar */}
      <div className="hidden md:flex border-b border-[#d5cdc0] bg-[#e4ddcf] px-5 md:px-16 py-1 items-center justify-between font-mono text-[10px] text-[#59544c]">
        <div className="flex items-center gap-4">
          <span className="text-[#7b6e54] font-bold tracking-widest">ATELIER DIRECT:</span>
          {categoryShortcuts.map((cat) => (
            <button
              key={cat.label}
              onClick={() => handleCategoryClick(cat.filter)}
              className="hover:text-[#1a1816] transition-colors cursor-pointer font-semibold uppercase"
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[#7b6e54]">FREE COMPLIMENTARY SIZE EXCHANGE ON ALL ORDERS</span>
          <button
            onClick={() => onSelectNav('LOGIN')}
            className={`font-bold hover:underline cursor-pointer tracking-wider ${
              activeNav === 'LOGIN' ? 'text-[#1a1816] underline' : 'text-[#1a1816]'
            }`}
          >
            {currentUser ? `[CLIENT: ${currentUser.name}]` : '[CLIENT LOGIN]'}
          </button>
          {isAdminAuthenticated && (
            <button
              onClick={onOpenAdminPortal}
              className="font-bold hover:underline cursor-pointer tracking-wider text-[#1a1816] bg-[#ded6c9] px-2 py-0.5 border border-[#b8ad9c] text-[10px]"
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
            <span className="font-headline text-2xl sm:text-3xl font-bold tracking-tight uppercase text-[#1a1816] hover:opacity-80 transition-opacity">
              VANTA
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
                className={`font-mono text-[11px] font-bold tracking-[0.12em] transition-all uppercase cursor-pointer ${
                  isActive
                    ? 'text-[#1a1816] border-b-2 border-[#1a1816] pb-0.5'
                    : 'text-[#6e685f] hover:text-[#1a1816] pb-0.5 border-b-2 border-transparent'
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
            className="text-[#1a1816] hover:text-[#6e685f] transition-colors p-1.5 focus:outline-none cursor-pointer"
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
              className="text-[#1a1816] hover:text-[#6e685f] transition-colors relative p-1.5 focus:outline-none cursor-pointer"
              aria-label="Compare Models"
              title="Compare Models"
            >
              <Scale className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              {compareCount > 0 && (
                <span className="absolute -top-0.5 -right-1 bg-[#1a1816] text-[#ede7dd] font-mono text-[9px] font-bold px-1 py-0.2 leading-tight">
                  {compareCount}
                </span>
              )}
            </button>
          )}

          {/* Wishlist Trigger */}
          <button
            id="wishlist-trigger-btn"
            onClick={onOpenWishlist}
            className="text-[#1a1816] hover:text-[#6e685f] transition-colors relative p-1.5 focus:outline-none cursor-pointer"
            aria-label="View Wishlist"
            title="View Wishlist"
          >
            <Heart className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            <span className="absolute -top-0.5 -right-1 bg-[#1a1816] text-[#ede7dd] font-mono text-[9px] font-bold px-1 py-0.2 leading-tight">
              {wishlistCount}
            </span>
          </button>

          {/* Bag / Cart Trigger */}
          <button
            id="bag-trigger-btn"
            onClick={() => onSelectNav('BAG')}
            className={`transition-colors relative p-1.5 focus:outline-none cursor-pointer ${
              activeNav === 'BAG' ? 'text-[#1a1816]' : 'text-[#1a1816] hover:text-[#6e685f]'
            }`}
            aria-label="View Cart Bag"
            title="View Cart Bag"
          >
            <ShoppingBag className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            <span className="absolute -top-0.5 -right-1 bg-[#1a1816] text-[#ede7dd] font-mono text-[9px] font-bold px-1 py-0.2 leading-tight">
              {cartCount < 10 ? `0${cartCount}` : cartCount}
            </span>
          </button>

          {/* Account Profile / Login Trigger */}
          <button
            id="user-account-btn"
            onClick={() => onSelectNav('LOGIN')}
            className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center transition-colors cursor-pointer text-[#ede7dd] ${
              activeNav === 'LOGIN' ? 'bg-[#7b6e54]' : 'bg-[#1a1816] hover:bg-[#35322e]'
            }`}
            aria-label="Private Client Account / Login"
            title="Private Client Account / Login"
          >
            {currentUser ? (
              <span className="font-mono text-[11px] font-bold">{currentUser.name.charAt(0)}</span>
            ) : (
              <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ede7dd]" />
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#1a1816] p-1.5 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#ede7dd] border-b border-[#d5cdc0] px-5 py-4 flex flex-col gap-3 font-mono text-xs shadow-lg">
          <div className="text-[10px] text-[#7b6e54] font-bold uppercase pb-1 border-b border-[#d5cdc0]">
            DEPARTMENTS & CATEGORIES
          </div>
          <div className="grid grid-cols-2 gap-1.5 pb-2">
            {categoryShortcuts.map((cat) => (
              <button
                key={cat.label}
                onClick={() => handleCategoryClick(cat.filter)}
                className="text-left py-1.5 px-2 bg-[#f4efe8] border border-[#d5cdc0] text-[10px] font-bold uppercase hover:bg-[#ded6c9]"
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="text-[10px] text-[#7b6e54] font-bold uppercase pb-1 border-b border-[#d5cdc0]">
            PRIMARY NAVIGATION
          </div>
          {mainNavLinks.map((link) => (
            <button
              key={link.key}
              onClick={() => handleNavClick(link.key)}
              className={`text-left py-2 px-3 border transition-colors cursor-pointer ${
                activeNav === link.key
                  ? 'bg-[#1a1816] border-[#1a1816] text-[#ede7dd] font-bold'
                  : 'bg-[#f4efe8] border-[#d5cdc0] text-[#6e685f] hover:text-[#1a1816]'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('BAG')}
            className={`text-left py-2 px-3 border transition-colors cursor-pointer flex justify-between items-center ${
              activeNav === 'BAG'
                ? 'bg-[#1a1816] border-[#1a1816] text-[#ede7dd] font-bold'
                : 'bg-[#f4efe8] border-[#d5cdc0] text-[#6e685f] hover:text-[#1a1816]'
            }`}
          >
            <span>BAG // ALLOCATIONS</span>
            <span className="text-[#1a1816] font-bold">[{cartCount}]</span>
          </button>
          {isAdminAuthenticated && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdminPortal();
              }}
              className="text-left py-2 px-3 bg-[#e4ddcf] border border-[#b8ad9c] font-bold text-[#1a1816] uppercase"
            >
              PORTAL_ADM // ENTERPRISE CONSOLE
            </button>
          )}
        </div>
      )}
    </header>
  );
};
