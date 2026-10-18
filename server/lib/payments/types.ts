import { Decimal } from '@prisma/client/runtime/library';

export type PaymentMethodType = 'UPI_QR' | 'UPI_INTENT' | 'UPI_COLLECT' | 'COD';

export interface CreateUpiOrderInput {
  orderId: string;
  displayId: string;
  amount: number;
  currency: string;
  customer: {
    id: string;
    name: string;
    email: string;
    phone?: string;
  };
  returnUrl?: string;
  notifyUrl?: string;
}

export interface CreateUpiOrderResult {
  providerOrderId: string;
  paymentSessionId?: string;
  upiPaymentUrl: string; // upi://pay link
  qrCodeDataUrl: string; // Base64 data URL for QR display
  expiresAt: Date;
  rawResponse?: Record<string, unknown>;
}

export interface WebhookVerificationInput {
  signature: string;
  timestamp: string;
  rawBody: Buffer;
  headers: Record<string, string | string[] | undefined>;
}

export interface WebhookVerificationResult {
  isValid: boolean;
  error?: string;
  event?: WebhookEventPayload;
}

export interface WebhookEventPayload {
  eventId: string;
  eventType: string;
  provider: string;
  orderId: string;
  providerPaymentId?: string;
  providerOrderId?: string;
  amount: number;
  currency: string;
  status: 'SUCCESS' | 'FAILED' | 'USER_DROPPED' | 'PENDING';
  upiUtr?: string;
  upiId?: string;
  paymentTime?: Date;
  rawPayload: Record<string, unknown>;
}

export interface ProviderPaymentStatusResult {
  isFound: boolean;
  status: 'SUCCESS' | 'FAILED' | 'PENDING' | 'USER_DROPPED';
  providerPaymentId?: string;
  providerOrderId?: string;
  amount?: number;
  currency?: string;
  upiUtr?: string;
  upiId?: string;
  paymentTime?: Date;
  rawResponse?: Record<string, unknown>;
}

export interface UpiPaymentProvider {
  readonly providerName: string;
  isConfigured(): boolean;
  createUpiOrder(input: CreateUpiOrderInput): Promise<CreateUpiOrderResult>;
  verifyWebhook(input: WebhookVerificationInput): Promise<WebhookVerificationResult>;
  fetchPaymentStatus(providerOrderId: string): Promise<ProviderPaymentStatusResult>;
}
