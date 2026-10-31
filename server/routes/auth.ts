import { Router } from 'express';
import { z } from 'zod';
import crypto from 'node:crypto';
import {
  checkAccountLocked,
  clearFailedLogins,
  getClientIp,
  hashPassword,
  issueAccessToken,
  issueRefreshToken,
  logSecurityEvent,
  migratePasswordIfNeeded,
  recordFailedLogin,
  revokeRefreshToken,
  rotateRefreshToken,
  verifyPassword,
} from '../lib/auth.js';
import {
  decryptTotpSecret,
  encryptTotpSecret,
  generateBackupCodes,
  generateTotpQrDataUrl,
  generateTotpSecret,
  getTotpUri,
  verifyBackupCode,
  verifyTotpToken,
} from '../lib/totp.js';
import { prisma } from '../lib/prisma.js';
import { requireAdmin, requireAuth } from '../middleware/auth.js';

const router = Router();

const credentials = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(2).optional(),
});

// ─── Helper: build a session response ────────────────────────────────────────
async function responseFor(
  user: { id: string; email: string; name: string; role: 'CUSTOMER' | 'ADMIN' },
  ip?: string,
  ua?: string,
) {
  const payload = { sub: user.id, email: user.email, role: user.role } as const;
  const [accessToken, refreshToken] = await Promise.all([
    issueAccessToken(payload),
    issueRefreshToken(payload, ip, ua),
  ]);
  return {
    accessToken,
    refreshToken,
    user: { id: user.id, email: user.email, name: user.name, role: user.role, memberId: user.id },
  };
}

// ─── REGISTER ─────────────────────────────────────────────────────────────────
router.post('/register', async (req, res, next) => {
  try {
    const input = credentials.extend({ name: z.string().min(2) }).parse(req.body);
    const existing = await prisma.user.findUnique({ where: { email: input.email.toLowerCase() } });
    if (existing) return res.status(409).json({ error: 'Email already registered' });
    const user = await prisma.user.create({
      data: {
        email: input.email.toLowerCase(),
        name: input.name,
        passwordHash: await hashPassword(input.password),
      },
    });
    const ip = getClientIp(req);
    const ua = req.headers['user-agent'] ?? 'unknown';
    await logSecurityEvent({ userId: user.id, eventType: 'REGISTER', severity: 'LOW', ipAddress: ip, userAgent: ua });
    res.status(201).json(await responseFor(user, ip, ua));
  } catch (error) { next(error); }
});

// ─── LOGIN ────────────────────────────────────────────────────────────────────
router.post('/login', async (req, res, next) => {
  try {
    const input = credentials.parse(req.body);
    const ip = getClientIp(req);
    const ua = req.headers['user-agent'] ?? 'unknown';
    const user = await prisma.user.findUnique({ where: { email: input.email.toLowerCase() } });

    // Use a generic error to prevent user enumeration
    const invalidCreds = () => res.status(401).json({ error: 'Invalid credentials' });

    if (!user) return invalidCreds();

    // Check lockout
    const lockStatus = await checkAccountLocked(user.id);
    if (lockStatus.locked) {
      const retryAfter = lockStatus.lockedUntil
        ? Math.ceil((lockStatus.lockedUntil.getTime() - Date.now()) / 1000)
        : 900;
      res.set('Retry-After', String(retryAfter));
      return res.status(423).json({
        error: 'Account temporarily locked. Please try again later.',
        lockedUntil: lockStatus.lockedUntil?.toISOString(),
        retryAfterSeconds: retryAfter,
      });
    }

    const passwordOk = await verifyPassword(input.password, user.passwordHash);
    if (!passwordOk) {
      await recordFailedLogin(user.id, ip, ua);
      return invalidCreds();
    }

    // Password correct — clear failed attempts & silently migrate to Argon2id
    await clearFailedLogins(user.id);
    await migratePasswordIfNeeded(user.id, input.password, user.passwordHash);

    // MFA check
    if (user.mfaEnabled && user.mfaSecret) {
      const totpToken = z.string().regex(/^\d{6}$/).optional().parse(req.body.totpToken);
      const backupCode = z.string().optional().parse(req.body.backupCode);

      if (totpToken) {
        const plainSecret = decryptTotpSecret(user.mfaSecret);
        if (!verifyTotpToken(totpToken, plainSecret)) {
          await recordFailedLogin(user.id, ip, ua);
          return res.status(401).json({ error: 'Invalid MFA code', mfaRequired: true });
        }
      } else if (backupCode) {
        const stored = user.mfaBackupCodes ?? [];
        const result = verifyBackupCode(backupCode, stored);
        if (!result.isValid) {
          await recordFailedLogin(user.id, ip, ua);
          return res.status(401).json({ error: 'Invalid backup code', mfaRequired: true });
        }
        await prisma.user.update({
          where: { id: user.id },
          data: { mfaBackupCodes: result.remainingHashedCodes },
        });
        await logSecurityEvent({ userId: user.id, eventType: 'MFA_BACKUP_CODE_USED', severity: 'HIGH', ipAddress: ip, userAgent: ua });
      } else {
        return res.status(401).json({ error: 'MFA code required', mfaRequired: true });
      }
    }

    await logSecurityEvent({ userId: user.id, eventType: 'LOGIN', severity: 'LOW', ipAddress: ip, userAgent: ua });
    await prisma.user.update({ where: { id: user.id }, data: { lastLoginAt: new Date(), lastLoginIp: ip } });
    res.json(await responseFor(user, ip, ua));
  } catch (error) { next(error); }
});

