#!/bin/sh

# Exit immediately if a command exits with a non-zero status.
set -e

echo "Running Custom Tailwind Compilation..."
# 1. Compile Tailwind CSS and place the output in the expected location
npx tailwindcss -i ./src/index.css -o ./dist/assets/index.css --minify

echo "Running Vite Build..."
# 2. Run the main Vite build
vite build

echo "Build complete."