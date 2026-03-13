# Use Node.js 20 Alpine for smaller image size
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and Prisma schema
COPY package*.json ./
COPY prisma ./prisma/
COPY prisma.config.ts ./

# Install dependencies (this will run prisma generate via postinstall)
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 10000

# Start the application with migrations
CMD ["npm", "run", "start:prod"]
