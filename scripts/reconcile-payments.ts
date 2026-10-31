import 'dotenv/config';
import { runReconciliationPass } from '../server/jobs/reconcileWorker.js';
import { prisma } from '../server/lib/prisma.js';

async function main() {
  console.log('[CLI_RECONCILE] Initiating payment reconciliation pass...');
  const startTime = Date.now();
  const summary = await runReconciliationPass();
  const duration = Date.now() - startTime;

  console.log('--------------------------------------------------');
  console.log(`Reconciliation Complete in ${duration}ms`);
  console.log(`- Pending checked:    ${summary.checkedCount}`);
  console.log(`- Confirmed (Paid):   ${summary.confirmedCount}`);
  console.log(`- Expired:            ${summary.expiredCount}`);
  console.log(`- Failed:             ${summary.failedCount}`);
  if (summary.errors.length > 0) {
    console.log(`- Errors (${summary.errors.length}):`);
    summary.errors.forEach((err) => console.error(`   ! ${err}`));
  }
  console.log('--------------------------------------------------');
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error('Fatal reconciliation error:', err);
  process.exit(1);
});
