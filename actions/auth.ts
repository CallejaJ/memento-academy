"use server";

import { z } from "zod";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { Resend } from "resend";

// Validation schema
const resetPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export async function sendPasswordResetEmail(email: string) {
  // 1. Initial validation
  const validationResult = resetPasswordSchema.safeParse({ email });
  if (!validationResult.success) {
    return {
      success: false,
      message: validationResult.error.errors[0].message,
    };
  }

  const validEmail = validationResult.data.email;
  console.log(`🔐 Password reset requested for: ${validEmail}`);

  try {
    // 2. Generate Recovery Link using Supabase Admin
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

    const { data, error } = await supabaseAdmin.auth.admin.generateLink({
      type: "recovery",
      email: validEmail,
      options: {
        redirectTo: `${baseUrl}/auth/callback?next=/auth/reset-password`,
      },
    });

    if (error) {
      console.error("❌ Error generating recovery link:", error);
      return {
        success: false,
        message:
          "If an account exists with this email, we sent a recovery link. Please check your inbox.",
      };
    }

    const recoveryLink = data.properties.action_link;
    console.log("🔗 Recovery link generated successfully");

    // 3. Send Email via Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data: emailData, error: emailError } = await resend.emails.send({
      from: "Memento Academy <noreply@memento-academy.com>", // Using verified domain
      to: [validEmail],
      subject: "Reset your Memento Academy password 🔐",
      html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #0f172a; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0f172a; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); border-radius: 16px; border: 1px solid #334155; overflow: hidden;">
          
          <tr>
            <td style="padding: 40px 40px 20px; text-align: center;">
              <img src="https://memento-academy.com/memento-academy-logo.png" alt="Memento Academy" width="40" height="40" style="vertical-align: middle; margin-right: 10px;">
              <span style="font-size: 28px; font-weight: 700; color: #14b8a6; font-family: Georgia, serif; vertical-align: middle;">
                Memento Academy
              </span>
            </td>
          </tr>
          
          
          <tr>
            <td style="padding: 20px 40px 40px;">
              <h2 style="margin: 0 0 16px; color: #f1f5f9; font-size: 24px; font-weight: 600;">
                Reset your password 🔐
              </h2>
              <p style="margin: 0 0 24px; color: #94a3b8; font-size: 16px; line-height: 1.6;">
                We received a request to reset your password. Click the button below to create a new password:
              </p>
              
              
              <table cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                <tr>
                  <td style="background: linear-gradient(90deg, #06b6d4, #14b8a6); border-radius: 8px;">
                    <a href="${recoveryLink}" style="display: inline-block; padding: 16px 32px; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 600;">
                      Reset Password
                    </a>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 32px 0 0; color: #64748b; font-size: 14px; line-height: 1.6;">
                If you didn't request this, you can safely ignore this email.
              </p>
            </td>
          </tr>
          
          
          <tr>
            <td style="padding: 24px 40px; background-color: #1e293b; border-top: 1px solid #334155;">
              <p style="margin: 0; color: #64748b; font-size: 12px; text-align: center;">
                © ${new Date().getFullYear()} Memento Academy. Free Web3 Education for Everyone.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
    });

    if (emailError) {
      console.error("❌ Resend API Error:", emailError);
      return {
        success: false,
        message: "Failed to send email. Please try again.",
      };
    }

    console.log("✅ Password reset email sent via Resend:", emailData?.id);

    return {
      success: true,
      message: "We've sent password reset instructions to your email.",
    };
  } catch (err: any) {
    console.error("🔥 Error in sendPasswordResetEmail:", err);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
