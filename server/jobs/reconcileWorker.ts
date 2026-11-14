import { prisma } from '../lib/prisma.js';
import { upiService } from '../lib/payments/upiService.js';
import { matchesVerifiedProviderPayment, paymentAmountMatches } from '../lib/payments/verification.js';

export interface ReconciliationSummary {
  checkedCount: number;
  confirmedCount: number;
  expiredCount: number;
  failedCount: number;
  errors: string[];
}

/**
 * Runs a single reconciliation pass over pending payments.
 * Thread-safe with database-level lock flags to prevent concurrent worker duplication.
 */
export async function runReconciliationPass(): Promise<ReconciliationSummary> {
  const summary: ReconciliationSummary = {
    checkedCount: 0,
    confirmedCount: 0,
    expiredCount: 0,
    failedCount: 0,
    errors: [],
  };

  const provider = upiService.getProvider();
  const now = new Date();
  const lockTimeout = new Date(Date.now() - 5 * 60 * 1000); // 5 min lock expiration for stale locks

  try {
    // 1. Find eligible pending payments created in the last 24 hours that are not currently locked
    const pendingPayments = await prisma.payment.findMany({
      where: {
        status: { in: ['PENDING', 'VERIFYING'] },
        reconcileAttempts: { lt: 10 }, // Bounded retries
        createdAt: { gt: new Date(Date.now() - 24 * 60 * 60 * 1000) },
        OR: [
          { isLocked: false },
          { lockedAt: { lt: lockTimeout } }, // Release stale locks
        ],
      },
      include: { order: true },
      take: 25,
      orderBy: { createdAt: 'asc' },
    });

    summary.checkedCount = pendingPayments.length;

    for (const payment of pendingPayments) {
      // Acquire optimistic lock on payment
      const locked = await prisma.payment.updateMany({
        where: {
          id: payment.id,
          OR: [{ isLocked: false }, { lockedAt: { lt: lockTimeout } }],
        },
        data: {
          isLocked: true,
          lockedAt: now,
          reconcileAttempts: { increment: 1 },
          lastReconciledAt: now,
        },
      });

      if (locked.count === 0) {
        // Another worker instance picked it up
        continue;
      }

      try {
        const isExpired = Boolean(payment.expiresAt && payment.expiresAt < now);

        if (provider.isConfigured()) {
          const providerStatus = await provider.fetchPaymentStatus(
            payment.providerOrderId || payment.orderId
          );

          if (providerStatus.status === 'SUCCESS') {
            const storedPaymentMatchesOrder =
              paymentAmountMatches(Number(payment.order.total), Number(payment.amount)) &&
              payment.currency.toUpperCase() === payment.order.paymentCurrency.toUpperCase();
            const providerPaymentMatches = matchesVerifiedProviderPayment(
              {
                orderId: payment.orderId,
                providerOrderId: payment.providerOrderId,
                amount: Number(payment.order.total),
                currency: payment.order.paymentCurrency,
              },
              providerStatus,
            );

            if (storedPaymentMatchesOrder && providerPaymentMatches) {
              await upiService.markPaymentSuccess({
                orderId: payment.orderId,
                paymentId: payment.id,
                providerPaymentId: providerStatus.providerPaymentId,
                upiUtr: providerStatus.upiUtr,
                upiId: providerStatus.upiId,
                amountReceived: Number(providerStatus.amount),
                verificationSource: 'RECONCILIATION',
                actorType: 'WORKER',
                actorId: 'reconcile_worker',
              });
              summary.confirmedCount++;
              continue;
            }

            summary.errors.push(`Payment ${payment.id}: provider success response did not match the stored order, amount, currency, or transaction reference.`);
            await prisma.payment.update({ where: { id: payment.id }, data: { isLocked: false, lockedAt: null } });
            continue;
          } else if (providerStatus.status === 'FAILED') {
            await prisma.payment.update({
              where: { id: payment.id },
              data: {
                status: 'FAILED',
                failedAt: new Date(),
                failureReason: 'Reconciled: Provider marked transaction failed',
                isLocked: false,
              },
            });
            await prisma.paymentAuditLog.create({
              data: {
                paymentId: payment.id,
                fromStatus: payment.status,
                toStatus: 'FAILED',
                action: 'RECONCILE_FAILED',
                actorType: 'WORKER',
                reason: 'Reconciliation worker detected terminal failure at provider',
              },
            });
            summary.failedCount++;
            continue;
          }
        }

        // Handle expired pending transactions
        if (isExpired && payment.status === 'PENDING') {
          await prisma.$transaction(async (tx) => {
            await tx.payment.update({
              where: { id: payment.id },
              data: { status: 'EXPIRED', isLocked: false },
            });
            await tx.paymentAuditLog.create({
              data: {
                paymentId: payment.id,
                fromStatus: 'PENDING',
                toStatus: 'EXPIRED',
                action: 'EXPIRED',
                actorType: 'WORKER',
                reason: 'Dynamic UPI QR session expired without confirmed payment',
              },
            });
          });
          summary.expiredCount++;
          continue;
        }

        // Release lock
        await prisma.payment.update({
          where: { id: payment.id },
          data: { isLocked: false },
        });
      } catch (itemError) {
        const msg = itemError instanceof Error ? itemError.message : String(itemError);
        summary.errors.push(`Payment ${payment.id}: ${msg}`);
        // Release lock on error
        await prisma.payment
          .update({
            where: { id: payment.id },
            data: { isLocked: false },
          })
          .catch(() => {});
      }
    }
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    summary.errors.push(`Worker exception: ${msg}`);
  }

  return summary;
}

let workerIntervalId: NodeJS.Timeout | null = null;

export function startReconciliationWorker(intervalMs: number = 60000): void {
  if (workerIntervalId) return;

  console.log(`[RECONCILIATION_WORKER] Started background reconciliation interval (${intervalMs}ms)`);
  workerIntervalId = setInterval(async () => {
    try {
      const summary = await runReconciliationPass();
      if (summary.checkedCount > 0) {
        console.log(
          `[RECONCILIATION_WORKER] Checked: ${summary.checkedCount}, Confirmed: ${summary.confirmedCount}, Expired: ${summary.expiredCount}, Failed: ${summary.failedCount}`
        );
      }
    } catch (err) {
      console.error('[RECONCILIATION_WORKER] Unhandled error during pass:', err);
    }
  }, intervalMs);
}

export function stopReconciliationWorker(): void {
  if (workerIntervalId) {
    clearInterval(workerIntervalId);
    workerIntervalId = null;
    console.log('[RECONCILIATION_WORKER] Stopped background worker');
  }
}
