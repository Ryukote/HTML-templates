@echo off
echo ========================================
echo Elite Performance Tuning - Local Server
echo ========================================
echo.
echo Starting local server on http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

REM Try Python 3 first
python -m http.server 8000 2>nul
if %errorlevel% equ 0 goto :eof

REM Try Python 2
python -m SimpleHTTPServer 8000 2>nul
if %errorlevel% equ 0 goto :eof

REM Try PHP
php -S localhost:8000 2>nul
if %errorlevel% equ 0 goto :eof

REM If nothing works
echo ERROR: No server found!
echo.
echo Please install one of the following:
echo - Python: https://www.python.org/downloads/
echo - PHP: https://www.php.net/downloads.php
echo - Node.js: https://nodejs.org/
echo.
echo Then run: python -m http.server 8000
echo.
pause
