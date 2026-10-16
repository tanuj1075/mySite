import { Router } from 'express';
import { z } from 'zod';
import { hashPassword, issueAccessToken, issueRefreshToken, revokeRefreshToken, rotateRefreshToken, verifyPassword } from '../lib/auth.js';
import { prisma } from '../lib/prisma.js';
import { requireAdmin, requireAuth } from '../middleware/auth.js';

const router = Router();
const credentials = z.object({ email: z.string().email(), password: z.string().min(8), name: z.string().min(2).optional() });

function responseFor(user: { id: string; email: string; name: string; role: 'CUSTOMER' | 'ADMIN' }) {
  const payload = { sub: user.id, email: user.email, role: user.role } as const;
  return Promise.all([issueAccessToken(payload), issueRefreshToken(payload)]).then(([accessToken, refreshToken]) => ({
    accessToken, refreshToken, user: { id: user.id, email: user.email, name: user.name, role: user.role, memberId: user.id },
  }));
}

router.post('/register', async (req, res, next) => {
  try {
    const input = credentials.extend({ name: z.string().min(2) }).parse(req.body);
    const existing = await prisma.user.findUnique({ where: { email: input.email.toLowerCase() } });
    if (existing) return res.status(409).json({ error: 'Email already registered' });
    const user = await prisma.user.create({ data: { email: input.email.toLowerCase(), name: input.name, passwordHash: await hashPassword(input.password) } });
    res.status(201).json(await responseFor(user));
  } catch (error) { next(error); }
});

router.post('/login', async (req, res, next) => {
  try {
    const input = credentials.parse(req.body);
    const user = await prisma.user.findUnique({ where: { email: input.email.toLowerCase() } });
    if (!user || !(await verifyPassword(input.password, user.passwordHash))) return res.status(401).json({ error: 'Invalid credentials' });
    res.json(await responseFor(user));
  } catch (error) { next(error); }
});

router.post('/admin/login', async (req, res, next) => {
  try {
    const input = credentials.parse(req.body);
    const user = await prisma.user.findUnique({ where: { email: input.email.toLowerCase() } });
    if (!user || user.role !== 'ADMIN' || !(await verifyPassword(input.password, user.passwordHash))) return res.status(401).json({ error: 'Invalid admin credentials' });
    res.json(await responseFor(user));
  } catch (error) { next(error); }
});

router.get('/session', requireAuth, async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.auth!.sub }, select: { id: true, email: true, name: true, role: true } });
    if (!user) return res.status(401).json({ error: 'User session is no longer valid' });
    res.json({ ...user, memberId: user.id });
  } catch (error) { next(error); }
});

router.get('/admin/session', requireAuth, requireAdmin, async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.auth!.sub }, select: { id: true, email: true, name: true, role: true } });
    if (!user || user.role !== 'ADMIN') return res.status(401).json({ error: 'Admin session is no longer valid' });
    res.json({ ...user, memberId: user.id });
  } catch (error) { next(error); }
});

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

router.post('/refresh', async (req, res, next) => {
  try { res.json(await rotateRefreshToken(z.string().min(1).parse(req.body.refreshToken))); }
  catch { res.status(401).json({ error: 'Invalid refresh token' }); }
});

export default router;