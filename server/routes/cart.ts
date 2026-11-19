import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();
const itemInput = z.object({ productId: z.string(), color: z.string().min(1), size: z.string().min(1), quantity: z.number().int().min(1).max(20) });
router.use(requireAuth);

async function getOrCreateCart(userId: string) {
  return prisma.cart.upsert({ where: { userId }, update: {}, create: { userId }, include: { items: { include: { product: true } } } });
}

router.get('/', async (req, res, next) => { try { res.json(await getOrCreateCart(req.auth!.sub)); } catch (error) { next(error); } });
router.post('/items', async (req, res, next) => {
  try {
    const input = itemInput.parse(req.body);
    const cart = await getOrCreateCart(req.auth!.sub);
    const product = await prisma.product.findFirst({
      where: { OR: [{ id: input.productId }, { sku: input.productId }], isActive: true },
    });
    if (!product || !product.isActive) return res.status(404).json({ error: 'Product not found' });
    const catalog = product.catalog as { colors?: Array<{ name: string }>; sizeInventory?: Record<string, Array<{ size: string; stock: number }>> };
    const colorExists = catalog.colors?.some((color) => color.name === input.color);
    const availableStock = catalog.sizeInventory?.[input.color]?.find((entry) => entry.size === input.size)?.stock ?? 0;
    if (!colorExists || availableStock < 1) return res.status(400).json({ error: 'Selected product variant is unavailable' });
    const targetProductId = product.id;
    const existingItem = await prisma.cartItem.findUnique({
      where: { cartId_productId_color_size: { cartId: cart.id, productId: targetProductId, color: input.color, size: input.size } },
    });
    if ((existingItem?.quantity ?? 0) + input.quantity > Math.min(20, availableStock)) {
      return res.status(400).json({ error: 'Requested quantity exceeds available stock' });
    }
    const item = await prisma.cartItem.upsert({
      where: { cartId_productId_color_size: { cartId: cart.id, productId: targetProductId, color: input.color, size: input.size } },
      update: { quantity: { increment: input.quantity } },
      create: { cartId: cart.id, productId: targetProductId, color: input.color, size: input.size, quantity: input.quantity },
    });
    res.status(201).json(item);
  } catch (error) { next(error); }
});
router.patch('/items/:id', async (req, res, next) => { try { const quantity = z.number().int().min(1).max(20).parse(req.body.quantity); const cart = await getOrCreateCart(req.auth!.sub); const item = await prisma.cartItem.updateMany({ where: { id: req.params.id, cartId: cart.id }, data: { quantity } }); if (!item.count) return res.status(404).json({ error: 'Cart item not found' }); res.json({ id: req.params.id, quantity }); } catch (error) { next(error); } });
router.delete('/items/:id', async (req, res, next) => { try { const cart = await getOrCreateCart(req.auth!.sub); await prisma.cartItem.deleteMany({ where: { id: req.params.id, cartId: cart.id } }); res.status(204).end(); } catch (error) { next(error); } });
export default router;
