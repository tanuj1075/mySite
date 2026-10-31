import { Router } from 'express';
import { prisma } from '../lib/prisma.js';

const router = Router();
router.get('/', async (_req, res, next) => {
  try {
    res.json(await prisma.sneakerDrop.findMany({ where: { status: { in: ['Scheduled', 'Active'] } }, orderBy: [{ launchDate: 'asc' }, { launchTime: 'asc' }] }));
  } catch (error) { next(error); }
});

export default router;