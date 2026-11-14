import { PrismaClient, Prisma } from '@prisma/client';
import { prisma } from '../prisma.js';
import { CashfreeUpiProvider } from './cashfree.js';
import { UpiPgProvider } from './upiPg.js';
import { HybridUpiProvider } from './hybridProvider.js';
import { matchesVerifiedProviderPayment, paymentAmountMatches } from './verification.js';
import {
  CreateUpiOrderResult,
  UpiPaymentProvider,
  WebhookVerificationInput,
} from './types.js';

function resolveDefaultUpiProvider(): UpiPaymentProvider {
  const provider = (process.env.UPI_PROVIDER || 'hybrid').toLowerCase().trim();
  if (provider === 'cashfree') {
    return new CashfreeUpiProvider();
  }
  if (provider === 'upipg') {
    return new UpiPgProvider();
  }
  // Default: hybrid — direct UPI VPA QR + Cashfree auto-webhook if configured
  return new HybridUpiProvider();
}

export class UpiPaymentService {
  private provider: UpiPaymentProvider;

  constructor(provider?: UpiPaymentProvider) {
    this.provider = provider || resolveDefaultUpiProvider();
  }

  getProvider(): UpiPaymentProvider {
    return this.provider;
  }

  /**
   * Initiates a genuine UPI payment attempt for an order.
   * Calculations strictly use server-persisted order total.
   */
  async initiatePayment(orderId: string, userId: string): Promise<{
    paymentId: string;
    orderId: string;
    displayId: string;
    amount: number;
    currency: string;
    status: string;
    upiPaymentUrl: string;
    qrCodeDataUrl: string;
    expiresAt: Date;
    provider: string;
  }> {
    // 1. Fetch and validate the order
    const order = await prisma.order.findFirst({
      where: { id: orderId, userId },
      include: { user: true },
    });

    if (!order) {
      throw new Error('Order not found or unauthorized');
    }

    if (order.paymentStatus === 'PAID') {
      throw new Error('Order is already paid');
    }

    const amount = Number(order.total);
    if (amount <= 0) {
      throw new Error('Order amount must be greater than zero');
    }

    // 2. Check if there is an existing unexpired pending payment attempt for this order
    const now = new Date();
    const existingPayment = await prisma.payment.findFirst({
      where: {
        orderId: order.id,
        status: { in: ['PENDING', 'VERIFYING'] },
        expiresAt: { gt: now },
      },
      orderBy: { createdAt: 'desc' },
    });

    if (existingPayment && existingPayment.upiPaymentUrl && existingPayment.qrCodeData) {
      return {
        paymentId: existingPayment.id,
        orderId: order.id,
        displayId: order.displayId,
        amount: Number(existingPayment.amount),
        currency: existingPayment.currency,
        status: existingPayment.status,
        upiPaymentUrl: existingPayment.upiPaymentUrl,
        qrCodeDataUrl: existingPayment.qrCodeData,
        expiresAt: existingPayment.expiresAt!,
        provider: existingPayment.provider,
      };
    }

    // 3. Determine next attempt number
    const attemptsCount = await prisma.payment.count({ where: { orderId: order.id } });
    const attemptNumber = attemptsCount + 1;

    // 4. Call provider to generate UPI order and intent / QR
    const upiResult: CreateUpiOrderResult = await this.provider.createUpiOrder({
      orderId: order.id,
      displayId: order.displayId,
      amount,
      currency: order.paymentCurrency,
      customer: {
        id: order.userId,
        name: order.user?.name || 'VANTA Customer',
        email: order.user?.email || 'customer@vanta.com',
        phone: order.user?.phone || undefined,
      },
      returnUrl: `${process.env.CLIENT_URL || 'http://localhost:3000'}/order-success`,
      notifyUrl: `${process.env.BACKEND_URL || 'http://localhost:4000'}/api/payments/webhook`,
    });

    // 5. Persist payment attempt atomically in PostgreSQL
    const payment = await prisma.$transaction(async (tx) => {
      const createdPayment = await tx.payment.create({
        data: {
          orderId: order.id,
          attemptNumber,
          provider: this.provider.providerName,
          providerOrderId: upiResult.providerOrderId,
          paymentSessionId: upiResult.paymentSessionId,
          amount,
          currency: order.paymentCurrency,
          status: 'PENDING',
          paymentMethod: 'UPI_QR',
          upiPaymentUrl: upiResult.upiPaymentUrl,
          qrCodeData: upiResult.qrCodeDataUrl,
          expiresAt: upiResult.expiresAt,
          metadata: upiResult.rawResponse ? (upiResult.rawResponse as object) : undefined,
        },
      });

      await tx.order.update({
        where: { id: order.id },
        data: { activePaymentId: createdPayment.id },
      });

      await tx.paymentAuditLog.create({
        data: {
          paymentId: createdPayment.id,
          fromStatus: null,
          toStatus: 'PENDING',
          action: 'INITIATE',
          actorType: 'USER',
          actorId: userId,
          reason: `UPI payment initiated for order ${order.displayId} (Attempt #${attemptNumber})`,
        },
      });

      return createdPayment;
    });

    return {
      paymentId: payment.id,
      orderId: order.id,
      displayId: order.displayId,
      amount,
      currency: payment.currency,
      status: payment.status,
      upiPaymentUrl: payment.upiPaymentUrl!,
      qrCodeDataUrl: payment.qrCodeData!,
      expiresAt: payment.expiresAt!,
      provider: payment.provider,
    };
  }

