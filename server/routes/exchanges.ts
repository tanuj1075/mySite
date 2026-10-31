import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();
const requestInput = z.object({
  orderId: z.string(),
  type: z.enum(['EXCHANGE', 'RETURN']),
  productId: z.string(),
  productName: z.string(),
  productImage: z.string(),
  currentSize: z.string(),
  requestedSize: z.string().optional(),
  reason: z.string().min(1),
  adminNotes: z.string().optional(),
});

router.use(requireAuth);
router.get('/', async (req, res, next) => {
  try {
    res.json(await prisma.exchangeReturnRequest.findMany({ where: { userId: req.auth!.sub }, orderBy: { createdAt: 'desc' } }));
  } catch (error) { next(error); }
});
router.post('/', async (req, res, next) => {
  try {
    const input = requestInput.parse(req.body);
    const orderItem = await prisma.orderItem.findFirst({ where: { orderId: input.orderId, productId: input.productId, order: { userId: req.auth!.sub } } });
    if (!orderItem) return res.status(404).json({ error: 'Order item not found' });
    const request = await prisma.exchangeReturnRequest.create({ data: {
      type: input.type!,
      productId: input.productId!,
      productName: input.productName!,
      productImage: input.productImage!,
      currentSize: input.currentSize!,
      requestedSize: input.requestedSize,
      reason: input.reason!,
      adminNotes: input.adminNotes,
      user: { connect: { id: req.auth!.sub } },
      order: { connect: { id: input.orderId! } },
    } });
    res.status(201).json(request);
  } catch (error) { next(error); }
});

export default router;