import React, { useState } from 'react';
import { ArrowRight, Eye, EyeOff, ShieldCheck, Check, ArrowLeft } from 'lucide-react';

interface LoginViewProps {
  onNavigate: (nav: string) => void;
  onLoginSuccess: (user: { name: string; email: string; memberId: string }) => void;
  onShowToast: (msg: string) => void;
  currentUser?: { name: string; email: string; memberId: string } | null;
  onLogout?: () => void;
}

export const LoginView: React.FC<LoginViewProps> = ({
  onNavigate,
  onLoginSuccess,
  onShowToast,
  currentUser,
  onLogout,
}) => {
  const [authMode, setAuthMode] = useState<'LOGIN' | 'REGISTER' | 'FORGOT'>('LOGIN');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
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
    if (!password || password.length < 6) {
      onShowToast('ENTER AN ENCRYPTED KEYCODE OF AT LEAST 6 CHARACTERS');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const authenticatedUser = {
        name: email.split('@')[0].toUpperCase(),
        email: email,
        memberId: `CLIENT_${Math.floor(1000 + Math.random() * 9000)}`,
      };
      onLoginSuccess(authenticatedUser);
      onShowToast(`WELCOME BACK, ${authenticatedUser.name}. SESSION SECURED.`);
      onNavigate('COLLECTIONS');
    }, 800);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      onShowToast('PLEASE ENTER YOUR FULL CLIENT NAME');
      return;
    }
    if (!email || !email.includes('@')) {
      onShowToast('PLEASE ENTER A VALID EMAIL PROTOCOL');
      return;
    }
    if (!password || password.length < 6) {
      onShowToast('PASSWORD MUST MEET 6-CHARACTER CRYPTOGRAPHIC STANDARD');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const newUser = {
        name: name.toUpperCase(),
        email: email,
        memberId: `CLIENT_${Math.floor(1000 + Math.random() * 9000)}`,
      };
      onLoginSuccess(newUser);
      onShowToast(`VAULT REGISTRY INITIALIZED: ${newUser.name}`);
      onNavigate('COLLECTIONS');
    }, 800);
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      onShowToast('PLEASE ENTER YOUR REGISTERED CLIENT EMAIL');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast(`CRYPTOGRAPHIC RESET DIRECTIVE DISPATCHED TO ${email.toUpperCase()}`);
      setAuthMode('LOGIN');
    }, 800);
  };

  const handleGoogleSignIn = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const googleUser = {
        name: 'TANUJ D.',
        email: 'tanujdorugade0226@gmail.com',
        memberId: 'CLIENT_0084_VIP',
      };
      onLoginSuccess(googleUser);
      onShowToast('GOOGLE OAUTH TOKEN VERIFIED. VAULT ACCESS GRANTED.');
      onNavigate('COLLECTIONS');
    }, 800);
  };

  // If user is already authenticated
  if (currentUser) {
    return (
      <div className="min-h-screen bg-[#ede7dd] text-[#1a1816] flex flex-col justify-between selection:bg-[#1a1816] selection:text-[#ede7dd]">
        {/* Top Navigation Bar Matching Image */}
        <nav className="w-full border-b border-[#d5cdc0] bg-[#ede7dd] px-6 md:px-16 py-4.5 flex items-center justify-between font-mono text-[11px]">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('COLLECTIONS')}
              className="font-headline text-2xl font-bold tracking-tight uppercase hover:opacity-80 transition-opacity cursor-pointer"
            >
              VANTA
            </button>
            <span className="text-[#a39c90]">|</span>
            <span className="text-[#59544c] tracking-widest uppercase">
              CLIENT AUTHENTICATION // NODE 01
            </span>
          </div>

          <div className="flex items-center gap-6 text-[#59544c] uppercase tracking-wider">
            <button
              onClick={() => onNavigate('SHOP')}
              className="hover:text-[#1a1816] transition-colors cursor-pointer"
            >
              ARCHIVE CATALOG
            </button>
            <button
              onClick={() => onShowToast('CONCIERGE DESK READY // LINE 01 ACTIVE')}
              className="hover:text-[#1a1816] transition-colors cursor-pointer"
            >
              CONCIERGE
            </button>
            <button
              onClick={() => onNavigate('COLLECTIONS')}
              className="text-[#1a1816] font-bold flex items-center gap-1 hover:opacity-75 transition-opacity cursor-pointer"
            >
              <span>RETURN TO FLAGSHIP</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </nav>

        {/* Authenticated Member Session Card */}
        <div className="max-w-2xl mx-auto w-full px-6 py-16">
          <div className="bg-[#faf7f2] border border-[#d5cdc0] p-8 md:p-12 shadow-sm flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#7b6e54]"></span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#7b6e54] font-bold uppercase">
                ACTIVE VAULT SESSION
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-[#d5cdc0] pb-6">
              <div>
                <h1 className="font-headline text-3xl font-bold text-[#1a1816]">
                  {currentUser.name}
                </h1>
                <p className="font-mono text-xs text-[#59544c] mt-1">{currentUser.email}</p>
                <div className="inline-block mt-2 font-mono text-[10px] bg-[#ede7dd] border border-[#d5cdc0] px-2.5 py-0.5 text-[#1a1816] font-bold uppercase">
                  {currentUser.memberId} // VERIFIED VIP
                </div>
              </div>
              <div className="w-12 h-12 bg-[#1a1816] text-[#ede7dd] flex items-center justify-center font-headline text-xl font-bold">
                {currentUser.name.charAt(0)}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <button
                onClick={() => onNavigate('BAG')}
                className="p-4 bg-[#ede7dd] border border-[#d5cdc0] hover:border-[#1a1816] text-left transition-all cursor-pointer"
              >
                <div className="text-[10px] text-[#7b6e54] font-bold uppercase">ALLOCATIONS</div>
                <div className="text-[#1a1816] font-bold mt-1">VIEW ARCHIVE BAG &rarr;</div>
              </button>
              <button
                onClick={() => onNavigate('SHOP')}
                className="p-4 bg-[#ede7dd] border border-[#d5cdc0] hover:border-[#1a1816] text-left transition-all cursor-pointer"
              >
                <div className="text-[10px] text-[#7b6e54] font-bold uppercase">CATALOG</div>
                <div className="text-[#1a1816] font-bold mt-1">BROWSE FOOTWEAR &rarr;</div>
              </button>
            </div>

            <div className="pt-4 border-t border-[#d5cdc0] flex justify-between items-center font-mono text-xs">
              <button
                onClick={() => onNavigate('COLLECTIONS')}
                className="text-[#1a1816] font-bold hover:underline cursor-pointer flex items-center gap-1.5"
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
                  className="text-red-700 hover:text-red-900 font-bold uppercase cursor-pointer"
                >
                  [TERMINATE SESSION]
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Footer Matching Image */}
        <footer className="w-full px-6 md:px-16 py-6 border-t border-[#d5cdc0] flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] text-[#7b6e54] uppercase tracking-wider">
          <div>© 2025 VANTA CORDWAINING HOUSE // CIVITANOVA ATELIER. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-6">
            <button className="hover:text-[#1a1816] cursor-pointer">PRIVACY POLICY</button>
            <button className="hover:text-[#1a1816] cursor-pointer">TERMS OF DISPATCH</button>
            <button className="hover:text-[#1a1816] cursor-pointer">SECURITY SPEC</button>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#ede7dd] text-[#1a1816] flex flex-col justify-between selection:bg-[#1a1816] selection:text-[#ede7dd]">
      {/* Top Navigation Bar Exactly as in Image */}
      <nav className="w-full border-b border-[#d5cdc0] bg-[#ede7dd] px-6 md:px-16 py-4.5 flex items-center justify-between font-mono text-[11px]">
        <div className="flex items-center gap-4">
          <button
            onClick={() => onNavigate('COLLECTIONS')}
            className="font-headline text-2xl md:text-3xl font-bold tracking-tight uppercase hover:opacity-80 transition-opacity cursor-pointer"
          >
            VANTA
          </button>
          <span className="text-[#a39c90]">|</span>
          <span className="text-[#59544c] tracking-widest uppercase">
            CLIENT AUTHENTICATION // NODE 01
          </span>
        </div>

        <div className="flex items-center gap-6 text-[#59544c] uppercase tracking-wider">
          <button
            onClick={() => onNavigate('SHOP')}
            className="hover:text-[#1a1816] transition-colors cursor-pointer"
          >
            ARCHIVE CATALOG
          </button>
          <button
            onClick={() => onShowToast('CONCIERGE DESK READY // LINE 01 ACTIVE')}
            className="hover:text-[#1a1816] transition-colors cursor-pointer"
          >
            CONCIERGE
          </button>
          <button
            onClick={() => onNavigate('COLLECTIONS')}
            className="text-[#1a1816] font-bold flex items-center gap-1.5 hover:opacity-75 transition-opacity cursor-pointer"
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
            className="lg:col-span-7 border border-[#d5cdc0] bg-[#f5efe6] p-7 md:p-10 flex flex-col justify-between relative shadow-sm"
            style={{
              backgroundImage:
                'radial-gradient(#cfc5b4 1.2px, transparent 1.2px)',
              backgroundSize: '24px 24px',
            }}
          >
            {/* Top Badges & Specimen Identity */}
            <div>
              <div className="flex items-center justify-between">
                <div className="bg-[#ede7dd]/90 border border-[#d5cdc0] px-3.5 py-1.5 font-mono text-[10px] tracking-widest text-[#1a1816] uppercase">
                  SPECIMEN // V-01 CORE
                </div>
                <div className="bg-[#ede7dd]/90 border border-[#d5cdc0] px-3.5 py-1.5 font-mono text-[10px] tracking-widest text-[#1a1816] uppercase flex items-center gap-2">
                  <span>SESSION SECURE</span>
                  <span className="w-2 h-2 rounded-full bg-[#7b6e54]"></span>
                </div>
              </div>

              <div className="font-mono text-[10px] text-[#59544c] tracking-widest uppercase mt-3">
                ARCHIVAL RUNNER • VEG-TANNED CALFSKIN • TRAVERTINE BASE
              </div>
            </div>

            {/* Specimen Centerpiece Photograph */}
            <div className="my-8 overflow-hidden border border-[#d5cdc0] shadow-sm bg-[#ede7dd]">
              <img
                src="/src/assets/images/cream_runner_pedestal_1788842341279.jpg"
                alt="VANTA V-01 Archival Specimen"
                className="w-full h-auto object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>

            {/* Telemetry Footprint */}
            <div>
              <div className="text-center font-mono text-[10px] text-[#59544c] tracking-widest uppercase py-1">
                WEIGHT // 385G &bull; LAST // MOD. V-09 &bull; CRAFT // CIVITANOVA ATELIER
              </div>

              {/* Dividing Rule */}
              <div className="border-t border-[#d5cdc0] my-4"></div>

              {/* Manifesto & Vault Seal */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pt-1">
                <div>
                  <h2 className="font-headline text-2xl sm:text-3xl text-[#1a1816]">
                    Step Into <span className="italic font-serif">Your Style.</span>
                  </h2>
                  <p className="font-mono text-[11px] text-[#59544c] mt-1 tracking-wider">
                    Discover your collection. Track your orders. Experience VANTA.
                  </p>
                </div>
                <div className="font-mono text-[10px] text-[#59544c] tracking-widest uppercase shrink-0">
                  PERMANENT VAULT 2025
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: VERIFIED MEMBERSHIP FORM CARD (5 Cols) */}
          <div className="lg:col-span-5 border border-[#d5cdc0] bg-[#faf7f2] p-8 sm:p-10 lg:p-12 flex flex-col justify-between shadow-sm">
            {authMode === 'LOGIN' && (
              <form onSubmit={handleLogin} className="flex flex-col justify-between h-full">
                <div>
                  {/* Eyebrow Label */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-[1px] bg-[#7b6e54]"></span>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#7b6e54] font-bold uppercase">
                      VERIFIED MEMBERSHIP
                    </span>
                  </div>

                  {/* Heading */}
                  <h1 className="font-headline text-3xl sm:text-4xl text-[#1a1816] tracking-tight mb-2">
                    Welcome Back
                  </h1>
                  <p className="text-[13px] text-[#59544c] mb-8 font-sans">
                    Sign in to continue your VANTA experience.
                  </p>

                  {/* Input 1: Email Address */}
                  <div className="mb-5">
                    <div className="flex justify-between items-center mb-2 font-mono text-[10px] tracking-widest uppercase">
                      <label htmlFor="login-email" className="text-[#1a1816] font-bold">
                        EMAIL ADDRESS *
                      </label>
                      <span className="text-[#7b6e54]">CLIENT_ID</span>
                    </div>
                    <input
                      id="login-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full bg-white border border-[#d5cdc0] px-4 py-3.5 text-[13px] text-[#1a1816] placeholder:text-[#a39c90] font-mono tracking-wide focus:outline-none focus:border-[#1a1816] transition-colors"
                    />
                  </div>

                  {/* Input 2: Password */}
                  <div className="mb-5">
                    <div className="flex justify-between items-center mb-2 font-mono text-[10px] tracking-widest uppercase">
                      <label htmlFor="login-password" className="text-[#1a1816] font-bold">
                        PASSWORD *
                      </label>
                      <span className="text-[#7b6e54]">ENCRYPTED</span>
                    </div>
                    <div className="relative">
                      <input
                        id="login-password"
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full bg-white border border-[#d5cdc0] px-4 py-3.5 pr-11 text-[13px] text-[#1a1816] placeholder:text-[#a39c90] font-mono tracking-wide focus:outline-none focus:border-[#1a1816] transition-colors"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7b6e54] hover:text-[#1a1816] p-1 cursor-pointer transition-colors"
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
                        className="w-4 h-4 accent-[#1a1816] border-[#d5cdc0] rounded-none cursor-pointer"
                      />
                      <span className="font-mono text-[11px] text-[#59544c]">Remember me</span>
                    </label>

                    <button
                      type="button"
                      onClick={() => setAuthMode('FORGOT')}
                      className="font-mono text-[11px] text-[#59544c] underline hover:text-[#1a1816] tracking-wider cursor-pointer"
                    >
                      Forgot Password?
                    </button>
                  </div>

                  {/* Primary SIGN IN Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#141312] text-[#f5efe6] font-mono text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-[#35322e] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-[0.99]"
                  >
                    <span>{isSubmitting ? 'AUTHENTICATING...' : 'SIGN IN'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {/* Divider */}
                  <div className="relative my-7 flex items-center justify-center">
                    <div className="border-t border-[#d5cdc0] w-full absolute"></div>
                    <span className="bg-[#faf7f2] px-3 font-mono text-[10px] tracking-widest text-[#7b6e54] relative uppercase">
                      OR CONTINUE WITH
                    </span>
                  </div>

                  {/* Google Login Button */}
                  <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-white border border-[#d5cdc0] hover:border-[#1a1816] transition-all flex items-center justify-center gap-3 font-mono text-[11px] font-bold tracking-wider text-[#1a1816] cursor-pointer shadow-2xs"
                  >
                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                    <span>CONTINUE WITH GOOGLE</span>
                  </button>
                </div>

                {/* Don't have an account */}
                <div className="text-center font-mono text-[11px] text-[#59544c] mt-8 pt-4 border-t border-[#d5cdc0]">
                  <span>Don't have an account?</span>{' '}
                  <button
                    type="button"
                    onClick={() => setAuthMode('REGISTER')}
                    className="text-[#1a1816] font-bold underline uppercase ml-1 cursor-pointer tracking-wider"
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
                    <span className="w-6 h-[1px] bg-[#7b6e54]"></span>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#7b6e54] font-bold uppercase">
                      VAULT REGISTRY
                    </span>
                  </div>

                  <h1 className="font-headline text-3xl sm:text-4xl text-[#1a1816] tracking-tight mb-2">
                    Create Account
                  </h1>
                  <p className="text-[13px] text-[#59544c] mb-6 font-sans">
                    Register for private allocations, drop access, and archival concierge.
                  </p>

                  <div className="mb-4">
                    <label className="block mb-2 font-mono text-[10px] tracking-widest uppercase text-[#1a1816] font-bold">
                      FULL CLIENT NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. TANUJ DORUGADE"
                      className="w-full bg-white border border-[#d5cdc0] px-4 py-3 text-[13px] text-[#1a1816] font-mono focus:outline-none focus:border-[#1a1816]"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block mb-2 font-mono text-[10px] tracking-widest uppercase text-[#1a1816] font-bold">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="client@atelier.vanta"
                      className="w-full bg-white border border-[#d5cdc0] px-4 py-3 text-[13px] text-[#1a1816] font-mono focus:outline-none focus:border-[#1a1816]"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block mb-2 font-mono text-[10px] tracking-widest uppercase text-[#1a1816] font-bold">
                      INITIALIZE ENCRYPTED PASSWORD *
                    </label>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="At least 6 characters"
                      className="w-full bg-white border border-[#d5cdc0] px-4 py-3 text-[13px] text-[#1a1816] font-mono focus:outline-none focus:border-[#1a1816]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#141312] text-[#f5efe6] font-mono text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-[#35322e] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>{isSubmitting ? 'REGISTERING...' : 'INITIALIZE ACCOUNT'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="text-center font-mono text-[11px] text-[#59544c] mt-8 pt-4 border-t border-[#d5cdc0]">
                  <span>Already verified?</span>{' '}
                  <button
                    type="button"
                    onClick={() => setAuthMode('LOGIN')}
                    className="text-[#1a1816] font-bold underline uppercase ml-1 cursor-pointer tracking-wider"
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
                    <span className="w-6 h-[1px] bg-[#7b6e54]"></span>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#7b6e54] font-bold uppercase">
                      KEY RECOVERY PROTOCOL
                    </span>
                  </div>

                  <h1 className="font-headline text-3xl sm:text-4xl text-[#1a1816] tracking-tight mb-2">
                    Reset Password
                  </h1>
                  <p className="text-[13px] text-[#59544c] mb-6 font-sans">
                    Enter your registered client email to receive a single-use authentication key.
                  </p>

                  <div className="mb-6">
                    <label className="block mb-2 font-mono text-[10px] tracking-widest uppercase text-[#1a1816] font-bold">
                      VERIFIED CLIENT EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full bg-white border border-[#d5cdc0] px-4 py-3.5 text-[13px] text-[#1a1816] font-mono focus:outline-none focus:border-[#1a1816]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#141312] text-[#f5efe6] font-mono text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-[#35322e] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>{isSubmitting ? 'DISPATCHING...' : 'SEND RESET PROTOCOL'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="text-center font-mono text-[11px] text-[#59544c] mt-8 pt-4 border-t border-[#d5cdc0]">
                  <button
                    type="button"
                    onClick={() => setAuthMode('LOGIN')}
                    className="text-[#1a1816] font-bold underline uppercase cursor-pointer tracking-wider"
                  >
                    &larr; BACK TO SIGN IN
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* Brutalist Footer Exactly as in Image */}
      <footer className="w-full px-6 md:px-16 py-6 border-t border-[#d5cdc0] flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] text-[#7b6e54] uppercase tracking-wider">
        <div>© 2025 VANTA CORDWAINING HOUSE // CIVITANOVA ATELIER. ALL RIGHTS RESERVED.</div>
        <div className="flex items-center gap-6">
          <button
            onClick={() => onShowToast('PRIVACY POLICY // ZERO METRIC EXFILTRATION')}
            className="hover:text-[#1a1816] cursor-pointer"
          >
            PRIVACY POLICY
          </button>
          <button
            onClick={() => onShowToast('DISPATCH SPECIFICATION // ARMORED COURIER SERVICE')}
            className="hover:text-[#1a1816] cursor-pointer"
          >
            TERMS OF DISPATCH
          </button>
          <button
            onClick={() => onShowToast('SECURITY PROTOCOL // SHA-256 ENCRYPTION NODE')}
            className="hover:text-[#1a1816] cursor-pointer"
          >
            SECURITY SPEC
          </button>
        </div>
      </footer>
    </div>
  );
};
