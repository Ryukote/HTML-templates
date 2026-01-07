@echo off
echo ================================================
echo    PORTFOLIO WEBSITE - LOCAL SERVER
echo ================================================
echo.
echo Starting local server...
echo.
echo Your portfolio will open at: http://localhost:8000
echo.
echo Press CTRL+C to stop the server
echo ================================================
echo.

python -m http.server 8000

pause
