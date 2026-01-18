"use server";

import { createClient } from "@/lib/supabase-server";
import * as brevo from "@getbrevo/brevo";

import { z } from "zod";

// Initialize Brevo API
const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY || ""
);

const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  fullName: z.string().optional(),
});

export async function subscribeToNewsletter(formData: FormData) {
  const rawData = {
    email: formData.get("email") as string,
    fullName: (formData.get("fullName") as string) || undefined,
  };

  // Validate input with Zod
  const validationResult = subscribeSchema.safeParse(rawData);

  if (!validationResult.success) {
    return {
      success: false,
      message: validationResult.error.errors[0].message,
    };
  }

  const { email, fullName } = validationResult.data;
  const web3Basics = formData.get("web3_basics") === "on";
  const cbdcEducation = formData.get("cbdc_education") === "on";
  const freeCourses = formData.get("free_courses") === "on";
  const communityEvents = formData.get("community_events") === "on";

  console.log("Newsletter subscription attempt for:", email);

  try {
    const supabase = await createClient();

    // Check if email already exists using Supabase
    const { data: existing, error: findError } = await supabase
      .from("newsletter_subscribers")
      .select("id")
      .eq("email", email)
      .single();

    if (findError && findError.code !== "PGRST116") {
      // PGRST116 = no rows found (which is fine)
      console.error("Error checking existing subscriber:", findError);
      throw new Error("Error checking subscription status");
    }

    if (existing) {
      console.log("Email already exists:", email);
      return {
        success: false,
        message: "This email is already subscribed to our newsletter!",
      };
    }

    // Insert new subscriber using Supabase
    const { error: insertError } = await supabase
      .from("newsletter_subscribers")
      .insert({
        email,
        full_name: fullName || null,
        subscription_preferences: {
          web3_basics: web3Basics,
          cbdc_education: cbdcEducation,
          free_courses: freeCourses,
          community_events: communityEvents,
        },
        confirmed_at: new Date().toISOString(),
      });

    if (insertError) {
      console.error("Error inserting subscriber:", insertError);
      throw new Error("Failed to register subscription");
    }

    console.log("Subscriber added to database successfully");

    // Generate base URL for links
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

    console.log("Attempting to send email via Brevo...");

    // Send confirmation email with Brevo
    try {
      const sendSmtpEmail = new brevo.SendSmtpEmail();

      sendSmtpEmail.subject = "Welcome to Memento Academy!";
      sendSmtpEmail.sender = {
        name: "Memento Academy",
        email: "posicionadoenlaweb@gmail.com",
      };
      sendSmtpEmail.to = [{ email: email, name: fullName || "Subscriber" }];
      sendSmtpEmail.htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #0e1629; padding: 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0;">Welcome to Memento Academy!</h1>
          </div>
          <div style="padding: 20px; background-color: #ffffff;">
            <p>Hello ${fullName || "there"},</p>
            <p>Thank you for subscribing to the Memento Academy newsletter! You're now part of our community of 50,000+ crypto enthusiasts.</p>
            <p>Here's what you can expect:</p>
            <ul>
              ${web3Basics ? "<li>Introduction to Web3 and Blockchain</li>" : ""}
              ${cbdcEducation ? "<li>Understanding Digital Currencies (CBDCs)</li>" : ""}
              ${freeCourses ? "<li>New free course releases</li>" : ""}
              ${communityEvents ? "<li>Community events and live Q&A</li>" : ""}
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
      `;

      const emailResult = await apiInstance.sendTransacEmail(sendSmtpEmail);
      console.log("Email sent successfully:", emailResult);

      return {
        success: true,
        message:
          "Welcome to Memento Academy! Check your email for confirmation.",
      };
    } catch (emailError: any) {
      console.error("Email sending failed:", emailError);

      // Still return success for database insertion, but mention email issue
      return {
        success: true,
        message:
          "✅ Subscription successful! Email confirmation may take a few minutes to arrive.",
        emailError: emailError.message,
      };
    }
  } catch (error: any) {
    console.error("Newsletter subscription error:", error);
    return {
      success: false,
      message: error.message || "Failed to subscribe. Please try again.",
    };
  }
}
