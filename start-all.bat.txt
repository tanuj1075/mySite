
@echo off
title Project Startup

echo ========================================
echo       PROJECT STARTUP SCRIPT
echo ========================================

echo.
echo [1/5] Generating Prisma Client...
call npm run db:generate
if errorlevel 1 goto error

echo.
echo [2/5] Deploying Database Migrations...
call npm run db:deploy
if errorlevel 1 goto error

echo.
echo [3/5] Seeding Database...
call npm run db:seed
if errorlevel 1 goto error

echo.
echo [4/5] Starting Backend Server on Port 4000...
start "Backend Server" cmd /k "npm run server:dev"

echo.
echo Waiting 3 seconds for backend startup...
timeout /t 3 /nobreak >nul

echo.
echo [5/5] Starting Frontend on Port 3000...
start "Frontend" cmd /k "npm run dev"

echo.
echo ========================================
echo All startup commands launched!
echo Backend:  http://localhost:4000
echo Frontend: http://localhost:3000
echo ========================================
pause
exit /b 0

:error
echo.
echo ERROR: A command failed. Check the output above.
pause
exit /b 1
