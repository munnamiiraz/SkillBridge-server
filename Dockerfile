# Use Node.js 20 Alpine for smaller image size
FROM node:20-alpine

# Set working directory
WORKDIR /app

# <<<<<<< HEAD
# Copy package files
COPY package*.json ./

# Install dependencies
# =======
# Copy package files and Prisma schema
COPY package*.json ./
COPY prisma ./prisma/
COPY prisma.config.ts ./

# Install dependencies (this will run prisma generate via postinstall)
# >>>>>>> 03955f7 (Server updates)
RUN npm ci --only=production

# Copy source code
COPY . .

# <<<<<<< HEAD
# Generate Prisma client
RUN npx prisma generate

# =======
# >>>>>>> 03955f7 (Server updates)
# Build the application
RUN npm run build

# Expose port
EXPOSE 10000

# Start the application
CMD ["npm", "start"]