import 'dotenv/config';
import { test, describe, beforeEach, after } from 'node:test';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { CashfreeUpiProvider } from '../server/lib/payments/cashfree.js';
import { UpiPaymentService } from '../server/lib/payments/upiService.js';
import { prisma } from '../server/lib/prisma.js';

if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = 'postgresql://postgres:postgres@127.0.0.1:5432/vanta_archive?schema=public';
}

describe('UPI Payment Gateway & Cryptographic Signature Verification Tests', () => {
  after(async () => {
    await prisma.$disconnect();
  });
  const secretKey = 'test_secret_key_mock_secure_12345';
  let provider: CashfreeUpiProvider;

  beforeEach(() => {
    process.env.CASHFREE_APP_ID = 'test_app_id';
    process.env.CASHFREE_SECRET_KEY = secretKey;
    process.env.CASHFREE_ENV = 'sandbox';
    process.env.CASHFREE_API_VERSION = '2023-08-01';
    provider = new CashfreeUpiProvider();
  });

  function computeValidSignature(timestamp: string, rawBody: Buffer, secret = secretKey): string {
    const payload = `${timestamp}${rawBody.toString('utf-8')}`;
    return crypto.createHmac('sha256', secret).update(payload).digest('base64');
  }

  test('accepts authentic HMAC-SHA256 signature with valid timestamp and payload', async () => {
    const timestamp = String(Date.now());
    const payloadObj = {
      type: 'PAYMENT_SUCCESS_WEBHOOK',
      data: {
        order: { order_id: 'order_test_123', order_amount: 1500, order_currency: 'INR' },
        payment: {
          cf_payment_id: '99887766',
          payment_status: 'SUCCESS',
          payment_amount: 1500,
          payment_currency: 'INR',
          bank_reference: 'UTR123456789012',
          payment_method: { upi: { channel: 'qrcode', upi_id: 'customer@okhdfc' } },
        },
      },
    };
    const rawBody = Buffer.from(JSON.stringify(payloadObj), 'utf-8');
    const signature = computeValidSignature(timestamp, rawBody);

    const result = await provider.verifyWebhook({
      signature,
      timestamp,
      rawBody,
      headers: { 'x-webhook-signature': signature, 'x-webhook-timestamp': timestamp },
    });

    assert.equal(result.isValid, true);
    assert(result.event);
    assert.equal(result.event.orderId, 'order_test_123');
    assert.equal(result.event.status, 'SUCCESS');
    assert.equal(result.event.upiUtr, 'UTR123456789012');
    assert.equal(result.event.amount, 1500);
    assert.equal(result.event.currency, 'INR');
  });

  test('rejects incorrect signature safely', async () => {
    const timestamp = String(Date.now());
    const rawBody = Buffer.from(JSON.stringify({ type: 'PAYMENT_SUCCESS_WEBHOOK' }), 'utf-8');
    const fakeSignature = Buffer.from('invalid_signature_hash_bytes_1234').toString('base64');

    const result = await provider.verifyWebhook({
      signature: fakeSignature,
      timestamp,
      rawBody,
      headers: {},
    });

    assert.equal(result.isValid, false);
    assert.match(result.error || '', /signature mismatch/i);
  });

  test('rejects missing or empty signature', async () => {
    const timestamp = String(Date.now());
    const rawBody = Buffer.from('{}', 'utf-8');

    const result = await provider.verifyWebhook({
      signature: '',
      timestamp,
      rawBody,
      headers: {},
    });

    assert.equal(result.isValid, false);
    assert.match(result.error || '', /missing or malformed/i);
  });

  test('rejects missing raw request body', async () => {
    const timestamp = String(Date.now());

    const result = await provider.verifyWebhook({
      signature: 'some_sig',
      timestamp,
      rawBody: Buffer.alloc(0),
      headers: {},
    });

    assert.equal(result.isValid, false);
    assert.match(result.error || '', /missing raw request body/i);
  });

  test('detects request body modification / tampering after signing', async () => {
    const timestamp = String(Date.now());
    const originalBody = Buffer.from(JSON.stringify({ amount: 100 }), 'utf-8');
    const signature = computeValidSignature(timestamp, originalBody);

    // Attacker modifies the body to 1000
    const tamperedBody = Buffer.from(JSON.stringify({ amount: 1000 }), 'utf-8');

    const result = await provider.verifyWebhook({
      signature,
      timestamp,
      rawBody: tamperedBody,
      headers: {},
    });

    assert.equal(result.isValid, false);
    assert.match(result.error || '', /signature mismatch/i);
  });

  test('rejects signature signed with wrong secret key', async () => {
    const timestamp = String(Date.now());
    const rawBody = Buffer.from(JSON.stringify({ test: true }), 'utf-8');
    const foreignSecretSignature = computeValidSignature(timestamp, rawBody, 'foreign_unauthorized_secret');

    const result = await provider.verifyWebhook({
      signature: foreignSecretSignature,
      timestamp,
      rawBody,
      headers: {},
    });

    assert.equal(result.isValid, false);
    assert.match(result.error || '', /signature mismatch/i);
  });

  test('rejects replayed webhook with expired timestamp (> 5 minutes old)', async () => {
    const staleTimestamp = String(Date.now() - 6 * 60 * 1000); // 6 minutes ago
    const rawBody = Buffer.from(JSON.stringify({ event: 'test' }), 'utf-8');
    const signature = computeValidSignature(staleTimestamp, rawBody);

    const result = await provider.verifyWebhook({
      signature,
      timestamp: staleTimestamp,
      rawBody,
      headers: {},
    });

    assert.equal(result.isValid, false);
    assert.match(result.error || '', /timestamp expired or in the future/i);
  });

  test('rejects webhook with future timestamp (> 5 minutes ahead)', async () => {
    const futureTimestamp = String(Date.now() + 10 * 60 * 1000); // 10 minutes ahead
    const rawBody = Buffer.from(JSON.stringify({ event: 'test' }), 'utf-8');
    const signature = computeValidSignature(futureTimestamp, rawBody);

    const result = await provider.verifyWebhook({
      signature,
      timestamp: futureTimestamp,
      rawBody,
      headers: {},
    });

    assert.equal(result.isValid, false);
    assert.match(result.error || '', /timestamp expired or in the future/i);
  });

  test('rejects invalid non-numeric timestamp', async () => {
    const rawBody = Buffer.from('{}', 'utf-8');
    const result = await provider.verifyWebhook({
      signature: 'sig',
      timestamp: 'not_a_valid_timestamp',
      rawBody,
      headers: {},
    });

    assert.equal(result.isValid, false);
    assert.match(result.error || '', /invalid timestamp/i);
  });
});

