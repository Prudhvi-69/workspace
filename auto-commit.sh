#!/bin/bash
APP_NUMBER=$1

if [ -z "$APP_NUMBER" ]; then
    echo "Usage: ./auto-commit.sh <app-number>"
    exit 1
fi

echo "🚀 Auto-committing app-$APP_NUMBER..."

# Add all changes
git add -A

# Commit with app number
git commit -m "Anime React Project - app-$APP_NUMBER"

# Try to push (will show error if auth needed, but commit is saved)
git push origin main 2>/dev/null || echo "⚠️  Commit saved locally. GitHub push requires authentication."

echo "✅ App-$APP_NUMBER committed successfully!"