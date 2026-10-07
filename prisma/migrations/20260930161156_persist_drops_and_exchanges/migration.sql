-- CreateTable
CREATE TABLE "SneakerDrop" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "edition" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" DECIMAL(12,2) NOT NULL,
    "mrp" DECIMAL(12,2) NOT NULL,
    "launchDate" TEXT NOT NULL,
    "launchTime" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "targetTimestamp" DOUBLE PRECISION NOT NULL,
    "notifySubscribers" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SneakerDrop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExchangeReturnRequest" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productImage" TEXT NOT NULL,
    "currentSize" TEXT NOT NULL,
    "requestedSize" TEXT,
    "reason" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "adminNotes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExchangeReturnRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ExchangeReturnRequest_userId_createdAt_idx" ON "ExchangeReturnRequest"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "ExchangeReturnRequest_orderId_idx" ON "ExchangeReturnRequest"("orderId");

-- AddForeignKey
ALTER TABLE "ExchangeReturnRequest" ADD CONSTRAINT "ExchangeReturnRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExchangeReturnRequest" ADD CONSTRAINT "ExchangeReturnRequest_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
