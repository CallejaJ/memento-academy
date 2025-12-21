import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend("re_7TNLCsuj_EYn9ka9AUgBi9ixB9LGgCefo")

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    console.log("Testing email send to:", email)

    const result = await resend.emails.send({
      from: "onboarding@resend.dev", // Using Resend's default domain
      to: email,
      subject: "Test Email from Memento Academy",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #06b6d4;">Email Test Successful! 🎉</h1>
          <p>This is a test email to verify your Resend configuration is working.</p>
          <p>If you received this email, your newsletter system should be working correctly.</p>
          <p><strong>Time sent:</strong> ${new Date().toISOString()}</p>
        </div>
      `,
    })

    console.log("Test email result:", result)

    return NextResponse.json({
      success: true,
      message: "Test email sent successfully",
      emailId: result.data?.id,
      result: result,
    })
  } catch (error: any) {
    console.error("Test email failed:", error)
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        details: error,
      },
      { status: 500 },
    )
  }
}
