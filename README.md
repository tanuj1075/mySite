# VANTA ARCHIVE

## Local full-stack setup

Prerequisites: Node.js 20+, a PostgreSQL database, and Razorpay test credentials.

The `.env.example` also retains `GEMINI_API_KEY` and `APP_URL` for existing AI Studio runtime integrations.

1. Copy `.env.example` to `.env` and set `DATABASE_URL`, `DATABASE_URL_UNPOOLED`, both JWT secrets, and the payment-provider settings used by your environment.
2. For local development, keep `VITE_API_URL` as `http://localhost:4000/api`; on Vercel, leave it unset to use the same-origin `/api` route, or point it to the same Vercel origin plus `/api`.
3. Install dependencies: `npm install`.
4. Create the schema: `npm run db:migrate -- --name init`.
5. Seed the catalog, coupons, and drops: `npm run db:seed` (this does not create or modify admin accounts).
6. Start the API in one terminal: `npm run server:dev`.
7. Start Vite in another: `npm run dev`.

The API health check is `http://localhost:4000/api/health`. Admin accounts are managed in the database; deployment and seed scripts do not create accounts or change existing passwords.

To discover and append products from the authorized Superkicks and Campus public catalogs, start PostgreSQL and apply the migrations first, then run `npm run catalog:import` (default: up to 60 new products; `npm run catalog:import -- --limit=100` imports up to 100). The importer keeps the existing Prisma `Product` table and catalog JSON, skips duplicate brands/models/SKUs/source URLs, validates and downloads product images into `public/catalog-images`, and records source URLs and product metadata. It only imports products with available sizes, a consistent listed price, a description, and at least three valid images. Existing catalog products are not replaced. Product feeds report size availability rather than unit counts; imported stock is therefore an availability snapshot, not an exact quantity.

### Persisted records

PostgreSQL stores registered accounts (passwords are hashed), products, coupons, drops, saved addresses, carts, wishlists, orders and order items, refresh-token hashes, and return/exchange requests. Customer cart, address, wishlist, order, and return/exchange actions require sign-in. Card details are not stored. After pulling schema changes, apply migrations with `npx prisma migrate deploy`, then run `npm run db:seed` only when you need the initial catalog data; it does not modify admin accounts.

Product catalog prices remain distinct and are stored in INR as the base price. At checkout, the selected shipping country determines its default currency; the server converts the cart total using the current INR exchange-rate feed and creates the Razorpay order in that currency. The rate and charged amount are saved on the order so signature checks, webhooks, and later order history use the same quote. INR is used for Indian addresses. Razorpay international payments must be activated on the merchant account, and currencies must be supported/enabled by that account. If the country or rate cannot be resolved, checkout reports an error instead of silently charging in INR. COD is limited to Indian addresses.

Listed product prices are treated as tax-inclusive, and no additional destination tax is calculated at checkout. Import duties or other destination charges may still be collected separately by customs or the carrier. Confirm your tax and import-duty obligations for each market before launch. The exchange-rate feed is `open.er-api.com`, cached for up to one hour (the source updates daily); replace it with a contracted FX provider if your production pricing needs an SLA or a specific margin.

Razorpay flow: the API creates a pending local order and a Razorpay order; Razorpay Checkout collects card, UPI, net-banking, or supported wallet details. The API verifies the checkout signature, fetches the payment from Razorpay, checks its order, amount, and currency, and captures authorized payments before confirming the local order. A valid `payment.captured` webhook provides a second confirmation path. The cart is cleared only after payment succeeds (or when a COD order is placed). Configure the webhook URL as `https://<api-host>/api/payments/razorpay/webhook`, subscribe to `payment.captured`, and set `RAZORPAY_WEBHOOK_SECRET` to the webhook secret configured in the Razorpay Dashboard. Keep all Razorpay secrets server-side; only the public key ID is sent to Checkout.

For local testing, set `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` to your Razorpay **test-mode** keys and configure a test-mode webhook pointing to the API URL above. For production, replace them with live-mode keys and a live webhook. Payments require valid Razorpay account onboarding and enabled payment methods; local or preview environments must also be reachable by the Razorpay Checkout script.

## Deployment

### Production deployment (Vercel + PostgreSQL)

This repository deploys the Vite client and Express API in the same Vercel project. `api/index.ts` exports the Express application as a Vercel Function; `vercel.json` routes `/api/*` to it, serves `dist`, and provides the SPA fallback. The configured build command is `npm run vercel-build`.

On production builds, `vercel-build` applies checked-in Prisma migrations with `npm run db:deploy` before `npm run build`. The auth-security migration is additive: it adds missing columns and the security-log table without resetting existing rows. The catalog seed is not part of deployment, and neither deploy nor seed scripts create or modify administrator accounts.

Configure `DATABASE_URL`, `DATABASE_URL_UNPOOLED`, `JWT_SECRET`, `JWT_REFRESH_SECRET`, `CLIENT_URL`, and the server-side payment-provider variables used by the API in Vercel Production. The client defaults to same-origin `/api`; leave `VITE_API_URL` unset or point it to the same Vercel origin plus `/api`. Never put secrets in a `VITE_` variable. `ADMIN_EMAIL` and `ADMIN_PASSWORD` are not used by this build or login flow; the existing admin account and password remain in PostgreSQL.

After deployment, check `/api/health`, the product API, and the admin login. If a migration fails, inspect the migration error before changing the database; do not reset or bypass migration state.
# mySite
# mySite
# mySite
# mySite
