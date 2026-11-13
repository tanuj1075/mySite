# VANTA E-COMMERCE — PRODUCTION DEPLOYMENT GUIDE

This guide walks you through deploying the complete VANTA E-Commerce application with full UPI payment processing, automatic cryptographic verification, background reconciliation, and admin dashboards.

---

## 1. Architecture Overview in Production

In production, VANTA runs as a unified, high-performance Node.js service:
- **Express Backend**: Serves API routes on `/api/*` and acts as a SPA fallback server for client routes (`/*`).
- **React Frontend**: Pre-compiled into static HTML, CSS, and JS chunks (`dist/`), served directly by Express.
- **Database**: PostgreSQL with Prisma ORM connection pooling.
- **Payment Engine**: Cashfree UPI Stack with dynamic QR generation and server-side webhook validation.
- **Reconciliation Worker**: Background cron job that recovers unconfirmed or dropped UPI transactions automatically.

---

## 2. Production Environment Variables Checklist

Ensure these variables are configured in your hosting platform's Environment Settings:

| Variable | Description | Example / Recommended Value |
| :--- | :--- | :--- |
| `NODE_ENV` | Application environment | `production` |
| `PORT` | Listening port (assigned by host) | `4000` (or `10000` on Render) |
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:password@host:5432/vanta_archive?sslmode=require` |
| `JWT_SECRET` | 64+ char secret for auth access tokens | Use `openssl rand -base64 48` to generate |
| `JWT_REFRESH_SECRET` | 64+ char secret for refresh tokens | Use `openssl rand -base64 48` to generate |
| `CLIENT_URL` | Allowed origin(s) for CORS | `https://your-domain.com` (comma-separated for multiples) |
| `VITE_API_URL` | Client API endpoint (baked at build time) | `https://your-domain.com/api` |
| `CASHFREE_APP_ID` | Cashfree Merchant App ID | Found in Cashfree Dashboard under API Keys |
| `CASHFREE_SECRET_KEY`| Cashfree Merchant Secret Key | Found in Cashfree Dashboard under API Keys |
| `CASHFREE_ENV` | Gateway environment | `production` (use `sandbox` for testing) |
| `CASHFREE_API_VERSION`| Cashfree API Version | `2023-08-01` |
| Admin credentials | Existing administrator accounts are stored in PostgreSQL and are not created or changed by deployment builds. | No `ADMIN_*` variables are required for login or deployment. |

---

## 3. Platform Deployment Guides

### Option A: 1-Click Deployment on Render
1. Create an account on [Render](https://render.com).
2. Click **New > Blueprint**.
3. Connect your Git repository.
4. Render will detect [`render.yaml`](./render.yaml) and automatically create:
   - A managed **PostgreSQL** database.
   - A Node.js **Web Service**.
5. Set the required environment variables (`CLIENT_URL`, `CASHFREE_APP_ID`, `CASHFREE_SECRET_KEY`, `CASHFREE_ENV="production"`).
6. Render builds the project using:
   ```bash
   npm install && npx prisma db push && npm run build
   ```
   and starts it with:
   ```bash
   npm start
   ```

---

### Option B: Railway Deployment
1. Create a project on [Railway](https://railway.app).
2. Add a **PostgreSQL** database service.
3. Add a **GitHub Repo** service connected to your repository.
4. Set **Build Command**:
   ```bash
   npx prisma generate && npm run build
   ```
5. Set **Start Command**:
   ```bash
   npm start
   ```
6. Add the environment variables from the checklist above (link `DATABASE_URL` to Railway's Postgres).

---

### Option C: Docker / Docker Compose (VPS / AWS EC2 / DigitalOcean)
1. Clone the repository onto your server:
   ```bash
   git clone <your-repo-url> /var/www/vanta
   cd /var/www/vanta
   ```
2. Copy and populate `.env`:
   ```bash
   cp .env.example .env
   nano .env
   ```
3. Start the application and database containers:
   ```bash
   docker compose up -d --build
   ```
4. Run migrations and seed the footwear catalog:
   ```bash
   docker compose exec app npx prisma db push
   docker compose exec app npm run db:seed
   docker compose exec app npm run catalog:import
   ```

---

### Option D: Ubuntu VPS with Nginx & PM2
1. Install Node.js 20, PostgreSQL 16, and Nginx:
   ```bash
   sudo apt update && sudo apt install -y nodejs npm postgresql nginx
   sudo npm install -g pm2
   ```
2. Build the project:
   ```bash
   npm ci
   npx prisma db push
   npm run build
   ```
3. Start the server with PM2:
   ```bash
   pm2 start dist-server/server/index.js --name vanta-api
   pm2 save
   pm2 startup
   ```
4. Configure Nginx reverse proxy with SSL (`/etc/nginx/sites-available/vanta`):
   ```nginx
   server {
       server_name your-domain.com;

       location / {
           proxy_pass http://127.0.0.1:4000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
5. Obtain a free SSL certificate via Let's Encrypt:
   ```bash
   sudo certbot --nginx -d your-domain.com
   ```

---

## 4. Cashfree Production Account & Webhook Registration

To enable automatic payment verification in production:
1. Log in to [Cashfree Merchant Dashboard](https://merchants.cashfree.com/).
2. Switch from **Test** to **Production** mode in the top navigation.
3. Go to **Developers > API Keys** and generate production credentials:
   - Copy **App ID** and **Secret Key**.
4. Go to **Developers > Webhooks**:
   - Add new webhook endpoint: `https://your-domain.com/api/payments/webhook`
   - Select events:
     - `PAYMENT_SUCCESS_WEBHOOK`
     - `PAYMENT_FAILED_WEBHOOK`
     - `PAYMENT_USER_DROPPED_WEBHOOK`
   - Set version to `2023-08-01`.
5. Save the webhook. Cashfree will immediately send cryptographically signed HMAC-SHA256 test payloads to your live URL.

---

## 5. Background Reconciliation Setup

The application automatically runs background reconciliation every 60 seconds when started in production.

For additional resilience, you can also run the reconciliation worker via system cron every 5 minutes:
```bash
*/5 * * * * cd /var/www/vanta && npm run payments:reconcile >> /var/log/vanta-reconcile.log 2>&1
```

---

## 6. Verification and Smoke Testing Checklist

After deploying to your production URL, perform this 3-step verification:
1. **Health Check**:
   Visit `https://your-domain.com/api/health` -> verify response is `{"status":"ok"}`.
2. **Catalog & Storefront**:
   Visit `https://your-domain.com/` -> verify products, cart, and authentication load seamlessly.
3. **UPI Payment Intent & Modal**:
   Place an order with UPI -> verify the dynamic QR code renders and the 15-minute countdown starts.
4. **Admin Dashboard**:
   Log in with the existing administrator account -> navigate to **Commerce > Payments & UPI** -> verify transaction metrics and audit logs.
