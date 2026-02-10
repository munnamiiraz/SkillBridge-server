# SkillBridge Server - Docker Setup

This guide explains how to run the SkillBridge server using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose installed

## Quick Start

### Development Environment

1. **Clone and navigate to the project:**
   ```bash
   cd "D:\CODING\Next Level\Assignment 4\server"
   ```

2. **Create environment file:**
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your configuration.

3. **Start development environment:**
   ```bash
   docker-compose -f docker-compose.dev.yml up --build
   ```

4. **Run database migrations:**
   ```bash
   docker-compose -f docker-compose.dev.yml exec app npx prisma migrate dev
   ```

5. **Seed the database (optional):**
   ```bash
   docker-compose -f docker-compose.dev.yml exec app npm run seed
   ```

### Production Environment

1. **Build and start production containers:**
   ```bash
   docker-compose up --build -d
   ```

2. **Run database migrations:**
   ```bash
   docker-compose exec app npx prisma migrate deploy
   ```

## Available Commands

### Development
```bash
# Start development environment
docker-compose -f docker-compose.dev.yml up

# Start in detached mode
docker-compose -f docker-compose.dev.yml up -d

# Rebuild containers
docker-compose -f docker-compose.dev.yml up --build

# Stop containers
docker-compose -f docker-compose.dev.yml down

# View logs
docker-compose -f docker-compose.dev.yml logs -f app
```

### Production
```bash
# Start production environment
docker-compose up -d

# Stop production environment
docker-compose down

# View logs
docker-compose logs -f app
```

### Database Operations
```bash
# Run migrations (development)
docker-compose -f docker-compose.dev.yml exec app npx prisma migrate dev

# Run migrations (production)
docker-compose exec app npx prisma migrate deploy

# Reset database
docker-compose -f docker-compose.dev.yml exec app npx prisma migrate reset

# Seed database
docker-compose -f docker-compose.dev.yml exec app npm run seed
```

## Environment Variables

Create a `.env` file with the following variables:

```env
# Database
DATABASE_URL=postgresql://postgres:password@postgres:5432/skillbridge

# Auth
BETTER_AUTH_SECRET=your-super-secret-key-here
BETTER_AUTH_URL=http://localhost:10000

# App
NODE_ENV=development
PORT=10000

# Email (if using email features)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## Docker Files Explained

- **Dockerfile**: Basic production build
- **Dockerfile.prod**: Optimized multi-stage production build
- **Dockerfile.dev**: Development build with hot reload
- **docker-compose.yml**: Production environment with PostgreSQL
- **docker-compose.dev.yml**: Development environment with hot reload

## Troubleshooting

### Port Already in Use
If port 10000 or 5432 is already in use, modify the ports in the docker-compose files:

```yaml
ports:
  - "3001:10000"  # Change 3001 to any available port
```

### Database Connection Issues
1. Ensure PostgreSQL container is running:
   ```bash
   docker-compose ps
   ```

2. Check database logs:
   ```bash
   docker-compose logs postgres
   ```

### Application Logs
View application logs:
```bash
docker-compose logs -f app
```

### Clean Restart
To completely restart with fresh containers:
```bash
docker-compose down -v
docker-compose up --build
```

## Performance Tips

1. **Use .dockerignore**: Already included to exclude unnecessary files
2. **Multi-stage builds**: Use `Dockerfile.prod` for production
3. **Volume caching**: Node modules are cached in named volumes
4. **Alpine images**: Smaller image sizes for faster builds

## Security Notes

- Change default passwords in production
- Use proper secrets management
- Don't expose database ports in production
- Use non-root user (implemented in Dockerfile.prod)