import type { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as typeof globalThis & { healthPrisma?: PrismaClient };
const prisma = globalForPrisma.healthPrisma ?? new PrismaClient();
globalForPrisma.healthPrisma = prisma;

export default async function health(_req: Request, res: Response) {
  const required = ['DATABASE_URL', 'JWT_SECRET', 'JWT_REFRESH_SECRET'];
  if (required.some((name) => !process.env[name])) {
    return res.status(503).json({ status: 'error', message: 'Backend configuration is incomplete' });
  }

  try {
    await prisma.$queryRaw`SELECT 1`;
    return res.status(200).json({ status: 'ok' });
  } catch (error) {
    console.error('[health] Database connectivity check failed', error);
    return res.status(503).json({ status: 'error', message: 'Database connection failed' });
  }
}
