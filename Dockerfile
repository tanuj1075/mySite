# ==============================================================================
# VANTA E-COMMERCE PRODUCTION DOCKERFILE
# Multi-stage production build (Node 20 LTS Alpine)
# ==============================================================================

# STAGE 1: Builder
FROM node:20-alpine AS builder

WORKDIR /app

# Install build dependencies
RUN apk add --no-cache openssl libc6-compat

# Install package dependencies
COPY package*.json ./
COPY prisma ./prisma/
RUN npm ci

# Copy full application source
COPY . .

# Build Prisma Client, Vite Frontend, and Server TypeScript
RUN npx prisma generate
RUN npm run build:client
RUN npm run build:server

# STAGE 2: Production Runner
FROM node:20-alpine AS runner

WORKDIR /app

# Install OpenSSL for Prisma engine compatibility
RUN apk add --no-cache openssl libc6-compat dumb-init

ENV NODE_ENV=production
ENV PORT=4000

# Copy production package manifests and install only production dependencies
COPY package*.json ./
COPY prisma ./prisma/
RUN npm ci --omit=dev && npm cache clean --force

# Generate Prisma Client for runner environment
RUN npx prisma generate

# Copy built artifacts from builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/dist-server ./dist-server

# Non-root user for container security
USER node

EXPOSE 4000

# Use dumb-init to properly handle PID 1 signals
ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "dist-server/server/index.js"]
