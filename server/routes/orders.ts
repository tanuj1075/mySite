import { Router } from 'express';
import { z } from 'zod';
import crypto from 'crypto';
import { prisma } from '../lib/prisma.js';
import { requireAuth } from '../middleware/auth.js';
import { CurrencyQuoteError, currencyForCountry, quoteInrAmount } from '../lib/currency.js';
import { estimateDelivery } from '../lib/delivery.js';

const router = Router();
const orderInput = z.object({ addressId: z.string(), paymentMethod: z.enum(['CARD', 'UPI', 'NET_BANKING', 'WALLET', 'COD']), couponCode: z.string().optional() });

function generateOrderDisplayId(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const randomChars = crypto.randomBytes(3).toString('hex').slice(0, 4).toUpperCase();
  return `VN-${year}${month}${day}${hours}${minutes}${seconds}-${randomChars}`;
}

router.use(requireAuth);
router.get('/', async (req, res, next) => { try { res.json(await prisma.order.findMany({ where: { userId: req.auth!.sub }, include: { items: { include: { product: { select: { catalog: true } } } } }, orderBy: { createdAt: 'desc' } })); } catch (error) { next(error); } });
router.get('/:id', async (req, res, next) => { try { const order = await prisma.order.findFirst({ where: { id: req.params.id, userId: req.auth!.sub }, include: { items: { include: { product: { select: { catalog: true } } } } } }); if (!order) return res.status(404).json({ error: 'Order not found' }); res.json(order); } catch (error) { next(error); } });
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

    let deliveryEst = null;
    try {
      deliveryEst = estimateDelivery({
        city: address.city,
        state: address.state ?? undefined,
        postalCode: address.postalCode,
        country: address.country,
      });
    } catch {
      // Fallback if address lacks postalCode
    }

    let createdOrder = null;
    let attempts = 0;
    while (!createdOrder && attempts < 5) {
      attempts++;
      const displayId = generateOrderDisplayId();
      try {
        createdOrder = await prisma.$transaction(async (tx) => {
          const newOrder = await tx.order.create({
            data: {
              displayId,
              userId,
              addressSnapshot: address,
              subtotal,
              discount,
              total: subtotal - discount,
              paymentCurrency: paymentQuote.currency,
              paymentAmount: paymentQuote.amount,
              exchangeRate: paymentQuote.exchangeRate,
              couponCode: coupon?.code,
              paymentMethod: input.paymentMethod,
              paymentStatus: input.paymentMethod === 'COD' ? 'COD' : 'PENDING',
              orderStatus: 'ORDER_PLACED',
              trackingNumber: `VNT-${Math.floor(10000000 + Math.random() * 90000000)}`,
              estimatedDeliveryMin: deliveryEst ? new Date(deliveryEst.minDate) : null,
              estimatedDeliveryMax: deliveryEst ? new Date(deliveryEst.maxDate) : null,
              deliveryDaysMin: deliveryEst ? deliveryEst.minDays : null,
              deliveryDaysMax: deliveryEst ? deliveryEst.maxDays : null,
              carrier: 'VANTA Logistics',
              items: {
                create: cart.items.map((item) => ({
                  productId: item.productId,
                  sku: item.product.sku,
                  name: item.product.name,
                  brand: item.product.brand,
                  color: item.color,
                  size: item.size,
                  price: item.product.price,
                  quantity: item.quantity,
                  image: String((item.product.catalog as { colors?: { images?: { front?: string } }[] }).colors?.[0]?.images?.front ?? ''),
                })),
              },
            },
            include: { items: { include: { product: { select: { catalog: true } } } } },
          });

          if (input.paymentMethod === 'COD') {
            await tx.cartItem.deleteMany({ where: { cartId: cart.id } });
          }
          return newOrder;
        });
      } catch (err: unknown) {
        if (typeof err === 'object' && err !== null && 'code' in err && (err as { code: string }).code === 'P2002') {
          // Collision on displayId, loop and retry
          continue;
        }
        throw err;
      }
    }

    if (!createdOrder) {
      throw new Error('Could not generate unique order identifier after multiple attempts');
    }

    res.status(201).json(createdOrder);
  } catch (error) { next(error); }
});
export default router;