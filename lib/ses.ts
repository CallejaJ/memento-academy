import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2"

const ses = new SESv2Client({
  region: process.env.AWS_REGION || "us-east-1",
})

interface SendEmailParams {
  to: string[]
  subject: string
  html: string
  replyTo?: string
  from?: string
}

export async function sendEmail({
  to,
  subject,
  html,
  replyTo,
  from,
}: SendEmailParams) {
  const command = new SendEmailCommand({
    FromEmailAddress:
      from || `Memento Academy <noreply@${process.env.SES_DOMAIN || "memento-academy.com"}>`,
    Destination: { ToAddresses: to },
    Content: {
      Simple: {
        Subject: { Data: subject },
        Body: { Html: { Data: html } },
      },
    },
    ReplyToAddresses: replyTo ? [replyTo] : undefined,
  })

  return ses.send(command)
}

/**
 * Check if AWS SES is configured and available.
 * SES is used when AWS credentials are present; otherwise falls back to Brevo.
 */
export function isSESConfigured(): boolean {
  return !!(
    process.env.AWS_ACCESS_KEY_ID || process.env.AWS_ROLE_ARN
  )
}
