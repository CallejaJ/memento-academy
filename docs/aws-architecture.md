# AWS Architecture - Memento Academy

## Overview

Memento Academy uses a **hybrid cloud architecture** combining Vercel (primary deployment) with AWS Free Tier services for CDN, monitoring, and email.

```
                    ┌─────────────┐
                    │   GitHub    │
                    │   Actions   │
                    └──────┬──────┘
                           │
               ┌───────────┼───────────┐
               │                       │
          Vercel Deploy          AWS Deploy
          (next build)          (Terraform)
               │                       │
     ┌─────────┴─────────┐   ┌────────┴────────┐
     │   Vercel Edge      │   │   CloudFront    │
     │   (App + API)      │   │   Distribution  │
     └─────────┬──────────┘   └────────┬────────┘
               │                       │
     ┌─────────┴──────────┐   ┌────────┴────────┐
     │   Supabase         │   │   S3 Bucket     │
     │   (DB + Auth)      │   │  (Static Assets)│
     └────────────────────┘   └─────────────────┘
                                       │
                              ┌────────┴────────┐
                              │   CloudWatch    │
                              │  (Monitoring)   │
                              └────────┬────────┘
                                       │
                              ┌────────┴────────┐
                              │   SNS + SES     │
                              │ (Alerts+Email)  │
                              └─────────────────┘
```

## AWS Services Used

| Service | Purpose | Free Tier Limit | Monthly Usage |
|---------|---------|-----------------|---------------|
| **S3** | Static asset storage | 5 GB, 20K GET | ~25 MB, ~5K GET |
| **CloudFront** | Global CDN | 1 TB, 10M requests | ~2 GB, ~50K req |
| **CloudWatch** | Monitoring dashboard + alarms | 10 alarms | 3 alarms |
| **SNS** | Alert notifications | 1M publishes | ~10 |
| **SES** | Transactional email | 200/day (sandbox) | ~5/day |
| **IAM** | OIDC for GitHub Actions | Always free | 1 role |

## Design Decisions

### Why Hybrid Cloud (not full AWS migration)?

- **Vercel** is purpose-built for Next.js - it handles SSR, ISR, edge middleware, and automatic deployments better than any AWS alternative
- **Supabase** provides PostgreSQL + Auth + Row Level Security with 40+ migrations already in place - migrating to RDS would lose these integrations
- AWS complements by adding CDN, monitoring, and email capabilities that demonstrate cloud skills

### Why NOT EC2/ECS?

A `t2.micro` (1 vCPU, 1GB RAM) cannot run Next.js 15 + React 19 + Prisma + Web3 libraries reliably. Replacing Vercel's global edge network with a single EC2 instance is an architectural downgrade.

### Why NOT Lambda + API Gateway?

Next.js middleware (i18n + session refresh) runs on every request and doesn't map well to Lambda functions. Cold starts with Prisma and Web3 libraries (viem, @zerodev/sdk) would be 5-10+ seconds.

## Security Model

- **No public S3 access** - Assets served exclusively through CloudFront Origin Access Control (OAC)
- **OIDC authentication** - GitHub Actions assumes IAM roles without static AWS credentials
- **Least-privilege IAM** - GitHub Actions role can only manage S3 objects, create CloudFront invalidations, and send SES emails
- **Security headers** - CloudFront adds HSTS, X-Content-Type-Options, X-Frame-Options, and X-XSS-Protection

## Infrastructure as Code

All AWS infrastructure is defined in Terraform files under `infrastructure/terraform/`:

| File | Resources |
|------|-----------|
| `main.tf` | Provider, backend configuration |
| `variables.tf` | Input variable declarations |
| `s3.tf` | S3 bucket with versioning, CORS, lifecycle rules |
| `cloudfront.tf` | CloudFront distribution with OAC, cache policies, security headers |
| `iam.tf` | GitHub Actions OIDC provider and IAM role |
| `monitoring.tf` | CloudWatch dashboard and alarms |
| `sns.tf` | SNS topic for alarm notifications |
| `ses.tf` | SES domain identity and email templates |
| `outputs.tf` | Output values for CI/CD integration |

## CI/CD Pipelines

### `aws-deploy.yml` (on push to main)
1. Terraform validate and plan
2. Terraform apply (infrastructure changes)
3. Sync static assets to S3
4. Invalidate CloudFront cache

### `terraform-pr.yml` (on PR with infrastructure changes)
1. Run `terraform plan`
2. Post plan output as PR comment for review

### `keep-alive.yml` (daily health check)
1. Ping Supabase database
2. Verify S3 bucket accessibility
3. Check CloudFront distribution status

## Setup Instructions

### Prerequisites

- AWS CLI configured with credentials
- Terraform >= 1.5.0
- AWS account with Free Tier eligibility

### Initial Setup

1. **Bootstrap Terraform state backend** (run once):
   ```bash
   chmod +x infrastructure/scripts/bootstrap.sh
   bash infrastructure/scripts/bootstrap.sh
   ```

2. **Configure variables**:
   ```bash
   cp infrastructure/terraform/environments/prod.tfvars.example infrastructure/terraform/environments/prod.tfvars
   # Edit prod.tfvars with your values
   ```

3. **Initialize and apply Terraform**:
   ```bash
   cd infrastructure/terraform
   terraform init
   terraform plan -var-file=environments/prod.tfvars
   terraform apply -var-file=environments/prod.tfvars
   ```

4. **Add DNS records** for SES domain verification:
   - TXT record from `terraform output ses_verification_token`
   - CNAME records from `terraform output ses_dkim_tokens`

5. **Configure GitHub Secrets**:
   - `AWS_ROLE_ARN`: from `terraform output github_actions_role_arn`
   - `CLOUDFRONT_DISTRIBUTION_ID`: from `terraform output cloudfront_distribution_id`

6. **Set environment variable** in Vercel:
   - `NEXT_PUBLIC_CDN_URL`: from `terraform output cloudfront_domain_name`

7. **Sync assets**:
   ```bash
   ENVIRONMENT=prod CLOUDFRONT_DISTRIBUTION_ID=<id> bash infrastructure/scripts/sync-assets.sh
   ```

## Cost Analysis

At current usage levels (~25MB storage, ~5K requests/month), all services remain within AWS Free Tier. After the 12-month free tier expires:

- S3: ~$0.001/month (25MB at $0.023/GB)
- CloudFront: $0 (1TB always free)
- CloudWatch: $0 (10 alarms always free)
- SNS: $0 (1M publishes always free)
- SES: $0 (62K emails/month always free from EC2)

**Estimated post-free-tier cost: < $0.01/month**
