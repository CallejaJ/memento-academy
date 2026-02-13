#!/bin/bash
# Sync static assets from public/ to S3 and invalidate CloudFront cache
set -euo pipefail

BUCKET_NAME="memento-academy-assets-${ENVIRONMENT:-prod}"
DISTRIBUTION_ID="${CLOUDFRONT_DISTRIBUTION_ID:?Error: CLOUDFRONT_DISTRIBUTION_ID is required}"

echo "=== Memento Academy - Asset Sync ==="
echo "Bucket: s3://${BUCKET_NAME}"
echo "Distribution: ${DISTRIBUTION_ID}"
echo ""

# Sync images with long cache headers
echo "Syncing images..."
aws s3 sync ./public/images "s3://${BUCKET_NAME}/images" \
  --cache-control "public, max-age=2592000, immutable" \
  --delete

# Sync diagrams
echo "Syncing diagrams..."
aws s3 sync ./public/diagrams "s3://${BUCKET_NAME}/diagrams" \
  --cache-control "public, max-age=2592000, immutable" \
  --delete

# Sync sounds
echo "Syncing sounds..."
aws s3 sync ./public/sounds "s3://${BUCKET_NAME}/sounds" \
  --cache-control "public, max-age=2592000, immutable" \
  --delete

# Sync favicon with shorter cache (might change with rebrand)
echo "Syncing favicon..."
aws s3 sync ./public/favicon "s3://${BUCKET_NAME}/favicon" \
  --cache-control "public, max-age=604800" \
  --delete

# Sync root-level static assets
echo "Syncing root-level assets..."
for file in hero-image.png memento-academy-logo.png memento-logo.jpg memento_academy_logo_text.png; do
  if [ -f "./public/${file}" ]; then
    aws s3 cp "./public/${file}" "s3://${BUCKET_NAME}/${file}" \
      --cache-control "public, max-age=2592000, immutable"
  fi
done

# Invalidate CloudFront cache
echo "Invalidating CloudFront cache..."
INVALIDATION_ID=$(aws cloudfront create-invalidation \
  --distribution-id "${DISTRIBUTION_ID}" \
  --paths "/*" \
  --query 'Invalidation.Id' \
  --output text)

echo ""
echo "=== Sync complete! ==="
echo "CloudFront invalidation ID: ${INVALIDATION_ID}"
echo "Note: Cache invalidation may take a few minutes to propagate globally."
