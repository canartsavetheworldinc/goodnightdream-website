#!/bin/bash
set -e

npm run build
cd build

git config user.email "canartsavetheworldinc@gmail.com"
git config user.name "canartsavetheworld"

echo 'goodnightdream.cf' > CNAME
cp ../src/img/og_image.png ./og_image.png

# mkdir public
# cp ../src/img ./public/img
# cp ../src/md ./public/md

git init
git add .
git commit -m "Deploy: ${TRAVIS_JOB_NUMBER}"
git push --force "https://${GH_TOKEN}@github.com/canartsavetheworldinc/goodnightdream-website.git" master:gh-pages
