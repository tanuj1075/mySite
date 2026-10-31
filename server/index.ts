import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import path from 'node:path';
import fs from 'node:fs';
import crypto from 'node:crypto';
import { prisma } from './lib/prisma.js';
import authRoutes from './routes/auth.js';
import productRoutes from './routes/products.js';
import adminRoutes from './routes/admin.js';
import cartRoutes from './routes/cart.js';
import addressRoutes from './routes/addresses.js';
import couponRoutes from './routes/coupons.js';
import orderRoutes from './routes/orders.js';
import paymentRoutes from './routes/payments.js';
import exchangeRoutes from './routes/exchanges.js';
import wishlistRoutes from './routes/wishlist.js';
import dropRoutes from './routes/drops.js';
import deliveryRoutes from './routes/delivery.js';
import { startReconciliationWorker } from './jobs/reconcileWorker.js';

declare global {
  namespace Express {
    interface Request {
      rawBody?: Buffer;
      id?: string;
    }
  }
}

if (!process.env.DATABASE_URL || !process.env.JWT_SECRET) {
  if (process.env.NODE_ENV === 'production' && !process.env.VERCEL) {
    console.warn('[WARN] DATABASE_URL and JWT_SECRET should be set in environment variables');
  }
}
const app = express();

// Trust reverse proxy (Render, Railway, Heroku, AWS ALB, Nginx, Cloudflare, Vercel)
app.set('trust proxy', 1);

// Security headers (SEC-04, OWASP A05:2021)
app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' },
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com', 'data:'],
      imgSrc: ["'self'", 'data:', 'blob:', 'https:', 'http:'],
      connectSrc: ["'self'", 'https:', 'http:'],
      frameAncestors: ["'none'"],
      objectSrc: ["'none'"],
      baseUri: ["'self'"],
      formAction: ["'self'"],
      upgradeInsecureRequests: process.env.NODE_ENV === 'production' ? [] : null,
    },
  },
  hsts: process.env.NODE_ENV === 'production' ? {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true,
  } : false,
  referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
  xContentTypeOptions: true,
  xFrameOptions: { action: 'deny' },
}));

const allowedOriginsList = (process.env.CLIENT_URL ?? 'http://localhost:3000')
  .split(',')
  .map(url => url.trim().replace(/\/$/, ''))
  .filter(Boolean);

if (process.env.VERCEL_URL) {
  allowedOriginsList.push(`https://${process.env.VERCEL_URL.replace(/\/$/, '')}`);
}
if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
  allowedOriginsList.push(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.replace(/\/$/, '')}`);
}

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    const normalizedOrigin = origin.replace(/\/$/, '');
    if (allowedOriginsList.includes(normalizedOrigin)) {
      return callback(null, true);
    }
    // In local development, permit localhost and local network devices
    if (process.env.NODE_ENV !== 'production') {
      if (
        normalizedOrigin === 'http://localhost:3000' ||
        normalizedOrigin === 'http://127.0.0.1:3000' ||
        /^http:\/\/localhost:\d+$/.test(origin) ||
        /^http:\/\/127\.0\.0\.1:\d+$/.test(origin) ||
        /^http:\/\/192\.168\.\d+\.\d+(:\d+)?$/.test(origin) ||
        /^http:\/\/172\.(1[6-9]|2\d|3[0-1])\.\d+\.\d+(:\d+)?$/.test(origin) ||
        /^http:\/\/10\.\d+\.\d+\.\d+(:\d+)?$/.test(origin)
      ) {
        return callback(null, true);
      }
    }
    callback(new Error('Blocked by CORS policy'));
  },
  credentials: true,
}));
app.use(express.json({ limit: '1mb', verify: (req, _res, buffer) => { (req as express.Request).rawBody = Buffer.from(buffer); } }));

// Request correlation ID and structured telemetry logging
app.use((req, res, next) => {
  const reqId = (req.headers['x-request-id'] as string) || crypto.randomUUID();
  req.id = reqId;
  res.setHeader('x-request-id', reqId);
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    if (process.env.NODE_ENV !== 'test') {
      console.log(`[HTTP] ${req.method} ${req.originalUrl} ${res.statusCode} ${duration}ms (reqId=${reqId})`);
    }
  });
  next();
});

// General API rate limiter (120 reqs/min per IP)
const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 120,
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => req.method === 'OPTIONS' || req.path.startsWith('/api/health'),
  message: { error: 'Too many requests. Please slow down.' },
});

// Auth rate limiter: 30 attempts per 15 minutes per IP (skips OPTIONS preflights)
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => req.method === 'OPTIONS',
  message: { error: 'Too many authentication attempts. Please try again in 15 minutes.' },
});

// Basic liveness probe
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: Math.floor(process.uptime()),
    version: '1.0.0',
  });
});

// Deep readiness probe (checks PostgreSQL connectivity)
app.get('/api/health/ready', async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({
      status: 'ready',
      database: 'connected',
      timestamp: new Date().toISOString(),
      uptime: Math.floor(process.uptime()),
      nodeVersion: process.version,
    });
  } catch (err: unknown) {
    res.status(503).json({
      status: 'unready',
      database: 'disconnected',
      error: err instanceof Error ? err.message : 'Database check failed',
      timestamp: new Date().toISOString(),
    });
  }
});

// Apply API limiter across all /api endpoints
app.use('/api', apiLimiter);

app.use('/api/auth', authLimiter, authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/addresses', addressRoutes);
app.use('/api/coupons', couponRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/exchanges', exchangeRoutes);
app.use('/api/wishlist', wishlistRoutes);
app.use('/api/drops', dropRoutes);
app.use('/api/delivery', deliveryRoutes);

// Serve static client build if present (Unified full-stack deployment)
const distDir = path.resolve(process.cwd(), 'dist');
if (fs.existsSync(distDir)) {
  app.use(express.static(distDir));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    res.sendFile(path.join(distDir, 'index.html'));
  });
}

// Centralized safe error handler
app.use((error: unknown, req: express.Request, res: express.Response, _next: express.NextFunction) => {
  const reqId = req.id || 'unknown';
  if (error instanceof Error && error.name === 'ZodError') {
    return res.status(400).json({ error: 'Invalid request data', details: error.message, requestId: reqId });
  }
  console.error(`[ERROR] [${reqId}]`, error);
  const isProd = process.env.NODE_ENV === 'production';
  res.status(500).json({
    error: 'Internal server error',
    requestId: reqId,
    ...(isProd ? {} : { details: error instanceof Error ? error.message : String(error) }),
  });
});

const port = Number(process.env.PORT ?? 4000);
if (!process.env.VERCEL) {
  app.listen(port, '0.0.0.0', () => {
    console.log(`VANTA API listening on :${port}`);
    if (process.env.NODE_ENV !== 'test') {
      startReconciliationWorker(60_000);
    }
  });
}

export default app;
export { app };
