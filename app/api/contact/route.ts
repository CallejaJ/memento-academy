import { type NextRequest, NextResponse } from "next/server"
import * as brevo from "@getbrevo/brevo"
import { z } from "zod"
import { sendEmail, isSESConfigured } from "@/lib/ses"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

const ADMIN_EMAIL = "posicionadoenlaweb@gmail.com"

async function sendViaSES(name: string, email: string, subject: string, message: string) {
  const htmlContent = `
    <html>
      <body>
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <br/>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      </body>
    </html>
  `

  const result = await sendEmail({
    to: [ADMIN_EMAIL],
    subject: `[Website Contact] ${subject}`,
    html: htmlContent,
    replyTo: email,
  })

  return { messageId: result.MessageId }
}

async function sendViaBrevo(name: string, email: string, subject: string, message: string) {
  const apiInstance = new brevo.TransactionalEmailsApi()

  if (!process.env.BREVO_API_KEY) {
    throw new Error("BREVO_API_KEY is not defined")
  }

  apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY)

  const sendSmtpEmail = new brevo.SendSmtpEmail()

  sendSmtpEmail.subject = `[Website Contact] ${subject}`
  sendSmtpEmail.htmlContent = `
    <html>
      <body>
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <br/>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      </body>
    </html>
  `
  sendSmtpEmail.sender = { name: "Memento Academy Contact", email: ADMIN_EMAIL }
  sendSmtpEmail.to = [{ email: ADMIN_EMAIL, name: "Admin" }]
  sendSmtpEmail.replyTo = { email: email, name: name }

  const data = await apiInstance.sendTransacEmail(sendSmtpEmail)

  return { messageId: data.body.messageId }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const result = contactSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.errors },
        { status: 400 }
      )
    }

    const { name, email, subject, message } = result.data

    // Use AWS SES if configured, otherwise fall back to Brevo
    const data = isSESConfigured()
      ? await sendViaSES(name, email, subject, message)
      : await sendViaBrevo(name, email, subject, message)

    return NextResponse.json({ success: true, messageId: data.messageId })
  } catch (error: any) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    )
  }
}
