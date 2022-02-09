#!/bin/bash

echo "Starting Backend and Frontend Shell Script"
cd frontend 
sh deploy_fe.sh
cd ..
cd backend
sh deploy_be.sh