  /**
   * Process authenticated webhook notification with signature verification and replay prevention.
   */
  async processWebhook(input: WebhookVerificationInput): Promise<{
    statusCode: number;
    success: boolean;
    message: string;
    orderId?: string;
  }> {
    // 1. Cryptographically verify signature and timestamp tolerance
    const verifyResult = await this.provider.verifyWebhook(input);
    if (!verifyResult.isValid || !verifyResult.event) {
      console.warn(`[WEBHOOK_SECURITY] Verification failed: ${verifyResult.error}`);
      return {
        statusCode: 400,
        success: false,
        message: verifyResult.error || 'Invalid webhook signature',
      };
    }

    const event = verifyResult.event;

    // 2. Check for duplicate webhook delivery (Idempotency)
    const existingEvent = await prisma.webhookEvent.findUnique({
      where: { eventId: event.eventId },
    });

    if (existingEvent) {
      if (existingEvent.status === 'PROCESSED') {
        return {
          statusCode: 200,
          success: true,
          message: 'Webhook event already processed (idempotent)',
          orderId: event.orderId,
        };
      }
    } else {
      await prisma.webhookEvent.create({
        data: {
          provider: event.provider,
          eventId: event.eventId,
          eventType: event.eventType,
          signature: input.signature,
          payload: event.rawPayload as object,
          status: 'RECEIVED',
        },
      });
    }

    // 3. Locate local matching Order and Payment records
    const order = await prisma.order.findFirst({
      where: {
        OR: [
          { id: event.orderId },
          { razorpayOrderId: event.orderId }, // backward-compat search
        ],
      },
    });

    if (!order) {
      await prisma.webhookEvent.update({
        where: { eventId: event.eventId },
        data: { status: 'REJECTED', errorReason: `Matching local order not found: ${event.orderId}` },
      });
      return { statusCode: 404, success: false, message: 'Order reference not found' };
    }

    // 4. Validate payment amount and currency integrity
    const expectedAmount = Number(order.total);
    if (!paymentAmountMatches(expectedAmount, event.amount)) {
      await prisma.webhookEvent.update({
        where: { eventId: event.eventId },
        data: {
          status: 'REJECTED',
          errorReason: `Amount mismatch: expected ${expectedAmount}, received ${event.amount}`,
        },
      });
      return { statusCode: 400, success: false, message: 'Payment amount mismatch' };
    }

    if (event.currency !== order.paymentCurrency) {
      await prisma.webhookEvent.update({
        where: { eventId: event.eventId },
        data: {
          status: 'REJECTED',
          errorReason: `Currency mismatch: expected ${order.paymentCurrency}, received ${event.currency}`,
        },
      });
      return { statusCode: 400, success: false, message: 'Payment currency mismatch' };
    }

    // Bind the event to the active payment attempt, not merely the newest attempt for this order.
    const payment = order.activePaymentId
      ? await prisma.payment.findFirst({ where: { id: order.activePaymentId, orderId: order.id } })
      : await prisma.payment.findFirst({ where: { orderId: order.id }, orderBy: { createdAt: 'desc' } });

    if (!payment) {
      return { statusCode: 404, success: false, message: 'No active payment record found for order' };
    }

    const providerMatches = payment.provider === 'HYBRID' || payment.provider === event.provider;
    const providerOrderMatches =
      !event.providerOrderId || event.providerOrderId === order.id || event.providerOrderId === payment.providerOrderId;
    if (!providerMatches || !providerOrderMatches) {
      await prisma.webhookEvent.update({
        where: { eventId: event.eventId },
        data: { status: 'REJECTED', errorReason: 'Provider or payment reference did not match the active payment attempt.' },
      });
      return { statusCode: 400, success: false, message: 'Payment reference mismatch' };
    }

    if (event.status === 'SUCCESS' && !event.providerPaymentId && !event.upiUtr) {
      await prisma.webhookEvent.update({
        where: { eventId: event.eventId },
        data: { status: 'REJECTED', errorReason: 'Successful provider event did not include a transaction reference.' },
      });
      return { statusCode: 400, success: false, message: 'Provider transaction reference is missing' };
    }

    // 5. Atomic state update in PostgreSQL
    if (event.status === 'SUCCESS') {
      await this.markPaymentSuccess({
        orderId: order.id,
        paymentId: payment.id,
        providerPaymentId: event.providerPaymentId,
        upiUtr: event.upiUtr,
        upiId: event.upiId,
        amountReceived: event.amount,
        verificationSource: 'WEBHOOK',
        actorType: 'WEBHOOK',
        actorId: event.eventId,
      });

      await prisma.webhookEvent.update({
        where: { eventId: event.eventId },
        data: { status: 'PROCESSED', processedAt: new Date() },
      });

      return { statusCode: 200, success: true, message: 'Payment verified and order confirmed', orderId: order.id };
    } else if (event.status === 'FAILED' || event.status === 'USER_DROPPED') {
      await prisma.$transaction(async (tx) => {
        await tx.payment.update({
          where: { id: payment.id },
          data: {
            status: 'FAILED',
            failedAt: new Date(),
            failureReason: `Provider reported ${event.status}`,
          },
        });

        await tx.paymentAuditLog.create({
          data: {
            paymentId: payment.id,
            fromStatus: payment.status,
            toStatus: 'FAILED',
            action: 'WEBHOOK_FAILED',
            actorType: 'WEBHOOK',
            actorId: event.eventId,
            reason: `Webhook reported status: ${event.status}`,
          },
        });

        await tx.webhookEvent.update({
          where: { eventId: event.eventId },
          data: { status: 'PROCESSED', processedAt: new Date() },
        });
      });

      return { statusCode: 200, success: true, message: 'Payment failure recorded', orderId: order.id };
    }

    return { statusCode: 200, success: true, message: 'Webhook event processed', orderId: order.id };
  }

