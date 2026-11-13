import 'dotenv/config';
import { prisma } from './lib/prisma.js';
import { AdminBootstrapError, synchronizeAdminFromEnvironment } from './lib/admin-bootstrap.js';

try {
  const result = await synchronizeAdminFromEnvironment(prisma);
  const message = result === 'created'
    ? 'Created the configured admin account.'
    : result === 'synchronized'
      ? 'Synchronized the configured admin account.'
      : 'The configured admin account already matches the environment.';
  console.info(`[admin-bootstrap] ${message}`);
} catch (error) {
  const message = error instanceof AdminBootstrapError
    ? error.message
    : 'Admin bootstrap failed due to a database error.';
  console.error(`[admin-bootstrap] ${message}`);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
