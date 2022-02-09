#!/bin/bash

echo "Fetching Files from Repo Started"
git pull
echo "Fetching Files from Repo Completed"

echo "Installing Node Modules Started"
npm install
echo "Installing Node Modules Completed"

echo "Starting Backend"
# pm2 start src/index.ts --name "Backend" -- start
pm2 start pm2B.json

echo "PM2 Save"
pm2 save
echo "PM2 Backend Saved"

# echo "Build and Deplyoment Started"
# npm run dev