import React, { useState } from 'react';
import { ArrowRight, Eye, EyeOff, ExternalLink, ShieldCheck, Key } from 'lucide-react';
import { authApi } from '../lib/api';

interface AdminLoginViewProps {
  onAdminLoginSuccess: (admin: { email: string; name: string; role: string }) => void;
  onNavigateStore: () => void;
  onShowToast: (msg: string) => void;
}

export const AdminLoginView: React.FC<AdminLoginViewProps> = ({
  onAdminLoginSuccess,
  onNavigateStore,
  onShowToast,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberDevice, setRememberDevice] = useState(true);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      onShowToast('ACCESS DENIED: VALID ADMINISTRATIVE IDENTITY REQUIRED');
      return;
    }

    if (password.length < 8) {
      onShowToast('ADMIN CREDENTIAL MUST BE AT LEAST 8 CHARACTERS');
      return;
    }
    setIsAuthenticating(true);
    try {
      const authenticatedAdmin = await authApi.adminLogin(email, password, rememberDevice);
      onAdminLoginSuccess({ email: authenticatedAdmin.email, name: authenticatedAdmin.name, role: authenticatedAdmin.role });
      onShowToast(`ADMIN SESSION INITIALIZED: ${authenticatedAdmin.name} // PRIVILEGES UNLOCKED`);
    } catch (error) {
      const msg = error instanceof Error ? error.message : 'Admin authentication failed';
      if (msg.toLowerCase().includes('failed to fetch') || msg.toLowerCase().includes('network')) {
        const isLocalDevelopment =
          window.location.hostname === 'localhost' ||
          window.location.hostname === '127.0.0.1' ||
          window.location.hostname === '[::1]';
        onShowToast(
          isLocalDevelopment
            ? 'CANNOT REACH BACKEND (PORT 4000) — RUN `npm run server:dev`'
            : 'BACKEND UNREACHABLE — CHECK THE VERCEL API DEPLOYMENT AND VITE_API_URL (HTTPS; NOT localhost:4000).',
        );
      } else if (msg.toLowerCase().includes('invalid admin credentials')) {
        onShowToast('INVALID CREDENTIALS — USE THE ADMIN_EMAIL AND ADMIN_PASSWORD FROM .ENV');
      } else {
        onShowToast(msg.toUpperCase());
      }
    } finally { setIsAuthenticating(false); }
  };

  const handleForgotPassword = () => {
    setShowForgotModal(true);
  };

  return (
    <div className="min-h-screen bg-[#ede7dd] text-[#1a1816] flex flex-col justify-between selection:bg-[#1a1816] selection:text-[#ede7dd] font-sans">
      {/* Top Header Bar Matching Screenshot Exactly */}
      <header className="w-full border-b border-[#d5cdc0] bg-[#ede7dd] px-6 md:px-16 py-4 flex items-center justify-between font-mono text-[11px]">
        {/* Left Branding and Console Badge */}
        <div className="flex items-center gap-4">
          <button
            onClick={onNavigateStore}
            className="font-headline text-2xl md:text-3xl font-bold tracking-tight uppercase hover:opacity-80 transition-opacity cursor-pointer"
          >
            VANTA
          </button>
          <div className="bg-[#ede7dd] border border-[#d5cdc0] px-2.5 py-1 text-[10px] tracking-widest text-[#1a1816] uppercase font-bold">
            ADMIN CONSOLE // SYS.AUTH
          </div>
        </div>

        {/* Right Status Indicator and Storefront Link */}
        <div className="flex items-center gap-6 text-[#1a1816]">
          <div className="hidden sm:flex items-center gap-2 tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#16a34a] shadow-[0_0_8px_rgba(22,163,74,0.6)]"></span>
            <span className="font-mono text-[10px] sm:text-[11px] tracking-wider uppercase font-semibold">
              360° SHIELD ACTIVE
            </span>
          </div>

          <button
            onClick={onNavigateStore}
            className="font-mono text-[11px] tracking-wider uppercase font-bold flex items-center gap-1.5 hover:underline cursor-pointer transition-all"
            title="Return to Public Storefront"
          >
            <span>PUBLIC STOREFRONT</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Main Administrative Enclave Card */}
      <main className="max-w-[1360px] w-full mx-auto px-4 sm:px-8 py-6 lg:py-10 flex-1 flex items-center justify-center">
        <div className="w-full border border-[#d5cdc0] rounded-xl sm:rounded-2xl overflow-hidden bg-[#faf7f2] shadow-sm grid grid-cols-1 lg:grid-cols-2">
          
          {/* LEFT COLUMN: SECURE WORKSPACE SPECIMEN DISPLAY */}
          <div
            className="bg-[#ede7dd] border-b lg:border-b-0 lg:border-r border-[#d5cdc0] p-8 sm:p-10 lg:p-12 flex flex-col justify-between relative"
            style={{
              backgroundImage: 'radial-gradient(#cfc5b4 1.2px, transparent 1.2px)',
              backgroundSize: '24px 24px',
            }}
          >
            {/* Top Node Telemetry Row */}
            <div>
              <div className="flex items-center justify-between font-mono text-[10px] text-[#59544c] tracking-[0.15em] uppercase">
                <span>SECURE WORKSPACE NODE // 01</span>
                <span>TLS 1.3 // AES-256</span>
              </div>

              {/* Branding Section */}
              <div className="mt-5">
                <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1816]">
                  VANTA
                </h2>
                <div className="font-mono text-[10px] tracking-[0.25em] text-[#7b6e54] font-bold uppercase mt-1">
                  ADMIN PORTAL
                </div>
              </div>

              {/* Shoe Specimen Photographic Display */}
              <div className="mt-6 rounded-lg overflow-hidden border border-[#d5cdc0] relative shadow-xs bg-[#e4ddcf]">
                <img
                  src="/assets/images/cream_runner_pedestal_1788842341279.jpg"
                  alt="VANTA Administrative Specimen"
                  className="w-full h-[250px] sm:h-[280px] object-cover object-center"
                />
                {/* Inset Sub-Bar matching user image */}
                <div className="absolute bottom-0 inset-x-0 bg-[#e8e2d7]/90 backdrop-blur-xs px-4 py-2 flex items-center justify-between font-mono text-[10px] text-[#1a1816] tracking-widest uppercase border-t border-[#d5cdc0]">
                  <span>ARCHIVAL SPECIMEN // X-01 CORE</span>
                  <span className="text-[#59544c]">SYSTEM REPOSITORY</span>
                </div>
              </div>
            </div>

            {/* Bottom Copy & Compliance */}
            <div className="mt-6 pt-4 border-t border-[#d5cdc0]">
              <h3 className="font-serif italic text-lg sm:text-xl text-[#1a1816]">
                Secure access to your VANTA workspace.
              </h3>
              <p className="font-sans text-[12px] text-[#59544c] leading-relaxed mt-2">
                Manage your VANTA experience, inventory dossiers, order logistics, and cryptographic audit parameters from a secure administrative environment.
              </p>

              <div className="mt-6 font-mono text-[10px] text-[#59544c] tracking-widest uppercase flex flex-wrap items-center gap-4 sm:gap-6">
                <span>ROLE ENFORCEMENT: STRICT</span>
                <span>MERKLE AUDIT: ACTIVE</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: PRIVILEGED AUTHENTICATION FORM */}
          <div className="bg-[#faf7f2] p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
            <form onSubmit={handleAdminLogin} className="flex flex-col justify-between h-full">
              <div>
                {/* Stage Indicator */}
                <div className="flex items-center justify-between font-mono text-[10px] uppercase">
                  <div className="flex items-center gap-2 text-[#1a1816] font-bold tracking-[0.18em]">
                    <span className="w-2 h-2 rounded-full bg-[#1a1816]"></span>
                    <span>PRIVILEGED AUTHENTICATION</span>
                  </div>
                  <span className="text-[#7b6e54] tracking-[0.18em]">STAGE 01 // CREDENTIALS</span>
                </div>

                {/* Main Heading */}
                <div className="mt-8 mb-8">
                  <h1 className="font-headline text-3xl sm:text-4xl text-[#1a1816] tracking-tight">
                    Welcome, Admin
                  </h1>
                  <p className="font-sans text-[13px] text-[#59544c] mt-2">
                    Sign in to access the VANTA Admin Portal.
                  </p>
                </div>

                {/* Email Input */}
                <div className="mb-5">
                  <label
                    htmlFor="admin-email"
                    className="block font-mono text-[10px] tracking-widest uppercase text-[#1a1816] font-bold mb-2"
                  >
                    ADMIN EMAIL *
                  </label>
                  <input
                    id="admin-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Configured admin email"
                    className="w-full bg-white border border-[#d5cdc0] px-4 py-3.5 text-[13px] text-[#1a1816] font-mono tracking-wide focus:outline-none focus:border-[#1a1816] rounded-xs shadow-2xs transition-colors"
                  />
                </div>

                {/* Password Input */}
                <div className="mb-5">
                  <label
                    htmlFor="admin-password"
                    className="block font-mono text-[10px] tracking-widest uppercase text-[#1a1816] font-bold mb-2"
                  >
                    PASSWORD *
                  </label>
                  <div className="relative">
                    <input
                      id="admin-password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-white border border-[#d5cdc0] px-4 py-3.5 pr-11 text-[13px] text-[#1a1816] font-mono tracking-wide focus:outline-none focus:border-[#1a1816] rounded-xs shadow-2xs transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#7b6e54] hover:text-[#1a1816] p-1 cursor-pointer transition-colors"
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

                {/* Remember and Forgot Row */}
                <div className="flex items-center justify-between pt-1 pb-4">
                  <label className="flex items-center gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rememberDevice}
                      onChange={(e) => setRememberDevice(e.target.checked)}
                      className="w-4 h-4 accent-[#1a1816] border-[#d5cdc0] rounded-none cursor-pointer"
                    />
                    <span className="font-mono text-[11px] text-[#59544c]">
                      Remember this device
                    </span>
                  </label>

                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="font-mono text-[11px] text-[#59544c] hover:text-[#1a1816] cursor-pointer"
                  >
                    Forgot Admin Password?
                  </button>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isAuthenticating}
                  className="w-full py-4 bg-[#141312] text-[#f5efe6] font-mono text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#35322e] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-[0.99] rounded-xs mt-4"
                >
                  <span>{isAuthenticating ? 'VERIFYING CREDENTIALS...' : 'SIGN IN TO ADMIN'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

              </div>

              {/* Bottom Security Telemetry Footer Grid */}
              <div className="border-t border-[#d5cdc0] mt-8 pt-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-[10px] text-[#59544c] uppercase tracking-wider">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]"></span>
                    <span className="text-[#1a1816] font-semibold">Protected Connection</span>
                  </div>
                  <div>// Node MXP-01</div>
                  <div>Argon2id Hash</div>
                  <div>Zero-Trust Enclave</div>
                </div>
              </div>
            </form>
          </div>

        </div>
      </main>

      {/* Page Footer Matching User Design */}
      <footer className="w-full px-6 md:px-16 py-6 border-t border-[#d5cdc0] flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] text-[#7b6e54] uppercase tracking-wider">
        <div>© 2025 VANTA CORDWAINING HOUSE // ENTERPRISE INFRASTRUCTURE</div>
        <div className="flex items-center gap-6">
          <button
            onClick={() => onShowToast('DATA ENCLAVE DIRECTIVE // ZERO LOGGING PROTOCOL')}
            className="hover:text-[#1a1816] cursor-pointer"
          >
            PRIVACY DIRECTIVE
          </button>
          <button
            onClick={() => onShowToast('SYSTEM INTEGRITY AUDIT: 100% MERKLE GREEN')}
            className="hover:text-[#1a1816] cursor-pointer"
          >
            SYSTEM AUDIT
          </button>
          <button
            onClick={() => onShowToast('SECURITY SPEC: ZERO-TRUST TLS 1.3 / AES-256 ENCRYPTED')}
            className="hover:text-[#1a1816] cursor-pointer"
          >
            SECURITY SPEC
          </button>
        </div>
      </footer>

      {/* Forgot Admin Password Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 bg-[#1a1816]/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#faf7f2] border border-[#d5cdc0] max-w-md w-full p-6 sm:p-8 rounded-lg shadow-2xl font-mono text-xs">
            <div className="flex items-center gap-2 mb-3">
              <Key className="w-4 h-4 text-[#7b6e54]" />
              <span className="font-bold text-[#1a1816] uppercase tracking-wider">
                ADMIN KEY RECOVERY PROTOCOL
              </span>
            </div>
            <p className="text-[#59544c] mb-6 leading-relaxed">
              Administrative credentials require hardware key signing or enterprise direct reset. Contact your system owner to restore access.
            </p>
            <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 mb-6 space-y-1">
              <div>
                <span className="text-[#7b6e54]">ADMIN: </span>
                <span className="font-bold text-[#1a1816]">admin@vanta.com</span>
              </div>
              <div>
                <span className="text-[#7b6e54]">ROLE: </span>
                <span className="text-[#1a1816]">SUPERADMIN // MERKLE ROOT 01</span>
              </div>
            </div>
            <button
              onClick={() => {
                setShowForgotModal(false);
              }}
              className="w-full py-3 bg-[#141312] text-[#f5efe6] uppercase font-bold tracking-widest hover:bg-[#35322e] transition-colors cursor-pointer"
            >
              DISMISS
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
