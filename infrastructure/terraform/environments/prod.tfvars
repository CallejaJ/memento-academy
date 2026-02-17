# Production environment variables
# NEVER commit this file to version control

aws_region  = "us-east-1"
environment = "prod"

# Domain name
domain_name = "memento-academy.com"

# Email for CloudWatch alarm notifications
alert_email = "callejaj@proton.me"

# GitHub repository (owner/repo format)
github_repo = "CallejaJ/memento-academy"

# Allowed CORS origins
allowed_origins = [
  "http://localhost:3000",
  "https://*.vercel.app",
  "https://memento-academy.com",
  "https://www.memento-academy.com"
]
