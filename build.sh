#!/bin/sh

clear
echo ==========================================
echo = Build nfradin.fr
echo ==========================================

# Remove old build dir
rm -Rf ./build

# Create build dir
mkdir build

# Build layout header
echo - Build header template...
file=src/www/templates/layout/header.ejs
sed -i -e 's/src=.*data-main=.*"/src="js\/app.js"/' $file

# Compile templates
echo - Pre-compile templates...
rm -Rf ./src/www/templates_compiled/
mkdir src/www/templates_compiled
cd src/www
node compile_templates.js templates/ templates_compiled/
cd ../../

# Build www
r.js -o src/www/build.js include=requireLib

# Copy Backend
echo 
echo Copy backend...
echo -------------------------
echo - Copy db...
mkdir build/db
cp -r src/db/* build/db

echo - Copy routes...
mkdir build/routes
cp -r src/routes/* build/routes

echo - Copy server.js...
cp src/server.js build/server.js

echo - Copy utils...
mkdir build/utils
cp -r src/utils/* build/utils

echo - Write Procfile...
echo web: node server.js >> build/Procfile

echo - Copy package.json...
cp package.json build/package.json

if [ "$1" = "local" ]; then
	cp .env build/.env
fi

# Copy WWW
echo
echo Copy web app...
echo -------------------------

mkdir build/www
mkdir build/www/css
mkdir build/www/js
mkdir build/www/img
mkdir build/www/fonts
mkdir build/www/templates
mkdir build/www/templates_compiled

echo - Copy css...
cp -r src/www/css/* build/www/css

echo - Copy js...
mv src/www/app.build.js build/www/js/app.js

echo - Copy images...
cp -r src/www/img/* build/www/img

echo - Copy fonts...
cp -r src/www/fonts/* build/www/fonts

echo - Copy raw templates...
cp -r src/www/templates/* build/www/templates
rm build/www/templates/layout/header.ejs-e

echo - Copy compiled templates...
cp -r src/www/templates_compiled/*.js build/www/templates_compiled
#rm -Rf ./src/www/templates_compiled/

# Reset layout header template file
mv -f $file-e $file