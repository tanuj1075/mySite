-- Additive auth schema repair for security fields missing from the deployed database.
ALTER TABLE "User"
  ADD COLUMN IF NOT EXISTS "failedLoginAttempts" INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS "lockedUntil" TIMESTAMP(3),
  ADD COLUMN IF NOT EXISTS "mfaEnabled" BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS "mfaSecret" TEXT,
  ADD COLUMN IF NOT EXISTS "mfaBackupCodes" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  ADD COLUMN IF NOT EXISTS "emailVerified" BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS "emailVerificationToken" TEXT,
  ADD COLUMN IF NOT EXISTS "passwordResetToken" TEXT,
  ADD COLUMN IF NOT EXISTS "passwordResetExpires" TIMESTAMP(3),
  ADD COLUMN IF NOT EXISTS "lastLoginAt" TIMESTAMP(3),
  ADD COLUMN IF NOT EXISTS "lastLoginIp" TEXT;

ALTER TABLE "RefreshToken"
  ADD COLUMN IF NOT EXISTS "ipAddress" TEXT,
  ADD COLUMN IF NOT EXISTS "userAgent" TEXT;

CREATE TABLE IF NOT EXISTS "SecurityLog" (
  "id" TEXT NOT NULL,
  "userId" TEXT,
  "eventType" TEXT NOT NULL,
  "severity" TEXT NOT NULL DEFAULT 'INFO',
  "ipAddress" TEXT,
  "userAgent" TEXT,
  "details" JSONB,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "SecurityLog_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "SecurityLog_userId_eventType_idx"
  ON "SecurityLog"("userId", "eventType");
CREATE INDEX IF NOT EXISTS "SecurityLog_createdAt_idx"
  ON "SecurityLog"("createdAt");
CREATE INDEX IF NOT EXISTS "SecurityLog_eventType_idx"
  ON "SecurityLog"("eventType");

DO $$ BEGIN
  ALTER TABLE "SecurityLog"
    ADD CONSTRAINT "SecurityLog_userId_fkey"
    FOREIGN KEY ("userId") REFERENCES "User"("id")
    ON DELETE SET NULL ON UPDATE CASCADE;
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;