class MockCashfreeProvider extends CashfreeUpiProvider {
  override async createUpiOrder(input: any) {
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);
    const upiPaymentUrl = `upi://pay?pa=vanta.archive@icici&pn=VANTA%20ARCHIVE&tr=${encodeURIComponent(
      input.orderId
    )}&am=${input.amount.toFixed(2)}&cu=INR&tn=Order%20${input.displayId}`;
    const qrCodeDataUrl =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
    return {
      providerOrderId: `cf_${input.orderId}`,
      paymentSessionId: `sess_${input.orderId}`,
      upiPaymentUrl,
      qrCodeDataUrl,
      expiresAt,
    };
  }

  override async fetchPaymentStatus(orderId: string) {
    return {
      isFound: true,
      status: 'SUCCESS' as const,
      providerPaymentId: `cf_pay_${orderId}`,
      providerOrderId: orderId,
      amount: 2500,
      currency: 'INR',
      upiUtr: 'UTR_RECONCILED_123',
    };
  }
}

describe('UPI End-to-End Payment Flow & Database Integrity Tests', () => {
  const secretKey = 'test_secret_key_mock_secure_12345';
  let service: UpiPaymentService;
  let testUserId: string;
  let testOrderId: string;
  let testPaymentId: string;

  beforeEach(async () => {
    process.env.CASHFREE_APP_ID = 'test_app_id';
    process.env.CASHFREE_SECRET_KEY = secretKey;
    process.env.CASHFREE_ENV = 'sandbox';

    service = new UpiPaymentService(new MockCashfreeProvider());


    // Clean or find test user
    let user = await prisma.user.findFirst({ where: { email: 'test_upi_user@vanta.com' } });
    if (!user) {
      user = await prisma.user.create({
        data: {
          email: 'test_upi_user@vanta.com',
          name: 'UPI Tester',
          passwordHash: 'dummy_hash',
          role: 'CUSTOMER',
        },
      });
    }
    testUserId = user.id;

    // Create a fresh test order
    const order = await prisma.order.create({
      data: {
        displayId: `VN-TEST-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        userId: testUserId,
        addressSnapshot: { city: 'Mumbai', country: 'India', postalCode: '400001' },
        subtotal: 2500,
        discount: 0,
        total: 2500,
        paymentCurrency: 'INR',
        paymentAmount: 2500,
        paymentMethod: 'UPI',
        paymentStatus: 'PENDING',
        orderStatus: 'ORDER_PLACED',
      },
    });
    testOrderId = order.id;
  });

  test('initiates UPI payment, persists Payment attempt, and returns dynamic QR code', async () => {
    const initiation = await service.initiatePayment(testOrderId, testUserId);

    assert.equal(initiation.orderId, testOrderId);
    assert.equal(initiation.amount, 2500);
    assert.equal(initiation.currency, 'INR');
    assert.equal(initiation.status, 'PENDING');
    assert(initiation.upiPaymentUrl.startsWith('upi://pay?'));
    assert(initiation.qrCodeDataUrl.startsWith('data:image/png;base64,'));
    assert(initiation.expiresAt instanceof Date);

    // Verify stored Payment in PostgreSQL
    const savedPayment = await prisma.payment.findUnique({
      where: { id: initiation.paymentId },
      include: { auditLogs: true },
    });
    assert(savedPayment);
    assert.equal(savedPayment.orderId, testOrderId);
    assert.equal(savedPayment.status, 'PENDING');
    assert.equal(savedPayment.attemptNumber, 1);
    assert.equal(savedPayment.auditLogs.length, 1);
    assert.equal(savedPayment.auditLogs[0].action, 'INITIATE');
    assert.equal(savedPayment.auditLogs[0].actorType, 'USER');

    testPaymentId = savedPayment.id;
  });

  test('processes valid payment webhook atomically: updates Payment to SUCCESS, Order to PAID, and records audit trail', async () => {
    // 1. Initiate first
    const initiation = await service.initiatePayment(testOrderId, testUserId);

    // 2. Mock incoming Cashfree webhook
    const timestamp = String(Date.now());
    const payload = {
      type: 'PAYMENT_SUCCESS_WEBHOOK',
      data: {
        order: { order_id: testOrderId, order_amount: 2500, order_currency: 'INR' },
        payment: {
          cf_payment_id: 'cf_pay_999888',
          payment_status: 'SUCCESS',
          payment_amount: 2500,
          payment_currency: 'INR',
          bank_reference: 'UTR_LIVE_99887766',
          payment_method: { upi: { channel: 'qrcode', upi_id: 'payer@upi' } },
        },
      },
    };
    const rawBody = Buffer.from(JSON.stringify(payload), 'utf-8');
    const signature = crypto
      .createHmac('sha256', secretKey)
      .update(`${timestamp}${rawBody.toString('utf-8')}`)
      .digest('base64');

    const result = await service.processWebhook({
      signature,
      timestamp,
      rawBody,
      headers: { 'x-webhook-signature': signature, 'x-webhook-timestamp': timestamp },
    });

    assert.equal(result.success, true);
    assert.equal(result.statusCode, 200);

    // 3. Verify PostgreSQL records
    const updatedOrder = await prisma.order.findUnique({ where: { id: testOrderId } });
    assert(updatedOrder);
    assert.equal(updatedOrder.paymentStatus, 'PAID');
    assert.equal(updatedOrder.orderStatus, 'CONFIRMED');
    assert.equal(updatedOrder.upiUtr, 'UTR_LIVE_99887766');

    const updatedPayment = await prisma.payment.findUnique({
      where: { id: initiation.paymentId },
      include: { auditLogs: true },
    });
    assert(updatedPayment);
    assert.equal(updatedPayment.status, 'SUCCESS');
    assert.equal(updatedPayment.upiUtr, 'UTR_LIVE_99887766');
    assert.equal(updatedPayment.providerPaymentId, 'cf_pay_999888');
    assert.equal(updatedPayment.verificationSource, 'WEBHOOK');
    assert(updatedPayment.verifiedAt);

    // Check audit trail
    const successLog = updatedPayment.auditLogs.find((l) => l.toStatus === 'SUCCESS');
    assert(successLog);
    assert.equal(successLog.actorType, 'WEBHOOK');
    assert.match(successLog.reason || '', /UTR_LIVE_99887766/);
  });

  test('safely rejects webhook with amount mismatch to prevent fraudulent underpayment', async () => {
    await service.initiatePayment(testOrderId, testUserId);

    const timestamp = String(Date.now());
    // Order was 2500, but attacker sends webhook claiming success for 100
    const payload = {
      type: 'PAYMENT_SUCCESS_WEBHOOK',
      data: {
        order: { order_id: testOrderId, order_amount: 100, order_currency: 'INR' },
        payment: {
          cf_payment_id: 'cf_fraud_111',
          payment_status: 'SUCCESS',
          payment_amount: 100,
          payment_currency: 'INR',
          bank_reference: 'UTR_FRAUD',
        },
      },
    };
    const rawBody = Buffer.from(JSON.stringify(payload), 'utf-8');
    const signature = crypto
      .createHmac('sha256', secretKey)
      .update(`${timestamp}${rawBody.toString('utf-8')}`)
      .digest('base64');

    const result = await service.processWebhook({
      signature,
      timestamp,
      rawBody,
      headers: {},
    });

    assert.equal(result.success, false);
    assert.equal(result.statusCode, 400);
    assert.match(result.message, /amount mismatch/i);

    // Ensure order was NOT marked paid
    const order = await prisma.order.findUnique({ where: { id: testOrderId } });
    assert(order);
    assert.equal(order.paymentStatus, 'PENDING');
  });

  test('handles duplicate webhook delivery idempotently without double-fulfillment', async () => {
    const initiation = await service.initiatePayment(testOrderId, testUserId);

    const timestamp = String(Date.now());
    const payload = {
      type: 'PAYMENT_SUCCESS_WEBHOOK',
      data: {
        order: { order_id: testOrderId, order_amount: 2500, order_currency: 'INR' },
        payment: {
          cf_payment_id: 'cf_idempotent_123',
          payment_status: 'SUCCESS',
          payment_amount: 2500,
          payment_currency: 'INR',
          bank_reference: 'UTR_IDEMPOTENT',
        },
      },
    };
    const rawBody = Buffer.from(JSON.stringify(payload), 'utf-8');
    const signature = crypto
      .createHmac('sha256', secretKey)
      .update(`${timestamp}${rawBody.toString('utf-8')}`)
      .digest('base64');

    // First delivery
    const res1 = await service.processWebhook({ signature, timestamp, rawBody, headers: {} });
    assert.equal(res1.success, true);

    // Second duplicate delivery
    const res2 = await service.processWebhook({ signature, timestamp, rawBody, headers: {} });
    assert.equal(res2.success, true);
    assert.match(res2.message, /already processed/i);
  });
});