// ─── ADMIN LOGIN ──────────────────────────────────────────────────────────────
router.post('/admin/login', async (req, res, next) => {
  try {
    const input = credentials.parse(req.body);
    const ip = getClientIp(req);
    const ua = req.headers['user-agent'] ?? 'unknown';
    const user = await prisma.user.findUnique({ where: { email: input.email.toLowerCase() } });

    if (!user || user.role !== 'ADMIN') {
      // Log suspicious admin login attempt if user exists
      if (user) await logSecurityEvent({ userId: user.id, eventType: 'ADMIN_LOGIN_FAILED', severity: 'HIGH', ipAddress: ip, userAgent: ua });
      return res.status(401).json({ error: 'Invalid admin credentials' });
    }

    const lockStatus = await checkAccountLocked(user.id);
    if (lockStatus.locked) {
      const retryAfter = lockStatus.lockedUntil
        ? Math.ceil((lockStatus.lockedUntil.getTime() - Date.now()) / 1000)
        : 900;
      res.set('Retry-After', String(retryAfter));
      return res.status(423).json({
        error: 'Account temporarily locked.',
        lockedUntil: lockStatus.lockedUntil?.toISOString(),
        retryAfterSeconds: retryAfter,
      });
    }

    const passwordOk = await verifyPassword(input.password, user.passwordHash);
    if (!passwordOk) {
      await recordFailedLogin(user.id, ip, ua);
      await logSecurityEvent({ userId: user.id, eventType: 'ADMIN_LOGIN_FAILED', severity: 'HIGH', ipAddress: ip, userAgent: ua });
      return res.status(401).json({ error: 'Invalid admin credentials' });
    }

    await clearFailedLogins(user.id);
    await migratePasswordIfNeeded(user.id, input.password, user.passwordHash);

    // MFA is required for admin logins if enabled
    if (user.mfaEnabled && user.mfaSecret) {
      const totpToken = z.string().regex(/^\d{6}$/).optional().parse(req.body.totpToken);
      if (!totpToken) {
        return res.status(401).json({ error: 'MFA code required for admin login', mfaRequired: true });
      }
      const plainSecret = decryptTotpSecret(user.mfaSecret);
      if (!verifyTotpToken(totpToken, plainSecret)) {
        await recordFailedLogin(user.id, ip, ua);
        await logSecurityEvent({ userId: user.id, eventType: 'ADMIN_MFA_FAILED', severity: 'CRITICAL', ipAddress: ip, userAgent: ua });
        return res.status(401).json({ error: 'Invalid MFA code', mfaRequired: true });
      }
    }

    await logSecurityEvent({ userId: user.id, eventType: 'ADMIN_LOGIN', severity: 'MEDIUM', ipAddress: ip, userAgent: ua });
    await prisma.user.update({ where: { id: user.id }, data: { lastLoginAt: new Date(), lastLoginIp: ip } });
    res.json(await responseFor(user, ip, ua));
  } catch (error) { next(error); }
});

