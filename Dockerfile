# ── Build stage ───────────────────────────────────────────────────────────────
FROM node:22-alpine AS builder
WORKDIR /app

# Install dependencies first (better layer caching). HAPUS uses npm + package-lock.json.
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the project and build
COPY . .
RUN npm run build

# ── Serve stage ───────────────────────────────────────────────────────────────
FROM node:22-alpine
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3007
ENV HOSTNAME=0.0.0.0

# Next.js standalone output — minimal server with only required deps
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3007
CMD ["node", "server.js"]
