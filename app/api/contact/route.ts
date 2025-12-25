import { type NextRequest, NextResponse } from "next/server"
import * as brevo from "@getbrevo/brevo"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Configure Brevo API
    const apiInstance = new brevo.TransactionalEmailsApi()
    
    // Note: API key should be in environment variables
    // Ideally: process.env.BREVO_API_KEY
    if (process.env.BREVO_API_KEY) {
      apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY)
    } else {
       // Fallback for demo purposes if env var isn't set yet, though checking for it is better.
       // We'll return an error if it's missing to prompt the user.
       console.error("BREVO_API_KEY is not defined")
       return NextResponse.json({ error: "Server configuration error: Missing API Key" }, { status: 500 })
    }

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
    sendSmtpEmail.sender = { name: "Memento Academy Contact", email: "posicionadoenlaweb@gmail.com" }
    sendSmtpEmail.to = [{ email: "posicionadoenlaweb@gmail.com", name: "Admin" }]
    sendSmtpEmail.replyTo = { email: email, name: name }

    const data = await apiInstance.sendTransacEmail(sendSmtpEmail)

    return NextResponse.json({ success: true, messageId: data.body.messageId })
  } catch (error: any) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    )
  }
}
