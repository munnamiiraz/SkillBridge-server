@echo off
echo SkillBridge Docker Management Script
echo =====================================

:menu
echo.
echo Choose an option:
echo 1. Start Development Environment
echo 2. Start Production Environment
echo 3. Stop All Containers
echo 4. View Application Logs
echo 5. Run Database Migrations (Dev)
echo 6. Run Database Migrations (Prod)
echo 7. Seed Database
echo 8. Clean Restart (Remove all data)
echo 9. Exit

set /p choice="Enter your choice (1-9): "

if "%choice%"=="1" goto dev_start
if "%choice%"=="2" goto prod_start
if "%choice%"=="3" goto stop_all
if "%choice%"=="4" goto view_logs
if "%choice%"=="5" goto migrate_dev
if "%choice%"=="6" goto migrate_prod
if "%choice%"=="7" goto seed_db
if "%choice%"=="8" goto clean_restart
if "%choice%"=="9" goto exit

echo Invalid choice. Please try again.
goto menu

:dev_start
echo Starting development environment...
docker-compose -f docker-compose.dev.yml up --build
goto menu

:prod_start
echo Starting production environment...
docker-compose up --build -d
goto menu

:stop_all
echo Stopping all containers...
docker-compose -f docker-compose.dev.yml down
docker-compose down
goto menu

:view_logs
echo Viewing application logs...
docker-compose logs -f app
goto menu

:migrate_dev
echo Running development migrations...
docker-compose -f docker-compose.dev.yml exec app npx prisma migrate dev
goto menu

:migrate_prod
echo Running production migrations...
docker-compose exec app npx prisma migrate deploy
goto menu

:seed_db
echo Seeding database...
docker-compose -f docker-compose.dev.yml exec app npm run seed
goto menu

:clean_restart
echo WARNING: This will remove all data!
set /p confirm="Are you sure? (y/N): "
if /i "%confirm%"=="y" (
    echo Cleaning up...
    docker-compose -f docker-compose.dev.yml down -v
    docker-compose down -v
    echo Starting fresh development environment...
    docker-compose -f docker-compose.dev.yml up --build
)
goto menu

:exit
echo Goodbye!
exit /b 0