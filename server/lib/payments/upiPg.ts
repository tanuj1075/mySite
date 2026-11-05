import QRCode from 'qrcode';
import {
  CreateUpiOrderInput,
  CreateUpiOrderResult,
  ProviderPaymentStatusResult,
  UpiPaymentProvider,
  WebhookVerificationInput,
  WebhookVerificationResult,
} from './types.js';

/**
 * Centre for Information Technology India (CIT) — UPI Payment Gateway
 * Repository: https://github.com/Centre-for-Information-Technology-India/upi-pg
 * Live Portal: https://upipg.cit.org.in/
 *
 * Implements 100% Free, 0% MDR Direct Peer-to-Merchant NPCI UPI integration.
 * Payments route directly to the merchant's UPI VPA (pa) without middleman deduction.
 */
export class UpiPgProvider implements UpiPaymentProvider {
  readonly providerName = 'UPI_PG';
  private merchantUpiId: string;
  private merchantName: string;
  private baseUrl: string;

  constructor() {
    this.merchantUpiId = (process.env.MERCHANT_UPI_ID || 'vanta@upi').trim();
    this.merchantName = (process.env.MERCHANT_UPI_NAME || 'VANTA ARCHIVE').trim();
    this.baseUrl = (process.env.UPI_PG_BASE_URL || 'https://upipg.cit.org.in').trim();
  }

  isConfigured(): boolean {
    return Boolean(this.merchantUpiId && this.merchantName);
  }

  /**
   * Generates dynamic NPCI compliant UPI URI and QR code according to
   * the Centre for Information Technology (CIT) UPI-PG specification:
   * upi://pay?pa={UPI_ID}&pn={PAYEE_NAME}&am={AMOUNT}&cu=INR&tn={NOTES}
   */
  async createUpiOrder(input: CreateUpiOrderInput): Promise<CreateUpiOrderResult> {
    const amountStr = input.amount.toFixed(2);
    const sanitizedNote = `Order ${input.displayId}`.replace(/[^a-zA-Z0-9 -]/g, '').slice(0, 30);

    // Standard NPCI UPI URI
    const upiPaymentUrl = `upi://pay?pa=${encodeURIComponent(this.merchantUpiId)}&pn=${encodeURIComponent(
      this.merchantName
    )}&am=${amountStr}&cu=INR&tn=${encodeURIComponent(sanitizedNote)}`;

    // Generate local Base64 QR Code (zero-latency, high resolution)
    const qrCodeDataUrl = await QRCode.toDataURL(upiPaymentUrl, {
      width: 400,
      margin: 1,
      color: {
        dark: '#1a1816',
        light: '#ffffff',
      },
      errorCorrectionLevel: 'M',
    });

    const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15-minute standard session
    const providerOrderId = `upipg_${input.orderId}_${Date.now()}`;

    // UPI PG qrserver compatibility link as documented on upipg.cit.org.in/developers
    const qrServerUrl = `https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${encodeURIComponent(
      upiPaymentUrl
    )}`;

    return {
      providerOrderId,
      upiPaymentUrl,
      qrCodeDataUrl,
      expiresAt,
      rawResponse: {
        provider: 'UPI_PG',
        source: 'https://upipg.cit.org.in',
        merchantUpiId: this.merchantUpiId,
        merchantName: this.merchantName,
        qrServerUrl,
        upiPaymentUrl,
      },
    };
  }

  /**
   * Webhook verification for UPI-PG notifications.
   * If an automated webhook hook or forwarder is attached, verifies signature or payload authenticity.
   */
  async verifyWebhook(input: WebhookVerificationInput): Promise<WebhookVerificationResult> {
    const webhookSecret = process.env.UPI_PG_WEBHOOK_SECRET || process.env.UPI_WEBHOOK_SECRET;
    if (!webhookSecret) {
      return {
        isValid: false,
        error: 'UPI PG direct provider requires a configured webhook secret (UPI_PG_WEBHOOK_SECRET). For verified webhooks, use Cashfree or customer Bank UTR submission.',
      };
    }

    const receivedSecret = (input.headers['x-webhook-secret'] as string) || input.signature;
    if (!receivedSecret || receivedSecret !== webhookSecret) {
      return { isValid: false, error: 'Cryptographic signature or secret mismatch on UPI PG webhook' };
    }

    try {
      if (!input.rawBody || input.rawBody.length === 0) {
        return { isValid: false, error: 'Empty webhook payload' };
      }

      const bodyText = input.rawBody.toString('utf-8');
      const payload = JSON.parse(bodyText);

      const orderId = payload.orderId || payload.order_id || payload.data?.order?.order_id;
      const amount = Number(payload.amount || payload.order_amount || payload.data?.payment?.payment_amount || 0);
      const utr = payload.utr || payload.bank_reference || payload.data?.payment?.bank_reference;
      const status = (payload.status || payload.payment_status || payload.data?.payment?.payment_status || 'PENDING').toUpperCase();

      if (!orderId) {
        return { isValid: false, error: 'Missing orderId in webhook payload' };
      }

      return {
        isValid: true,
        event: {
          eventId: `upipg_evt_${Date.now()}`,
          eventType: 'PAYMENT_STATUS_UPDATE',
          provider: 'UPI_PG',
          orderId,
          amount,
          currency: 'INR',
          status: status === 'SUCCESS' ? 'SUCCESS' : status === 'FAILED' ? 'FAILED' : 'PENDING',
          upiUtr: utr,
          rawPayload: payload,
        },
      };
    } catch (err) {
      return { isValid: false, error: (err as Error).message };
    }
  }

  /**
   * Status check for UPI-PG transaction
   */
  async fetchPaymentStatus(providerOrderId: string): Promise<ProviderPaymentStatusResult> {
    return {
      isFound: true,
      status: 'PENDING',
      providerOrderId,
    };
  }
}