// ─── SESSION ──────────────────────────────────────────────────────────────────
router.get('/session', requireAuth, async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.auth!.sub },
      select: { id: true, email: true, name: true, role: true, mfaEnabled: true },
    });
    if (!user) return res.status(401).json({ error: 'User session is no longer valid' });
    res.json({ ...user, memberId: user.id });
  } catch (error) { next(error); }
});

router.get('/admin/session', requireAuth, requireAdmin, async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.auth!.sub },
      select: { id: true, email: true, name: true, role: true, mfaEnabled: true },
    });
    if (!user || user.role !== 'ADMIN') return res.status(401).json({ error: 'Admin session is no longer valid' });
    res.json({ ...user, memberId: user.id });
  } catch (error) { next(error); }
});

// ─── LOGOUT ───────────────────────────────────────────────────────────────────
router.post('/logout', async (req, res, next) => {
  try {
    const refreshToken = z.string().min(1).parse(req.body.refreshToken);
    await revokeRefreshToken(refreshToken);
    res.status(204).end();
  } catch (error) { next(error); }
});

router.post('/admin/logout', async (req, res, next) => {
  try {
    const refreshToken = z.string().min(1).parse(req.body.refreshToken);
    await revokeRefreshToken(refreshToken);
    res.status(204).end();
  } catch (error) { next(error); }
});

// ─── TOKEN REFRESH ────────────────────────────────────────────────────────────
router.post('/refresh', async (req, res, next) => {
  try {
    const ip = getClientIp(req);
    const ua = req.headers['user-agent'] ?? 'unknown';
    res.json(await rotateRefreshToken(z.string().min(1).parse(req.body.refreshToken), ip, ua));
  } catch {
    res.status(401).json({ error: 'Invalid refresh token' });
  }
});

// ─── MFA SETUP ────────────────────────────────────────────────────────────────
router.post('/mfa/setup', requireAuth, async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.auth!.sub },
      select: { id: true, email: true, mfaEnabled: true },
    });
    if (!user) return res.status(404).json({ error: 'User not found' });
    if (user.mfaEnabled) return res.status(409).json({ error: 'MFA is already enabled' });

    const secret = generateTotpSecret();
    const uri = getTotpUri(user.email, secret);
    const qrDataUrl = await generateTotpQrDataUrl(uri);

    // Store encrypted secret at rest (not yet confirmed)
    await prisma.user.update({ where: { id: user.id }, data: { mfaSecret: encryptTotpSecret(secret) } });

    const ip = getClientIp(req);
    const ua = req.headers['user-agent'] ?? 'unknown';
    await logSecurityEvent({ userId: user.id, eventType: 'MFA_SETUP_INITIATED', severity: 'MEDIUM', ipAddress: ip, userAgent: ua });

    res.json({ secret, qrDataUrl, message: 'Scan the QR code then call /auth/mfa/verify to activate MFA' });
  } catch (error) { next(error); }
});

// ─── MFA VERIFY (activate) ────────────────────────────────────────────────────
router.post('/mfa/verify', requireAuth, async (req, res, next) => {
  try {
    const { totpToken } = z.object({ totpToken: z.string().regex(/^\d{6}$/) }).parse(req.body);
    const user = await prisma.user.findUnique({
      where: { id: req.auth!.sub },
      select: { id: true, mfaSecret: true, mfaEnabled: true },
    });
    if (!user || !user.mfaSecret) return res.status(400).json({ error: 'MFA setup not initiated. Call /auth/mfa/setup first.' });
    if (user.mfaEnabled) return res.status(409).json({ error: 'MFA is already enabled' });

    const plainSecret = decryptTotpSecret(user.mfaSecret);
    if (!verifyTotpToken(totpToken, plainSecret)) {
      return res.status(401).json({ error: 'Invalid TOTP code. Ensure your authenticator app is synced.' });
    }

    const { plainCodes, hashedCodes } = generateBackupCodes(8);
    await prisma.user.update({
      where: { id: user.id },
      data: { mfaEnabled: true, mfaBackupCodes: hashedCodes },
    });

    const ip = getClientIp(req);
    const ua = req.headers['user-agent'] ?? 'unknown';
    await logSecurityEvent({ userId: user.id, eventType: 'MFA_ENABLED', severity: 'MEDIUM', ipAddress: ip, userAgent: ua });

    res.json({
      message: 'MFA enabled successfully. Save these backup codes in a safe place — they will not be shown again.',
      backupCodes: plainCodes,
    });
  } catch (error) { next(error); }
});

