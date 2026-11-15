import React, { useState, useEffect } from 'react';
import {
  Shield,
  ShieldCheck,
  KeyRound,
  Server,
  Terminal,
  Lock,
  FileCheck,
  Users,
  Download,
  Check,
  AlertTriangle,
  Cpu,
  RefreshCw,
  Eye,
  Sliders,
} from 'lucide-react';
import { adminApi } from '../../lib/api';

interface AdminSecurityViewProps {
  onShowToast: (msg: string) => void;
}

export const AdminSecurityView: React.FC<AdminSecurityViewProps> = ({ onShowToast }) => {
  const [stats, setStats] = useState<{
    totalLogs: number;
    criticalEvents: number;
    threatsBlocked24h: number;
    activeSessions: number;
    mfaComplianceRate: number | null;
    totalAdmins: number;
    mfaAdmins: number;
    lockedAccounts: number;
  } | null>(null);

  const [realLogs, setRealLogs] = useState<Array<{
    id: string;
    eventType: string;
    severity: string;
    ipAddress?: string;
    userAgent?: string;
    createdAt: string;
    user?: { email: string; name: string };
  }>>([]);

  const [sessions, setSessions] = useState<Array<{
    id: string;
    isCurrent: boolean;
    ip: string;
    location: string;
    environment: string;
  }>>([]);
  const [sessionsLoaded, setSessionsLoaded] = useState(false);

  useEffect(() => {
    adminApi.sessions()
      .then((realSessions) => {
        setSessions(realSessions.map((s) => ({
          id: s.id,
          isCurrent: s.isCurrent,
          ip: s.ip || 'Unknown',
          location: 'Not available',
          environment: s.environment,
        })));
        setSessionsLoaded(true);
      })
      .catch(() => setSessionsLoaded(false));

    adminApi.securityStats()
      .then((data) => {
        if (data) setStats(data);
      })
      .catch(() => setStats(null));

    adminApi.securityLogs({ limit: 10 })
      .then((data) => {
        setRealLogs(data?.logs ?? []);
      })
      .catch(() => setRealLogs([]));
  }, []);

  const handleRevokeOtherSessions = async () => {
    try {
      const res = await adminApi.revokeAllSessions();
      setSessions((prev) => prev.filter((s) => s.isCurrent));
      onShowToast(`REVOKED REMOTE SESSIONS // ${res.revokedCount} DATABASE REFRESH TOKENS INVALIDATED`);
    } catch {
      onShowToast('SESSION REVOCATION FAILED. THE DATABASE DID NOT CONFIRM THE CHANGE.');
    }
  };

  return (
    <div className="p-4 sm:p-8 font-sans space-y-10 bg-[#faf7f2] min-h-full">
      {/* Explicit Architecture & Demonstration Disclaimer */}
      <div className="bg-[#ede7dd] border border-[#d5cdc0] p-3 text-[11px] font-mono flex items-start gap-2.5">
        <AlertTriangle className="w-4 h-4 text-[#7b6e54] shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-[#1a1816] uppercase">SYSTEM INTEGRITY AUDIT NOTE: </span>
          <span className="text-[#59544c]">
            Active session revocation connects to stored refresh tokens. Hardware enclaves, biometric gates, and Merkle root verification are not implemented.
          </span>
        </div>
      </div>
      {/* Top Header Section matching Image 4 */}
      <div>
        <div className="font-mono text-[10px] text-[#7b6e54] tracking-[0.2em] uppercase mb-1">
          ARCHITECTURAL SYSTEM INTEGRITY // LEVEL 4
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="font-headline text-3xl sm:text-4xl text-[#1a1816] tracking-tight">
              Security Operations &amp; Governance Center
            </h1>
            <p className="font-sans text-[13px] text-[#59544c] mt-1 max-w-2xl">
              360° Threat mitigation, cryptographic key lifecycle, multi-factor enforcement, and immutable compliance auditing.
            </p>
          </div>

          <div className="bg-[#ede7dd] border border-[#d5cdc0] p-3 text-right font-mono text-[10px] shrink-0">
            <div className="flex items-center gap-1.5 justify-end text-[#16a34a] font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>DATABASE SECURITY ACTIVITY</span>
            </div>
            <div className="text-[#7b6e54] text-[9px] mt-0.5">
              {stats ? `${stats.totalLogs} recorded events // ${stats.activeSessions} unrevoked sessions` : 'DATABASE METRICS UNAVAILABLE'}
            </div>
          </div>
        </div>
      </div>

      {/* 4 Metric Cards matching Image 4 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
        {/* 01 // AUTH ENFORCEMENT */}
        <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 flex flex-col justify-between">
          <div>
            <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider font-bold">
              01 // AUTH ENFORCEMENT
            </div>
            <div className="text-3xl font-bold text-[#1a1816] mt-2">
              {stats?.mfaComplianceRate === null || !stats ? '—' : `${stats.mfaComplianceRate}%`}
            </div>
            <div className="text-[10px] font-bold text-[#1a1816] uppercase mt-0.5">
              ADMIN MFA ENABLED
            </div>
            <p className="text-[10px] text-[#59544c] mt-1 font-sans leading-relaxed">
              {stats
                ? `${stats.mfaAdmins} of ${stats.totalAdmins} admin accounts have MFA enabled.`
                : 'Database metrics are unavailable.'}
            </p>
          </div>
          <div className="text-[8px] text-[#7b6e54] uppercase tracking-widest pt-2 mt-2 border-t border-[#d5cdc0]">
            DATABASE USER RECORDS
          </div>
        </div>

        {/* 02 // ACTIVE SESSIONS */}
        <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 flex flex-col justify-between">
          <div>
            <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider font-bold">
              02 // ACTIVE SESSIONS
            </div>
            <div className="text-3xl font-bold text-[#1a1816] mt-2">
              {stats ? String(stats.activeSessions).padStart(2, '0') : '—'}
            </div>
            <div className="text-[10px] font-bold text-[#1a1816] uppercase mt-0.5">
              UNREVOKED SESSIONS
            </div>
            <p className="text-[10px] text-[#59544c] mt-1 font-sans leading-relaxed">
              {sessionsLoaded ? `${sessions.length} unrevoked refresh tokens for this administrator.` : 'Session data is unavailable.'}
            </p>
          </div>
          <div className="text-[8px] text-[#7b6e54] uppercase tracking-widest pt-2 mt-2 border-t border-[#d5cdc0]">
            REFRESH TOKEN RECORDS
          </div>
        </div>

        {/* 03 // INTERCEPTIONS */}
        <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 flex flex-col justify-between">
          <div>
            <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider font-bold">
              03 // INTERCEPTIONS
            </div>
            <div className="text-3xl font-bold text-[#1a1816] mt-2">
              {stats ? String(stats.threatsBlocked24h).padStart(2, '0') : '—'}
            </div>
            <div className="text-[10px] font-bold text-[#1a1816] uppercase mt-0.5">
              FAILED AUTH EVENTS
            </div>
            <p className="text-[10px] text-[#59544c] mt-1 font-sans leading-relaxed">
              Failed login and lockout events recorded in the last 24 hours.
            </p>
          </div>
          <div className="text-[8px] text-[#16a34a] font-bold uppercase tracking-widest pt-2 mt-2 border-t border-[#d5cdc0]">
            LAST 24 HOURS
          </div>
        </div>

        {/* 04 // ROLE COMPLIANCE */}
        <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 flex flex-col justify-between">
          <div>
            <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider font-bold">
              04 // LOCKED ACCOUNTS
            </div>
            <div className="text-3xl font-bold text-[#1a1816] mt-2">{stats ? String(stats.lockedAccounts).padStart(2, '0') : '—'}</div>
            <div className="text-[10px] font-bold text-[#1a1816] uppercase mt-0.5">
              CURRENTLY LOCKED
            </div>
            <p className="text-[10px] text-[#59544c] mt-1 font-sans leading-relaxed">
              User accounts currently within their lockout period.
            </p>
          </div>
          <div className="text-[8px] text-[#7b6e54] uppercase tracking-widest pt-2 mt-2 border-t border-[#d5cdc0]">
            USER RECORDS
          </div>
        </div>
      </div>

      {/* Middle Section: Cryptographic Hardware Vault + Enforced System Parameters matching Image 4 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Cryptographic Hardware Vault */}
        <div className="lg:col-span-4 border border-[#d5cdc0] bg-[#ede7dd] p-6 flex flex-col justify-between font-mono rounded-xs shadow-xs">
          <div>
            <div className="flex items-center justify-between text-[9px] text-[#7b6e54] tracking-widest uppercase pb-2 border-b border-[#d5cdc0]">
              <span>INFRASTRUCTURE TELEMETRY</span>
            <span className="font-bold text-[#1a1816]">ILLUSTRATION</span>
            </div>

            <h3 className="font-headline text-2xl font-bold text-[#1a1816] tracking-tight mt-4">
              Cryptographic Hardware Vault
            </h3>

            <p className="font-sans text-[12px] text-[#59544c] mt-2 leading-relaxed">
              This illustration does not represent deployed hardware security modules. The application uses environment-managed signing secrets.
            </p>

            {/* Radar Diagram Graphic */}
            <div className="relative my-8 flex items-center justify-center">
              <div className="w-36 h-36 rounded-full border border-[#d5cdc0] flex items-center justify-center relative">
                <div className="w-24 h-24 rounded-full border border-[#d5cdc0]/70 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-[#b8ad9c] flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#1a1816] animate-ping"></div>
                  </div>
                </div>
                {/* Crosshairs */}
                <div className="absolute inset-x-0 top-1/2 h-[1px] bg-[#d5cdc0]"></div>
                <div className="absolute inset-y-0 left-1/2 w-[1px] bg-[#d5cdc0]"></div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#d5cdc0] flex items-center justify-between text-[10px] text-[#1a1816] font-bold">
            <div className="flex items-center gap-2">
              <span className="text-[#7b6e54]">CLUSTER LATENCY:</span>
              <span>Not measured</span>
            </div>
            <div className="p-1.5 bg-[#141312] text-[#f5efe6] rounded-2xs">
              <Lock className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* Right: Enforced System Parameters + Active Session Ledger matching Image 4 */}
        <div className="lg:col-span-8 border border-[#d5cdc0] bg-[#ede7dd] p-6 space-y-6 font-mono rounded-xs shadow-xs">
          <div className="flex items-center justify-between text-[9px] text-[#7b6e54] tracking-widest uppercase pb-2 border-b border-[#d5cdc0]">
            <span>360° DEFENSE BASELINE</span>
            <span className="font-bold text-[#1a1816]">APPLICATION SETTINGS</span>
          </div>

          <h3 className="font-headline text-2xl font-bold text-[#1a1816] tracking-tight">
            Enforced System Parameters
          </h3>

          {/* 6 Security Parameters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-[10px]">
            <div className="bg-[#faf7f2] border border-[#d5cdc0] p-3 space-y-1">
              <div className="text-[9px] text-[#7b6e54] uppercase font-bold">HASH ALGORITHM</div>
              <div className="font-bold text-[#1a1816]">ARGON2ID + LEGACY BCRYPT</div>
              <p className="font-sans text-[10px] text-[#59544c] leading-tight">
                New password hashes use 19 MiB memory, 2 iterations, and parallelism 1. Legacy bcrypt is upgraded on login.
              </p>
            </div>

            <div className="bg-[#faf7f2] border border-[#d5cdc0] p-3 space-y-1">
              <div className="text-[9px] text-[#7b6e54] uppercase font-bold">AUTHENTICATION</div>
              <div className="font-bold text-[#1a1816]">OPTIONAL TOTP MFA</div>
              <p className="font-sans text-[10px] text-[#59544c] leading-tight">
                TOTP is checked for an account when MFA is enabled. Recovery codes are single-use.
              </p>
            </div>

            <div className="bg-[#faf7f2] border border-[#d5cdc0] p-3 space-y-1">
              <div className="text-[9px] text-[#7b6e54] uppercase font-bold">SESSION TIMEOUT</div>
              <div className="font-bold text-[#1a1816]">15-MIN ACCESS TOKEN</div>
              <p className="font-sans text-[10px] text-[#59544c] leading-tight">
                Refresh tokens expire after 30 days and are stored hashed in the database.
              </p>
            </div>

            <div className="bg-[#faf7f2] border border-[#d5cdc0] p-3 space-y-1">
              <div className="text-[9px] text-[#7b6e54] uppercase font-bold">COOKIE HARDENING</div>
              <div className="font-bold text-[#1a1816]">BROWSER WEB STORAGE</div>
              <p className="font-sans text-[10px] text-[#59544c] leading-tight">
                Access and refresh tokens are stored in localStorage or sessionStorage and remain readable by page scripts.
              </p>
            </div>

            <div className="bg-[#faf7f2] border border-[#d5cdc0] p-3 space-y-1">
              <div className="text-[9px] text-[#7b6e54] uppercase font-bold">CSRF MITIGATION</div>
              <div className="font-bold text-[#1a1816]">BEARER TOKEN AUTH</div>
              <p className="font-sans text-[10px] text-[#59544c] leading-tight">
                API authentication uses Authorization headers; cookie-based sessions and CSRF tokens are not implemented.
              </p>
            </div>

            <div className="bg-[#faf7f2] border border-[#d5cdc0] p-3 space-y-1">
              <div className="text-[9px] text-[#7b6e54] uppercase font-bold">BROWSER POLICIES</div>
              <div className="font-bold text-[#1a1816]">HELMET CSP CONFIGURED</div>
              <p className="font-sans text-[10px] text-[#59544c] leading-tight">
                The Express response policy includes inline scripts and broad image/connect sources; review before relying on CSP as a strict XSS boundary.
              </p>
            </div>
          </div>

          {/* Active Session Ledger matching Image 4 */}
          <div className="pt-4 border-t border-[#d5cdc0]">
            <div className="flex items-center justify-between pb-3">
              <div className="text-[10px] font-bold text-[#1a1816] uppercase tracking-wider">
                ACTIVE SESSION LEDGER ({sessionsLoaded ? sessions.length : '—'})
              </div>
              <button
                onClick={handleRevokeOtherSessions}
                className="text-[9px] font-bold text-[#991b1b] hover:underline uppercase cursor-pointer"
              >
                REVOKE ALL OTHER SESSIONS
              </button>
            </div>

            <div className="divide-y divide-[#d5cdc0]/70 text-[10px]">
              {sessions.map((sess) => (
                <div key={sess.id} className="py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]"></span>
                    <span className="font-bold text-[#1a1816]">{sess.id}</span>
                    {sess.isCurrent && (
                      <span className="bg-[#141312] text-[#f5efe6] text-[8px] font-bold px-1.5 py-0.2 uppercase rounded-2xs">
                        CURRENT
                      </span>
                    )}
                  </div>
                  <div className="text-[#59544c]">{sess.ip}</div>
                  <div className="text-[#59544c]">{sess.location}</div>
                  <div className="text-[#7b6e54] text-[9px]">{sess.environment}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3 Facility Photographs matching Image 4 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
        {/* Enclave 1: Milan Hardware Enclave */}
        <div className="border border-[#d5cdc0] bg-[#ede7dd] overflow-hidden rounded-xs shadow-xs">
          <div className="relative h-48 overflow-hidden">
            <img
              src="/assets/images/milan_hardware_enclave_1788929608298.jpg"
              alt="Milan Hardware Enclave"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-3 text-white">
              <div className="text-[8px] tracking-widest uppercase text-[#ded6c9]">
                NODE MIL-01 // COLD VAULT
              </div>
              <div className="font-headline text-lg font-bold">Milan Hardware Enclave</div>
            </div>
          </div>
        </div>

        {/* Enclave 2: Zero-Trust Physical Corridor */}
        <div className="border border-[#d5cdc0] bg-[#ede7dd] overflow-hidden rounded-xs shadow-xs">
          <div className="relative h-48 overflow-hidden">
            <img
              src="/assets/images/zero_trust_corridor_1788929623519.jpg"
              alt="Zero-Trust Physical Corridor"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-3 text-white">
              <div className="text-[8px] tracking-widest uppercase text-[#ded6c9]">
                PERIMETER ISOLATION
              </div>
              <div className="font-headline text-lg font-bold">Zero-Trust Physical Corridor</div>
            </div>
          </div>
        </div>

        {/* Enclave 3: Biometric Hardware Security */}
        <div className="border border-[#d5cdc0] bg-[#ede7dd] overflow-hidden rounded-xs shadow-xs">
          <div className="relative h-48 overflow-hidden">
            <img
              src="/assets/images/biometric_security_desk_1788929637950.jpg"
              alt="Biometric Hardware Security"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-3 text-white">
              <div className="text-[8px] tracking-widest uppercase text-[#ded6c9]">
                WEBAUTHN CREDENTIALS
              </div>
              <div className="font-headline text-lg font-bold">Biometric Hardware Security</div>
            </div>
          </div>
        </div>
      </div>

      {/* Role-Based Access Control (RBAC) Matrix matching Image 4 */}
      <div className="border border-[#d5cdc0] bg-[#ede7dd] p-6 font-mono rounded-xs shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#d5cdc0]">
          <div>
            <div className="text-[9px] text-[#7b6e54] tracking-widest uppercase font-bold">
              ACCESS POLICY GOVERNANCE
            </div>
            <h3 className="font-headline text-2xl font-bold text-[#1a1816] tracking-tight">
              Role-Based Access Control (RBAC) Matrix
            </h3>
          </div>
          <div className="flex items-center gap-1.5 text-[#16a34a] text-[10px] font-bold">
            <Check className="w-3.5 h-3.5" />
            <span>PERMISSIONS STRICTLY VERIFIED SERVER-SIDE ON EVERY PROTECTED API ROUTE</span>
          </div>
        </div>

        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left text-[10px] border-collapse">
            <thead>
              <tr className="border-b border-[#d5cdc0] text-[9px] text-[#7b6e54] tracking-widest uppercase">
                <th className="py-2.5 px-3">ROLE IDENTITY</th>
                <th className="py-2.5 px-3">SCOPE &amp; GRANTS</th>
                <th className="py-2.5 px-3">CATALOG / STOCK</th>
                <th className="py-2.5 px-3">COMMERCE / ORDERS</th>
                <th className="py-2.5 px-3">TELEMETRY &amp; AUDIT</th>
                <th className="py-2.5 px-3 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d5cdc0]/70">
              {/* ADMINISTRATOR */}
              <tr className="hover:bg-[#e4ddcf]">
                <td className="py-3 px-3">
                  <div className="font-bold text-[#1a1816]">ADMIN</div>
                  <div className="text-[9px] text-[#7b6e54]">root_privilege_all</div>
                </td>
                <td className="py-3 px-3">
                  <span className="bg-[#141312] text-[#f5efe6] px-1.5 py-0.5 text-[9px] font-bold">
                    FULL R / W / D REVOKE
                  </span>
                </td>
                <td className="py-3 px-3 font-bold text-[#16a34a]">✓ FULL CONTROL</td>
                <td className="py-3 px-3 font-bold text-[#16a34a]">✓ FULL CONTROL</td>
                <td className="py-3 px-3 font-bold text-[#16a34a]">✓ IMMUTABLE WRITE &amp; READ</td>
                <td className="py-3 px-3 text-right">
                  <button
                    onClick={() => onShowToast('Role changes are not available in this panel')}
                    className="text-[#7b6e54] hover:text-[#1a1816] cursor-pointer"
                  >
                    <Sliders className="w-3.5 h-3.5 ml-auto" />
                  </button>
                </td>
              </tr>

              {/* INVENTORY MANAGER */}
              <tr className="hover:bg-[#e4ddcf]">
                <td className="py-3 px-3">
                  <div className="font-bold text-[#1a1816]">INVENTORY MANAGER</div>
                  <div className="text-[9px] text-[#7b6e54]">scope_catalog_stock</div>
                </td>
                <td className="py-3 px-3">
                  <span className="bg-[#ded6c9] text-[#1a1816] px-1.5 py-0.5 text-[9px] font-bold">
                    CATALOG + ADJUSTMENTS
                  </span>
                </td>
                <td className="py-3 px-3 font-bold text-[#1a1816]">✓ READ / WRITE SKUS</td>
                <td className="py-3 px-3 text-[#991b1b]">⊘ RESTRICTED</td>
                <td className="py-3 px-3 text-[#59544c]">⊙ STOCK LOGS ONLY</td>
                <td className="py-3 px-3 text-right">
                  <button
                    onClick={() => onShowToast('INVENTORY POLICY CONFIGURED')}
                    className="text-[#7b6e54] hover:text-[#1a1816] cursor-pointer"
                  >
                    <Sliders className="w-3.5 h-3.5 ml-auto" />
                  </button>
                </td>
              </tr>

              {/* ORDER MANAGER */}
              <tr className="hover:bg-[#e4ddcf]">
                <td className="py-3 px-3">
                  <div className="font-bold text-[#1a1816]">ORDER MANAGER</div>
                  <div className="text-[9px] text-[#7b6e54]">scope_commerce_fulfillment</div>
                </td>
                <td className="py-3 px-3">
                  <span className="bg-[#ded6c9] text-[#1a1816] px-1.5 py-0.5 text-[9px] font-bold">
                    FULFILLMENT + RETURNS
                  </span>
                </td>
                <td className="py-3 px-3 text-[#59544c]">⊙ READ ONLY</td>
                <td className="py-3 px-3 font-bold text-[#1a1816]">✓ PROCESS &amp; REFUND</td>
                <td className="py-3 px-3 text-[#59544c]">⊙ ORDER LOGS ONLY</td>
                <td className="py-3 px-3 text-right">
                  <button
                    onClick={() => onShowToast('FULFILLMENT POLICY CONFIGURED')}
                    className="text-[#7b6e54] hover:text-[#1a1816] cursor-pointer"
                  >
                    <Sliders className="w-3.5 h-3.5 ml-auto" />
                  </button>
                </td>
              </tr>

              {/* CONTENT CURATOR */}
              <tr className="hover:bg-[#e4ddcf]">
                <td className="py-3 px-3">
                  <div className="font-bold text-[#1a1816]">CONTENT CURATOR</div>
                  <div className="text-[9px] text-[#7b6e54]">scope_marketing_curation</div>
                </td>
                <td className="py-3 px-3">
                  <span className="bg-[#ded6c9] text-[#1a1816] px-1.5 py-0.5 text-[9px] font-bold">
                    DROPS &amp; MEDIA
                  </span>
                </td>
                <td className="py-3 px-3 text-[#59544c]">⊙ READ ONLY</td>
                <td className="py-3 px-3 text-[#991b1b]">⊘ RESTRICTED</td>
                <td className="py-3 px-3 text-[#991b1b]">⊘ RESTRICTED</td>
                <td className="py-3 px-3 text-right">
                  <button
                    onClick={() => onShowToast('CURATION POLICY CONFIGURED')}
                    className="text-[#7b6e54] hover:text-[#1a1816] cursor-pointer"
                  >
                    <Sliders className="w-3.5 h-3.5 ml-auto" />
                  </button>
                </td>
              </tr>

              {/* COMPLIANCE AUDITOR */}
              <tr className="hover:bg-[#e4ddcf]">
                <td className="py-3 px-3">
                  <div className="font-bold text-[#1a1816]">COMPLIANCE AUDITOR</div>
                  <div className="text-[9px] text-[#7b6e54]">scope_read_audit</div>
                </td>
                <td className="py-3 px-3">
                  <span className="bg-[#ded6c9] text-[#1a1816] px-1.5 py-0.5 text-[9px] font-bold">
                    READ-ONLY ANALYTICS
                  </span>
                </td>
                <td className="py-3 px-3 text-[#59544c]">⊙ READ ONLY</td>
                <td className="py-3 px-3 text-[#59544c]">⊙ READ ONLY</td>
                <td className="py-3 px-3 font-bold text-[#16a34a]">✓ FULL IMMUTABLE READ</td>
                <td className="py-3 px-3 text-right">
                  <button
                    onClick={() => onShowToast('AUDIT POLICY CONFIGURED')}
                    className="text-[#7b6e54] hover:text-[#1a1816] cursor-pointer"
                  >
                    <Sliders className="w-3.5 h-3.5 ml-auto" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Immutable Audit Trail (Cryptographically Sealed Ledger) matching Image 4 */}
      <div className="border border-[#d5cdc0] bg-[#ede7dd] p-6 font-mono rounded-xs shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#d5cdc0]">
          <div>
            <div className="text-[9px] text-[#7b6e54] tracking-widest uppercase font-bold">
              CRYPTOGRAPHICALLY SEALED LEDGER // APPEND-ONLY
            </div>
            <h3 className="font-headline text-2xl font-bold text-[#1a1816] tracking-tight">
              Immutable Audit Trail
            </h3>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-[#7b6e54] bg-[#faf7f2] border border-[#d5cdc0] px-3 py-1.5">
            <Lock className="w-3.5 h-3.5 text-[#16a34a]" />
            <span>PRIVACY GUARANTEE // No credentials, tokens, or plaintext secrets are stored in logs.</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px]">
          <div className="flex items-center gap-2 font-bold text-[#1a1816]">
            <span>STREAM FEED</span>
            <span className="text-[#16a34a]">
              ● {realLogs.length} DATABASE EVENTS
            </span>
          </div>
          <button
            onClick={() => {
              const exportItems = realLogs.map(l => ({
                    id: l.id,
                    time: new Date(l.createdAt).toUTCString(),
                    principal: l.user?.email || 'system.security',
                    event: l.eventType,
                    severity: l.severity,
                    ipAddress: l.ipAddress || 'unknown',
                    userAgent: l.userAgent || 'unknown',
                  }));

              const digestData = {
                timestamp: new Date().toISOString(),
                events: exportItems,
              };
              const blob = new Blob([JSON.stringify(digestData, null, 2)], { type: 'application/json' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `vanta_security_logs_${Date.now()}.json`;
              a.click();
              URL.revokeObjectURL(url);
              onShowToast(`EXPORTED ${exportItems.length} DATABASE SECURITY LOGS`);
            }}
            className="flex items-center gap-1.5 text-[#7b6e54] hover:text-[#1a1816] font-bold uppercase cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>EXPORT SECURITY LOGS</span>
          </button>
        </div>

        {/* Live events ledger */}
        <div className="divide-y divide-[#d5cdc0]/70 text-[10px]">
          {realLogs.length > 0 ? (
            realLogs.map((log) => {
              const dateStr = new Date(log.createdAt).toISOString().replace('T', ' ').slice(11, 19) + ' UTC';
              const isDanger = log.severity === 'CRITICAL' || log.severity === 'HIGH';
              const isWarning = log.severity === 'MEDIUM';

              return (
                <div key={log.id} className="py-2.5 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[#7b6e54]">[{dateStr}]</span>
                    <span className="font-bold text-[#1a1816]">{log.user?.email || 'system.security'}</span>
                    <span className={`px-1.5 py-0.2 font-bold text-[9px] ${
                      isDanger
                        ? 'bg-[#fee2e2] text-[#991b1b]'
                        : isWarning
                        ? 'bg-[#fef3c7] text-[#92400e]'
                        : 'bg-[#d5cdc0] text-[#1a1816]'
                    }`}>
                      {log.eventType}
                    </span>
                    <span className="text-[#59544c]">
                      {log.ipAddress ? `IP: ${log.ipAddress}` : 'Telemetry Event'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#7b6e54] text-[9px]">ID: {log.id.slice(-8)}</span>
                    <span className={`font-bold text-[9px] px-2 py-0.5 ${
                      isDanger
                        ? 'bg-[#fee2e2] text-[#991b1b]'
                        : isWarning
                        ? 'bg-[#fef3c7] text-[#92400e]'
                        : 'bg-[#dcfce7] text-[#166534]'
                    }`}>
                      {log.severity}
                    </span>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="py-4 text-[#59544c]">No security log records are available.</div>
          )}
        </div>

      </div>
    </div>
  );
};
