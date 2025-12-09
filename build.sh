#!/bin/sh
set -e

echo "Running Custom Tailwind Compilation..."

# 1. CRITICAL FIX: Create the output directory before running Tailwind
mkdir -p dist/assets

# 2. Compile Tailwind CSS and place the output in the expected location
npx tailwindcss -i ./src/index.css -o ./dist/assets/index.css --minify

echo "Running Vite Build..."
# 3. Run the main Vite build
vite build

echo "Build complete."