// ─── MFA DISABLE ─────────────────────────────────────────────────────────────
router.post('/mfa/disable', requireAuth, async (req, res, next) => {
  try {
    const { password, totpToken } = z.object({
      password: z.string().min(8),
      totpToken: z.string().regex(/^\d{6}$/),
    }).parse(req.body);

    const user = await prisma.user.findUnique({
      where: { id: req.auth!.sub },
      select: { id: true, passwordHash: true, mfaEnabled: true, mfaSecret: true },
    });
    if (!user) return res.status(404).json({ error: 'User not found' });
    if (!user.mfaEnabled) return res.status(409).json({ error: 'MFA is not enabled' });

    const passwordOk = await verifyPassword(password, user.passwordHash);
    if (!passwordOk) return res.status(401).json({ error: 'Invalid password' });

    const plainSecret = user.mfaSecret ? decryptTotpSecret(user.mfaSecret) : '';
    if (!plainSecret || !verifyTotpToken(totpToken, plainSecret)) {
      return res.status(401).json({ error: 'Invalid TOTP code' });
    }

    await prisma.user.update({
      where: { id: user.id },
      data: { mfaEnabled: false, mfaSecret: null, mfaBackupCodes: [] },
    });

    const ip = getClientIp(req);
    const ua = req.headers['user-agent'] ?? 'unknown';
    await logSecurityEvent({ userId: user.id, eventType: 'MFA_DISABLED', severity: 'HIGH', ipAddress: ip, userAgent: ua });

    res.json({ message: 'MFA has been disabled successfully' });
  } catch (error) { next(error); }
});

// ─── PASSWORD RESET REQUEST ───────────────────────────────────────────────────
router.post('/password-reset/request', async (req, res, next) => {
  try {
    const { email } = z.object({ email: z.string().email() }).parse(req.body);
    const ip = getClientIp(req);
    const ua = req.headers['user-agent'] ?? 'unknown';

    // Always respond 200 to prevent email enumeration
    res.json({ message: 'If an account exists with that email, a reset link has been sent.' });

    const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
    if (!user) return;

    const rawToken = crypto.randomBytes(32).toString('hex');
    const tokenHash = crypto.createHash('sha256').update(rawToken).digest('hex');
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    await prisma.user.update({
      where: { id: user.id },
      data: { passwordResetToken: tokenHash, passwordResetExpires: expiresAt },
    });

    await logSecurityEvent({ userId: user.id, eventType: 'PASSWORD_RESET_REQUESTED', severity: 'MEDIUM', ipAddress: ip, userAgent: ua });

    // TODO: Send email with reset link containing rawToken
    // Example: sendEmail(user.email, `Reset your password: https://yoursite.com/reset-password?token=${rawToken}`)
    console.info(`[DEV] Password reset token for ${user.email}: ${rawToken}`);
  } catch (error) { next(error); }
});

// ─── PASSWORD RESET CONFIRM ───────────────────────────────────────────────────
router.post('/password-reset/confirm', async (req, res, next) => {
  try {
    const { token, password } = z.object({
      token: z.string().min(1),
      password: z.string().min(8),
    }).parse(req.body);

    const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
    const user = await prisma.user.findFirst({
      where: {
        passwordResetToken: tokenHash,
        passwordResetExpires: { gt: new Date() },
      },
    });

    if (!user) return res.status(400).json({ error: 'Invalid or expired password reset token' });

    await prisma.user.update({
      where: { id: user.id },
      data: {
        passwordHash: await hashPassword(password),
        passwordResetToken: null,
        passwordResetExpires: null,
        failedLoginAttempts: 0,
        lockedUntil: null,
      },
    });

    // Revoke all refresh tokens on password reset for security
    await prisma.refreshToken.updateMany({
      where: { userId: user.id, revokedAt: null },
      data: { revokedAt: new Date() },
    });

    const ip = getClientIp(req);
    const ua = req.headers['user-agent'] ?? 'unknown';
    await logSecurityEvent({ userId: user.id, eventType: 'PASSWORD_RESET_COMPLETED', severity: 'HIGH', ipAddress: ip, userAgent: ua });

    res.json({ message: 'Password has been reset successfully. Please log in with your new password.' });
  } catch (error) { next(error); }
});

export default router;