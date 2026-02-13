# CloudWatch Dashboard for operational visibility
resource "aws_cloudwatch_dashboard" "main" {
  dashboard_name = "memento-academy-${var.environment}"

  dashboard_body = jsonencode({
    widgets = [
      {
        type   = "metric"
        x      = 0
        y      = 0
        width  = 12
        height = 6
        properties = {
          metrics = [
            ["AWS/CloudFront", "Requests", "DistributionId", aws_cloudfront_distribution.assets.id, "Region", "Global"],
            ["AWS/CloudFront", "BytesDownloaded", "DistributionId", aws_cloudfront_distribution.assets.id, "Region", "Global"]
          ]
          period = 300
          stat   = "Sum"
          region = "us-east-1"
          title  = "CloudFront - Requests & Bandwidth"
        }
      },
      {
        type   = "metric"
        x      = 12
        y      = 0
        width  = 12
        height = 6
        properties = {
          metrics = [
            ["AWS/CloudFront", "4xxErrorRate", "DistributionId", aws_cloudfront_distribution.assets.id, "Region", "Global"],
            ["AWS/CloudFront", "5xxErrorRate", "DistributionId", aws_cloudfront_distribution.assets.id, "Region", "Global"]
          ]
          period = 300
          stat   = "Average"
          region = "us-east-1"
          title  = "CloudFront - Error Rates"
        }
      },
      {
        type   = "metric"
        x      = 0
        y      = 6
        width  = 12
        height = 6
        properties = {
          metrics = [
            ["AWS/S3", "BucketSizeBytes", "BucketName", aws_s3_bucket.assets.id, "StorageType", "StandardStorage"],
            ["AWS/S3", "NumberOfObjects", "BucketName", aws_s3_bucket.assets.id, "StorageType", "AllStorageTypes"]
          ]
          period = 86400
          stat   = "Average"
          region = var.aws_region
          title  = "S3 - Storage Metrics"
        }
      },
      {
        type   = "metric"
        x      = 12
        y      = 6
        width  = 12
        height = 6
        properties = {
          metrics = [
            ["AWS/SES", "Send"],
            ["AWS/SES", "Bounce"],
            ["AWS/SES", "Complaint"]
          ]
          period = 86400
          stat   = "Sum"
          region = var.aws_region
          title  = "SES - Email Metrics"
        }
      }
    ]
  })
}

# Alarm: CloudFront 5xx error rate > 5%
resource "aws_cloudwatch_metric_alarm" "cloudfront_5xx" {
  alarm_name          = "memento-cloudfront-5xx-high"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 2
  metric_name         = "5xxErrorRate"
  namespace           = "AWS/CloudFront"
  period              = 300
  statistic           = "Average"
  threshold           = 5
  alarm_description   = "CloudFront 5xx error rate exceeds 5%"
  alarm_actions       = [aws_sns_topic.alerts.arn]
  ok_actions          = [aws_sns_topic.alerts.arn]

  dimensions = {
    DistributionId = aws_cloudfront_distribution.assets.id
    Region         = "Global"
  }
}

# Alarm: S3 bucket approaching free tier limit (4GB of 5GB)
resource "aws_cloudwatch_metric_alarm" "s3_size_warning" {
  alarm_name          = "memento-s3-size-warning"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 1
  metric_name         = "BucketSizeBytes"
  namespace           = "AWS/S3"
  period              = 86400
  statistic           = "Average"
  threshold           = 4294967296 # 4 GB
  alarm_description   = "S3 bucket approaching free tier limit (4GB/5GB)"
  alarm_actions       = [aws_sns_topic.alerts.arn]

  dimensions = {
    BucketName  = aws_s3_bucket.assets.id
    StorageType = "StandardStorage"
  }
}

# Alarm: SES bounce rate > 5%
resource "aws_cloudwatch_metric_alarm" "ses_bounce_rate" {
  alarm_name          = "memento-ses-bounce-high"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 1
  metric_name         = "Reputation.BounceRate"
  namespace           = "AWS/SES"
  period              = 86400
  statistic           = "Average"
  threshold           = 0.05
  alarm_description   = "SES bounce rate exceeds 5%"
  alarm_actions       = [aws_sns_topic.alerts.arn]
}
