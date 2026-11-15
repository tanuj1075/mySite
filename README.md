<div align="center">

# 🏛️ VANTA ARCHIVE
### *Tactile Brutalism. Zero Compromise.*

**A monolithic luxury footwear & technical apparel e-commerce platform built for high-performance retail.**

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vanta-archive.vercel.app/)
[![React 19](https://img.shields.io/badge/React_19-TypeScript-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Node.js & Express](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon_Cloud-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://neon.tech/)
[![Prisma ORM](https://img.shields.io/badge/Prisma_ORM-6.19-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://prisma.io/)
[![Security](https://img.shields.io/badge/Security-Argon2id_%7C_TOTP_MFA-success?style=for-the-badge&logo=shield&logoColor=white)](#-security--authentication-architecture)

[Explore Storefront](https://vanta-archive.vercel.app/) • [Admin Console](https://vanta-archive.vercel.app/admin/login) • [Features](#-key-features) • [Tech Stack](#-technical-stack) • [Installation](#-getting-started)

</div>

---

## 📌 Executive Summary

**VANTA ARCHIVE** is a full-stack, enterprise-grade e-commerce application inspired by brutalist architecture and technical craftsmanship. Designed with modern web standards, it delivers an immersive shopping experience with dynamic currency conversion, UPI/card payment flows, real-time inventory management, and a zero-trust administrative enclave.

---

## ✨ Key Features

### 🛍️ Client Storefront Experience
* **Brutalist Design System:** Bespoke typography (`Bodoni Moda`, `Space Mono`), fluid micro-interactions, responsive drawer architecture, and editorial-grade photography.
* **Dynamic Product Catalog:** Multi-angle 360° specimen inspect modal, real-time colorway switching, size availability mapping, and interactive size guide comparison.
* **Multi-Currency Global Checkout:** Real-time exchange rate feed (`open.er-api.com`) supporting international currencies (USD, EUR, GBP, AED, SGD, JPY) anchored to INR base pricing.
* **Universal Cart & Wishlist:** Persistent multi-device cart with real-time stock allocation and optimistic quantity updates.
* **Order Tracking & Lifecycle Timeline:** 6-stage cryptographic order progress tracker (*Order Placed* $\rightarrow$ *Confirmed* $\rightarrow$ *Packed* $\rightarrow$ *Shipped* $\rightarrow$ *Out for Delivery* $\rightarrow$ *Delivered*) with estimated delivery calculators.

### 💳 Payments & Cryptographic Verification
* **Hybrid UPI Gateway:** Dynamic on-screen UPI QR generation with deep-linking (`upi://pay`), 15-minute expiration countdowns, and manual/automated payment capture.
* **Cashfree & Razorpay Integration:** Server-side HMAC-SHA256 webhook verification for automated, tamper-proof payment reconciliation.
* **COD (Cash on Delivery):** Intelligent regional checkout rules with Indian PIN code verification.

### 🛡️ Operator Admin Enclave (`/admin`)
* **Dedicated Dashboard:** Complete management of product dossiers, sneaker drops, promotional coupons, order status overrides, and customer return/exchange logistics.
* **Stealth Access Protocol:** Secure stealth shortcut (`Ctrl + Shift + A` / `Cmd + Shift + A`) to toggle the admin gateway from anywhere in the store.
* **Telemetry & Security Audits:** Real-time logging of administrative events, session state, IP tracking, and role enforcement.

---

## 🛠️ Technical Stack

```mermaid
graph LR
    subgraph Client ["Client Tier (Vite + React 19)"]
        UI[Brutalist UI]
        State[Zustand / React State]
        Router[SPA Client Router]
    end

    subgraph Server ["Server Tier (Node.js + Express)"]
        API["Express REST API (/api/*)"]
        Auth[Argon2id + JWT Engine]
        Payments[Payment Gateways / Webhooks]
    end

    subgraph Storage ["Data Tier (PostgreSQL + Neon)"]
        Prisma[Prisma ORM Client]
        Neon[(Neon Cloud Lakebase)]
    end

    Client -->|HTTPS / REST| Server
    Server -->|Connection Pooling| Storage
```

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 19, TypeScript, Vite 6, Tailwind CSS v4, Motion (Framer Motion), Lucide Icons, QRcode |
| **Backend** | Node.js 20+, Express 4, TypeScript, Zod Schema Validation, Helmet, Express Rate Limit |
| **Database** | PostgreSQL on Neon (Serverless Lakebase), Prisma ORM 6.19 |
| **Authentication** | Argon2id password hashing, Bcrypt backward compatibility, JWT Access/Refresh tokens, RFC 6238 TOTP 2FA |
| **Payment Stack** | Cashfree Webhooks (HMAC-SHA256), Razorpay SDK, UPI Virtual Payment Addresses |
| **Deployment** | Vercel Serverless Functions, Neon Database Branching |

---

## 🔒 Security & Authentication Architecture

* **Zero-Trust Role Enforcement:** Strictly separates `CUSTOMER` and `ADMIN` privileges via cryptographic JWT validation middleware (`requireAuth`, `requireAdmin`).
* **Argon2id Password Hashing:** Uses `@node-rs/argon2` with automated runtime migration from legacy Bcrypt hashes upon sign-in.
* **Account Lockout Protection:** 5 consecutive failed login attempts trigger an automated 15-minute IP/account lockout.
* **Two-Factor Authentication (MFA):** Authenticator app pairing via standard RFC 6238 TOTP with single-use hashed recovery backup codes.
* **Security Headers:** Strict Content Security Policy (CSP), HTTP Strict Transport Security (HSTS), XSS protection, and frame denial via Helmet.

---

## 🚀 Getting Started

### Prerequisites
* **Node.js**: `v20.0.0` or higher
* **npm**: `v10.0.0` or higher
* **PostgreSQL Database**: Neon Cloud account or local PostgreSQL instance

### 1. Clone & Install

```bash
git clone https://github.com/tanuj1075/mySite.git
cd mySite
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Populate the required secrets:

```env
# Database Connections
DATABASE_URL="postgresql://user:password@host/neondb?sslmode=require"
DATABASE_URL_UNPOOLED="postgresql://user:password@host/neondb?sslmode=require"

# JWT Secrets (Generate with: openssl rand -base64 48)
JWT_SECRET="your_secure_access_secret_min_32_characters"
JWT_REFRESH_SECRET="your_secure_refresh_secret_min_32_characters"

# Application URLs
CLIENT_URL="http://localhost:3000"
VITE_API_URL="http://localhost:4000/api"
PORT=4000
```

### 3. Initialize Database & Seed

```bash
# Push Prisma schema to your PostgreSQL database
npx prisma db push

# Generate Prisma Client
npm run db:generate

# Seed the initial catalog, drops, and coupons
npm run db:seed
```

### 4. Start Development Servers

```bash
# Terminal 1: Start Express Backend (Port 4000)
npm run server:dev

# Terminal 2: Start Vite Frontend (Port 3000)
npm run dev
```

Visit **`http://localhost:3000`** in your browser.

---

## 🔑 Administrative Provisioning

Administrator accounts are never created by default or stored in code. To provision or reset an administrator account:

```powershell
# Set credentials securely in the environment
$env:ADMIN_EMAIL = "admin@vanta.com"
$env:ADMIN_PASSWORD = "YourSecurePassword123!"
$env:ADMIN_EMAIL_VERIFIED = "true"
$env:ADMIN_RESET_PASSWORD = "true"

# Run the provisioning script
npm run admin:provision
```

---

## 📂 Project Structure

```text
mySite/
├── api/                    # Vercel catch-all serverless function handlers
│   ├── [...path].ts        # Direct Express API route dispatcher
│   └── index.ts            # Entrypoint for Vercel Functions
├── prisma/                 # Database models & migration history
│   └── schema.prisma       # Prisma schema (User, Order, Product, etc.)
├── public/                 # Static assets, fonts, product imagery
├── scripts/                # Database migrations & administrative tools
│   ├── provision-admin.ts  # Cryptographic admin provisioning tool
│   └── reconcile-payments.ts # Background payment reconciliation worker
├── server/                 # Express backend application
│   ├── lib/                # Auth, TOTP, Prisma client, payment services
│   ├── middleware/         # Auth verification & role guards
│   ├── routes/             # REST API route controllers
│   └── index.ts            # Primary Express server setup
├── src/                    # React frontend application
│   ├── components/         # Modular UI components & view modals
│   │   ├── admin/          # Dedicated Admin Enclave sub-views
│   │   ├── AdminLoginView.tsx # Protected administrator login portal
│   │   └── AdminPanelView.tsx # Admin master management console
│   ├── data/               # Product catalog specifications & mock data
│   ├── lib/                # Client API SDK & session managers
│   ├── types.ts            # Core TypeScript interfaces & domain models
│   └── App.tsx             # Root application orchestrator
├── tests/                  # Automated integration & unit test suites
└── vercel.json             # Vercel deployment configuration & routing
```

---

## 🧪 Automated Testing

The project includes an end-to-end test suite covering API routing, security token issuance, order validation, and currency conversion:

```bash
npm test
```

---

## 📄 License

This project is licensed under the Apache 2.0 License.

<div align="center">
<sub>Crafted with precision by <b><a href="https://github.com/tanuj1075">tanuj1075</a></b></sub>
</div>
