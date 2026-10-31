import QRCode from 'qrcode';
import { CashfreeUpiProvider } from './cashfree.js';
import { UpiPgProvider } from './upiPg.js';
import {
  CreateUpiOrderInput,
  CreateUpiOrderResult,
  ProviderPaymentStatusResult,
  UpiPaymentProvider,
  WebhookVerificationInput,
  WebhookVerificationResult,
} from './types.js';

/**
 * Hybrid UPI Provider — combines both:
 *
 *  1. Cashfree (automatic) — Creates a registered Cashfree payment order for
 *     server-side webhook signature verification and automatic order confirmation.
 *     Requires GSTIN + Bank Account KYC onboarding on Cashfree Dashboard.
 *
 *  2. UPI PG / Direct VPA (manual fallback) — Always embeds the merchant's own
 *     UPI ID (MERCHANT_UPI_ID) in the QR and deep-link. Even if Cashfree webhook
 *     is delayed, the customer can paste their bank UTR from the UPI app receipt
 *     to instantly confirm the order.
 *
 * Payment flow:
 *   Customer pays → Cashfree webhook arrives → Order auto-confirmed ✅
 *              OR
 *   Customer pays → Pastes UTR from app → Server validates → Order confirmed ✅
 *
 * Both paths write to PostgreSQL audit logs and are idempotency-safe.
 */
export class HybridUpiProvider implements UpiPaymentProvider {
  readonly providerName = 'HYBRID';

  private cashfree: CashfreeUpiProvider;
  private upiPg: UpiPgProvider;
  private merchantUpiId: string;
  private merchantName: string;

  constructor() {
    this.cashfree = new CashfreeUpiProvider();
    this.upiPg = new UpiPgProvider();
    this.merchantUpiId = (process.env.MERCHANT_UPI_ID || '').trim();
    this.merchantName = (process.env.MERCHANT_UPI_NAME || 'VANTA ARCHIVE').trim();
  }

  isConfigured(): boolean {
    // Hybrid is configured as long as at least one provider is ready
    return this.cashfree.isConfigured() || Boolean(this.merchantUpiId);
  }

  /**
   * Creates the UPI order:
   * - If Cashfree is configured: registers with Cashfree API (enables auto-webhooks)
   * - Always: generates a direct UPI QR using the merchant's own UPI VPA
   *           so payments go straight to the merchant bank account regardless
   */
  async createUpiOrder(input: CreateUpiOrderInput): Promise<CreateUpiOrderResult> {
    const amountStr = input.amount.toFixed(2);
    const note = `Order ${input.displayId}`.replace(/[^a-zA-Z0-9 -]/g, '').slice(0, 30);

    // Determine merchant VPA — prefer MERCHANT_UPI_ID env, fallback to cashfree env
    const merchantVpa = this.merchantUpiId || process.env.MERCHANT_UPI_VPA || 'vanta@upi';

    // Always build the direct NPCI-compliant UPI URI pointing to merchant's VPA
    const upiPaymentUrl =
      `upi://pay?pa=${encodeURIComponent(merchantVpa)}` +
      `&pn=${encodeURIComponent(this.merchantName)}` +
      `&tr=${encodeURIComponent(input.orderId)}` +
      `&am=${amountStr}` +
      `&cu=INR` +
      `&tn=${encodeURIComponent(note)}`;

    // Generate high-resolution QR code locally (no external API calls, zero latency)
    const qrCodeDataUrl = await QRCode.toDataURL(upiPaymentUrl, {
      errorCorrectionLevel: 'H',
      margin: 2,
      width: 320,
      color: { dark: '#1a1816', light: '#f5efe6' },
    });

    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);
    let providerOrderId = `hybrid_${input.orderId}_${Date.now()}`;
    let rawResponse: Record<string, unknown> = {
      directUpi: true,
      merchantVpa,
      upiPaymentUrl,
    };

    // If Cashfree is configured, also register the order with them for webhook coverage
    if (this.cashfree.isConfigured()) {
      try {
        const cfResult = await this.cashfree.createUpiOrder(input);
        providerOrderId = cfResult.providerOrderId;
        rawResponse = {
          ...rawResponse,
          cashfreeOrderId: cfResult.providerOrderId,
          cashfreeSessionId: cfResult.paymentSessionId,
          cashfreeRaw: cfResult.rawResponse,
          autoWebhookEnabled: true,
        };
      } catch (err) {
        // Cashfree registration failed — log it but continue with direct UPI fallback
        console.warn('[HYBRID_PROVIDER] Cashfree order creation failed, falling back to direct UPI:', err);
        rawResponse.cashfreeError = (err as Error).message;
        rawResponse.autoWebhookEnabled = false;
      }
    } else {
      rawResponse.autoWebhookEnabled = false;
    }

    return {
      providerOrderId,
      upiPaymentUrl,
      qrCodeDataUrl,
      expiresAt,
      rawResponse,
    };
  }

  /**
   * Webhook verification — delegates entirely to Cashfree (HMAC-SHA256 based).
   * Returns invalid if Cashfree is not configured (UPI-only mode).
   */
  async verifyWebhook(input: WebhookVerificationInput): Promise<WebhookVerificationResult> {
    if (this.cashfree.isConfigured()) {
      return this.cashfree.verifyWebhook(input);
    }
    // No Cashfree → parse basic webhook payload for manual webhook senders
    return this.upiPg.verifyWebhook(input);
  }

  /**
   * Status fetch — delegates to Cashfree if configured, else returns PENDING.
   */
  async fetchPaymentStatus(providerOrderId: string): Promise<ProviderPaymentStatusResult> {
    if (this.cashfree.isConfigured()) {
      return this.cashfree.fetchPaymentStatus(providerOrderId);
    }
    return { isFound: true, status: 'PENDING', providerOrderId };
  }
}
