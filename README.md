# VANTA ARCHIVE

## Local full-stack setup

Prerequisites: Node.js 20+, a PostgreSQL database, and Razorpay test credentials.

The `.env.example` also retains `GEMINI_API_KEY` and `APP_URL` for existing AI Studio runtime integrations.

1. Copy `.env.example` to `.env` and set `DATABASE_URL`, both JWT secrets, admin credentials, Razorpay test keys, and a Razorpay webhook secret.
2. For local development, keep `VITE_API_URL` as `http://localhost:4000/api`; for production deployments, set it to an HTTPS API URL.
3. Install dependencies: `npm install`.
4. Create the schema: `npm run db:migrate -- --name init`.
5. Seed the admin user, catalog, and coupons: `npm run db:seed`.
6. Start the API in one terminal: `npm run server:dev`.
7. Start Vite in another: `npm run dev`.

The API health check is `http://localhost:4000/api/health`. The seeded admin uses `ADMIN_EMAIL` and `ADMIN_PASSWORD`; change both before any shared deployment.

### Persisted records

PostgreSQL stores registered accounts (passwords are hashed), products, coupons, drops, saved addresses, carts, wishlists, orders and order items, refresh-token hashes, and return/exchange requests. Customer cart, address, wishlist, order, and return/exchange actions require sign-in. Card details are not stored. After pulling schema changes, apply migrations with `npx prisma migrate deploy`, then run `npm run db:seed` to add or synchronize the configured admin and initial catalog data.

Product catalog prices remain distinct and are stored in INR as the base price. At checkout, the selected shipping country determines its default currency; the server converts the cart total using the current INR exchange-rate feed and creates the Razorpay order in that currency. The rate and charged amount are saved on the order so signature checks, webhooks, and later order history use the same quote. INR is used for Indian addresses. Razorpay international payments must be activated on the merchant account, and currencies must be supported/enabled by that account. If the country or rate cannot be resolved, checkout reports an error instead of silently charging in INR. COD is limited to Indian addresses.

Listed product prices are treated as tax-inclusive, and no additional destination tax is calculated at checkout. Import duties or other destination charges may still be collected separately by customs or the carrier. Confirm your tax and import-duty obligations for each market before launch. The exchange-rate feed is `open.er-api.com`, cached for up to one hour (the source updates daily); replace it with a contracted FX provider if your production pricing needs an SLA or a specific margin.

Razorpay flow: the API creates a pending local order and a Razorpay order; Razorpay Checkout collects card, UPI, net-banking, or supported wallet details. The API verifies the checkout signature, fetches the payment from Razorpay, checks its order, amount, and currency, and captures authorized payments before confirming the local order. A valid `payment.captured` webhook provides a second confirmation path. The cart is cleared only after payment succeeds (or when a COD order is placed). Configure the webhook URL as `https://<api-host>/api/payments/razorpay/webhook`, subscribe to `payment.captured`, and set `RAZORPAY_WEBHOOK_SECRET` to the webhook secret configured in the Razorpay Dashboard. Keep all Razorpay secrets server-side; only the public key ID is sent to Checkout.

For local testing, set `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` to your Razorpay **test-mode** keys and configure a test-mode webhook pointing to the API URL above. For production, replace them with live-mode keys and a live webhook. Payments require valid Razorpay account onboarding and enabled payment methods; local or preview environments must also be reachable by the Razorpay Checkout script.

## Deployment

### Production deployment (Vercel frontend + Render API)

This repository deploys the Vite frontend to Vercel and the Express API to Render; Vercel does not host the API or PostgreSQL database in this setup. Deploy the API and provision PostgreSQL first. Render's `render.yaml` generates the Prisma client, applies checked-in migrations with `npm run db:deploy`, and builds the API. Set `ADMIN_EMAIL` and a unique `ADMIN_PASSWORD` of at least 12 characters in Render before seeding. After the first successful API deploy, run `npm run db:seed` once from the Render Shell to populate the product catalog, coupons, drops, and admin user. Do not add seeding to every build/deploy. Wait until the API is healthy at `https://<api-host>/api/health`.

In the Vercel project, set `VITE_API_URL` to `https://<api-host>/api` in the **Production** environment before deploying. Set it for Preview only if that preview uses an API whose CORS configuration allows the preview origin. This public URL is embedded in the frontend bundle; do not place any secret in a `VITE_` variable. Production builds fail if this variable is missing or not HTTPS, rather than silently building a frontend that calls localhost. `vercel.json` builds `dist` and provides the SPA fallback. Set Render's `CLIENT_URL` to the exact Vercel production origin serving the frontend (no `/api` path), then redeploy the API if that value changes. For a separate preview API, configure that API's `CLIENT_URL` to the corresponding Vercel preview origin.

Set `DATABASE_URL`, separate strong `JWT_SECRET` and `JWT_REFRESH_SECRET`, `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, `RAZORPAY_WEBHOOK_SECRET`, and `CLIENT_URL` in Render's environment settings. Use only live Razorpay keys after activation and configure the live `payment.captured` webhook to `https://<api-host>/api/payments/razorpay/webhook`. Never put server secrets in Vercel, source files, or the frontend bundle.

Vercel deploys from the committed project configuration and creates build output remotely; it does not need to rewrite source files. Local build output (`dist/`, `dist-server/`) and dependencies (`node_modules/`) are gitignored. Database migrations intentionally update the PostgreSQL schema, not application source files. The Vercel frontend deploy and Render API deploy are separate; redeploy Vercel after changing its environment variables.
