import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { requireAdmin, requireAuth } from '../middleware/auth.js';

const router = Router();
router.use(requireAuth, requireAdmin);
router.get('/customers', async (_req, res, next) => { try { res.json(await prisma.user.findMany({ where: { role: 'CUSTOMER' }, select: { id: true, email: true, name: true, phone: true, createdAt: true, orders: { select: { total: true } }, addresses: { select: { city: true, country: true } } } })); } catch (error) { next(error); } });
router.get('/orders', async (_req, res, next) => { try { res.json(await prisma.order.findMany({ include: { items: true }, orderBy: { createdAt: 'desc' } })); } catch (error) { next(error); } });
router.patch('/orders/:id/status', async (req, res, next) => { try { const status = z.enum(['ORDER_PLACED', 'CONFIRMED', 'PACKED', 'SHIPPED', 'OUT_FOR_DELIVERY', 'DELIVERED', 'CANCELLED']).parse(req.body.status); res.json(await prisma.order.update({ where: { id: req.params.id }, data: { orderStatus: status } })); } catch (error) { next(error); } });

const productInput = z.object({ id: z.string(), sku: z.string(), name: z.string(), brand: z.string(), category: z.string(), price: z.number().nonnegative(), mrp: z.number().nonnegative(), catalog: z.record(z.string(), z.unknown()) });
router.get('/products', async (_req, res, next) => { try { res.json(await prisma.product.findMany({ where: { isActive: true }, orderBy: { createdAt: 'desc' } })); } catch (error) { next(error); } });
router.put('/products/:id', async (req, res, next) => {
	try {
		const input = productInput.parse(req.body);
		if (input.id !== req.params.id) return res.status(400).json({ error: 'Product ID mismatch' });
		const data = { sku: input.sku, name: input.name, brand: input.brand, category: input.category, price: input.price, mrp: input.mrp, catalog: input.catalog as object, isActive: true };
		res.json(await prisma.product.upsert({ where: { id: input.id }, update: data, create: { id: input.id, ...data } }));
	} catch (error) { next(error); }
});
router.delete('/products/:id', async (req, res, next) => { try { res.json(await prisma.product.update({ where: { id: req.params.id }, data: { isActive: false } })); } catch (error) { next(error); } });

const couponInput = z.object({ code: z.string().min(1), discountPercent: z.number().int().min(1).max(100), minOrderValue: z.number().nonnegative(), maxDiscount: z.number().positive().optional(), description: z.string(), isActive: z.boolean() });
router.get('/coupons', async (_req, res, next) => { try { res.json(await prisma.coupon.findMany({ orderBy: { code: 'asc' } })); } catch (error) { next(error); } });
router.put('/coupons/:code', async (req, res, next) => { try { const input = couponInput.parse(req.body); res.json(await prisma.coupon.upsert({ where: { code: req.params.code }, update: input, create: { code: input.code!, discountPercent: input.discountPercent!, minOrderValue: input.minOrderValue!, maxDiscount: input.maxDiscount, description: input.description!, isActive: input.isActive! } })); } catch (error) { next(error); } });

const dropInput = z.object({ id: z.string(), productId: z.string(), productName: z.string(), brand: z.string(), edition: z.string(), image: z.string(), price: z.number().nonnegative(), mrp: z.number().nonnegative(), launchDate: z.string(), launchTime: z.string(), stock: z.number().int().nonnegative(), status: z.enum(['Scheduled', 'Active', 'Paused', 'Completed']), targetTimestamp: z.number(), notifySubscribers: z.array(z.string()) });
router.get('/drops', async (_req, res, next) => { try { res.json(await prisma.sneakerDrop.findMany({ orderBy: { createdAt: 'desc' } })); } catch (error) { next(error); } });
router.put('/drops/:id', async (req, res, next) => { try { const input = dropInput.parse(req.body); if (input.id !== req.params.id) return res.status(400).json({ error: 'Drop ID mismatch' }); res.json(await prisma.sneakerDrop.upsert({ where: { id: input.id }, update: input, create: { id: input.id!, productId: input.productId!, productName: input.productName!, brand: input.brand!, edition: input.edition!, image: input.image!, price: input.price!, mrp: input.mrp!, launchDate: input.launchDate!, launchTime: input.launchTime!, stock: input.stock!, status: input.status!, targetTimestamp: input.targetTimestamp!, notifySubscribers: input.notifySubscribers! } })); } catch (error) { next(error); } });
router.patch('/drops/:id/status', async (req, res, next) => { try { const status = z.enum(['Scheduled', 'Active', 'Paused', 'Completed']).parse(req.body.status); res.json(await prisma.sneakerDrop.update({ where: { id: req.params.id }, data: { status } })); } catch (error) { next(error); } });

router.get('/exchanges', async (_req, res, next) => { try { res.json(await prisma.exchangeReturnRequest.findMany({ include: { user: { select: { email: true, name: true } } }, orderBy: { createdAt: 'desc' } })); } catch (error) { next(error); } });
router.patch('/exchanges/:id/status', async (req, res, next) => { try { const status = z.enum(['Approved', 'Rejected', 'Pickup Scheduled', 'Completed']).parse(req.body.status); res.json(await prisma.exchangeReturnRequest.update({ where: { id: req.params.id }, data: { status } })); } catch (error) { next(error); } });

export default router;