  /**
   * Checks the status of an order's payment.
   * If pending, proactively queries provider's authenticated status API.
   */
  async checkPaymentStatus(orderId: string, userId: string): Promise<{
    orderId: string;
    displayId: string;
    orderStatus: string;
    paymentStatus: string;
    amount: number;
    currency: string;
    upiUtr?: string;
    verifiedAt?: Date;
    expiresAt?: Date;
  }> {
    const order = await prisma.order.findFirst({
      where: { id: orderId, userId },
      include: {
        payments: {
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
      },
    });

    if (!order) {
      throw new Error('Order not found');
    }

    const latestPayment = order.payments[0];

    // If order already paid, return confirmed status
    if (order.paymentStatus === 'PAID') {
      return {
        orderId: order.id,
        displayId: order.displayId,
        orderStatus: order.orderStatus,
        paymentStatus: 'PAID',
        amount: Number(order.total),
        currency: order.paymentCurrency,
        upiUtr: order.upiUtr || latestPayment?.upiUtr || undefined,
        verifiedAt: latestPayment?.verifiedAt || undefined,
        expiresAt: latestPayment?.expiresAt || undefined,
      };
    }

    // If there is an active pending payment, check provider status API
    if (latestPayment && (latestPayment.status === 'PENDING' || latestPayment.status === 'VERIFYING')) {
      const isExpired = latestPayment.expiresAt && latestPayment.expiresAt < new Date();

      if (this.provider.isConfigured()) {
        try {
          const providerStatus = await this.provider.fetchPaymentStatus(
            latestPayment.providerOrderId || order.id
          );

          if (providerStatus.status === 'SUCCESS') {
            const storedPaymentMatchesOrder =
              paymentAmountMatches(Number(order.total), Number(latestPayment.amount)) &&
              latestPayment.currency.toUpperCase() === order.paymentCurrency.toUpperCase();
            const providerPaymentMatches = matchesVerifiedProviderPayment(
              {
                orderId: order.id,
                providerOrderId: latestPayment.providerOrderId,
                amount: Number(order.total),
                currency: order.paymentCurrency,
              },
              providerStatus,
            );

            if (storedPaymentMatchesOrder && providerPaymentMatches) {
              await this.markPaymentSuccess({
                orderId: order.id,
                paymentId: latestPayment.id,
                providerPaymentId: providerStatus.providerPaymentId,
                upiUtr: providerStatus.upiUtr,
                upiId: providerStatus.upiId,
                amountReceived: Number(providerStatus.amount),
                verificationSource: 'STATUS_API',
                actorType: 'SYSTEM',
                actorId: 'status_poll',
              });

              return {
                orderId: order.id,
                displayId: order.displayId,
                orderStatus: 'CONFIRMED',
                paymentStatus: 'PAID',
                amount: Number(order.total),
                currency: order.paymentCurrency,
                upiUtr: providerStatus.upiUtr,
                verifiedAt: new Date(),
                expiresAt: latestPayment.expiresAt || undefined,
              };
            }

            console.warn('[UPI_POLL] Provider success response did not match the persisted order, amount, currency, or payment reference.');
          } else if (providerStatus.status === 'FAILED') {
            await prisma.payment.update({
              where: { id: latestPayment.id },
              data: {
                status: 'FAILED',
                failedAt: new Date(),
                failureReason: 'Provider payment status marked failed',
              },
            });
          }
        } catch (fetchErr) {
          console.warn('[UPI_POLL] Provider status check error:', fetchErr);
        }
      }

      if (isExpired && latestPayment.status === 'PENDING') {
        await prisma.$transaction(async (tx) => {
          await tx.payment.update({
            where: { id: latestPayment.id },
            data: { status: 'EXPIRED' },
          });
          await tx.paymentAuditLog.create({
            data: {
              paymentId: latestPayment.id,
              fromStatus: 'PENDING',
              toStatus: 'EXPIRED',
              action: 'EXPIRED',
              actorType: 'SYSTEM',
              reason: 'Payment dynamic QR expired after validity period',
            },
          });
        });

        return {
          orderId: order.id,
          displayId: order.displayId,
          orderStatus: order.orderStatus,
          paymentStatus: 'EXPIRED',
          amount: Number(order.total),
          currency: order.paymentCurrency,
          expiresAt: latestPayment.expiresAt || undefined,
        };
      }
    }

    return {
      orderId: order.id,
      displayId: order.displayId,
      orderStatus: order.orderStatus,
      paymentStatus: latestPayment?.status === 'EXPIRED' ? 'EXPIRED' : order.paymentStatus,
      amount: Number(order.total),
      currency: order.paymentCurrency,
      expiresAt: latestPayment?.expiresAt || undefined,
    };
  }

  /**
   * Atomically marks a payment as successful and updates the order status to CONFIRMED.
   * Clears the user's cart and records a permanent audit entry.
   */
  async markPaymentSuccess(params: {
    orderId: string;
    paymentId: string;
    providerPaymentId?: string;
    upiUtr?: string;
    upiId?: string;
    amountReceived: number;
    verificationSource: string;
    actorType: 'SYSTEM' | 'WEBHOOK' | 'WORKER' | 'ADMIN';
    actorId?: string;
    tx?: Prisma.TransactionClient;
  }) {
    const {
      orderId,
      paymentId,
      providerPaymentId,
      upiUtr,
      upiId,
      amountReceived,
      verificationSource,
      actorType,
      actorId,
    } = params;

    const execute = async (tx: Prisma.TransactionClient) => {
      const order = await tx.order.findUnique({
        where: { id: orderId },
        include: { items: true },
      });

      if (!order) return null;

      // Idempotency: if already paid, ensure payment record is aligned
      if (order.paymentStatus === 'PAID') {
        return order;
      }

      const payment = await tx.payment.findUnique({ where: { id: paymentId } });
      if (!payment) return null;
      if (
        !paymentAmountMatches(Number(order.total), amountReceived) ||
        !paymentAmountMatches(Number(order.total), Number(payment.amount)) ||
        payment.currency.toUpperCase() !== order.paymentCurrency.toUpperCase()
      ) {
        throw new Error('Verified payment amount or currency does not match the persisted order.');
      }
      if (!providerPaymentId && !upiUtr) {
        throw new Error('A verified provider transaction reference is required before confirming payment.');
      }

      // 1. Update Payment record to SUCCESS
      await tx.payment.update({
        where: { id: paymentId },
        data: {
          status: 'SUCCESS',
          providerPaymentId: providerPaymentId || payment.providerPaymentId,
          upiUtr: upiUtr || payment.upiUtr,
          upiId: upiId || payment.upiId,
          amountReceived,
          verifiedAt: new Date(),
          verificationSource,
          isLocked: false,
          lockedAt: null,
        },
      });

      // 2. Update Order record to PAID & CONFIRMED
      const updatedOrder = await tx.order.update({
        where: { id: orderId },
        data: {
          paymentStatus: 'PAID',
          orderStatus: 'CONFIRMED',
          upiUtr: upiUtr || undefined,
        },
        include: { items: true },
      });

      // 3. Clear customer's cart
      await tx.cartItem.deleteMany({
        where: { cart: { userId: order.userId } },
      });

      // 4. Create immutable audit log
      await tx.paymentAuditLog.create({
        data: {
          paymentId,
          fromStatus: payment.status,
          toStatus: 'SUCCESS',
          action: `${verificationSource}_CONFIRMED`,
          actorType,
          actorId,
          reason: `Payment successfully verified via ${verificationSource}. Received: ₹${amountReceived}${
            upiUtr ? ` (UTR: ${upiUtr})` : ''
          }`,
        },
      });

      return updatedOrder;
    };

    if (params.tx) {
      return execute(params.tx);
    }
    return prisma.$transaction(execute);
  }

  /**
   * Verifies and records a customer-submitted Bank UTR / Reference ID
   * for direct UPI PG payments (Centre for Information Technology India - upipg.cit.org.in protocol).
   * Enforces 10-22 character alphanumeric format and database-level uniqueness to prevent replay fraud.
   */
  async submitUtr(
    orderId: string,
    utr: string,
    userId: string
  ): Promise<{
    success: boolean;
    orderId: string;
    upiUtr: string;
    paymentStatus: string;
    message: string;
  }> {
    const cleanedUtr = utr.trim().toUpperCase();
    if (!/^[A-Z0-9]{10,22}$/.test(cleanedUtr)) {
      throw new Error('Invalid Bank UTR format. Expected 10-22 alphanumeric characters.');
    }

    const order = await prisma.order.findFirst({ where: { id: orderId, userId } });
    if (!order) throw new Error('Order not found or unauthorized');

    if (order.paymentStatus === 'PAID') {
      return {
        success: true,
        orderId: order.id,
        upiUtr: order.upiUtr || '',
        paymentStatus: 'PAID',
        message: 'Order is already confirmed by the server.',
      };
    }

    if (!order.activePaymentId) {
      throw new Error('No active UPI payment attempt is available for this order.');
    }

    const payment = await prisma.payment.findFirst({
      where: { id: order.activePaymentId, orderId: order.id },
    });
    if (!payment || !['PENDING', 'VERIFYING'].includes(payment.status)) {
      throw new Error('The active payment attempt cannot accept a reference.');
    }
    if (
      !paymentAmountMatches(Number(order.total), Number(payment.amount)) ||
      payment.currency.toUpperCase() !== order.paymentCurrency.toUpperCase()
    ) {
      throw new Error('The active payment amount or currency does not match the order.');
    }

    const existingUtr = await prisma.payment.findFirst({
      where: { upiUtr: cleanedUtr, id: { not: payment.id } },
      select: { id: true },
    });
    if (existingUtr) {
      throw new Error('Duplicate UTR detected: This bank reference has already been claimed for another transaction.');
    }

    await prisma.$transaction(async (tx) => {
      const paymentUpdate = await tx.payment.updateMany({
        where: { id: payment.id, orderId: order.id, status: { in: ['PENDING', 'VERIFYING'] } },
        data: {
          status: 'VERIFYING',
          upiUtr: cleanedUtr,
          verificationSource: 'CUSTOMER_UTR_SUBMITTED',
        },
      });
      if (paymentUpdate.count !== 1) {
        throw new Error('The active payment attempt is no longer awaiting verification.');
      }

      const orderUpdate = await tx.order.updateMany({
        where: {
          id: order.id,
          userId,
          activePaymentId: payment.id,
          paymentStatus: { not: 'PAID' },
        },
        data: { paymentStatus: 'VERIFYING' },
      });
      if (orderUpdate.count !== 1) {
        throw new Error('The order is no longer eligible for payment verification.');
      }

      await tx.paymentAuditLog.create({
        data: {
          paymentId: payment.id,
          actorType: 'USER',
          actorId: userId,
          action: 'CUSTOMER_UTR_SUBMITTED',
          fromStatus: payment.status,
          toStatus: 'VERIFYING',
          reason: 'Customer submitted a bank UTR; provider confirmation is still required.',
          metadata: { upiUtr: cleanedUtr, submittedAt: new Date().toISOString() },
        },
      });
    });

    return {
      success: true,
      orderId: order.id,
      upiUtr: cleanedUtr,
      paymentStatus: 'VERIFYING',
      message: 'UPI reference submitted. The order remains unpaid until server-side provider verification confirms settlement.',
    };
  }
}

export const upiService = new UpiPaymentService();
