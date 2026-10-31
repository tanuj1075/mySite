-- AlterEnum
ALTER TYPE "PaymentStatus" ADD VALUE IF NOT EXISTS 'VERIFYING';

-- CreateEnum
DO $$ BEGIN
    CREATE TYPE "PaymentTransactionStatus" AS ENUM ('PENDING', 'VERIFYING', 'SUCCESS', 'FAILED', 'EXPIRED', 'CANCELLED', 'REVERSED');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- CreateEnum
DO $$ BEGIN
    CREATE TYPE "AuditActorType" AS ENUM ('SYSTEM', 'WEBHOOK', 'WORKER', 'ADMIN', 'USER');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- AlterTable
ALTER TABLE "Order" ADD COLUMN IF NOT EXISTS "carrier" TEXT NOT NULL DEFAULT 'VANTA Logistics',
ADD COLUMN IF NOT EXISTS "deliveryDaysMax" INTEGER,
ADD COLUMN IF NOT EXISTS "deliveryDaysMin" INTEGER,
ADD COLUMN IF NOT EXISTS "estimatedDeliveryMax" TIMESTAMP(3),
ADD COLUMN IF NOT EXISTS "estimatedDeliveryMin" TIMESTAMP(3),
ADD COLUMN IF NOT EXISTS "upiUtr" TEXT,
ADD COLUMN IF NOT EXISTS "activePaymentId" TEXT;

-- CreateTable
CREATE TABLE IF NOT EXISTS "Payment" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "attemptNumber" INTEGER NOT NULL DEFAULT 1,
    "provider" TEXT NOT NULL DEFAULT 'CASHFREE',
    "merchantId" TEXT,
    "providerOrderId" TEXT,
    "providerPaymentId" TEXT,
    "paymentSessionId" TEXT,
    "upiId" TEXT,
    "upiUtr" TEXT,
    "paymentMethod" TEXT NOT NULL DEFAULT 'UPI_QR',
    "amount" DECIMAL(12,2) NOT NULL,
    "amountReceived" DECIMAL(12,2),
    "currency" TEXT NOT NULL DEFAULT 'INR',
    "status" "PaymentTransactionStatus" NOT NULL DEFAULT 'PENDING',
    "upiPaymentUrl" TEXT,
    "qrCodeData" TEXT,
    "expiresAt" TIMESTAMP(3),
    "verifiedAt" TIMESTAMP(3),
    "failedAt" TIMESTAMP(3),
    "failureReason" TEXT,
    "verificationSource" TEXT,
    "metadata" JSONB,
    "reconcileAttempts" INTEGER NOT NULL DEFAULT 0,
    "lastReconciledAt" TIMESTAMP(3),
    "isLocked" BOOLEAN NOT NULL DEFAULT false,
    "lockedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "PaymentAuditLog" (
    "id" TEXT NOT NULL,
    "paymentId" TEXT NOT NULL,
    "fromStatus" TEXT,
    "toStatus" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "actorType" "AuditActorType" NOT NULL DEFAULT 'SYSTEM',
    "actorId" TEXT,
    "reason" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PaymentAuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "WebhookEvent" (
    "id" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "signature" TEXT,
    "payload" JSONB NOT NULL,
    "status" TEXT NOT NULL,
    "errorReason" TEXT,
    "processedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WebhookEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "Payment_providerPaymentId_key" ON "Payment"("providerPaymentId");
CREATE INDEX IF NOT EXISTS "Payment_orderId_idx" ON "Payment"("orderId");
CREATE INDEX IF NOT EXISTS "Payment_status_idx" ON "Payment"("status");
CREATE INDEX IF NOT EXISTS "Payment_upiUtr_idx" ON "Payment"("upiUtr");
CREATE INDEX IF NOT EXISTS "Payment_providerOrderId_idx" ON "Payment"("providerOrderId");
CREATE INDEX IF NOT EXISTS "Order_upiUtr_idx" ON "Order"("upiUtr");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "PaymentAuditLog_paymentId_idx" ON "PaymentAuditLog"("paymentId");
CREATE INDEX IF NOT EXISTS "PaymentAuditLog_createdAt_idx" ON "PaymentAuditLog"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "WebhookEvent_eventId_key" ON "WebhookEvent"("eventId");
CREATE INDEX IF NOT EXISTS "WebhookEvent_provider_eventType_idx" ON "WebhookEvent"("provider", "eventType");
CREATE INDEX IF NOT EXISTS "WebhookEvent_createdAt_idx" ON "WebhookEvent"("createdAt");

-- AddForeignKey
DO $$ BEGIN
    ALTER TABLE "Payment" ADD CONSTRAINT "Payment_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "PaymentAuditLog" ADD CONSTRAINT "PaymentAuditLog_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "Payment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;
