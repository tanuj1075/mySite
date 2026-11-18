# Security Architecture Implementation Reference

**Target Stack:** Node.js 20 / TypeScript / Express 4 / Prisma ORM / PostgreSQL  
**Module Directory:** `server/lib/` & `server/routes/`

---

## 1. Password Hashing Architecture (`server/lib/auth.ts`)

### Cryptographic Specification
- **Engine:** `@node-rs/argon2` (native compiled Rust bindings with SIMD acceleration)
- **Hash Profile:** Argon2id v19
- **Memory Cost:** `19456` KiB (19 MiB)
- **Time Cost:** `2` iterations
- **Parallelism:** `1` lane

### Backwards-Compatible Migration Strategy
The authentication layer detects existing password formats using prefix inspection:
- If `storedHash.startsWith('$2b$')` or `storedHash.startsWith('$2a$')`, `bcrypt.compare` is invoked.
- Upon successful authentication with a bcrypt hash, `migratePasswordIfNeeded(user.id, password, storedHash)` runs asynchronously in the background to re-encode the plaintext password with Argon2id and update the database record.
- All new registrations and password updates natively output `$argon2id$` hashes.

---

## 2. Multi-Factor Authentication Architecture (`server/lib/totp.ts`)

### RFC 6238 TOTP Engine
- **Secret Format:** 20-byte cryptographically random buffer encoded in RFC 4648 Base32 (no padding, uppercase).
- **Time Step:** 30 seconds.
- **HMAC Hash Function:** SHA-1 (as mandated by RFC 6238 standard for Google Authenticator compatibility).
- **Truncation:** Dynamic binary offset extraction producing 6 decimal digits.
- **Clock Drift Tolerance:** ±1 step (±30 seconds tolerance, checking steps `[t - 1, t, t + 1]`).
- **Timing Defense:** Verification utilizes `crypto.timingSafeEqual` over fixed-length ASCII buffers to prevent side-channel timing attacks.

### Single-Use Backup Recovery Codes
- **Generation:** 8 random alphanumeric tokens in format `XXXXX-XXXXX`.
- **Storage:** Plain codes are returned to the user only once. In the database, codes are stored as individual SHA-256 hex digests within the `mfaBackupCodes` PostgreSQL array.
- **Consumption:** When a backup code is verified, its corresponding hash is removed from the array, preventing replay attacks.

---

## 3. Account Lockout & Brute-Force Protection

### Enforced Limits
- **Max Consecutive Failures:** 5 attempts.
- **Lockout Duration:** 900 seconds (15 minutes).
- **Resolution Flow:**
  1. Failed authentication increments `failedLoginAttempts`.
  2. If count reaches 5, `lockedUntil` is set to `now + 15m` and an `ACCOUNT_LOCKED` security event is recorded.
  3. Subsequent requests for the user during this period immediately return HTTP `423 Locked` with a `Retry-After: <seconds>` response header.
  4. Successful authentication calls `clearFailedLogins()`, resetting `failedLoginAttempts` to 0 and `lockedUntil` to `null`.

---

## 4. Session & Token Rotation Architecture

### JWT Dual-Token Lifecycle
- **Access Token:**
  - TTL: 15 minutes (`expiresIn: '15m'`).
  - Signed with: `JWT_SECRET`.
  - Claims: `{ sub: userId, email: string, role: 'CUSTOMER' | 'ADMIN' }`.
- **Refresh Token:**
  - TTL: 30 days (`expiresIn: '30d'`).
  - Persisted in DB as: `crypto.createHash('sha256').update(token).digest('hex')`.
  - Metadata: Stamped with `ipAddress` (extracted via `x-forwarded-for` or socket) and `userAgent`.
  - Single-Use Rotation: Consuming a refresh token sets `revokedAt = now()` on the old token record and issues a brand-new token pair.
  - Revocation: `/auth/logout` and `/admin/security/sessions/revoke-all` set `revokedAt` timestamps to immediately deny future token renewals.

---

## 5. Security Event Audit Logging (`server/lib/auth.ts`)

### Data Model (`SecurityLog`)
```prisma
model SecurityLog {
  id          String   @id @default(cuid())
  userId      String?
  user        User?    @relation(fields: [userId], references: [id], onDelete: SetNull)
  eventType   String
  severity    String   @default("INFO")
  ipAddress   String?
  userAgent   String?
  details     Json?
  createdAt   DateTime @default(now())

  @@index([userId, eventType])
  @@index([createdAt])
  @@index([eventType])
}
```

### Logged Events
- `LOGIN`: Successful user authentication
- `LOGIN_FAILED`: Password mismatch
- `ACCOUNT_LOCKED`: 5 failed attempts reached
- `ADMIN_LOGIN`: Admin authentication success
- `ADMIN_LOGIN_FAILED`: Admin credential failure
- `ADMIN_MFA_FAILED`: Admin TOTP challenge failed
- `MFA_SETUP_INITIATED`: New TOTP secret generated
- `MFA_ENABLED`: Successful TOTP activation
- `MFA_DISABLED`: User disabled MFA
- `MFA_BACKUP_CODE_USED`: Emergency backup code redeemed
- `PASSWORD_RESET_REQUESTED`: Password reset token issued
- `PASSWORD_RESET_COMPLETED`: Password successfully changed

---

## 6. HTTP & Network Defense (`server/index.ts`)

### Content Security Policy (CSP)
```javascript
helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' },
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com', 'data:'],
      imgSrc: ["'self'", 'data:', 'blob:', 'https:', 'http:'],
      connectSrc: ["'self'", 'https:', 'http:'],
      frameAncestors: ["'none'"],
      objectSrc: ["'none'"],
      baseUri: ["'self'"],
      formAction: ["'self'"],
      upgradeInsecureRequests: process.env.NODE_ENV === 'production' ? [] : null,
    },
  },
  hsts: process.env.NODE_ENV === 'production' ? {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true,
  } : false,
  referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
  xContentTypeOptions: true,
  xFrameOptions: { action: 'deny' },
})
```

### Strict CORS Policy
- Eliminates unrestricted wildcard domain patterns (`*.vercel.app`).
- Restricts origin allowance to:
  1. Configured `CLIENT_URL` environment variable.
  2. Vercel deployment variables (`VERCEL_URL` and `VERCEL_PROJECT_PRODUCTION_URL`).
  3. Localhost development origins strictly when `NODE_ENV !== 'production'`.
