# SES domain identity for transactional email
resource "aws_ses_domain_identity" "main" {
  domain = var.domain_name
}

# DKIM configuration for email authentication
resource "aws_ses_domain_dkim" "main" {
  domain = aws_ses_domain_identity.main.domain
}

# Email template: contact form notification
resource "aws_ses_template" "contact_notification" {
  name    = "memento-contact-notification"
  subject = "[Contact] {{subject}}"
  html    = <<-HTML
    <html>
      <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a2e;">New Contact Message</h2>
        <p><strong>Name:</strong> {{name}}</p>
        <p><strong>Email:</strong> {{email}}</p>
        <p><strong>Subject:</strong> {{subject}}</p>
        <hr style="border: 1px solid #eee;" />
        <h3>Message:</h3>
        <p>{{message}}</p>
        <hr style="border: 1px solid #eee;" />
        <p style="color: #666; font-size: 12px;">Sent from Memento Academy contact form</p>
      </body>
    </html>
  HTML
  text    = "New contact from {{name}} ({{email}}): {{subject}} - {{message}}"
}

# Email template: newsletter welcome
resource "aws_ses_template" "newsletter_welcome" {
  name    = "memento-newsletter-welcome"
  subject = "Welcome to Memento Academy!"
  html    = <<-HTML
    <html>
      <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a2e;">Welcome to Memento Academy!</h2>
        <p>Thank you for subscribing to our newsletter.</p>
        <p>You'll receive updates about new courses, blockchain education, and Web3 developments.</p>
        <hr style="border: 1px solid #eee;" />
        <p style="color: #666; font-size: 12px;">Memento Academy - Free Web3 Education</p>
      </body>
    </html>
  HTML
  text    = "Welcome to Memento Academy! Thank you for subscribing to our newsletter."
}
