import { Router } from 'express';
import crypto from 'node:crypto';
import Razorpay from 'razorpay';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { requireAuth } from '../middleware/auth.js';
import { amountInMinorUnits, currencyForCountry, CurrencyQuoteError, quoteInrAmount } from '../lib/currency.js';

const router = Router();
const paymentInput = z.object({ orderId: z.string().min(1) });
const verifyInput = z.object({
  orderId: z.string().min(1),
  razorpayOrderId: z.string().min(1),
  razorpayPaymentId: z.string().min(1),
  razorpaySignature: z.string().regex(/^[a-f\d]{64}$/i),
});

function getRazorpay() {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) return null;
  return new Razorpay({ key_id: keyId, key_secret: keySecret });
}

async function markOrderPaid(orderId: string, paymentId: string) {
  return prisma.$transaction(async (tx) => {
    const order = await tx.order.findUnique({ where: { id: orderId }, include: { items: true } });
    if (!order) return null;
    if (order.paymentStatus === 'PAID') {
      return order.razorpayPaymentId === paymentId ? order : null;
    }
    if (order.paymentStatus !== 'PENDING') return null;

    const paidOrder = await tx.order.update({
      where: { id: order.id },
      data: {
        paymentStatus: 'PAID',
        razorpayPaymentId: paymentId,
        orderStatus: 'CONFIRMED',
      },
      include: { items: true },
    });
    await tx.cartItem.deleteMany({ where: { cart: { userId: order.userId } } });
    return paidOrder;
  });
}

router.get('/quote', requireAuth, async (req, res, next) => {
  try {
    const addressId = z.string().min(1).parse(req.query.addressId);
    const address = await prisma.address.findFirst({
      where: { id: addressId, userId: req.auth!.sub },
    });
    if (!address) return res.status(404).json({ error: 'Shipping address not found' });
    const cart = await prisma.cart.findUnique({
      where: { userId: req.auth!.sub },
      include: { items: { include: { product: true } } },
    });
    if (!cart?.items.length) return res.status(400).json({ error: 'Cart is empty' });

    const subtotal = cart.items.reduce(
      (sum, item) => sum + Number(item.product.price) * item.quantity,
      0,
    );
    const currency = currencyForCountry(address.country);
    const quote = await quoteInrAmount(subtotal, currency);
    res.json({ ...quote, baseAmount: subtotal });
  } catch (error) {
    if (error instanceof CurrencyQuoteError) return res.status(error.statusCode).json({ error: error.message });
    next(error);
  }
});

router.post('/razorpay/order', requireAuth, async (req, res, next) => {
  try {
    const input = paymentInput.parse(req.body);
    const client = getRazorpay();
    if (!client) return res.status(503).json({ error: 'Razorpay is not configured on the server' });

    const order = await prisma.order.findFirst({
      where: { id: input.orderId, userId: req.auth!.sub, paymentStatus: 'PENDING' },
    });
    if (!order) return res.status(404).json({ error: 'Pending order not found' });

    const amount = amountInMinorUnits(order.paymentAmount, order.paymentCurrency);
    if (amount <= 0) return res.status(400).json({ error: 'Order total must be greater than zero' });

    const razorpayOrder = order.razorpayOrderId
      ? await client.orders.fetch(order.razorpayOrderId)
      : await client.orders.create({
          amount,
          currency: order.paymentCurrency,
          receipt: order.displayId,
          notes: { localOrderId: order.id, userId: order.userId },
        });
    if (!order.razorpayOrderId) {
      await prisma.order.update({ where: { id: order.id }, data: { razorpayOrderId: razorpayOrder.id } });
    }
    if (Number(razorpayOrder.amount) !== amount || razorpayOrder.currency !== order.paymentCurrency) {
      return res.status(409).json({ error: 'Razorpay order amount does not match the local order' });
    }

    res.json({
      keyId: process.env.RAZORPAY_KEY_ID,
      orderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
    });
  } catch (error) {
    next(error);
  }
});

router.post('/razorpay/verify', requireAuth, async (req, res, next) => {
  try {
    const input = verifyInput.parse(req.body);
    const client = getRazorpay();
    if (!client) return res.status(503).json({ error: 'Razorpay is not configured on the server' });

    const order = await prisma.order.findFirst({
      where: {
        id: input.orderId,
        userId: req.auth!.sub,
        razorpayOrderId: input.razorpayOrderId,
      },
    });
    if (!order) return res.status(404).json({ error: 'Order not found' });

    const expected = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(`${input.razorpayOrderId}|${input.razorpayPaymentId}`)
      .digest();
    const received = Buffer.from(input.razorpaySignature, 'hex');
    if (received.length !== expected.length || !crypto.timingSafeEqual(expected, received)) {
      return res.status(400).json({ error: 'Invalid payment signature' });
    }

    const payment = await client.payments.fetch(input.razorpayPaymentId);
    const expectedAmount = amountInMinorUnits(order.paymentAmount, order.paymentCurrency);
    if (
      payment.order_id !== input.razorpayOrderId ||
      Number(payment.amount) !== expectedAmount ||
      payment.currency !== order.paymentCurrency
    ) {
      return res.status(400).json({ error: 'Payment details do not match this order' });
    }

    const capturedPayment = payment.status === 'authorized'
      ? await client.payments.capture(input.razorpayPaymentId, expectedAmount, order.paymentCurrency)
      : payment;
    if (capturedPayment.status !== 'captured') {
      return res.status(409).json({ error: 'Payment has not been captured yet' });
    }

    const paidOrder = await markOrderPaid(order.id, input.razorpayPaymentId);
    if (!paidOrder) return res.status(409).json({ error: 'Order could not be marked as paid' });
    res.json({ status: 'paid', order: paidOrder });
  } catch (error) {
    next(error);
  }
});

router.post('/razorpay/webhook', async (req, res, next) => {
  try {
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
    if (!secret) return res.status(503).json({ error: 'Razorpay webhook secret is not configured' });
    const signature = req.headers['x-razorpay-signature'];
    const rawBody = req.rawBody;
    if (typeof signature !== 'string' || !rawBody || !/^[a-f\d]{64}$/i.test(signature)) {
      return res.status(400).json({ error: 'Invalid webhook signature' });
    }

    const expected = crypto.createHmac('sha256', secret).update(rawBody).digest();
    const received = Buffer.from(signature, 'hex');
    if (received.length !== expected.length || !crypto.timingSafeEqual(expected, received)) {
      return res.status(400).json({ error: 'Invalid webhook signature' });
    }

    const event = req.body as {
      event?: string;
      payload?: { payment?: { entity?: { order_id?: string; id?: string; amount?: number; currency?: string } } };
    };
    const payment = event.payload?.payment?.entity;
    if (event.event === 'payment.captured' && payment?.order_id && payment.id) {
      const order = await prisma.order.findFirst({ where: { razorpayOrderId: payment.order_id } });
      if (!order) return res.status(404).json({ error: 'Matching local order not found' });
      if (
        payment.amount !== amountInMinorUnits(order.paymentAmount, order.paymentCurrency) ||
        payment.currency !== order.paymentCurrency
      ) {
        return res.status(400).json({ error: 'Captured payment does not match the local order' });
      }
      const paidOrder = await markOrderPaid(order.id, payment.id);
      if (!paidOrder) return res.status(409).json({ error: 'Captured payment conflicts with the local order' });
    }

    res.json({ received: true });
  } catch (error) {
    next(error);
  }
});

export default router;
