# VANTA Archive Security Policy

## Reporting Security Vulnerabilities

We take the security of VANTA and our customers seriously. If you have discovered a security vulnerability in our application, API, or infrastructure, please contact our security team immediately.

### Responsible Disclosure Guidelines
- **Contact Email:** `security@vanta.archive` (or submit a private security advisory on GitHub)
- **Encryption:** Use our GPG public key for sensitive disclosures where possible.
- **Response Time:** We acknowledge vulnerability reports within **24 hours** and provide a remediation timeline within **72 hours**.
- **Public Disclosure:** Please give our security team reasonable time to patch the issue before any public disclosure.

---

## Supported Versions

| Version | Supported | Security Updates |
| ------- | --------- | ---------------- |
| 1.0.x   | Yes       | Active           |

---

## Core Security Controls & Architecture

### 1. Password Hashing (Argon2id)
- **Algorithm:** Argon2id (RFC 9106 recommended parameters)
- **Parameters:** Memory Cost: 19 MiB (`19456 KB`), Time Cost: 2 iterations, Parallelism: 1
- **Migration:** Backwards-compatible bcrypt (`$2b$`) verification with automatic silent re-hashing to Argon2id on successful authentication.

### 2. Multi-Factor Authentication (MFA / TOTP)
- **Standard:** RFC 6238 Time-Based One-Time Password algorithm (30-second interval, 6-digit tokens).
- **Secret Generation:** Cryptographically random 20-byte Base32-encoded secrets.
- **Recovery Codes:** 8 single-use SHA-256 hashed recovery codes generated during enrollment.
- **Enforcement:** Required for administrative privilege elevation and available to all customer accounts.

### 3. Account Lockout & Brute-Force Defense
- **Threshold:** Maximum 5 consecutive failed login attempts.
- **Lockout Duration:** 15 minutes temporary lockout.
- **HTTP Header:** `Retry-After` header sent with HTTP 423 Locked.
- **Rate Limiting:** Express-rate-limit configured at 30 requests per 15-minute window for auth routes.

### 4. Session & Token Management
- **Access Tokens:** Short-lived JWTs (15 minutes), signed with `JWT_SECRET`.
- **Refresh Tokens:** Long-lived cryptographically random tokens stored in PostgreSQL as SHA-256 digests (`tokenHash`).
- **Rotation:** Refresh tokens are single-use; a new token pair is issued on every refresh cycle.
- **Audit Logging:** IP address and User-Agent are stamped on every token creation and refresh.
- **Revocation:** Explicit revocation endpoint (`/security/sessions/revoke-all`) allows administrators and users to invalidate all active sessions immediately.

### 5. Content Security Policy & Browser Defense
- **CSP Directive:** Strict `Content-Security-Policy` with restrictive origins for scripts, styles, images, and fonts.
- **Frame Ancestors:** `'none'` (clickjacking mitigation).
- **HSTS:** `Strict-Transport-Security` with 1-year max-age, includeSubDomains, and preload in production.
- **CORS:** Restricted to explicitly configured `CLIENT_URL` and production Vercel domains; wildcard subdomains are prohibited.
- **X-Content-Type-Options:** `nosniff`.

### 6. Audit Logging & Telemetry
- **Model:** PostgreSQL `SecurityLog` append-only audit trail.
- **Tracked Events:** `LOGIN`, `LOGIN_FAILED`, `ACCOUNT_LOCKED`, `MFA_ENABLED`, `MFA_DISABLED`, `MFA_BACKUP_CODE_USED`, `PASSWORD_RESET_REQUESTED`, `PASSWORD_RESET_COMPLETED`, `ADMIN_LOGIN`, `ADMIN_LOGIN_FAILED`.
- **Privacy:** Plaintext credentials, passwords, and raw authentication secrets are strictly scrubbed prior to persistence.
