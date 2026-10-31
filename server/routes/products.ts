import { Router } from 'express';
import { prisma } from '../lib/prisma.js';

const router = Router();
router.get('/', async (_req, res, next) => {
  try { const products = await prisma.product.findMany({ where: { isActive: true }, orderBy: { createdAt: 'desc' } }); res.json(products.map((product) => product.catalog)); }
  catch (error) { next(error); }
});
router.get('/:id', async (req, res, next) => {
  try { const product = await prisma.product.findUnique({ where: { id: req.params.id } }); if (!product) return res.status(404).json({ error: 'Product not found' }); res.json(product.catalog); }
  catch (error) { next(error); }
});
export default router;