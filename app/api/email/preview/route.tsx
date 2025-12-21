import { NextResponse } from "next/server"
import { Resend } from "resend"
import { getBaseUrl } from "@/lib/utils"

// This is just for previewing emails during development
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get("email") || "test@example.com"
  const name = searchParams.get("name") || "Crypto Enthusiast"

  const baseUrl = getBaseUrl()

  try {
    const resend = new Resend(process.env.RESEND_API_KEY || "re_7TNLCsuj_EYn9ka9AUgBi9ixB9LGgCefo")

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #0e1629; padding: 20px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0;">Welcome to Memento Academy!</h1>
        </div>
        <div style="padding: 20px; background-color: #ffffff;">
          <p>Hello ${name},</p>
          <p>Thank you for subscribing to the Memento Academy newsletter! You're now part of our community of 50,000+ crypto enthusiasts.</p>
          <p>Here's what you can expect:</p>
          <ul>
            <li>Daily crypto news and market analysis</li>
            <li>Exclusive NFT drop alerts</li>
            <li>Course announcements and special offers</li>
            <li>Trading signals and insights</li>
          </ul>
          <p>Stay tuned for our next update!</p>
          <div style="text-align: center; margin-top: 30px;">
            <a href="${baseUrl}/dashboard" style="background-color: #06b6d4; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Visit Your Dashboard</a>
          </div>
        </div>
        <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
          <p>© ${new Date().getFullYear()} Memento Academy. All rights reserved.</p>
          <p>If you didn't sign up for this newsletter, you can <a href="${baseUrl}/unsubscribe?email=${email}" style="color: #06b6d4;">unsubscribe here</a>.</p>
        </div>
      </div>
    `

    // For preview, we'll just return the HTML directly
    return new NextResponse(emailHtml, {
      headers: {
        "Content-Type": "text/html",
      },
    })

    // In a real implementation, you would send the email:
    /*
    const data = await resend.emails.send({
      from: "Memento Academy <newsletter@mementoacademy.com>",
      to: [email],
      subject: "Welcome to Memento Academy!",
      html: emailHtml,
    });
    
    return NextResponse.json(data);
    */
  } catch (error) {
    return NextResponse.json({ error })
  }
}
