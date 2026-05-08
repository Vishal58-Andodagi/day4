#!/bin/bash

cd /home/ubuntu/deploy

git pull origin main

docker compose down

docker compose up --build -d
