import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();
const itemInput = z.object({ productId: z.string(), colorway: z.string(), specification: z.string() });

router.use(requireAuth);
router.get('/', async (req, res, next) => {
  try {
    res.json(await prisma.wishlistItem.findMany({ where: { userId: req.auth!.sub }, include: { product: { select: { catalog: true } } }, orderBy: { createdAt: 'desc' } }));
  } catch (error) { next(error); }
});
router.put('/:productId', async (req, res, next) => {
  try {
    const input = itemInput.parse({ ...req.body, productId: req.params.productId });
    const product = await prisma.product.findFirst({ where: { id: input.productId, isActive: true } });
    if (!product) return res.status(404).json({ error: 'Product not found' });
    const item = await prisma.wishlistItem.upsert({
      where: { userId_productId: { userId: req.auth!.sub, productId: input.productId } },
      update: { colorway: input.colorway, specification: input.specification },
      create: {
        colorway: input.colorway!,
        specification: input.specification!,
        user: { connect: { id: req.auth!.sub } },
        product: { connect: { id: input.productId! } },
      },
    });
    res.json(item);
  } catch (error) { next(error); }
});
router.delete('/:productId', async (req, res, next) => {
  try {
    await prisma.wishlistItem.deleteMany({ where: { userId: req.auth!.sub, productId: req.params.productId } });
    res.status(204).end();
  } catch (error) { next(error); }
});

export default router;