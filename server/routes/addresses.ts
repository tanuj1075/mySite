import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();
const addressInput = z.object({ name: z.string().min(1), isPrimary: z.boolean().optional(), tag: z.string().optional(), line1: z.string().min(1), line2: z.string().optional(), city: z.string().min(1), state: z.string().optional(), postalCode: z.string().min(3), country: z.string().min(2), phone: z.string().optional() });
router.use(requireAuth);
router.get('/', async (req, res, next) => { try { res.json(await prisma.address.findMany({ where: { userId: req.auth!.sub }, orderBy: [{ isPrimary: 'desc' }, { id: 'asc' }] })); } catch (error) { next(error); } });
router.post('/', async (req, res, next) => { try { const input = addressInput.parse(req.body); const userId = req.auth!.sub; const address = await prisma.$transaction(async (tx) => { if (input.isPrimary) await tx.address.updateMany({ where: { userId }, data: { isPrimary: false } }); return tx.address.create({ data: { userId, name: input.name, isPrimary: input.isPrimary ?? false, tag: input.tag, line1: input.line1, line2: input.line2, city: input.city, state: input.state, postalCode: input.postalCode, country: input.country, phone: input.phone } }); }); res.status(201).json(address); } catch (error) { next(error); } });
export default router;