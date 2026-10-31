import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import path from 'node:path';
import fs from 'node:fs';
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

declare global { namespace Express { interface Request { rawBody?: Buffer } } }

if (!process.env.DATABASE_URL || !process.env.JWT_SECRET) {
  if (process.env.NODE_ENV === 'production' && !process.env.VERCEL) {
    console.warn('[WARN] DATABASE_URL and JWT_SECRET should be set in environment variables');
  }
}
const app = express();

// Trust reverse proxy (Render, Railway, Heroku, AWS ALB, Nginx, Cloudflare, Vercel)
app.set('trust proxy', 1);

// Security headers (SEC-04)
app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' }, // allow CDN images
  contentSecurityPolicy: false, // managed by reverse proxy / CDN in production
}));

const allowedOriginsList = (process.env.CLIENT_URL ?? 'http://localhost:3000')
  .split(',')
  .map(url => url.trim().replace(/\/$/, ''))
  .filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    const normalizedOrigin = origin.replace(/\/$/, '');
    if (
      allowedOriginsList.includes(normalizedOrigin) ||
      normalizedOrigin === 'http://localhost:3000' ||
      normalizedOrigin === 'http://127.0.0.1:3000' ||
      /^http:\/\/localhost:\d+$/.test(origin) ||
      /^http:\/\/127\.0\.0\.1:\d+$/.test(origin) ||
      /^https:\/\/.*\.vercel\.app$/.test(origin) ||
      /^http:\/\/192\.168\.\d+\.\d+(:\d+)?$/.test(origin) ||
      /^http:\/\/172\.(1[6-9]|2\d|3[0-1])\.\d+\.\d+(:\d+)?$/.test(origin) ||
      /^http:\/\/10\.\d+\.\d+\.\d+(:\d+)?$/.test(origin)
    ) {
      return callback(null, true);
    }
    if (process.env.NODE_ENV !== 'production') {
      return callback(null, true);
    }
    callback(new Error('Blocked by CORS'));
  },
  credentials: true,
}));
app.use(express.json({ limit: '1mb', verify: (req, _res, buffer) => { (req as express.Request).rawBody = Buffer.from(buffer); } }));

// Auth rate limiter: 30 attempts per 15 minutes per IP (skips OPTIONS preflights)
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => req.method === 'OPTIONS',
  message: { error: 'Too many authentication attempts. Please try again in 15 minutes.' },
});

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));
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

app.use((error: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  if (error instanceof Error && error.name === 'ZodError') return res.status(400).json({ error: 'Invalid request', details: error.message });
  console.error(error); res.status(500).json({ error: 'Internal server error' });
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
