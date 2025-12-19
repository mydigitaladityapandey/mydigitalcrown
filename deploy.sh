#!/bin/bash

# Quick Deployment Script for Vercel
# Usage: ./deploy.sh

echo "🚀 MyDigital Crown - Quick Deploy to Vercel"
echo "============================================"
echo ""

# Check if vercel is installed
if ! command -v vercel &> /dev/null
then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

echo "✅ Vercel CLI ready"
echo ""

# Check if logged in
echo "🔐 Checking Vercel authentication..."
vercel whoami

if [ $? -ne 0 ]; then
    echo "🔑 Please login to Vercel:"
    vercel login
fi

echo ""
echo "📋 Current environment variables:"
vercel env ls

echo ""
echo "❓ Do you want to add/update WEB3FORMS_ACCESS_KEY? (y/n)"
read -r response

if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]
then
    echo "🔑 Adding environment variable..."
    echo "Enter 'production' when prompted for environment"
    vercel env add WEB3FORMS_ACCESS_KEY
fi

echo ""
echo "🚀 Deploying to production..."
vercel --prod

echo ""
echo "✅ Deployment complete!"
echo "📧 Don't forget to test your form after deployment"
echo ""
echo "🌐 Your site is now live!"
