import { NextFunction, Request, Response } from 'express';
import { AuthPayload, verifyAccessToken } from '../lib/auth.js';

declare global { namespace Express { interface Request { auth?: AuthPayload } } }

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.replace(/^Bearer\s+/i, '');
  if (!token) return res.status(401).json({ error: 'Authentication required' });
  try { req.auth = verifyAccessToken(token); next(); }
  catch { return res.status(401).json({ error: 'Invalid or expired access token' }); }
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  if (req.auth?.role !== 'ADMIN') return res.status(403).json({ error: 'Admin role required' });
  next();
}