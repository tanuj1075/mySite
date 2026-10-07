import bcrypt from 'bcryptjs';
import crypto from 'node:crypto';
import jwt from 'jsonwebtoken';
import { prisma } from './prisma.js';

export type AuthPayload = { sub: string; role: 'CUSTOMER' | 'ADMIN'; email: string };
const accessSecret = () => process.env.JWT_SECRET ?? '';
const refreshSecret = () => process.env.JWT_REFRESH_SECRET ?? process.env.JWT_SECRET ?? '';

export const hashPassword = (password: string) => bcrypt.hash(password, 12);
export const verifyPassword = (password: string, hash: string) => bcrypt.compare(password, hash);

export function issueAccessToken(payload: AuthPayload) {
  return jwt.sign(payload, accessSecret(), { expiresIn: '15m' });
}

export async function issueRefreshToken(payload: AuthPayload) {
  const token = jwt.sign(payload, refreshSecret(), { expiresIn: '30d' });
  await prisma.refreshToken.create({ data: {
    tokenHash: crypto.createHash('sha256').update(token).digest('hex'),
    userId: payload.sub,
    expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  }});
  return token;
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, accessSecret()) as AuthPayload;
}

export async function rotateRefreshToken(token: string) {
  const payload = jwt.verify(token, refreshSecret()) as AuthPayload;
  const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
  const stored = await prisma.refreshToken.findUnique({ where: { tokenHash } });
  if (!stored || stored.revokedAt || stored.expiresAt < new Date()) throw new Error('Invalid refresh token');
  await prisma.refreshToken.update({ where: { id: stored.id }, data: { revokedAt: new Date() } });
  return { accessToken: issueAccessToken(payload), refreshToken: await issueRefreshToken(payload) };
}

export async function revokeRefreshToken(token: string) {
  const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
  await prisma.refreshToken.updateMany({ where: { tokenHash, revokedAt: null }, data: { revokedAt: new Date() } });
}