import 'dotenv/config';
import bcrypt from 'bcryptjs';
import { prisma } from '../server/lib/prisma.js';

async function main() {
  const emailValue = process.env.ADMIN_EMAIL?.trim();
  const password = process.env.ADMIN_PASSWORD;

  if (!emailValue && !password) {
    console.info('Admin provisioning skipped: ADMIN_EMAIL and ADMIN_PASSWORD are not configured.');
    return;
  }
  if (!emailValue || !password) {
    throw new Error('Set both ADMIN_EMAIL and ADMIN_PASSWORD to provision an admin account.');
  }

  const email = emailValue.toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('ADMIN_EMAIL must be a valid email address.');
  }
  if (password.length < 12) {
    throw new Error('ADMIN_PASSWORD must be at least 12 characters.');
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing && existing.role !== 'ADMIN') {
    throw new Error('ADMIN_EMAIL belongs to a non-admin account. Choose a new email; this script will not promote customers.');
  }

  const resetExistingPassword = process.env.ADMIN_RESET_PASSWORD?.trim().toLowerCase() === 'true';
  if (existing && !resetExistingPassword) {
    console.info('Admin account already exists; password unchanged. Set ADMIN_RESET_PASSWORD=true for a one-time reset.');
    return;
  }

  const passwordHash = await bcrypt.hash(password, 12);
  if (existing) {
    await prisma.user.update({
      where: { id: existing.id },
      data: { passwordHash, failedLoginAttempts: 0, lockedUntil: null },
    });
    console.info(`Admin password reset for ${email}. Existing MFA settings were preserved.`);
    return;
  }

  const name = process.env.ADMIN_NAME?.trim() || 'VANTA Administrator';
  await prisma.user.create({
    data: { email, name, passwordHash, role: 'ADMIN' },
  });
  console.info(`Admin account created for ${email}.`);
}

main()
  .catch((error: unknown) => {
    // Avoid printing environment values or database connection strings into build logs.
    console.error(error instanceof Error ? `Admin provisioning failed: ${error.message}` : 'Admin provisioning failed.');
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
