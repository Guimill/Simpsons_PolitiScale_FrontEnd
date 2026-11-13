#!/bin/sh
# Runs ON THE SERVER: pull the latest code from GitHub and rebuild the site.
#   /srv/politiscale/deploy/update.sh
set -e
cd "$(dirname "$0")/.."
git fetch --quiet origin main
git reset --hard --quiet origin/main     # the server copy always mirrors GitHub
echo "==> Code at $(git log -1 --format='%h %s')"
docker compose up -d --build --remove-orphans
docker image prune -f >/dev/null
sleep 3
docker compose ps
