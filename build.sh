#!/bin/sh
set -e

echo "Running Custom Tailwind Compilation via npm script..."

# 1. CRITICAL FIX: Explicitly call the npm script
npm run build:css

echo "Running Vite Build..."

# 2. Run the main Vite build
npm run build

echo "Build complete."