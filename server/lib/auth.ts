import bcrypt from 'bcryptjs';
import crypto from 'node:crypto';
import jwt from 'jsonwebtoken';
import { prisma } from './prisma.js';
import type { Request } from 'express';

export type AuthPayload = { sub: string; role: 'CUSTOMER' | 'ADMIN'; email: string };
const accessSecret = () => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    if (process.env.NODE_ENV === 'production') {
      throw new Error('JWT_SECRET must be configured in production environment');
    }
    return 'dev-vanta-secret-fallback-key-min-32-chars';
  }
  return secret;
};
const refreshSecret = () => {
  const secret = process.env.JWT_REFRESH_SECRET;
  if (!secret) {
    if (process.env.NODE_ENV === 'production') {
      console.warn('[SECURITY WARN] JWT_REFRESH_SECRET not configured; falling back to JWT_SECRET');
    }
    return accessSecret();
  }
  return secret;
};

// Account lockout constants
const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 15 * 60 * 1000; // 15 minutes

// ─── Password Hashing (bcryptjs — works on all platforms including Vercel serverless) ──
// Note: bcryptjs is used instead of @node-rs/argon2 because argon2 requires
// native platform binaries that are not available in Vercel's Lambda runtime.
const BCRYPT_ROUNDS = 12;

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, BCRYPT_ROUNDS);
}

export async function verifyPassword(password: string, storedHash: string): Promise<boolean> {
  // bcryptjs handles both $2b$ and $2a$ prefix hashes natively
  return bcrypt.compare(password, storedHash);
}

/**
 * No-op: previously migrated bcrypt → argon2id. Now we stay on bcrypt
 * for Vercel serverless compatibility. This function is kept for API compat.
 */
export async function migratePasswordIfNeeded(
  _userId: string,
  _password: string,
  _storedHash: string,
): Promise<void> {
  // No migration needed — all passwords use bcryptjs
}

// ─── Client IP Helper ─────────────────────────────────────────────────────────
export function getClientIp(req: Request): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string') return forwarded.split(',')[0].trim();
  return req.socket?.remoteAddress ?? 'unknown';
}

// ─── Account Lockout ─────────────────────────────────────────────────────────
export async function checkAccountLocked(userId: string): Promise<{ locked: boolean; lockedUntil?: Date }> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { failedLoginAttempts: true, lockedUntil: true },
  });
  if (!user) return { locked: false };
  if (user.lockedUntil && user.lockedUntil > new Date()) {
    return { locked: true, lockedUntil: user.lockedUntil };
  }
  return { locked: false };
}

export async function recordFailedLogin(userId: string, ip: string, userAgent: string): Promise<void> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { failedLoginAttempts: true },
  });
  const attempts = (user?.failedLoginAttempts ?? 0) + 1;
  const shouldLock = attempts >= MAX_FAILED_ATTEMPTS;
  await prisma.user.update({
    where: { id: userId },
    data: {
      failedLoginAttempts: attempts,
      lockedUntil: shouldLock ? new Date(Date.now() + LOCKOUT_DURATION_MS) : undefined,
    },
  });
  await logSecurityEvent({
    userId,
    eventType: shouldLock ? 'ACCOUNT_LOCKED' : 'LOGIN_FAILED',
    severity: shouldLock ? 'HIGH' : 'MEDIUM',
    ipAddress: ip,
    userAgent,
    details: JSON.stringify({ failedAttempts: attempts }),
  });
}

export async function clearFailedLogins(userId: string): Promise<void> {
  await prisma.user.update({
    where: { id: userId },
    data: { failedLoginAttempts: 0, lockedUntil: null },
  });
}

// ─── Security Event Logging ───────────────────────────────────────────────────
interface SecurityEventParams {
  userId: string;
  eventType: string;
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  ipAddress: string;
  userAgent: string;
  details?: string;
}

export async function logSecurityEvent(params: SecurityEventParams): Promise<void> {
  try {
    await prisma.securityLog.create({
      data: {
        userId: params.userId,
        eventType: params.eventType,
        severity: params.severity,
        ipAddress: params.ipAddress,
        userAgent: params.userAgent,
        details: params.details,
      },
    });
  } catch {
    // Never let logging failures break the auth flow
    console.error('[SEC] Failed to write security log:', params.eventType);
  }
}

// ─── JWT Tokens ───────────────────────────────────────────────────────────────
export function issueAccessToken(payload: AuthPayload) {
  return jwt.sign(payload, accessSecret(), { expiresIn: '15m' });
}

export async function issueRefreshToken(
  payload: AuthPayload,
  ipAddress?: string,
  userAgent?: string,
) {
  const token = jwt.sign(payload, refreshSecret(), { expiresIn: '30d' });
  await prisma.refreshToken.create({
    data: {
      tokenHash: crypto.createHash('sha256').update(token).digest('hex'),
      userId: payload.sub,
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      ipAddress: ipAddress ?? null,
      userAgent: userAgent ?? null,
    },
  });
  return token;
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, accessSecret()) as AuthPayload;
}

export async function rotateRefreshToken(token: string, ipAddress?: string, userAgent?: string) {
  const payload = jwt.verify(token, refreshSecret()) as AuthPayload;
  const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
  const stored = await prisma.refreshToken.findUnique({ where: { tokenHash } });
  if (!stored || stored.revokedAt || stored.expiresAt < new Date()) throw new Error('Invalid refresh token');
  await prisma.refreshToken.update({ where: { id: stored.id }, data: { revokedAt: new Date() } });
  return {
    accessToken: issueAccessToken(payload),
    refreshToken: await issueRefreshToken(payload, ipAddress, userAgent),
  };
}

export async function revokeRefreshToken(token: string) {
  const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
  await prisma.refreshToken.updateMany({ where: { tokenHash, revokedAt: null }, data: { revokedAt: new Date() } });
}