import { Router } from 'express';
import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { requireAdmin, requireAuth } from '../middleware/auth.js';
import { upiService } from '../lib/payments/upiService.js';

const router = Router();
router.use(requireAuth, requireAdmin);
router.get('/customers', async (_req, res, next) => { try { res.json(await prisma.user.findMany({ where: { role: 'CUSTOMER' }, select: { id: true, email: true, name: true, phone: true, createdAt: true, orders: { select: { total: true } }, addresses: { select: { city: true, country: true } } } })); } catch (error) { next(error); } });
router.get('/orders', async (_req, res, next) => { try { res.json(await prisma.order.findMany({ include: { items: { include: { product: { select: { catalog: true } } } } }, orderBy: { createdAt: 'desc' } })); } catch (error) { next(error); } });
router.patch('/orders/:id/status', async (req, res, next) => {
  try {
    const status = z.enum(['ORDER_PLACED', 'CONFIRMED', 'PACKED', 'SHIPPED', 'OUT_FOR_DELIVERY', 'DELIVERED', 'CANCELLED']).parse(req.body.status);
    const existing = await prisma.order.findUnique({ where: { id: req.params.id } });
    if (!existing) return res.status(404).json({ error: 'Order not found' });
    res.json(await prisma.order.update({ where: { id: req.params.id }, data: { orderStatus: status } }));
  } catch (error) { next(error); }
});

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

const dropInput = z.object({ id: z.string(), productId: z.string(), productName: z.string(), brand: z.string(), edition: z.string(), image: z.string(), price: z.number().nonnegative(), mrp: z.number().nonnegative(), launchDate: z.string(), launchTime: z.string(), stock: z.number().int().nonnegative(), status: z.enum(['Scheduled', 'Active', 'Paused', 'Completed']), targetTimestamp: z.number(), notifySubscribers: z.array(z.string()).max(1000) });
router.get('/drops', async (_req, res, next) => { try { res.json(await prisma.sneakerDrop.findMany({ orderBy: { createdAt: 'desc' } })); } catch (error) { next(error); } });
router.put('/drops/:id', async (req, res, next) => { try { const input = dropInput.parse(req.body); if (input.id !== req.params.id) return res.status(400).json({ error: 'Drop ID mismatch' }); res.json(await prisma.sneakerDrop.upsert({ where: { id: input.id }, update: input, create: { id: input.id!, productId: input.productId!, productName: input.productName!, brand: input.brand!, edition: input.edition!, image: input.image!, price: input.price!, mrp: input.mrp!, launchDate: input.launchDate!, launchTime: input.launchTime!, stock: input.stock!, status: input.status!, targetTimestamp: input.targetTimestamp!, notifySubscribers: input.notifySubscribers! } })); } catch (error) { next(error); } });
router.patch('/drops/:id/status', async (req, res, next) => { try { const status = z.enum(['Scheduled', 'Active', 'Paused', 'Completed']).parse(req.body.status); res.json(await prisma.sneakerDrop.update({ where: { id: req.params.id }, data: { status } })); } catch (error) { next(error); } });

router.get('/exchanges', async (_req, res, next) => { try { res.json(await prisma.exchangeReturnRequest.findMany({ include: { user: { select: { email: true, name: true } } }, orderBy: { createdAt: 'desc' } })); } catch (error) { next(error); } });
router.patch('/exchanges/:id/status', async (req, res, next) => { try { const status = z.enum(['Approved', 'Rejected', 'Pickup Scheduled', 'Completed']).parse(req.body.status); res.json(await prisma.exchangeReturnRequest.update({ where: { id: req.params.id }, data: { status } })); } catch (error) { next(error); } });

