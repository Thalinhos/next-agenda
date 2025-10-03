@echo off
REM Start the Node.js server
start "" node .next/standalone/server.js

REM Wait a few seconds for the server to start
timeout /t 3 /nobreak >nul

REM Open the default browser at http://localhost:3000
start "" http://localhost:3000