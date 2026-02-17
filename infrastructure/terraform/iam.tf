# OIDC provider for GitHub Actions (keyless authentication)
resource "aws_iam_openid_connect_provider" "github" {
  url             = "https://token.actions.githubusercontent.com"
  client_id_list  = ["sts.amazonaws.com"]
  thumbprint_list = ["6938fd4d98bab03faadb97b34396831e3780aea1"]
}

# IAM role assumed by GitHub Actions via OIDC
resource "aws_iam_role" "github_actions" {
  name = "memento-academy-github-actions-${var.environment}"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Federated = aws_iam_openid_connect_provider.github.arn
        }
        Action = "sts:AssumeRoleWithWebIdentity"
        Condition = {
          StringEquals = {
            "token.actions.githubusercontent.com:aud" = "sts.amazonaws.com"
          }
          StringLike = {
            "token.actions.githubusercontent.com:sub" = "repo:${var.github_repo}:*"
          }
        }
      }
    ]
  })
}

# Policy: S3 asset management (least-privilege)
resource "aws_iam_role_policy" "s3_assets" {
  name = "s3-assets-management"
  role = aws_iam_role.github_actions.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "S3AssetManagement"
        Effect = "Allow"
        Action = [
          "s3:PutObject",
          "s3:GetObject",
          "s3:DeleteObject",
          "s3:ListBucket"
        ]
        Resource = [
          aws_s3_bucket.assets.arn,
          "${aws_s3_bucket.assets.arn}/*"
        ]
      }
    ]
  })
}

# Policy: CloudFront cache invalidation
resource "aws_iam_role_policy" "cloudfront_invalidation" {
  name = "cloudfront-invalidation"
  role = aws_iam_role.github_actions.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "CloudFrontInvalidation"
        Effect = "Allow"
        Action = [
          "cloudfront:CreateInvalidation",
          "cloudfront:GetDistribution"
        ]
        Resource = [aws_cloudfront_distribution.assets.arn]
      }
    ]
  })
}

# Policy: SES email sending
resource "aws_iam_role_policy" "ses_sending" {
  name = "ses-email-sending"
  role = aws_iam_role.github_actions.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "SESSending"
        Effect = "Allow"
        Action = [
          "ses:SendEmail",
          "ses:SendRawEmail"
        ]
        Resource = ["*"]
        Condition = {
          StringEquals = {
            "ses:FromAddress" = "noreply@${var.domain_name}"
          }
        }
      }
    ]
  })
}

# Policy: Terraform State and Lock management
resource "aws_iam_role_policy" "terraform_backend" {
  name = "terraform-backend-management"
  role = aws_iam_role.github_actions.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "TerraformStateAccess"
        Effect = "Allow"
        Action = [
          "s3:ListBucket",
          "s3:GetObject",
          "s3:PutObject"
        ]
        Resource = [
          "arn:aws:s3:::memento-academy-terraform-state",
          "arn:aws:s3:::memento-academy-terraform-state/*"
        ]
      },
      {
        Sid    = "TerraformLockAccess"
        Effect = "Allow"
        Action = [
          "dynamodb:DescribeTable",
          "dynamodb:GetItem",
          "dynamodb:PutItem",
          "dynamodb:DeleteItem"
        ]
        Resource = [
          "arn:aws:dynamodb:*:*:table/memento-academy-terraform-locks"
        ]
      }
    ]
  })
}