router.get('/security/sessions', async (req, res, next) => {
  try {
    const adminId = req.auth!.sub;
    const tokens = await prisma.refreshToken.findMany({
      where: { userId: adminId, revokedAt: null, expiresAt: { gt: new Date() } },
      select: { id: true, createdAt: true, expiresAt: true, ipAddress: true, userAgent: true },
      orderBy: { createdAt: 'desc' },
    });
    res.json(tokens.map((t, idx) => ({
      id: `vnt_sess_${t.id.slice(-6)}`,
      createdAt: t.createdAt,
      expiresAt: t.expiresAt,
      isCurrent: idx === 0,
      ip: t.ipAddress || '127.0.0.1 (Local Verified)',
      environment: t.userAgent || 'Admin Session (Authenticated Token)',
    })));
  } catch (error) { next(error); }
});

router.post('/security/sessions/revoke-all', async (req, res, next) => {
  try {
    const adminId = req.auth!.sub;
    const result = await prisma.refreshToken.updateMany({
      where: { userId: adminId, revokedAt: null },
      data: { revokedAt: new Date() },
    });
    res.json({ revokedCount: result.count, message: 'All remote administrator sessions revoked' });
  } catch (error) { next(error); }
});

router.get('/security/logs', async (req, res, next) => {
  try {
    const page = Math.max(1, parseInt(String(req.query.page || '1'), 10));
    const limit = Math.min(100, Math.max(1, parseInt(String(req.query.limit || '20'), 10)));
    const skip = (page - 1) * limit;
    const severity = typeof req.query.severity === 'string' && req.query.severity !== 'ALL' ? req.query.severity : undefined;
    const eventType = typeof req.query.eventType === 'string' && req.query.eventType !== 'ALL' ? req.query.eventType : undefined;
    const rawSearch = typeof req.query.search === 'string' ? req.query.search.trim().slice(0, 100) : undefined;
    const search = rawSearch || undefined;

    const where: Prisma.SecurityLogWhereInput = {};
    if (severity) where.severity = severity;
    if (eventType) where.eventType = eventType;
    if (search) {
      where.OR = [
        { eventType: { contains: search, mode: 'insensitive' } },
        { ipAddress: { contains: search, mode: 'insensitive' } },
        { user: { email: { contains: search, mode: 'insensitive' } } },
      ];
    }

    const [logs, total] = await Promise.all([
      prisma.securityLog.findMany({
        where,
        include: { user: { select: { email: true, name: true, role: true } } },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.securityLog.count({ where }),
    ]);

    res.json({
      logs,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) { next(error); }
});

router.get('/security/stats', async (_req, res, next) => {
  try {
    const since24h = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const [
      totalLogs,
      criticalLogsCount,
      failedLogins24h,
      activeSessionsCount,
      totalAdmins,
      mfaAdmins,
      lockedAccounts,
      recentLogs,
    ] = await Promise.all([
      prisma.securityLog.count(),
      prisma.securityLog.count({ where: { severity: { in: ['HIGH', 'CRITICAL'] } } }),
      prisma.securityLog.count({
        where: {
          eventType: { in: ['LOGIN_FAILED', 'ADMIN_LOGIN_FAILED', 'ACCOUNT_LOCKED', 'ADMIN_MFA_FAILED'] },
          createdAt: { gte: since24h },
        },
      }),
      prisma.refreshToken.count({
        where: { revokedAt: null, expiresAt: { gt: new Date() } },
      }),
      prisma.user.count({ where: { role: 'ADMIN' } }),
      prisma.user.count({ where: { role: 'ADMIN', mfaEnabled: true } }),
      prisma.user.count({ where: { lockedUntil: { gt: new Date() } } }),
      prisma.securityLog.findMany({
        include: { user: { select: { email: true, name: true } } },
        orderBy: { createdAt: 'desc' },
        take: 10,
      }),
    ]);

    res.json({
      totalLogs,
      criticalEvents: criticalLogsCount,
      threatsBlocked24h: failedLogins24h,
      activeSessions: activeSessionsCount,
      mfaComplianceRate: totalAdmins > 0 ? Math.round((mfaAdmins / totalAdmins) * 100) : 100,
      totalAdmins,
      mfaAdmins,
      lockedAccounts,
      recentLogs,
    });
  } catch (error) { next(error); }
});

// ==========================================
// ADMIN PAYMENTS & AUDIT HISTORY DASHBOARD
// ==========================================

router.get('/payments', async (req, res, next) => {
  try {
    const q = typeof req.query.q === 'string' ? req.query.q.trim().slice(0, 100) : '';
    const status = typeof req.query.status === 'string' ? req.query.status : undefined;
    const provider = typeof req.query.provider === 'string' ? req.query.provider : undefined;
    const page = Math.max(1, parseInt(String(req.query.page || '1'), 10));
    const limit = Math.min(100, Math.max(1, parseInt(String(req.query.limit || '20'), 10)));
    const skip = (page - 1) * limit;

    const where: Prisma.PaymentWhereInput = {};
    if (status && status !== 'ALL') {
      where.status = status as any;
    }
    if (provider && provider !== 'ALL') {
      where.provider = provider;
    }
    if (q) {
      where.OR = [
        { id: { contains: q, mode: 'insensitive' } },
        { orderId: { contains: q, mode: 'insensitive' } },
        { upiUtr: { contains: q, mode: 'insensitive' } },
        { providerPaymentId: { contains: q, mode: 'insensitive' } },
        { order: { displayId: { contains: q, mode: 'insensitive' } } },
        { order: { user: { email: { contains: q, mode: 'insensitive' } } } },
      ];
    }

    const [payments, total] = await Promise.all([
      prisma.payment.findMany({
        where,
        include: {
          order: {
            select: {
              id: true,
              displayId: true,
              total: true,
              paymentCurrency: true,
              orderStatus: true,
              user: { select: { email: true, name: true } },
            },
          },
          auditLogs: {
            orderBy: { createdAt: 'desc' },
            take: 3,
          },
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.payment.count({ where }),
    ]);

    res.json({
      payments,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) { next(error); }
});

router.get('/payments/:id', async (req, res, next) => {
  try {
    const payment = await prisma.payment.findUnique({
      where: { id: req.params.id },
      include: {
        order: {
          include: {
            user: { select: { id: true, email: true, name: true, phone: true } },
            items: true,
          },
        },
        auditLogs: {
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!payment) return res.status(404).json({ error: 'Payment record not found' });

    // Also look up matching webhook events
    const webhookEvents = await prisma.webhookEvent.findMany({
      where: {
        OR: [
          { payload: { path: ['data', 'order', 'order_id'], equals: payment.orderId } },
          { payload: { path: ['data', 'payment', 'cf_payment_id'], equals: payment.providerPaymentId } },
        ],
      },
      orderBy: { createdAt: 'desc' },
      take: 5,
    });

    res.json({ ...payment, webhookEvents });
  } catch (error) { next(error); }
});

router.post('/payments/:id/reconcile', async (req, res, next) => {
  try {
    const payment = await prisma.payment.findUnique({
      where: { id: req.params.id },
      include: { order: true },
    });
    if (!payment) return res.status(404).json({ error: 'Payment record not found' });

    const provider = upiService.getProvider();
    if (!provider.isConfigured()) {
      return res.status(503).json({ error: 'Payment provider is not configured with live credentials' });
    }

    const providerStatus = await provider.fetchPaymentStatus(payment.providerOrderId || payment.orderId);

    if (providerStatus.status === 'SUCCESS') {
      await upiService.markPaymentSuccess({
        orderId: payment.orderId,
        paymentId: payment.id,
        providerPaymentId: providerStatus.providerPaymentId,
        upiUtr: providerStatus.upiUtr,
        upiId: providerStatus.upiId,
        amountReceived: providerStatus.amount || Number(payment.amount),
        verificationSource: 'ADMIN_RECONCILE',
        actorType: 'ADMIN',
        actorId: req.auth!.sub,
      });

      return res.json({
        success: true,
        message: 'Payment verified and confirmed via provider status API',
        status: 'SUCCESS',
        upiUtr: providerStatus.upiUtr,
      });
    }

    res.json({
      success: true,
      message: `Provider status check returned: ${providerStatus.status}`,
      status: providerStatus.status,
    });
  } catch (error) { next(error); }
});

const manualAdjustInput = z.object({
  newStatus: z.enum(['SUCCESS', 'FAILED', 'EXPIRED', 'CANCELLED', 'REVERSED']),
  reason: z.string().min(5, 'A valid explanation is required for manual administrative adjustments'),
});

router.post('/payments/:id/adjust', async (req, res, next) => {
  try {
    const input = manualAdjustInput.parse(req.body);
    const adminId = req.auth!.sub;

    const payment = await prisma.payment.findUnique({
      where: { id: req.params.id },
      include: { order: true },
    });
    if (!payment) return res.status(404).json({ error: 'Payment record not found' });

    const updated = await prisma.$transaction(async (tx) => {
      const p = await tx.payment.update({
        where: { id: payment.id },
        data: {
          status: input.newStatus,
          verificationSource: 'MANUAL_ADMIN',
          failureReason: input.newStatus === 'FAILED' ? input.reason : undefined,
        },
      });

      if (input.newStatus === 'SUCCESS') {
        await tx.order.update({
          where: { id: payment.orderId },
          data: {
            paymentStatus: 'PAID',
            orderStatus: 'CONFIRMED',
          },
        });
        await tx.cartItem.deleteMany({
          where: { cart: { userId: payment.order.userId } },
        });
      } else if (input.newStatus === 'CANCELLED' || input.newStatus === 'FAILED') {
        await tx.order.update({
          where: { id: payment.orderId },
          data: { paymentStatus: 'FAILED' },
        });
      }

      await tx.paymentAuditLog.create({
        data: {
          paymentId: payment.id,
          fromStatus: payment.status,
          toStatus: input.newStatus,
          action: 'ADMIN_MANUAL_ADJUSTMENT',
          actorType: 'ADMIN',
          actorId: adminId,
          reason: `Manual override by Admin (${adminId}): ${input.reason}`,
        },
      });

      return p;
    });

    res.json({ success: true, payment: updated });
  } catch (error) { next(error); }
});

router.post('/payments/reconcile-all', async (_req, res, next) => {
  try {
    const { runReconciliationPass } = await import('../jobs/reconcileWorker.js');
    const summary = await runReconciliationPass();
    res.json(summary);
  } catch (error) { next(error); }
});

router.get('/payments/export/csv', async (req, res, next) => {
  try {
    const payments = await prisma.payment.findMany({
      include: {
        order: {
          select: {
            displayId: true,
            user: { select: { email: true, name: true } },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: 1000,
    });

    const headers = [
      'Payment ID',
      'Order Display ID',
      'Order ID',
      'Customer Email',
      'Amount',
      'Currency',
      'Status',
      'Provider',
      'Provider Transaction ID',
      'UPI UTR',
      'Verification Source',
      'Created At',
      'Verified At',
    ];

    const escapeCsv = (val: unknown) => {
      if (val === null || val === undefined) return '""';
      const str = String(val).replace(/"/g, '""');
      return `"${str}"`;
    };

    const rows = payments.map((p) => [
      escapeCsv(p.id),
      escapeCsv(p.order?.displayId),
      escapeCsv(p.orderId),
      escapeCsv(p.order?.user?.email),
      escapeCsv(Number(p.amount)),
      escapeCsv(p.currency),
      escapeCsv(p.status),
      escapeCsv(p.provider),
      escapeCsv(p.providerPaymentId || ''),
      escapeCsv(p.upiUtr || ''),
      escapeCsv(p.verificationSource || ''),
      escapeCsv(p.createdAt.toISOString()),
      escapeCsv(p.verifiedAt ? p.verifiedAt.toISOString() : ''),
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\r\n');

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="vanta_payments_history.csv"');
    res.send(csvContent);
  } catch (error) { next(error); }
});

export default router;