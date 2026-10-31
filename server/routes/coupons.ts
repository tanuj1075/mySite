import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();
router.use(requireAuth);
router.post('/validate', async (req, res, next) => { try { const { code, subtotal } = z.object({ code: z.string().min(1), subtotal: z.number().nonnegative() }).parse(req.body); const coupon = await prisma.coupon.findUnique({ where: { code: code.toUpperCase() } }); if (!coupon || !coupon.isActive || subtotal < Number(coupon.minOrderValue)) return res.status(400).json({ error: 'Coupon is invalid or does not meet the minimum order value' }); const discount = Math.min(subtotal * coupon.discountPercent / 100, coupon.maxDiscount ? Number(coupon.maxDiscount) : Infinity); res.json({ ...coupon, discountAmount: discount }); } catch (error) { next(error); } });
export default router;