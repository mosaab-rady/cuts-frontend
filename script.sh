#!/bin/sh
cd frontend
npm run build
cd ..
cd server
node server.js
