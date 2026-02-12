variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Environment name (prod, staging)"
  type        = string
  default     = "prod"
}

variable "domain_name" {
  description = "Primary domain name for the application"
  type        = string
}

variable "alert_email" {
  description = "Email address for CloudWatch alarm notifications"
  type        = string
}

variable "github_repo" {
  description = "GitHub repository in format owner/repo"
  type        = string
}

variable "allowed_origins" {
  description = "List of allowed CORS origins for S3 bucket"
  type        = list(string)
  default = [
    "http://localhost:3000",
    "https://*.vercel.app"
  ]
}
