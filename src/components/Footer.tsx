import React, { useState } from 'react';
import { Check } from 'lucide-react';

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
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [secretClickCount, setSecretClickCount] = useState(0);

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
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer
      id="main-footer"
      className="w-full bg-[#e4ddcf] border-t border-[#d5cdc0] mt-16"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-16 py-16">
        {/* Top Section: Brand Statement & Columns */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 pb-16 border-b border-[#d5cdc0]">
          {/* Brand Manifesto & Newsletter */}
          <div className="max-w-md">
            <div className="font-headline text-[30px] uppercase text-[#1a1816] font-bold tracking-tight mb-2">
              VANTA ARCHIVE
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7b6e54] font-bold mb-6">
              TACTILE BRUTALISM. ZERO COMPROMISE.
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="SUBSCRIBE TO DISPATCH"
                className="bg-[#ede7dd] border border-[#b8ad9c] px-4 py-2.5 font-mono text-[11px] text-[#1a1816] focus:outline-none focus:border-[#1a1816] w-64 tracking-wider placeholder:text-[#8e8474]"
              />
              <button
                type="submit"
                className="bg-[#1a1816] text-[#ede7dd] font-mono text-[11px] font-bold px-5 py-2.5 hover:bg-[#35322e] transition-colors uppercase tracking-wider cursor-pointer"
              >
                {isSubscribed ? <Check className="w-4 h-4" /> : 'JOIN'}
              </button>
            </form>
            {isSubscribed && (
              <span className="font-mono text-[10px] text-[#7b6e54] mt-2 block tracking-wider font-bold">
                ✓ ALLOCATION DISPATCH FREQUENCY INITIALIZED.
              </span>
            )}
          </div>

          {/* 4 Link Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12 w-full lg:w-auto">
            {/* Catalog */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[11px] font-bold text-[#1a1816] uppercase tracking-wider">
                Catalog
              </span>
              <button
                onClick={() => onSelectNav && onSelectNav('SHOP')}
                className="font-mono text-[10px] text-[#59544c] hover:text-[#1a1816] text-left transition-colors uppercase cursor-pointer"
              >
                ALL PIECES
              </button>
              <button
                onClick={() => onSelectNav && onSelectNav('COLLECTIONS')}
                className="font-mono text-[10px] text-[#59544c] hover:text-[#1a1816] text-left transition-colors uppercase cursor-pointer"
              >
                SERIES INDEX
              </button>
              <button
                onClick={() => onSelectNav && onSelectNav('NEW DROPS')}
                className="font-mono text-[10px] text-[#59544c] hover:text-[#1a1816] text-left transition-colors uppercase cursor-pointer"
              >
                EDITIONS
              </button>
            </div>

            {/* Archives */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[11px] font-bold text-[#1a1816] uppercase tracking-wider">
                Archives
              </span>
              <button
                onClick={() => onSelectNav && onSelectNav('ARCHIVES')}
                className="font-mono text-[10px] text-[#59544c] hover:text-[#1a1816] text-left transition-colors uppercase cursor-pointer"
              >
                INDEX 2020-2024
              </button>
              <span
                onClick={() => {
                  const el = document.getElementById('blueprint-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="font-mono text-[10px] text-[#59544c] hover:text-[#1a1816] cursor-pointer transition-colors uppercase"
              >
                DECONSTRUCT
              </span>
              <span
                onClick={() => onSelectNav && onSelectNav('ARCHIVES')}
                className="font-mono text-[10px] text-[#59544c] hover:text-[#1a1816] cursor-pointer transition-colors uppercase"
              >
                PERMANENT
              </span>
            </div>

            {/* Concierge */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[11px] font-bold text-[#1a1816] uppercase tracking-wider">
                Concierge
              </span>
              <span
                onClick={() => onSelectNav && onSelectNav('ABOUT')}
                className="font-mono text-[10px] text-[#59544c] hover:text-[#1a1816] cursor-pointer transition-colors uppercase"
              >
                AUTHENTICATION
              </span>
              <span
                onClick={() => onSelectNav && onSelectNav('ABOUT')}
                className="font-mono text-[10px] text-[#59544c] hover:text-[#1a1816] cursor-pointer transition-colors uppercase"
              >
                SHIPPING &amp; RETURN
              </span>
              <span
                onClick={() => onSelectNav && onSelectNav('LOGIN')}
                className="font-mono text-[10px] text-[#59544c] hover:text-[#1a1816] cursor-pointer transition-colors uppercase font-bold"
              >
                PRIVATE CLIENT LOGIN
              </span>
            </div>

            {/* Protocol */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[11px] font-bold text-[#1a1816] uppercase tracking-wider">
                Protocol
              </span>
              <span className="font-mono text-[10px] text-[#59544c] hover:text-[#1a1816] cursor-pointer transition-colors uppercase">
                TERMS OF SERVICE
              </span>
              <span className="font-mono text-[10px] text-[#59544c] hover:text-[#1a1816] cursor-pointer transition-colors uppercase">
                PRIVACY POLICY
              </span>
              <span className="font-mono text-[10px] text-[#59544c] hover:text-[#1a1816] cursor-pointer transition-colors uppercase">
                DISCLOSURE
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & System Coordinates */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[10px] text-[#59544c]">
          <div className="flex items-center gap-4">
            <span>© 2025 VANTA SYSTEM CORP. ALL RIGHTS RESERVED.</span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">CIVITANOVA MARCHE // BERLIN</span>
          </div>
          <div className="flex items-center gap-6">
            <span>LAT: 52.5200 N / LONG: 13.4050 E</span>
            <span
              onClick={handleSecretAdminTrigger}
              className="text-[#1a1816] font-bold select-none cursor-default"
            >
              {isAdminAuthenticated ? 'SYS_STATUS: ADMIN_ACTIVE' : 'SYS_STATUS: NOMINAL'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
