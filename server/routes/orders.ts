import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { requireAuth } from '../middleware/auth.js';
import { CurrencyQuoteError, currencyForCountry, quoteInrAmount } from '../lib/currency.js';

const router = Router();
const orderInput = z.object({ addressId: z.string(), paymentMethod: z.enum(['CARD', 'UPI', 'NET_BANKING', 'WALLET', 'COD']), couponCode: z.string().optional() });
router.use(requireAuth);
router.get('/', async (req, res, next) => { try { res.json(await prisma.order.findMany({ where: { userId: req.auth!.sub }, include: { items: true }, orderBy: { createdAt: 'desc' } })); } catch (error) { next(error); } });
router.get('/:id', async (req, res, next) => { try { const order = await prisma.order.findFirst({ where: { id: req.params.id, userId: req.auth!.sub }, include: { items: true } }); if (!order) return res.status(404).json({ error: 'Order not found' }); res.json(order); } catch (error) { next(error); } });
router.post('/', async (req, res, next) => {
  try {
    const input = orderInput.parse(req.body);
    const userId = req.auth!.sub;
    const cart = await prisma.cart.findUnique({ where: { userId }, include: { items: { include: { product: true } } } });
    const address = await prisma.address.findFirst({ where: { id: input.addressId, userId } });
    if (!cart?.items.length) return res.status(400).json({ error: 'Cart is empty' });
    if (!address) return res.status(400).json({ error: 'Valid shipping address required' });
    const subtotal = cart.items.reduce((sum, item) => sum + Number(item.product.price) * item.quantity, 0);
    const coupon = input.couponCode ? await prisma.coupon.findUnique({ where: { code: input.couponCode.toUpperCase() } }) : null;
    const discount = coupon?.isActive && subtotal >= Number(coupon.minOrderValue) ? Math.min(subtotal * coupon.discountPercent / 100, coupon.maxDiscount ? Number(coupon.maxDiscount) : Infinity) : 0;
    let paymentQuote: Awaited<ReturnType<typeof quoteInrAmount>>;
    try {
      const currency = currencyForCountry(address.country);
      if (input.paymentMethod === 'COD' && currency !== 'INR') {
        return res.status(400).json({ error: 'Cash on delivery is only available for Indian shipping addresses' });
      }
      paymentQuote = await quoteInrAmount(subtotal - discount, currency);
    } catch (error) {
      if (error instanceof CurrencyQuoteError) {
        return res.status(error.statusCode).json({ error: error.message });
      }
      return res.status(422).json({ error: error instanceof Error ? error.message : 'Could not quote the payment currency' });
    }
    const order = await prisma.$transaction(async (tx) => {
      const createdOrder = await tx.order.create({ data: { displayId: `VN-${Date.now().toString().slice(-8)}`, userId, addressSnapshot: address, subtotal, discount, total: subtotal - discount, paymentCurrency: paymentQuote.currency, paymentAmount: paymentQuote.amount, exchangeRate: paymentQuote.exchangeRate, couponCode: coupon?.code, paymentMethod: input.paymentMethod, paymentStatus: input.paymentMethod === 'COD' ? 'COD' : 'PENDING', orderStatus: 'ORDER_PLACED', trackingNumber: `VNT-${Math.floor(10000000 + Math.random() * 90000000)}`, items: { create: cart.items.map((item) => ({ productId: item.productId, sku: item.product.sku, name: item.product.name, brand: item.product.brand, color: item.color, size: item.size, price: item.product.price, quantity: item.quantity, image: String((item.product.catalog as { colors?: { images?: { front?: string } }[] }).colors?.[0]?.images?.front ?? '') })) } }, include: { items: true } });
      if (input.paymentMethod === 'COD') {
        await tx.cartItem.deleteMany({ where: { cartId: cart.id } });
      }
      return createdOrder;
    });
    res.status(201).json(order);
  } catch (error) { next(error); }
});
export default router;