import crypto from 'node:crypto';
import QRCode from 'qrcode';
import {
  CreateUpiOrderInput,
  CreateUpiOrderResult,
  ProviderPaymentStatusResult,
  UpiPaymentProvider,
  WebhookVerificationInput,
  WebhookVerificationResult,
} from './types.js';

export class CashfreeUpiProvider implements UpiPaymentProvider {
  readonly providerName = 'CASHFREE';

  private get appId(): string | undefined {
    return process.env.CASHFREE_APP_ID;
  }

  private get secretKey(): string | undefined {
    return process.env.CASHFREE_SECRET_KEY;
  }

  private get environment(): 'sandbox' | 'production' {
    return process.env.CASHFREE_ENV === 'production' ? 'production' : 'sandbox';
  }

  private get apiVersion(): string {
    return process.env.CASHFREE_API_VERSION || '2023-08-01';
  }

  private get baseUrl(): string {
    return this.environment === 'production'
      ? 'https://api.cashfree.com/pg'
      : 'https://sandbox.cashfree.com/pg';
  }

  isConfigured(): boolean {
    const id = this.appId;
    const secret = this.secretKey;
    if (!id || !secret) return false;
    // Don't treat dummy placeholder as configured
    if (id === 'your_cashfree_app_id' || secret === 'your_cashfree_secret_key') return false;
    return true;
  }

