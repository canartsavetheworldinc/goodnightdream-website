#!/bin/bash
set -e

npm run build
cd build

git config user.email "canartsavetheworldinc@gmail.com"
git config user.name "canartsavetheworld"

git init
git add .
git commit -m "Deploy: ${TRAVIS_JOB_NUMBER}"
# git push --force "https://${GH_TOKEN}@github.com/canartsavetheworldinc/goodnightdream-website.git" master:gh-pages
git push --force "https://${GH_TOKEN}@github.com/canartsavetheworldinc/goodnightdream-website.git" gh-pages
