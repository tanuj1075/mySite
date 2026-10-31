import { NextFunction, Request, Response } from 'express';
import { AuthPayload, checkAccountLocked, verifyAccessToken } from '../lib/auth.js';

declare global { namespace Express { interface Request { auth?: AuthPayload } } }

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.replace(/^Bearer\s+/i, '');
  if (!token) return res.status(401).json({ error: 'Authentication required' });
  try {
    req.auth = verifyAccessToken(token);
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid or expired access token' });
  }
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  if (req.auth?.role !== 'ADMIN') return res.status(403).json({ error: 'Admin role required' });
  next();
}

/**
 * Middleware that checks if an authenticated user's account is locked.
 * Must be used AFTER requireAuth.
 */
export async function requireNotLocked(req: Request, res: Response, next: NextFunction) {
  if (!req.auth?.sub) return next();
  try {
    const { locked, lockedUntil } = await checkAccountLocked(req.auth.sub);
    if (locked) {
      const retryAfter = lockedUntil ? Math.ceil((lockedUntil.getTime() - Date.now()) / 1000) : 900;
      res.set('Retry-After', String(retryAfter));
      return res.status(423).json({
        error: 'Account temporarily locked due to too many failed login attempts',
        lockedUntil: lockedUntil?.toISOString(),
        retryAfterSeconds: retryAfter,
      });
    }
    next();
  } catch {
    next();
  }
}