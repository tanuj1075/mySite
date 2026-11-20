import React, { useState } from 'react';
import { ArrowRight, Eye, EyeOff, ShieldCheck, Check, ArrowLeft } from 'lucide-react';
import { authApi } from '../lib/api';

interface LoginViewProps {
  initialMode?: 'LOGIN' | 'REGISTER';
  onAuthModeChange?: (mode: 'LOGIN' | 'REGISTER') => void;
  onNavigate: (nav: string) => void;
  onLoginSuccess: (user: { name: string; email: string; memberId: string }) => void;
  onShowToast: (msg: string) => void;
  currentUser?: { name: string; email: string; memberId: string } | null;
  onLogout?: () => void;
  redirectToAfterLogin?: string;
}

export const LoginView: React.FC<LoginViewProps> = ({
  initialMode = 'LOGIN',
  onAuthModeChange,
  onNavigate,
  onLoginSuccess,
  onShowToast,
  currentUser,
  onLogout,
  redirectToAfterLogin,
}) => {
  const [authMode, setAuthMode] = useState<'LOGIN' | 'REGISTER' | 'FORGOT'>(initialMode);
  const updateAuthMode = (mode: 'LOGIN' | 'REGISTER') => {
    setAuthMode(mode);
    onAuthModeChange?.(mode);
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const destinationNav = redirectToAfterLogin || 'COLLECTIONS';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      onShowToast('PLEASE ENTER A VALID CLIENT EMAIL PROTOCOL');
      return;
    }
    if (email.toLowerCase().includes('@vanta.com') || email.toLowerCase().startsWith('admin@')) {
      onShowToast('ADMINISTRATIVE DIRECTORY DETECTED // ROUTING TO SECURE ADMIN GATE');
      onNavigate('ADMIN_LOGIN');
      return;
    }
    if (!password || password.length < 8) {
      onShowToast('PASSWORD MUST BE AT LEAST 8 CHARACTERS');
      return;
    }

    setIsSubmitting(true);
    try {
      const authenticatedUser = await authApi.login(email.trim(), password);
      onLoginSuccess(authenticatedUser);
      onShowToast(`WELCOME BACK, ${authenticatedUser.name}. SESSION SECURED.`);
      onNavigate(destinationNav);
    } catch (error) {
      const msg = error instanceof Error ? error.message : 'Authentication failed';
      if (msg.toLowerCase().includes('failed to fetch') || msg.toLowerCase().includes('network')) {
        onShowToast('SERVER UNREACHABLE — PLEASE CHECK CONNECTION OR BACKEND STATUS');
      } else {
        onShowToast(msg.toUpperCase());
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      onShowToast('PLEASE ENTER YOUR FULL CLIENT NAME');
      return;
    }
    if (!email || !email.includes('@')) {
      onShowToast('PLEASE ENTER A VALID EMAIL PROTOCOL');
      return;
    }
    if (!password || password.length < 8) {
      onShowToast('PASSWORD MUST BE AT LEAST 8 CHARACTERS');
      return;
    }

    setIsSubmitting(true);
    try {
      const newUser = await authApi.register(name.trim(), email.trim(), password);
      onLoginSuccess(newUser);
      onShowToast(`VAULT REGISTRY INITIALIZED: ${newUser.name}`);
      onNavigate(destinationNav);
    } catch (error) {
      const msg = error instanceof Error ? error.message : 'Registration failed';
      if (msg.toLowerCase().includes('failed to fetch') || msg.toLowerCase().includes('network')) {
        onShowToast('SERVER UNREACHABLE — PLEASE CHECK CONNECTION OR BACKEND STATUS');
      } else {
        onShowToast(msg.toUpperCase());
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      onShowToast('PLEASE ENTER YOUR REGISTERED CLIENT EMAIL');
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await authApi.requestPasswordReset(email);
      onShowToast(result.message.toUpperCase());
      updateAuthMode('LOGIN');
    } catch (error) {
      onShowToast(error instanceof Error ? error.message.toUpperCase() : 'PASSWORD RESET REQUEST FAILED');
    } finally {
      setIsSubmitting(false);
    }
  };

  // If user is already authenticated
  if (currentUser) {
    return (
      <div className="min-h-screen bg-[#09090b] text-[#f4f4f6] flex flex-col justify-between selection:bg-[#c9a96e33] selection:text-[#f4f4f6]">
        {/* Top Navigation Bar */}
        <nav className="w-full border-b border-[#242429] bg-[#09090b] px-6 md:px-16 py-4.5 flex items-center justify-between font-mono text-[11px]">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('COLLECTIONS')}
              className="font-headline text-2xl font-bold tracking-tight uppercase hover:text-[#c9a96e] transition-colors cursor-pointer"
            >
              VANTA
            </button>
            <span className="text-[#3a3a42]">|</span>
            <span className="text-[#8e8e98] tracking-widest uppercase">
              CLIENT AUTHENTICATION // NODE 01
            </span>
          </div>

          <div className="flex items-center gap-6 text-[#8e8e98] uppercase tracking-wider">
            <button
              onClick={() => onNavigate('SHOP')}
              className="hover:text-[#f4f4f6] transition-colors cursor-pointer"
            >
              ARCHIVE CATALOG
            </button>
            <button
              onClick={() => onShowToast('CONCIERGE DESK READY // LINE 01 ACTIVE')}
              className="hover:text-[#f4f4f6] transition-colors cursor-pointer"
            >
              CONCIERGE
            </button>
            <button
              onClick={() => onNavigate('COLLECTIONS')}
              className="text-[#f4f4f6] font-bold flex items-center gap-1 hover:text-[#c9a96e] transition-colors cursor-pointer"
            >
              <span>RETURN TO FLAGSHIP</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </nav>

        {/* Authenticated Member Session Card */}
        <div className="max-w-2xl mx-auto w-full px-6 py-16">
          <div className="bg-[#121215] border border-[#242429] p-8 md:p-12 shadow-2xl flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#c9a96e]"></span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#c9a96e] font-bold uppercase">
                ACTIVE VAULT SESSION
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-[#242429] pb-6">
              <div>
                <h1 className="font-headline text-3xl font-bold text-[#f4f4f6]">
                  {currentUser.name}
                </h1>
                <p className="font-mono text-xs text-[#8e8e98] mt-1">{currentUser.email}</p>
                <div className="inline-block mt-2 font-mono text-[10px] bg-[#18181c] border border-[#3a3a42] px-2.5 py-0.5 text-[#c9a96e] font-bold uppercase">
                  {currentUser.memberId} // VERIFIED VIP
                </div>
              </div>
              <div className="w-12 h-12 bg-[#18181c] border border-[#3a3a42] text-[#f4f4f6] flex items-center justify-center font-headline text-xl font-bold">
                {currentUser.name.charAt(0)}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <button
                onClick={() => onNavigate('BAG')}
                className="p-4 bg-[#18181c] border border-[#242429] hover:border-[#8e8e98] text-left transition-all cursor-pointer"
              >
                <div className="text-[10px] text-[#c9a96e] font-bold uppercase">ALLOCATIONS</div>
                <div className="text-[#f4f4f6] font-bold mt-1">VIEW ARCHIVE BAG &rarr;</div>
              </button>
              <button
                onClick={() => onNavigate('SHOP')}
                className="p-4 bg-[#18181c] border border-[#242429] hover:border-[#8e8e98] text-left transition-all cursor-pointer"
              >
                <div className="text-[10px] text-[#c9a96e] font-bold uppercase">CATALOG</div>
                <div className="text-[#f4f4f6] font-bold mt-1">BROWSE FOOTWEAR &rarr;</div>
              </button>
            </div>

            <div className="pt-4 border-t border-[#242429] flex justify-between items-center font-mono text-xs">
              <button
                onClick={() => onNavigate('COLLECTIONS')}
                className="text-[#f4f4f6] font-bold hover:text-[#c9a96e] cursor-pointer flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>RETURN TO FLAGSHIP</span>
              </button>
              {onLogout && (
                <button
                  onClick={() => {
                    onLogout();
                    onShowToast('CLIENT LOGGED OUT SAFELY');
                  }}
                  className="text-red-400 hover:text-red-300 font-bold uppercase cursor-pointer transition-colors"
                >
                  [TERMINATE SESSION]
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full px-6 md:px-16 py-6 border-t border-[#242429] flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] text-[#52525b] uppercase tracking-wider">
          <div>© 2025 VANTA CORDWAINING HOUSE // CIVITANOVA ATELIER. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-6">
            <button className="hover:text-[#f4f4f6] transition-colors cursor-pointer">PRIVACY POLICY</button>
            <button className="hover:text-[#f4f4f6] transition-colors cursor-pointer">TERMS OF DISPATCH</button>
            <button className="hover:text-[#f4f4f6] transition-colors cursor-pointer">SECURITY SPEC</button>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F2EC] bg-[#F7F2EC] text-[#242321] text-[#242321] flex flex-col justify-between selection:bg-[#B4532A33] selection:text-[#B4532A] font-sans">
      {/* Top Navigation Bar */}
      <nav className="w-full border-b border-[#E9D9CA] border-[#E9D9CA] bg-white/95 bg-[#F7F2EC]/95 px-6 md:px-16 py-4.5 flex items-center justify-between font-mono text-[11px] backdrop-blur-md">
        <div className="flex items-center gap-4">
          <button
            onClick={() => onNavigate('COLLECTIONS')}
            className="font-headline text-2xl md:text-3xl font-bold tracking-tight uppercase text-[#242321] text-[#242321] hover:text-[#B4532A] transition-colors cursor-pointer"
          >
            VANTA
          </button>
          <span className="text-[#E9D9CA] dark:text-[#3a3a42]">|</span>
          <span className="text-[#77716B] text-[#77716B] tracking-widest uppercase">
            CLIENT AUTHENTICATION // NODE 01
          </span>
        </div>

        <div className="flex items-center gap-6 text-[#77716B] text-[#77716B] uppercase tracking-wider">
          <button
            onClick={() => onNavigate('SHOP')}
            className="hover:text-[#B4532A] dark:hover:text-[#f4f4f6] transition-colors cursor-pointer"
          >
            ARCHIVE CATALOG
          </button>
          <button
            onClick={() => onShowToast('CONCIERGE DESK READY // LINE 01 ACTIVE')}
            className="hover:text-[#B4532A] dark:hover:text-[#f4f4f6] transition-colors cursor-pointer"
          >
            CONCIERGE
          </button>
          <button
            onClick={() => onNavigate('COLLECTIONS')}
            className="text-[#B4532A] font-bold flex items-center gap-1.5 hover:underline transition-colors cursor-pointer"
          >
            <span>RETURN TO FLAGSHIP</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </nav>

      {/* Main Dual-Column Authentication Canvas */}
      <main className="max-w-[1440px] mx-auto w-full px-6 md:px-16 py-8 lg:py-14 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 w-full items-stretch">
          {/* LEFT COLUMN: ARCHIVAL SPECIMEN EXHIBIT CARD (7 Cols) */}
          <div
            className="lg:col-span-7 border border-[#E9D9CA] border-[#E9D9CA] bg-white bg-[#FDFAF6] rounded-2xl p-7 md:p-10 flex flex-col justify-between relative shadow-sm"
          >
            {/* Top Badges & Specimen Identity */}
            <div>
              <div className="flex items-center justify-between">
                <div className="bg-[#F7F2EC] bg-white border border-[#E9D9CA] border-[#E9D9CA] px-3.5 py-1.5 font-mono text-[10px] tracking-widest text-[#242321] text-[#242321] uppercase font-bold rounded">
                  SPECIMEN // V-01 CORE
                </div>
                <div className="bg-[#F7F2EC] bg-white border border-[#E9D9CA] border-[#E9D9CA] px-3.5 py-1.5 font-mono text-[10px] tracking-widest text-[#242321] text-[#242321] uppercase flex items-center gap-2 rounded">
                  <span>SESSION SECURE</span>
                  <span className="w-2 h-2 rounded-full bg-[#B4532A]"></span>
                </div>
              </div>

              <div className="font-mono text-[10px] text-[#77716B] text-[#77716B] tracking-widest uppercase mt-3">
                ARCHIVAL RUNNER • VEG-TANNED CALFSKIN • TRAVERTINE BASE
              </div>
            </div>

            {/* Specimen Centerpiece Photograph */}
            <div className="my-8 overflow-hidden border border-[#E9D9CA] border-[#E9D9CA] bg-[#F7F2EC] bg-[#F7F2EC] rounded-xl p-4 flex items-center justify-center">
              <img
                src="/assets/images/cream_runner_pedestal_1788842341279.jpg"
                alt="VANTA V-01 Archival Specimen"
                className="w-full max-h-[340px] object-contain transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>

            {/* Telemetry Footprint */}
            <div>
              <div className="text-center font-mono text-[10px] text-[#77716B] text-[#77716B] tracking-widest uppercase py-1">
                WEIGHT // 385G &bull; LAST // MOD. V-09 &bull; CRAFT // CIVITANOVA ATELIER
              </div>

              {/* Dividing Rule */}
              <div className="border-t border-[#E9D9CA] border-[#E9D9CA] my-4"></div>

              {/* Manifesto & Vault Seal */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pt-1">
                <div>
                  <h2 className="font-headline text-2xl sm:text-3xl text-[#242321] text-[#242321]">
                    Step Into <span className="italic font-serif text-[#B4532A]">Your Style.</span>
                  </h2>
                  <p className="font-sans text-[12px] text-[#77716B] text-[#77716B] mt-1">
                    Discover your collection. Track your orders. Experience VANTA.
                  </p>
                </div>
                <div className="font-mono text-[10px] text-[#77716B] dark:text-[#52525b] tracking-widest uppercase shrink-0">
                  PERMANENT VAULT 2025
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: VERIFIED MEMBERSHIP FORM CARD (5 Cols) */}
          <div className="lg:col-span-5 border border-[#E9D9CA] border-[#E9D9CA] bg-white bg-[#FDFAF6] rounded-2xl p-8 sm:p-10 lg:p-12 flex flex-col justify-between shadow-sm">
            {authMode === 'LOGIN' && (
              <form onSubmit={handleLogin} className="flex flex-col justify-between h-full">
                <div>
                  {/* Eyebrow Label */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-[2px] bg-[#B4532A]"></span>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#B4532A] font-bold uppercase">
                      VERIFIED MEMBERSHIP
                    </span>
                  </div>

                  {/* Heading */}
                  <h1 className="font-headline text-3xl sm:text-4xl text-[#242321] dark:text-white tracking-tight mb-2">
                    Welcome Back
                  </h1>
                  <p className="text-[13px] text-[#77716B] text-[#77716B] mb-6 font-sans">
                    Sign in to continue your VANTA experience.
                  </p>

                  {/* Quick Client Auto-fill Pill */}
                  <div className="mb-5 p-3 bg-[#F7F2EC] bg-white border border-[#E9D9CA] border-[#E9D9CA] rounded-xl flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-[#B4532A] block text-[10px] uppercase tracking-wider">
                        Demo Client Credentials
                      </span>
                      <span className="text-[#242321] text-[#242321] font-mono text-[11px]">
                        testuser123@example.com
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setEmail('testuser123@example.com');
                        setPassword('VantaUser2026!');
                      }}
                      className="px-2.5 py-1 bg-[#B4532A] hover:bg-[#9C431F] text-white text-[10px] font-bold uppercase rounded-lg transition-colors cursor-pointer shadow-sm"
                    >
                      Fill Demo
                    </button>
                  </div>

                  {/* Input 1: Email Address */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1.5 font-mono text-[10px] tracking-widest uppercase">
                      <label htmlFor="login-email" className="text-[#242321] text-[#242321] font-bold">
                        EMAIL ADDRESS *
                      </label>
                      <span className="text-[#B4532A]">CLIENT_ID</span>
                    </div>
                    <input
                      id="login-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full bg-[#F7F2EC] bg-white border border-[#E9D9CA] border-[#E9D9CA] px-4 py-3 text-[13px] text-[#242321] text-[#242321] placeholder:text-[#77716B] font-mono tracking-wide focus:outline-none focus:border-[#B4532A] transition-colors rounded-xl"
                    />
                  </div>

                  {/* Input 2: Password */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1.5 font-mono text-[10px] tracking-widest uppercase">
                      <label htmlFor="login-password" className="text-[#242321] text-[#242321] font-bold">
                        PASSWORD *
                      </label>
                      <span className="text-[#B4532A]">ENCRYPTED</span>
                    </div>
                    <div className="relative">
                      <input
                        id="login-password"
                        type={showPassword ? 'text' : 'password'}
                        required
                        minLength={8}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full bg-[#F7F2EC] bg-white border border-[#E9D9CA] border-[#E9D9CA] px-4 py-3 pr-11 text-[13px] text-[#242321] text-[#242321] placeholder:text-[#77716B] font-mono tracking-wide focus:outline-none focus:border-[#B4532A] transition-colors rounded-xl"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#77716B] hover:text-[#242321] dark:hover:text-[#f4f4f6] p-1 cursor-pointer transition-colors"
                        aria-label="Toggle password visibility"
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Checkbox and Forgot Password */}
                  <div className="flex items-center justify-between pt-1 pb-4">
                    <label className="flex items-center gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 accent-[#B4532A] rounded cursor-pointer"
                      />
                      <span className="font-sans text-xs text-[#77716B] text-[#77716B]">Remember me</span>
                    </label>

                    <button
                      type="button"
                      onClick={() => setAuthMode('FORGOT')}
                      className="font-sans text-xs text-[#B4532A] hover:underline cursor-pointer"
                    >
                      Forgot Password?
                    </button>
                  </div>

                  {/* Primary SIGN IN Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#B4532A] hover:bg-[#9C431F] text-white font-mono text-[12px] font-bold tracking-[0.15em] uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-[0.99] rounded-xl"
                  >
                    <span>{isSubmitting ? 'AUTHENTICATING...' : 'SIGN IN'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Don't have an account */}
                <div className="text-center font-sans text-xs text-[#77716B] text-[#77716B] mt-8 pt-4 border-t border-[#E9D9CA] border-[#E9D9CA]">
                  <span>Don't have an account?</span>{' '}
                  <button
                    type="button"
                    onClick={() => updateAuthMode('REGISTER')}
                    className="text-[#B4532A] font-bold underline uppercase ml-1 cursor-pointer tracking-wider hover:opacity-80 transition-opacity"
                  >
                    CREATE ACCOUNT
                  </button>
                </div>
              </form>
            )}

            {/* CREATE ACCOUNT MODE */}
            {authMode === 'REGISTER' && (
              <form onSubmit={handleRegister} className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-[2px] bg-[#B4532A]"></span>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#B4532A] font-bold uppercase">
                      VAULT REGISTRY
                    </span>
                  </div>

                  <h1 className="font-headline text-3xl sm:text-4xl text-[#242321] dark:text-white tracking-tight mb-2">
                    Create Account
                  </h1>
                  <p className="text-[13px] text-[#77716B] text-[#77716B] mb-6 font-sans">
                    Register for private allocations, drop access, and archival concierge.
                  </p>

                  <div className="mb-4">
                    <label className="block mb-1.5 font-mono text-[10px] tracking-widest uppercase text-[#242321] text-[#242321] font-bold">
                      FULL CLIENT NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. TANUJ DORUGADE"
                      className="w-full bg-[#F7F2EC] bg-white border border-[#E9D9CA] border-[#E9D9CA] px-4 py-3 text-[13px] text-[#242321] text-[#242321] font-mono placeholder:text-[#77716B] focus:outline-none focus:border-[#B4532A] transition-colors rounded-xl"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block mb-1.5 font-mono text-[10px] tracking-widest uppercase text-[#242321] text-[#242321] font-bold">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="client@atelier.vanta"
                      className="w-full bg-[#F7F2EC] bg-white border border-[#E9D9CA] border-[#E9D9CA] px-4 py-3 text-[13px] text-[#242321] text-[#242321] font-mono placeholder:text-[#77716B] focus:outline-none focus:border-[#B4532A] transition-colors rounded-xl"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block mb-1.5 font-mono text-[10px] tracking-widest uppercase text-[#242321] text-[#242321] font-bold">
                      INITIALIZE ENCRYPTED PASSWORD *
                    </label>
                    <input
                      type="password"
                      required
                      minLength={8}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="At least 8 characters"
                      className="w-full bg-[#F7F2EC] bg-white border border-[#E9D9CA] border-[#E9D9CA] px-4 py-3 text-[13px] text-[#242321] text-[#242321] font-mono placeholder:text-[#77716B] focus:outline-none focus:border-[#B4532A] transition-colors rounded-xl"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#B4532A] hover:bg-[#9C431F] text-white font-mono text-[12px] font-bold tracking-[0.15em] uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-[0.99] rounded-xl"
                  >
                    <span>{isSubmitting ? 'REGISTERING...' : 'INITIALIZE ACCOUNT'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="text-center font-sans text-xs text-[#77716B] text-[#77716B] mt-8 pt-4 border-t border-[#E9D9CA] border-[#E9D9CA]">
                  <span>Already verified?</span>{' '}
                  <button
                    type="button"
                    onClick={() => updateAuthMode('LOGIN')}
                    className="text-[#B4532A] font-bold underline uppercase ml-1 cursor-pointer tracking-wider hover:opacity-80 transition-opacity"
                  >
                    SIGN IN
                  </button>
                </div>
              </form>
            )}

            {/* FORGOT PASSWORD MODE */}
            {authMode === 'FORGOT' && (
              <form onSubmit={handleForgotPassword} className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-[1px] bg-[#c9a96e]"></span>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#c9a96e] font-bold uppercase">
                      KEY RECOVERY PROTOCOL
                    </span>
                  </div>

                  <h1 className="font-headline text-3xl sm:text-4xl text-[#f4f4f6] tracking-tight mb-2">
                    Reset Password
                  </h1>
                  <p className="text-[13px] text-[#8e8e98] mb-6 font-sans">
                    Enter your registered client email to receive a single-use authentication key.
                  </p>

                  <div className="mb-6">
                    <label className="block mb-2 font-mono text-[10px] tracking-widest uppercase text-[#f4f4f6] font-bold">
                      VERIFIED CLIENT EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full bg-[#18181c] border border-[#242429] px-4 py-3.5 text-[13px] text-[#f4f4f6] font-mono placeholder:text-[#52525b] focus:outline-none focus:border-[#8e8e98] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#f4f4f6] text-[#09090b] font-mono text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-[#c9a96e] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-[0.99]"
                  >
                    <span>{isSubmitting ? 'DISPATCHING...' : 'SEND RESET PROTOCOL'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="text-center font-mono text-[11px] text-[#8e8e98] mt-8 pt-4 border-t border-[#242429]">
                  <button
                    type="button"
                    onClick={() => updateAuthMode('LOGIN')}
                    className="text-[#f4f4f6] font-bold underline uppercase cursor-pointer tracking-wider hover:text-[#c9a96e] transition-colors"
                  >
                    &larr; BACK TO SIGN IN
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* Obsidian Footer */}
      <footer className="w-full px-6 md:px-16 py-6 border-t border-[#242429] flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] text-[#52525b] uppercase tracking-wider">
        <div>© 2025 VANTA CORDWAINING HOUSE // CIVITANOVA ATELIER. ALL RIGHTS RESERVED.</div>
        <div className="flex items-center gap-6">
          <button
            onClick={() => onShowToast('PRIVACY POLICY // ZERO METRIC EXFILTRATION')}
            className="hover:text-[#f4f4f6] cursor-pointer transition-colors"
          >
            PRIVACY POLICY
          </button>
          <button
            onClick={() => onShowToast('DISPATCH SPECIFICATION // ARMORED COURIER SERVICE')}
            className="hover:text-[#f4f4f6] cursor-pointer transition-colors"
          >
            TERMS OF DISPATCH
          </button>
          <button
            onClick={() => onShowToast('SECURITY PROTOCOL // SHA-256 ENCRYPTION NODE')}
            className="hover:text-[#f4f4f6] cursor-pointer transition-colors"
          >
            SECURITY SPEC
          </button>
        </div>
      </footer>
    </div>
  );
};
