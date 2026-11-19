import React, { useState } from 'react';
import { ArrowRight, Eye, EyeOff, ExternalLink, Key } from 'lucide-react';
import { ApiRequestError, authApi } from '../lib/api';

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
  const [mfaChallenge, setMfaChallenge] = useState(false);
  const [mfaCode, setMfaCode] = useState('');
  const [useRecoveryCode, setUseRecoveryCode] = useState(false);

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      onShowToast('ACCESS DENIED: VALID ADMINISTRATIVE IDENTITY REQUIRED');
      return;
    }

    if (password.length < 8) {
      onShowToast('ADMIN CREDENTIAL MUST BE AT LEAST 8 CHARACTERS');
      return;
    }
    setIsAuthenticating(true);
    try {
      if (mfaChallenge && !useRecoveryCode && !/^\d{6}$/.test(mfaCode.trim())) {
        onShowToast('ENTER THE SIX-DIGIT AUTHENTICATOR CODE');
        return;
      }
      if (mfaChallenge && useRecoveryCode && !mfaCode.trim()) {
        onShowToast('ENTER A SINGLE-USE RECOVERY CODE');
        return;
      }
      const authenticatedAdmin = await authApi.adminLogin(
        email.trim(),
        password,
        rememberDevice,
        mfaChallenge && !useRecoveryCode ? mfaCode.trim() : undefined,
        mfaChallenge && useRecoveryCode ? mfaCode.trim() : undefined,
      );
      onAdminLoginSuccess({ email: authenticatedAdmin.email, name: authenticatedAdmin.name, role: authenticatedAdmin.role });
      onShowToast(`ADMIN SESSION INITIALIZED: ${authenticatedAdmin.name} // PRIVILEGES UNLOCKED`);
    } catch (error) {
      const msg = error instanceof Error ? error.message : 'Admin authentication failed';
      if (error instanceof ApiRequestError && error.mfaRequired) {
        setMfaChallenge(true);
        setMfaCode('');
        if (msg.toLowerCase().includes('invalid')) onShowToast(msg.toUpperCase());
      } else if (msg.toLowerCase().includes('failed to fetch') || msg.toLowerCase().includes('network')) {
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
        onShowToast('INVALID CREDENTIALS — CHECK THE EXISTING ADMIN ACCOUNT CREDENTIALS');
      } else {
        onShowToast(msg.toUpperCase());
      }
    } finally { setIsAuthenticating(false); }
  };

  const handleForgotPassword = () => {
    setShowForgotModal(true);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f6] flex flex-col justify-between selection:bg-[#c9a96e33] selection:text-[#f4f4f6] font-sans">
      {/* Top Header Bar */}
      <header className="w-full border-b border-[#242429] bg-[#09090b]/95 backdrop-blur-md px-6 md:px-16 py-4 flex items-center justify-between font-mono text-[11px] sticky top-0 z-30">
        {/* Left Branding and Console Badge */}
        <div className="flex items-center gap-4">
          <button
            onClick={onNavigateStore}
            className="font-headline text-2xl md:text-3xl font-bold tracking-tight uppercase hover:text-[#c9a96e] transition-colors cursor-pointer"
          >
            VANTA
          </button>
          <div className="bg-[#18181c] border border-[#242429] px-2.5 py-1 text-[10px] tracking-widest text-[#c9a96e] uppercase font-bold">
            ADMIN CONSOLE // SYS.AUTH
          </div>
        </div>

        {/* Right Status Indicator and Storefront Link */}
        <div className="flex items-center gap-6 text-[#f4f4f6]">
          <div className="hidden sm:flex items-center gap-2 tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
            <span className="font-mono text-[10px] sm:text-[11px] tracking-wider uppercase font-semibold text-[#8e8e98]">
              360° SHIELD ACTIVE
            </span>
          </div>

          <button
            onClick={onNavigateStore}
            className="font-mono text-[11px] tracking-wider uppercase font-bold flex items-center gap-1.5 hover:text-[#c9a96e] cursor-pointer transition-colors"
            title="Return to Public Storefront"
          >
            <span>PUBLIC STOREFRONT</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Main Administrative Enclave Card */}
      <main className="max-w-[1360px] w-full mx-auto px-4 sm:px-8 py-6 lg:py-10 flex-1 flex items-center justify-center">
        <div className="w-full border border-[#242429] overflow-hidden bg-[#121215] shadow-2xl grid grid-cols-1 lg:grid-cols-2">
          
          {/* LEFT COLUMN: SECURE WORKSPACE SPECIMEN DISPLAY */}
          <div
            className="bg-[#121215] border-b lg:border-b-0 lg:border-r border-[#242429] p-8 sm:p-10 lg:p-12 flex flex-col justify-between relative"
            style={{
              backgroundImage: 'radial-gradient(#242429 1.2px, transparent 1.2px)',
              backgroundSize: '24px 24px',
            }}
          >
            {/* Top Node Telemetry Row */}
            <div>
              <div className="flex items-center justify-between font-mono text-[10px] text-[#8e8e98] tracking-[0.15em] uppercase">
                <span>SECURE WORKSPACE NODE // 01</span>
                <span className="text-[#c9a96e]">ENCLAVE ENCRYPTED</span>
              </div>

              {/* Branding Section */}
              <div className="mt-5">
                <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-[#f4f4f6]">
                  VANTA
                </h2>
                <div className="font-mono text-[10px] tracking-[0.25em] text-[#c9a96e] font-bold uppercase mt-1">
                  ADMIN ATELIER PORTAL
                </div>
              </div>

              {/* Shoe Specimen Photographic Display */}
              <div className="mt-6 overflow-hidden border border-[#242429] relative bg-[#18181c]">
                <img
                  src="/assets/images/cream_runner_pedestal_1788842341279.jpg"
                  alt="VANTA Administrative Specimen"
                  className="w-full h-[250px] sm:h-[280px] object-cover object-center opacity-85"
                />
                {/* Inset Sub-Bar */}
                <div className="absolute bottom-0 inset-x-0 bg-[#09090b]/90 backdrop-blur-sm px-4 py-2 flex items-center justify-between font-mono text-[10px] text-[#f4f4f6] tracking-widest uppercase border-t border-[#242429]">
                  <span>ARCHIVAL SPECIMEN // X-01 CORE</span>
                  <span className="text-[#c9a96e]">SYSTEM REPOSITORY</span>
                </div>
              </div>
            </div>

            {/* Bottom Copy & Compliance */}
            <div className="mt-6 pt-4 border-t border-[#242429]">
              <h3 className="font-headline text-lg sm:text-xl font-bold uppercase text-[#f4f4f6]">
                Secure access to your VANTA workspace.
              </h3>
              <p className="font-sans text-[12px] text-[#8e8e98] leading-relaxed mt-2">
                Manage your VANTA experience, inventory dossiers, order logistics, and cryptographic audit parameters from an isolated administrative environment.
              </p>

              <div className="mt-6 font-mono text-[10px] text-[#52525b] tracking-widest uppercase flex flex-wrap items-center gap-4 sm:gap-6">
                <span>ROLE ENFORCEMENT: STRICT</span>
                <span>DATABASE AUDIT EVENTS</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: PRIVILEGED AUTHENTICATION FORM */}
          <div className="bg-[#18181c] p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
            <form onSubmit={handleAdminLogin} className="flex flex-col justify-between h-full">
              <div>
                {/* Stage Indicator */}
                <div className="flex items-center justify-between font-mono text-[10px] uppercase">
                  <div className="flex items-center gap-2 text-[#f4f4f6] font-bold tracking-[0.18em]">
                    <span className="w-2 h-2 rounded-full bg-[#c9a96e]"></span>
                    <span>PRIVILEGED AUTHENTICATION</span>
                  </div>
                  <span className="text-[#c9a96e] tracking-[0.18em]">
                    {mfaChallenge ? 'STAGE 02 // MFA VERIFICATION' : 'STAGE 01 // CREDENTIALS'}
                  </span>
                </div>

                {/* Main Heading */}
                <div className="mt-8 mb-8">
                  <h1 className="font-headline text-3xl sm:text-4xl text-[#f4f4f6] tracking-tight uppercase">
                    {mfaChallenge ? 'Verify identity' : 'Welcome, Admin'}
                  </h1>
                  <p className="font-sans text-[13px] text-[#8e8e98] mt-2">
                    {mfaChallenge
                      ? 'Enter the six-digit code from your authenticator app or use a saved single-use recovery code.'
                      : 'Sign in to access the VANTA Admin Portal.'}
                  </p>
                </div>

                {/* Email Input */}
                {!mfaChallenge && (
                  <>
                    <div className="mb-5">
                      <label
                        htmlFor="admin-email"
                        className="block font-mono text-[10px] tracking-widest uppercase text-[#f4f4f6] font-bold mb-2"
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
                        className="w-full bg-[#121215] border border-[#242429] px-4 py-3.5 text-[13px] text-[#f4f4f6] font-mono tracking-wide focus:outline-none focus:border-[#c9a96e] transition-colors"
                      />
                    </div>

                    {/* Password Input */}
                    <div className="mb-5">
                      <label
                        htmlFor="admin-password"
                        className="block font-mono text-[10px] tracking-widest uppercase text-[#f4f4f6] font-bold mb-2"
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
                          className="w-full bg-[#121215] border border-[#242429] px-4 py-3.5 pr-11 text-[13px] text-[#f4f4f6] font-mono tracking-wide focus:outline-none focus:border-[#c9a96e] transition-colors"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8e8e98] hover:text-[#f4f4f6] p-1 cursor-pointer transition-colors"
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
                  </>
                )}

                {mfaChallenge && (
                  <div className="mb-5">
                    <label htmlFor="admin-mfa-code" className="block font-mono text-[10px] tracking-widest uppercase text-[#f4f4f6] font-bold mb-2">
                      {useRecoveryCode ? 'SINGLE-USE RECOVERY CODE *' : 'AUTHENTICATOR CODE *'}
                    </label>
                    <input
                      id="admin-mfa-code"
                      type="text"
                      inputMode={useRecoveryCode ? 'text' : 'numeric'}
                      autoComplete="one-time-code"
                      required
                      maxLength={useRecoveryCode ? 32 : 6}
                      value={mfaCode}
                      onChange={(e) => setMfaCode(e.target.value)}
                      placeholder={useRecoveryCode ? 'XXXXX-XXXXX' : '000000'}
                      className="w-full bg-[#121215] border border-[#242429] px-4 py-3.5 text-[13px] text-[#f4f4f6] font-mono tracking-[0.25em] focus:outline-none focus:border-[#c9a96e] transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => { setUseRecoveryCode((value) => !value); setMfaCode(''); }}
                      className="mt-3 font-mono text-[11px] text-[#8e8e98] hover:text-[#c9a96e] underline cursor-pointer"
                    >
                      {useRecoveryCode ? 'Use authenticator code' : 'Use a recovery code'}
                    </button>
                  </div>
                )}

                {/* Remember and Forgot Row */}
                {!mfaChallenge && (
                  <div className="flex items-center justify-between pt-1 pb-4">
                    <label className="flex items-center gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={rememberDevice}
                        onChange={(e) => setRememberDevice(e.target.checked)}
                        className="w-4 h-4 accent-[#c9a96e] border-[#242429] rounded-none cursor-pointer"
                      />
                      <span className="font-mono text-[11px] text-[#8e8e98]">
                        Remember this device
                      </span>
                    </label>

                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      className="font-mono text-[11px] text-[#8e8e98] hover:text-[#c9a96e] cursor-pointer"
                    >
                      Forgot Admin Password?
                    </button>
                  </div>
                )}

                {mfaChallenge && (
                  <div className="pt-1 pb-4 font-mono text-[11px] text-[#8e8e98]">
                    Verification for <span className="font-bold text-[#f4f4f6]">{email.trim()}</span>. Your password and device preference are retained for this challenge.
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isAuthenticating}
                  className="w-full py-4 bg-[#f4f4f6] text-[#09090b] font-mono text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#c9a96e] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-[0.99] mt-4"
                >
                  <span>{isAuthenticating ? 'VERIFYING...' : mfaChallenge ? 'VERIFY & SIGN IN' : 'SIGN IN TO ADMIN'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                {mfaChallenge && (
                  <button
                    type="button"
                    onClick={() => { setMfaChallenge(false); setMfaCode(''); setUseRecoveryCode(false); }}
                    className="w-full mt-3 py-2 font-mono text-[10px] uppercase text-[#8e8e98] hover:text-[#f4f4f6] underline cursor-pointer"
                  >
                    Back to credentials
                  </button>
                )}
              </div>

              {/* Bottom Security Telemetry Footer Grid */}
              <div className="border-t border-[#242429] mt-8 pt-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-[10px] text-[#8e8e98] uppercase tracking-wider">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span className="text-[#f4f4f6] font-semibold">Protected Node</span>
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

      {/* Page Footer */}
      <footer className="w-full px-6 md:px-16 py-6 border-t border-[#242429] flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] text-[#8e8e98] uppercase tracking-wider">
        <div>© 2025 VANTA CORDWAINING HOUSE // ENTERPRISE INFRASTRUCTURE</div>
        <div className="flex items-center gap-6">
          <button
            onClick={() => onShowToast('DATA ENCLAVE DIRECTIVE // ZERO LOGGING PROTOCOL')}
            className="hover:text-[#c9a96e] cursor-pointer"
          >
            PRIVACY DIRECTIVE
          </button>
          <button
            onClick={() => onShowToast('SYSTEM AUDIT STATUS IS AVAILABLE AFTER ADMIN SIGN-IN')}
            className="hover:text-[#c9a96e] cursor-pointer"
          >
            SYSTEM AUDIT
          </button>
          <button
            onClick={() => onShowToast('SECURITY CONFIGURATION IS DOCUMENTED IN THE DEPLOYMENT CHECKLIST')}
            className="hover:text-[#c9a96e] cursor-pointer"
          >
            SECURITY SPEC
          </button>
        </div>
      </footer>

      {/* Forgot Admin Password Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 bg-[#09090b]/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#121215] border border-[#242429] max-w-md w-full p-6 sm:p-8 shadow-2xl font-mono text-xs">
            <div className="flex items-center gap-2 mb-3">
              <Key className="w-4 h-4 text-[#c9a96e]" />
              <span className="font-bold text-[#f4f4f6] uppercase tracking-wider">
                ADMIN KEY RECOVERY PROTOCOL
              </span>
            </div>
            <p className="text-[#8e8e98] mb-6 leading-relaxed">
              Email delivery is not configured for this deployment. Contact the system operator to reset the administrator password with the protected provisioning command.
            </p>
            <div className="bg-[#18181c] border border-[#242429] p-4 mb-6 space-y-1">
              <div>
                <span className="text-[#c9a96e]">ACCOUNT: </span>
                <span className="font-bold text-[#f4f4f6]">OPERATOR-ASSISTED RECOVERY</span>
              </div>
            </div>
            <button
              onClick={() => {
                setShowForgotModal(false);
              }}
              className="w-full py-3 bg-[#f4f4f6] text-[#09090b] uppercase font-bold tracking-widest hover:bg-[#c9a96e] transition-colors cursor-pointer"
            >
              DISMISS
            </button>
          </div>
        </div>
      )}
    </div>
  );
};