  /**
   * Creates an order with Cashfree and generates a compliant dynamic UPI payment intent and QR code.
   */
  async createUpiOrder(input: CreateUpiOrderInput): Promise<CreateUpiOrderResult> {
    const isMockOrTest = !this.isConfigured() && process.env.NODE_ENV !== 'production';

    let providerOrderId = `cf_${input.orderId}`;
    let paymentSessionId: string | undefined;
    let rawResponse: Record<string, unknown> | undefined;

    // Calculate expiry (15 minutes from now as per standard UPI dynamic QR lifetime)
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

    if (this.isConfigured()) {
      const response = await fetch(`${this.baseUrl}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-client-id': this.appId!,
          'x-client-secret': this.secretKey!,
          'x-api-version': this.apiVersion,
        },
        body: JSON.stringify({
          order_id: input.orderId,
          order_amount: input.amount,
          order_currency: 'INR',
          customer_details: {
            customer_id: input.customer.id,
            customer_name: input.customer.name,
            customer_email: input.customer.email,
            customer_phone: input.customer.phone || '9876543210',
          },
          order_meta: {
            return_url: input.returnUrl,
            notify_url: input.notifyUrl,
          },
          order_note: `VANTA Order ${input.displayId}`,
          order_expiry_time: expiresAt.toISOString(),
        }),
      });

      if (!response.ok) {
        const errBody = await response.json().catch(() => ({}));
        throw new Error(
          `Cashfree order creation failed (${response.status}): ${
            (errBody as { message?: string }).message || response.statusText
          }`
        );
      }

      const data = (await response.json()) as {
        cf_order_id?: string | number;
        order_id?: string;
        payment_session_id?: string;
      };

      providerOrderId = String(data.cf_order_id || data.order_id || input.orderId);
      paymentSessionId = data.payment_session_id;
      rawResponse = data as unknown as Record<string, unknown>;
    } else if (!isMockOrTest) {
      throw new Error('Cashfree credentials are not configured on the server (CASHFREE_APP_ID / CASHFREE_SECRET_KEY)');
    }

    // Construct NPCI-compliant UPI payment intent URI
    // pa: Payee VPA / merchant UPI ID
    // pn: Payee Name
    // tr: Transaction Reference (unique merchant order ID)
    // am: Exact transaction amount
    // cu: Currency (INR)
    // tn: Transaction Note (Display ID)
    const merchantVpa = process.env.MERCHANT_UPI_VPA || 'vanta.archive@icici';
    const merchantName = process.env.MERCHANT_NAME || 'VANTA ARCHIVE';
    const upiPaymentUrl = `upi://pay?pa=${encodeURIComponent(merchantVpa)}&pn=${encodeURIComponent(
      merchantName
    )}&tr=${encodeURIComponent(input.orderId)}&am=${input.amount.toFixed(2)}&cu=INR&tn=${encodeURIComponent(
      `Order ${input.displayId}`
    )}`;

    // Generate secure offline high-resolution QR code data URL
    const qrCodeDataUrl = await QRCode.toDataURL(upiPaymentUrl, {
      errorCorrectionLevel: 'H',
      margin: 2,
      width: 320,
      color: {
        dark: '#1a1816',
        light: '#f5efe6',
      },
    });

    return {
      providerOrderId,
      paymentSessionId,
      upiPaymentUrl,
      qrCodeDataUrl,
      expiresAt,
      rawResponse,
    };
  }

  /**
   * Verifies Cashfree webhook signature using HMAC-SHA256 over timestamp + rawBody.
   * Performs constant-time comparison and timestamp replay window tolerance check.
   */
  async verifyWebhook(input: WebhookVerificationInput): Promise<WebhookVerificationResult> {
    const secret = this.secretKey;
    if (!secret) {
      return { isValid: false, error: 'Cashfree secret key not configured on server' };
    }

    const { signature, timestamp, rawBody } = input;

    if (!signature || typeof signature !== 'string') {
      return { isValid: false, error: 'Missing or malformed x-webhook-signature header' };
    }

    if (!timestamp || typeof timestamp !== 'string') {
      return { isValid: false, error: 'Missing or malformed x-webhook-timestamp header' };
    }

    if (!rawBody || !Buffer.isBuffer(rawBody) || rawBody.length === 0) {
      return { isValid: false, error: 'Missing raw request body for cryptographic signature verification' };
    }

    // Replay attack prevention: verify timestamp is within acceptable window (+/- 5 minutes)
    const timestampMs = Number(timestamp);
    const now = Date.now();
    const toleranceMs = 5 * 60 * 1000; // 5 minutes

    if (isNaN(timestampMs)) {
      return { isValid: false, error: 'Invalid timestamp format in x-webhook-timestamp' };
    }

    // Timestamp in Cashfree is usually epoch in milliseconds; if in seconds, convert
    const normalizedTimestamp = timestampMs < 1e11 ? timestampMs * 1000 : timestampMs;
    if (Math.abs(now - normalizedTimestamp) > toleranceMs) {
      return {
        isValid: false,
        error: `Webhook timestamp expired or in the future: difference ${Math.abs(
          now - normalizedTimestamp
        )}ms exceeds tolerance ${toleranceMs}ms`,
      };
    }

    // Official Cashfree signing formula:
    // payload = `${timestamp}${rawBody.toString('utf8')}`
    // signature = base64(hmac_sha256(payload, secretKey))
    const payloadToSign = `${timestamp}${rawBody.toString('utf-8')}`;
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(payloadToSign)
      .digest('base64');

    const expectedBuffer = Buffer.from(expectedSignature, 'utf-8');
    const receivedBuffer = Buffer.from(signature, 'utf-8');

    if (
      expectedBuffer.length !== receivedBuffer.length ||
      !crypto.timingSafeEqual(expectedBuffer, receivedBuffer)
    ) {
      return { isValid: false, error: 'Cryptographic signature mismatch' };
    }

    // Parse and structure the verified payload
    try {
      const parsed = JSON.parse(rawBody.toString('utf-8')) as {
        event_time?: string;
        type?: string;
        data?: {
          order?: {
            order_id?: string;
            order_amount?: number;
            order_currency?: string;
          };
          payment?: {
            cf_payment_id?: string | number;
            payment_status?: string;
            payment_amount?: number;
            payment_currency?: string;
            payment_time?: string;
            bank_reference?: string;
            payment_method?: {
              upi?: {
                channel?: string;
                upi_id?: string;
              };
            };
          };
        };
      };

      const eventType = parsed.type || 'UNKNOWN';
      const orderData = parsed.data?.order;
      const paymentData = parsed.data?.payment;

      if (!orderData?.order_id) {
        return { isValid: false, error: 'Missing order_id in verified webhook payload' };
      }

      // Generate a unique event identifier for idempotency
      const eventId = `${eventType}_${paymentData?.cf_payment_id || orderData.order_id}_${timestamp}`;

      let status: 'SUCCESS' | 'FAILED' | 'USER_DROPPED' | 'PENDING' = 'PENDING';
      if (paymentData?.payment_status === 'SUCCESS') {
        status = 'SUCCESS';
      } else if (
        paymentData?.payment_status === 'FAILED' ||
        paymentData?.payment_status === 'CANCELLED' ||
        eventType === 'PAYMENT_FAILED_WEBHOOK'
      ) {
        status = 'FAILED';
      } else if (paymentData?.payment_status === 'USER_DROPPED' || eventType === 'PAYMENT_USER_DROPPED_WEBHOOK') {
        status = 'USER_DROPPED';
      }

      return {
        isValid: true,
        event: {
          eventId,
          eventType,
          provider: this.providerName,
          orderId: orderData.order_id,
          providerOrderId: orderData.order_id,
          providerPaymentId: paymentData?.cf_payment_id ? String(paymentData.cf_payment_id) : undefined,
          amount: Number(paymentData?.payment_amount ?? orderData.order_amount ?? 0),
          currency: paymentData?.payment_currency || orderData.order_currency || 'INR',
          status,
          upiUtr: paymentData?.bank_reference,
          upiId: paymentData?.payment_method?.upi?.upi_id,
          paymentTime: paymentData?.payment_time ? new Date(paymentData.payment_time) : new Date(),
          rawPayload: parsed as Record<string, unknown>,
        },
      };
    } catch (parseError) {
      return { isValid: false, error: `Invalid JSON payload in signed body: ${String(parseError)}` };
    }
  }

  /**
   * Queries Cashfree server-side payment status API: GET /orders/{order_id}/payments
   */
  async fetchPaymentStatus(orderId: string): Promise<ProviderPaymentStatusResult> {
    if (!this.isConfigured()) {
      return { isFound: false, status: 'PENDING' };
    }

    try {
      const response = await fetch(`${this.baseUrl}/orders/${orderId}/payments`, {
        method: 'GET',
        headers: {
          'x-client-id': this.appId!,
          'x-client-secret': this.secretKey!,
          'x-api-version': this.apiVersion,
        },
      });

      if (response.status === 404) {
        return { isFound: false, status: 'PENDING' };
      }

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Cashfree status API failed (${response.status}): ${errText}`);
      }

      const payments = (await response.json()) as Array<{
        cf_payment_id?: string | number;
        order_id?: string;
        payment_status?: string;
        payment_amount?: number;
        payment_currency?: string;
        bank_reference?: string;
        payment_time?: string;
        payment_method?: {
          upi?: {
            channel?: string;
            upi_id?: string;
          };
        };
      }>;

      if (!Array.isArray(payments) || payments.length === 0) {
        return { isFound: true, status: 'PENDING' };
      }

      // Find any successful payment attempt
      const success = payments.find((p) => p.payment_status === 'SUCCESS');
      const target = success || payments[payments.length - 1];

      let status: 'SUCCESS' | 'FAILED' | 'PENDING' | 'USER_DROPPED' = 'PENDING';
      if (target.payment_status === 'SUCCESS') status = 'SUCCESS';
      else if (target.payment_status === 'FAILED') status = 'FAILED';
      else if (target.payment_status === 'USER_DROPPED') status = 'USER_DROPPED';

      return {
        isFound: true,
        status,
        providerPaymentId: target.cf_payment_id ? String(target.cf_payment_id) : undefined,
        providerOrderId: target.order_id || orderId,
        amount: target.payment_amount,
        currency: target.payment_currency,
        upiUtr: target.bank_reference,
        upiId: target.payment_method?.upi?.upi_id,
        paymentTime: target.payment_time ? new Date(target.payment_time) : undefined,
        rawResponse: target as unknown as Record<string, unknown>,
      };
    } catch (err) {
      console.error('Cashfree fetchPaymentStatus error:', err);
      throw err;
    }
  }
}
