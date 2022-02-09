#!/bin/bash

echo "Fetching Files from Repo Started"
git pull
echo "Fetching Files from Repo Completed"

echo "Installing Node Modules Started"
npm install
echo "Installing Node Modules Completed"

echo "Build and Deployment Started"
# pm2 start npm --name "Frontend" -- start
pm2 start pm2F.json


echo "PM2 Save"
pm2 save
echo "PM2 Frontend Saved"

# echo "Build and Deplyoment Started"
# npm run start