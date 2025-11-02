#!/bin/bash

# Freudian Spaceship Nuxt - Clean Cache and Restart Dev Server
# This script clears Nuxt's cache directories and restarts the dev server
# Use this when you encounter HMR (Hot Module Replacement) issues

echo "🧹 Cleaning Nuxt cache directories..."

# Remove cache directories
rm -rf .nuxt .output node_modules/.cache

echo "✅ Cache cleared successfully!"
echo ""
echo "🚀 Starting dev server..."
echo ""

# Start the dev server
npm run dev
