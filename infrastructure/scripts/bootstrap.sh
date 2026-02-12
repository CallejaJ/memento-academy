#!/bin/bash
# Bootstrap script for Terraform remote state
# Run this ONCE before the first 'terraform init'
# This creates the S3 bucket and DynamoDB table for Terraform state management
set -euo pipefail

AWS_REGION="${AWS_REGION:-us-east-1}"
STATE_BUCKET="memento-academy-terraform-state"
LOCK_TABLE="memento-academy-terraform-locks"

echo "=== Memento Academy - Terraform State Bootstrap ==="
echo "Region: ${AWS_REGION}"
echo ""

# Create S3 bucket for Terraform state
echo "Creating S3 bucket for Terraform state..."
aws s3api create-bucket \
  --bucket "${STATE_BUCKET}" \
  --region "${AWS_REGION}"

# Enable versioning for state file protection
aws s3api put-bucket-versioning \
  --bucket "${STATE_BUCKET}" \
  --versioning-configuration Status=Enabled

# Enable server-side encryption
aws s3api put-bucket-encryption \
  --bucket "${STATE_BUCKET}" \
  --server-side-encryption-configuration '{
    "Rules": [{"ApplyServerSideEncryptionByDefault": {"SSEAlgorithm": "AES256"}}]
  }'

# Block all public access
aws s3api put-public-access-block \
  --bucket "${STATE_BUCKET}" \
  --public-access-block-configuration '{
    "BlockPublicAcls": true,
    "IgnorePublicAcls": true,
    "BlockPublicPolicy": true,
    "RestrictPublicBuckets": true
  }'

echo "S3 bucket '${STATE_BUCKET}' created successfully."

# Create DynamoDB table for state locking
echo "Creating DynamoDB table for state locking..."
aws dynamodb create-table \
  --table-name "${LOCK_TABLE}" \
  --attribute-definitions AttributeName=LockID,AttributeType=S \
  --key-schema AttributeName=LockID,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST \
  --region "${AWS_REGION}"

echo "DynamoDB table '${LOCK_TABLE}' created successfully."

echo ""
echo "=== Bootstrap complete! ==="
echo "You can now run: cd infrastructure/terraform && terraform init"
