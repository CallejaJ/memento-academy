# SNS topic for CloudWatch alarm notifications
resource "aws_sns_topic" "alerts" {
  name = "memento-academy-alerts-${var.environment}"
}

# Email subscription for alarm notifications
resource "aws_sns_topic_subscription" "email_alert" {
  topic_arn = aws_sns_topic.alerts.arn
  protocol  = "email"
  endpoint  = var.alert_email
}
