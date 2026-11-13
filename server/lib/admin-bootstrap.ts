import { Prisma } from '@prisma/client';
import type { PrismaClient } from '@prisma/client';
import { hashPassword, verifyPassword } from './auth.js';

export class AdminBootstrapError extends Error {}

export type AdminBootstrapAccount = {
  id: string;
  email: string;
  role: 'ADMIN' | 'CUSTOMER';
  passwordHash: string;
};

type ExistingAdmin = Pick<AdminBootstrapAccount, 'id' | 'email'>;

export type AdminBootstrapAction =
  | { kind: 'create' }
  | { kind: 'sync'; userId: string };

export function getAdminBootstrapCredentials(
  env: Partial<Pick<NodeJS.ProcessEnv, 'ADMIN_EMAIL' | 'ADMIN_PASSWORD' | 'ADMIN_PASSWORD_3'>> = process.env,
) {
  const email = env.ADMIN_EMAIL?.trim().toLowerCase();
  const password = env.ADMIN_PASSWORD || env.ADMIN_PASSWORD_3;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new AdminBootstrapError('A valid ADMIN_EMAIL is required to bootstrap the admin account.');
  }

  if (!password || password.length < 12) {
    throw new AdminBootstrapError('Set ADMIN_PASSWORD (or its configured ADMIN_PASSWORD_3 alias) to at least 12 characters.');
  }

  return { email, password };
}

export function chooseAdminBootstrapAction(
  existingAdmins: readonly ExistingAdmin[],
  matchingAccounts: readonly AdminBootstrapAccount[],
): AdminBootstrapAction {
  if (matchingAccounts.length > 1) {
    throw new AdminBootstrapError('Multiple accounts match ADMIN_EMAIL; refusing to change admin accounts.');
  }

  const configuredAccount = matchingAccounts[0];
  if (!configuredAccount) {
    if (existingAdmins.length > 0) {
      throw new AdminBootstrapError('An admin already exists for a different email; refusing to create a duplicate admin.');
    }
    return { kind: 'create' };
  }

  if (
    configuredAccount.role !== 'ADMIN' &&
    existingAdmins.some((admin) => admin.id !== configuredAccount.id)
  ) {
    throw new AdminBootstrapError('Another admin already exists; refusing to create a duplicate admin.');
  }

  return { kind: 'sync', userId: configuredAccount.id };
}

export async function synchronizeAdminFromEnvironment(prisma: PrismaClient) {
  const { email, password } = getAdminBootstrapCredentials();

  return prisma.$transaction(async (tx) => {
    const existingAdmins = await tx.user.findMany({
      where: { role: 'ADMIN' },
      select: { id: true, email: true },
    });
    const matchingAccounts = await tx.user.findMany({
      where: { email: { equals: email, mode: 'insensitive' } },
      select: { id: true, email: true, role: true, passwordHash: true },
    });
    const action = chooseAdminBootstrapAction(existingAdmins, matchingAccounts);

    if (action.kind === 'create') {
      await tx.user.create({
        data: {
          email,
          name: 'VANTA ADMIN',
          role: 'ADMIN',
          passwordHash: await hashPassword(password),
        },
      });
      return 'created' as const;
    }

    const account = matchingAccounts.find(({ id }) => id === action.userId);
    if (!account) {
      throw new AdminBootstrapError('The configured admin account changed during synchronization.');
    }

    if (
      account.role === 'ADMIN' &&
      account.email === email &&
      await verifyPassword(password, account.passwordHash)
    ) {
      return 'unchanged' as const;
    }

    await tx.user.update({
      where: { id: account.id },
      data: {
        email,
        role: 'ADMIN',
        passwordHash: await hashPassword(password),
      },
    });
    return 'synchronized' as const;
  }, { isolationLevel: Prisma.TransactionIsolationLevel.Serializable });
}
