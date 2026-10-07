ALTER TABLE "Order"
ADD COLUMN "paymentCurrency" TEXT NOT NULL DEFAULT 'INR',
ADD COLUMN "paymentAmount" DECIMAL(12,3) NOT NULL DEFAULT 0,
ADD COLUMN "exchangeRate" DECIMAL(18,8) NOT NULL DEFAULT 1;

UPDATE "Order" SET "paymentAmount" = "total";
