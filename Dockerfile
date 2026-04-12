# stage 1: builder
FROM node:20-alpine AS builder

WORKDIR /app

# Install build dependencies (openssl is required for Prisma)
RUN apk add --no-cache openssl

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install --legacy-peer-deps

COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build the app (outputs to /app/api based on package.json)
RUN npm run build

# stage 2: runner
FROM node:20-alpine AS runner

WORKDIR /app

# Re-install openssl in runner stage
RUN apk add --no-cache openssl

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/api ./api
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/prisma.config.ts ./prisma.config.ts

ENV NODE_ENV=production

EXPOSE 10000

# Run migrations and start the app (using the prod start script)
CMD ["npm", "run", "start:prod"]
