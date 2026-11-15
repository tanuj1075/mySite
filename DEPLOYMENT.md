# VANTA E-COMMERCE — PRODUCTION DEPLOYMENT GUIDE

## Vercel Deployment (this repository's current production architecture)

Vercel serves the Vite build from `dist` and runs the Express application as a Node.js function. `api/[...path].ts` is the catch-all API function; API requests keep their original `/api/...` path so Express can match its registered routes. Do not add a rewrite from `/api/*` to `/api`, because that drops the route suffix. The Vercel production build runs `prisma migrate deploy`; it does not create or reset administrator accounts.

Configure these variables in the Vercel project:

| Variable | Used when | Notes |
| --- | --- | --- |
| `DATABASE_URL` | Build and runtime | Neon pooled connection for application queries. |
| `DATABASE_URL_UNPOOLED` | Build / Prisma CLI | Neon direct connection used by Prisma migrations. |
| `JWT_SECRET` | Runtime | Required; use a cryptographically random secret. |
| `JWT_REFRESH_SECRET` | Runtime | Required; use a different cryptographically random secret. |
| `CLIENT_URL` | Runtime | Production storefront origin; Vercel deployment origins are also allowed by the server. |
| `NODE_ENV` | Build and runtime | Vercel sets production mode for production deployments. |
| `VITE_API_URL` | Build time | Leave unset for same-origin `/api`. Do not set it to localhost in Vercel. |
| Payment provider variables | Runtime | Configure only the provider used by the store; see the UPI sections below. |

`ADMIN_EMAIL`, `ADMIN_PASSWORD`, `ADMIN_RESET_PASSWORD`, and `ADMIN_EMAIL_VERIFIED` are **not** Vercel deployment variables. Administrator creation or password reset is an operator-run action described below. No default administrator is created. Password recovery email delivery is not configured, so the login page directs administrators to the operator instead of claiming an email was sent.

Production schema changes use the committed Prisma migrations through `prisma migrate deploy`. This applies pending migrations without resetting or dropping tables. Review a migration before merging it; do not use `prisma migrate reset` or `prisma db push` against production.

### Operator-run administrator provisioning

Run the script from a trusted operator workstation with the intended production `DATABASE_URL` and `DATABASE_URL_UNPOOLED` already configured. Independently verify mailbox ownership before setting `ADMIN_EMAIL_VERIFIED=true`. Use a secure prompt to put the initial password in the process environment, then remove those variables after the script exits. Do not commit credentials, put them in Vercel build settings, or paste them into deployment logs.

PowerShell example:

```powershell
$adminEmail = Read-Host 'Verified administrator email'
$securePassword = Read-Host 'Temporary administrator password' -AsSecureString
$passwordPointer = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($securePassword)
try {
  $env:ADMIN_EMAIL = $adminEmail
  $env:ADMIN_PASSWORD = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($passwordPointer)
  $env:ADMIN_EMAIL_VERIFIED = 'true'
  $env:ADMIN_RESET_PASSWORD = 'false'
  npm run admin:provision
} finally {
  [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($passwordPointer)
  Remove-Item Env:ADMIN_EMAIL, Env:ADMIN_PASSWORD, Env:ADMIN_EMAIL_VERIFIED, Env:ADMIN_RESET_PASSWORD -ErrorAction SilentlyContinue
}
```

The script creates an account only when the email is unused. It refuses to promote an existing customer. If an admin record already exists, it leaves that record and its password unchanged unless the operator deliberately sets `ADMIN_RESET_PASSWORD=true` for a one-time manual run. Do not leave that override set between deployments.

Password reset through the admin UI is unavailable until a real email provider and public reset page are configured. For now, use the protected operator-run provisioning process to reset an existing admin account. MFA configuration is preserved, and a password reset revokes all stored refresh sessions for that admin.

### Read-only production smoke checks

After deployment, verify `GET /api/health` returns `{"status":"ok"}`. `GET /api/auth/admin/session`, `GET /api/admin/products`, and `GET /api/admin/orders` should reject requests without an admin bearer token. Test admin login with a controlled account, then verify its MFA challenge, session endpoint, dashboard reads, and logout from the browser. Never include real credentials or bearer tokens in a smoke-test transcript.

This guide walks through deploying VANTA, including provider webhook verification and the available payment reconciliation command.

---

## 1. Architecture Overview in Production

In production, VANTA runs as a unified, high-performance Node.js service:
- **Express Backend**: Serves API routes on `/api/*` and acts as a SPA fallback server for client routes (`/*`).
- **React Frontend**: Pre-compiled into static HTML, CSS, and JS chunks (`dist/`), served directly by Express.
- **Database**: PostgreSQL with Prisma ORM connection pooling.
- **Payment Engine**: Cashfree UPI Stack with dynamic QR generation and server-side webhook validation.
- **Reconciliation**: A command is available for an external scheduler. The worker is not started inside Vercel Functions.

---

## 2. Production Environment Variables Checklist

Ensure these variables are configured in your hosting platform's Environment Settings:

| Variable | Description | Example / Recommended Value |
| :--- | :--- | :--- |
| `NODE_ENV` | Application environment | `production` |
| `PORT` | Listening port (assigned by host) | `4000` (or `10000` on Render) |
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:password@host:5432/vanta_archive?sslmode=require` |
| `DATABASE_URL_UNPOOLED` | Direct PostgreSQL connection used for Prisma migrations | Neon direct (unpooled) connection string |
| `JWT_SECRET` | 64+ char secret for auth access tokens | Use `openssl rand -base64 48` to generate |
| `JWT_REFRESH_SECRET` | 64+ char secret for refresh tokens | Use `openssl rand -base64 48` to generate |
| `CLIENT_URL` | Allowed origin(s) for CORS | `https://your-domain.com` (comma-separated for multiples) |
| `VITE_API_URL` | Client API endpoint (baked at build time) | Leave unset on Vercel to use the same-origin `/api` function |
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
   npm install && npx prisma migrate deploy && npm run build
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
   docker compose exec app npx prisma migrate deploy
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
   npx prisma migrate deploy
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

The persistent Node server starts background reconciliation every 60 seconds. Vercel Functions do not start that worker. For Vercel, schedule `npm run payments:reconcile` from a trusted external worker or scheduler with the production runtime variables configured.

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
