import { hash as argon2Hash, verify as argon2Verify } from '@node-rs/argon2';
import type { Options } from '@node-rs/argon2';
import bcrypt from 'bcryptjs';
import crypto from 'node:crypto';
import jwt from 'jsonwebtoken';
import { prisma } from './prisma.js';
import type { Request } from 'express';

export type AuthPayload = { sub: string; role: 'CUSTOMER' | 'ADMIN'; email: string };
const accessSecret = () => {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('JWT_SECRET must be configured before authentication is used.');
  return secret;
};
const refreshSecret = () => {
  const secret = process.env.JWT_REFRESH_SECRET;
  if (!secret) throw new Error('JWT_REFRESH_SECRET must be configured before refresh tokens are used.');
  return secret;
};

// Account lockout constants
const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 15 * 60 * 1000; // 15 minutes

// @node-rs/argon2 exposes Algorithm as a const enum, unavailable at runtime with isolatedModules.
const ARGON2ID_ALGORITHM = 2 as NonNullable<Options['algorithm']>;
const ARGON2_OPTIONS: Options = {
  algorithm: ARGON2ID_ALGORITHM,
  memoryCost: 19_456,
  timeCost: 2,
  parallelism: 1,
  outputLen: 32,
};
const BCRYPT_HASH_PATTERN = /^\$2[aby]\$\d{2}\$/;

export async function hashPassword(password: string): Promise<string> {
  return argon2Hash(password, ARGON2_OPTIONS);
}

export async function verifyPassword(password: string, storedHash: string): Promise<boolean> {
  try {
    if (storedHash.startsWith('$argon2id$')) {
      return await argon2Verify(storedHash, password);
    }

    if (BCRYPT_HASH_PATTERN.test(storedHash)) {
      const compatibleHash = storedHash.startsWith('$2y$')
        ? `$2b$${storedHash.slice(4)}`
        : storedHash;
      return await bcrypt.compare(password, compatibleHash);
    }

    return false;
  } catch {
    return false;
  }
}

export async function migratePasswordIfNeeded(
  userId: string,
  password: string,
  storedHash: string,
): Promise<void> {
  if (!BCRYPT_HASH_PATTERN.test(storedHash)) return;

  const upgradedHash = await hashPassword(password);
  await prisma.user.updateMany({
    where: { id: userId, passwordHash: storedHash },
    data: { passwordHash: upgradedHash },
  });
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
