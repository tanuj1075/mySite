import React, { useState, useEffect } from 'react';
import { Sun, Moon, Instagram, Youtube, Twitter } from 'lucide-react';
import { getTheme, setTheme, subscribeTheme, ThemeMode } from '../lib/theme';

interface FooterProps {
  onSelectNav?: (nav: string) => void;
  onOpenAdminLogin?: () => void;
  isAdminAuthenticated?: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectNav,
  onOpenAdminLogin,
  isAdminAuthenticated = false,
}) => {
  const [email, setEmail] = useState('');
  const [subscribeMessage, setSubscribeMessage] = useState('');
  const [secretClickCount, setSecretClickCount] = useState(0);
  const [theme, setCurrentTheme] = useState<ThemeMode>(getTheme());

  useEffect(() => {
    return subscribeTheme((t) => setCurrentTheme(t));
  }, []);

  const handleSecretAdminTrigger = (e: React.MouseEvent) => {
    if (e.altKey || e.metaKey || e.ctrlKey) {
      onOpenAdminLogin?.();
      return;
    }
    const nextCount = secretClickCount + 1;
    setSecretClickCount(nextCount);
    if (nextCount >= 3) {
      setSecretClickCount(0);
      onOpenAdminLogin?.();
    } else {
      setTimeout(() => setSecretClickCount(0), 1500);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) setSubscribeMessage('Newsletter signup is not available yet.');
  };

  return (
    <footer
      id="main-footer"
      className="w-full bg-[#242321] text-white border-t border-[#333230] mt-16 font-sans transition-colors"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 py-14">
        {/* Top Section: Brand Statement & Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#3a3937]">
          {/* Brand Manifesto & Newsletter */}
          <div className="lg:col-span-2 space-y-4">
            <div className="font-sans text-3xl font-extrabold uppercase tracking-tight text-white">
              VANTA
            </div>
            <p className="text-sm text-[#A8A49E] max-w-sm leading-relaxed">
              Walk the Extraordinary. High-performance luxury footwear crafted at the intersection of architectural brutalism and technical comfort.
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm pt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-[#2D2C29] border border-[#3e3c39] px-4 py-2.5 rounded-lg text-xs text-white focus:outline-none focus:border-[#B4532A] flex-1 placeholder:text-[#77716B]"
              />
              <button
                type="submit"
                className="bg-[#B4532A] hover:bg-[#9C431F] text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </form>
            {subscribeMessage && (
              <span className="text-xs text-[#E9D9CA] font-medium block">
                {subscribeMessage}
              </span>
            )}
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Quick Links
            </span>
            <ul className="space-y-2 text-xs text-[#A8A49E]">
              <li>
                <button
                  onClick={() => onSelectNav?.('COLLECTIONS')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectNav?.('SHOP')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Shop Sneakers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectNav?.('NEW DROPS')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  New Arrivals
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectNav?.('ABOUT')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About VANTA
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Customer Care
            </span>
            <ul className="space-y-2 text-xs text-[#A8A49E]">
              <li>
                <button
                  onClick={() => onSelectNav?.('ABOUT')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectNav?.('ABOUT')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Shipping Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectNav?.('ABOUT')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Return Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectNav?.('ABOUT')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Size Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectNav?.('LOGIN')}
                  className="text-[#E9D9CA] hover:text-white transition-colors cursor-pointer font-medium"
                >
                  Private Client Account
                </button>
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Stay Connected
            </span>
            <p className="text-xs text-[#A8A49E]">
              Follow our atelier for private drop announcements.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#2D2C29] border border-[#3e3c39] flex items-center justify-center text-[#A8A49E] hover:text-white hover:border-[#B4532A] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#2D2C29] border border-[#3e3c39] flex items-center justify-center text-[#A8A49E] hover:text-white hover:border-[#B4532A] transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#2D2C29] border border-[#3e3c39] flex items-center justify-center text-[#A8A49E] hover:text-white hover:border-[#B4532A] transition-all"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Visual Appearance & Theme Controls */}
        <div className="py-6 border-b border-[#3a3937] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B4532A]"></span>
            <span className="text-[#A8A49E] uppercase tracking-wider text-[11px]">
              APPEARANCE:
            </span>
            <span className="text-white font-bold text-[11px]">
              {theme === 'dark' ? 'OBSIDIAN DARK LUXURY' : 'WARM IVORY & TERRACOTTA'}
            </span>
          </div>

          <div
            id="footer-theme-switcher"
            className="flex items-center border border-[#3e3c39] bg-[#1E1E24] p-1 rounded-lg gap-1"
          >
            <button
              id="footer-theme-light-btn"
              onClick={() => setTheme('light')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold transition-all cursor-pointer ${
                theme === 'light'
                  ? 'bg-[#B4532A] text-white shadow-sm'
                  : 'text-[#A8A49E] hover:text-white'
              }`}
              title="Switch to Warm Ivory & Terracotta Mode"
            >
              <Sun className="w-3.5 h-3.5" />
              <span>LIGHT MODE</span>
            </button>
            <button
              id="footer-theme-dark-btn"
              onClick={() => setTheme('dark')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold transition-all cursor-pointer ${
                theme === 'dark'
                  ? 'bg-[#B4532A] text-white shadow-sm'
                  : 'text-[#A8A49E] hover:text-white'
              }`}
              title="Switch to Obsidian Dark Mode"
            >
              <Moon className="w-3.5 h-3.5" />
              <span>DARK MODE</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & System Coordinates */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#77716B]">
          <div className="flex items-center gap-4">
            <span>© 2026 VANTA SYSTEM CORP. ALL RIGHTS RESERVED.</span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">CIVITANOVA MARCHE // BERLIN</span>
          </div>
          <div className="flex items-center gap-6">
            <span>LAT: 52.5200 N / LONG: 13.4050 E</span>
            <span
              onClick={handleSecretAdminTrigger}
              className="text-[#A8A49E] hover:text-[#B4532A] font-semibold select-none cursor-pointer transition-colors"
            >
              {isAdminAuthenticated ? 'SYS_STATUS: ADMIN_ACTIVE' : 'SYS_STATUS: NOMINAL'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
