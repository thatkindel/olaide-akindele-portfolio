#!/bin/sh
set -e
echo "Running Custom Tailwind Compilation via npm script..."
npm run build:css
echo "Running Vite Build..."
npm run build
echo "Build complete."