import 'dotenv/config';
import express from 'express';
import cors from 'cors';
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

declare global { namespace Express { interface Request { rawBody?: Buffer } } }

if (!process.env.DATABASE_URL || !process.env.JWT_SECRET) throw new Error('DATABASE_URL and JWT_SECRET are required');
const app = express();
app.use(cors({ origin: process.env.CLIENT_URL ?? 'http://localhost:3000', credentials: true }));
app.use(express.json({ limit: '1mb', verify: (req, _res, buffer) => { (req as express.Request).rawBody = Buffer.from(buffer); } }));
app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));
app.use('/api/auth', authRoutes);
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
app.use((error: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  if (error instanceof Error && error.name === 'ZodError') return res.status(400).json({ error: 'Invalid request', details: error.message });
  console.error(error); res.status(500).json({ error: 'Internal server error' });
});
const port = Number(process.env.PORT ?? 4000);
app.listen(port, () => console.log(`VANTA API listening on :${port}`));