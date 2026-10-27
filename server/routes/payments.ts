import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { requireAuth } from '../middleware/auth.js';
import { currencyForCountry, CurrencyQuoteError, quoteInrAmount } from '../lib/currency.js';
import { upiService } from '../lib/payments/upiService.js';

const router = Router();

const initiateInput = z.object({
  orderId: z.string().min(1, 'Order ID is required'),
});

/**
 * Currency quote endpoint (preserved for pricing and checkout protocol)
 */
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
      0
    );
    const currency = currencyForCountry(address.country);
    const quote = await quoteInrAmount(subtotal, currency);
    res.json({ ...quote, baseAmount: subtotal });
  } catch (error) {
    if (error instanceof CurrencyQuoteError) return res.status(error.statusCode).json({ error: error.message });
    next(error);
  }
});

/**
 * Initiates a genuine UPI payment attempt.
 * Generates dynamic UPI QR code and deep intent link (GPay, PhonePe, Paytm, BHIM).
 */
router.post('/upi/initiate', requireAuth, async (req, res, next) => {
  try {
    const input = initiateInput.parse(req.body);
    const userId = req.auth!.sub;

    const result = await upiService.initiatePayment(input.orderId, userId);
    res.json(result);
  } catch (error) {
    if (error instanceof Error && error.message.includes('not configured')) {
      return res.status(503).json({
        error: error.message,
        code: 'PROVIDER_CONFIG_REQUIRED',
      });
    }
    next(error);
  }
});

/**
 * Verified Payment Status endpoint.
 * Returns server-confirmed state from PostgreSQL and queries provider status API if pending.
 */
router.get('/upi/status/:orderId', requireAuth, async (req, res, next) => {
  try {
    const orderId = z.string().min(1).parse(req.params.orderId);
    const userId = req.auth!.sub;

    const status = await upiService.checkPaymentStatus(orderId, userId);
    res.json(status);
  } catch (error) {
    next(error);
  }
});

const submitUtrInput = z.object({
  orderId: z.string().min(1, 'Order ID is required'),
  utr: z.string().min(10, 'Bank UTR must be at least 10 characters').max(22),
});

/**
 * Customer Bank UTR Submission endpoint (upipg.cit.org.in protocol).
 * Allows buyers to enter the 12-digit UTR shown on their UPI app (GPay/PhonePe/Paytm/BHIM).
 * Verifies format, checks for duplicate/replay fraud, and updates order status.
 */
router.post('/upi/verify-utr', requireAuth, async (req, res, next) => {
  try {
    const input = submitUtrInput.parse(req.body);
    const userId = req.auth!.sub;

    const result = await upiService.submitUtr(input.orderId, input.utr, userId);
    res.json(result);
  } catch (error) {
    if (error instanceof Error && error.message.includes('Duplicate UTR')) {
      return res.status(409).json({ error: error.message });
    }
    next(error);
  }
});

/**
 * Authenticated Webhook Notification Handler.
 * Verifies raw cryptographic HMAC-SHA256 signature and timestamp tolerance.
 */
router.post('/webhook', async (req, res, next) => {
  try {
    const rawBody = req.rawBody;
    const signature = (req.headers['x-webhook-signature'] as string) || '';
    const timestamp = (req.headers['x-webhook-timestamp'] as string) || '';

    if (!rawBody) {
      return res.status(400).json({
        error: 'Missing raw request body for cryptographic signature verification',
      });
    }

    const result = await upiService.processWebhook({
      signature,
      timestamp,
      rawBody,
      headers: req.headers,
    });

    if (!result.success) {
      return res.status(result.statusCode).json({ error: result.message });
    }

    res.status(result.statusCode).json({
      received: true,
      message: result.message,
      orderId: result.orderId,
    });
  } catch (error) {
    console.error('[WEBHOOK_ERROR]', error);
    next(error);
  }
});

export default router;
