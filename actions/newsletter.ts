"use server";

import { createClient } from "@/lib/supabase-server";
import { Database } from "@/types/supabase";
import * as brevo from "@getbrevo/brevo";

import { z } from "zod";

// Initialize Brevo API
const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY || "",
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
  const lng = (formData.get("lng") as string) || "en";
  const web3Basics = formData.get("web3_basics") === "on";
  const cbdcEducation = formData.get("cbdc_education") === "on";
  const freeCourses = formData.get("free_courses") === "on";
  const communityEvents = formData.get("community_events") === "on";

  console.log("Newsletter subscription attempt for:", email);

  try {
    const supabase = await createClient();

    // Insert new subscriber using Supabase
    // We rely on the UNIQUE constraint on email to prevent duplicates
    // and catch error code 23505 below.

    // Insert new subscriber using Supabase
    const insertData: Database["public"]["Tables"]["newsletter_subscribers"]["Insert"] =
      {
        email,
        full_name: fullName || null,
        subscription_preferences: {
          web3_basics: web3Basics,
          cbdc_education: cbdcEducation,
          free_courses: freeCourses,
          community_events: communityEvents,
        },
        confirmed_at: new Date().toISOString(),
      };
    const { error: insertError } = await (supabase as any)
      .from("newsletter_subscribers")
      .insert(insertData);

    if (insertError) {
      console.error("Error inserting subscriber:", insertError);

      // Check for unique constraint violation (email already exists)
      if (insertError.code === "23505") {
        return {
          success: false,
          messageKey: "already_subscribed",
        };
      }

      throw new Error("Failed to register subscription");
    }

    console.log("Subscriber added to database successfully");

    // Generate base URL for links - always use production domain
    const baseUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://memento-academy.com";

    console.log("Attempting to send email via Brevo...");

    // Email content translations
    const t = {
      en: {
        subject: "Welcome to Memento Academy!",
        title: "Welcome to Memento Academy!",
        greeting: `Hello ${fullName || "there"},`,
        intro:
          "Thank you for subscribing to the Memento Academy newsletter! You're now part of our community of 50,000+ crypto enthusiasts.",
        expect: "Here's what you can expect:",
        list: {
          web3: "Introduction to Web3 and Blockchain",
          cbdc: "Understanding Digital Currencies (CBDCs)",
          free: "New free course releases",
          community: "Community events and live Q&A",
        },
        stay_tuned: "Stay tuned for our next update!",
        cta: "Explore Our Courses",
        footer_rights: "Memento Academy. All rights reserved.",
        unsubscribe_text: "If you didn't sign up for this newsletter, you can",
        unsubscribe_link: "unsubscribe here",
      },
      es: {
        subject: "¡Bienvenido a Memento Academy!",
        title: "¡Bienvenido a Memento Academy!",
        greeting: `Hola ${fullName || ""},`,
        intro:
          "¡Gracias por suscribirte al boletín de Memento Academy! Ahora eres parte de nuestra comunidad de más de 50,000 entusiastas de cripto.",
        expect: "Esto es lo que puedes esperar:",
        list: {
          web3: "Introducción a Web3 y Blockchain",
          cbdc: "Entendiendo las Monedas Digitales (CBDCs)",
          free: "Lanzamientos de nuevos cursos gratuitos",
          community: "Eventos de la comunidad y preguntas y respuestas en vivo",
        },
        stay_tuned: "¡Mantente atento a nuestra próxima actualización!",
        cta: "Explora Nuestros Cursos",
        footer_rights: "Memento Academy. Todos los derechos reservados.",
        unsubscribe_text: "Si no te registraste para este boletín, puedes",
        unsubscribe_link: "darte de baja aquí",
      },
    };

    const content = t[lng as keyof typeof t] || t.en;

    // Send confirmation email with Brevo
    try {
      const sendSmtpEmail = new brevo.SendSmtpEmail();

      sendSmtpEmail.subject = content.subject;
      sendSmtpEmail.sender = {
        name: "Memento Academy",
        email: "posicionadoenlaweb@gmail.com",
      };
      sendSmtpEmail.to = [{ email: email, name: fullName || "Subscriber" }];
      sendSmtpEmail.htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #ffffff; font-family: Arial, Helvetica, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" border="0">
          <!-- Header with Logo -->
          <tr>
            <td style="padding: 0 0 30px; text-align: center;">
              <img src="https://memento-academy.com/memento-academy-logo.png" alt="Memento Academy" width="50" height="50" style="vertical-align: middle; margin-right: 12px;">
              <span style="font-size: 28px; font-weight: 700; color: #14b8a6; font-family: Georgia, serif; vertical-align: middle;">
                Memento Academy
              </span>
            </td>
          </tr>
          <!-- Main Content -->
          <tr>
            <td style="padding: 0;">
              <h1 style="margin: 0 0 20px; color: #1f2937; font-size: 26px; font-weight: 700;">
                ${content.title}
              </h1>
              <p style="margin: 0 0 16px; color: #374151; font-size: 16px; line-height: 1.6;">
                ${content.greeting}
              </p>
              <p style="margin: 0 0 24px; color: #374151; font-size: 16px; line-height: 1.6;">
                ${content.intro}
              </p>
              <p style="margin: 0 0 12px; color: #1f2937; font-size: 16px; font-weight: 600;">
                ${content.expect}
              </p>
              <ul style="margin: 0 0 24px; padding-left: 20px; color: #4b5563; font-size: 15px; line-height: 1.8;">
                ${web3Basics ? `<li style="margin-bottom: 6px;">${content.list.web3}</li>` : ""}
                ${cbdcEducation ? `<li style="margin-bottom: 6px;">${content.list.cbdc}</li>` : ""}
                ${freeCourses ? `<li style="margin-bottom: 6px;">${content.list.free}</li>` : ""}
                ${communityEvents ? `<li style="margin-bottom: 6px;">${content.list.community}</li>` : ""}
              </ul>
              <p style="margin: 0 0 30px; color: #374151; font-size: 16px; line-height: 1.6;">
                ${content.stay_tuned}
              </p>
              <!-- CTA Button -->
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td align="center">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td align="center" style="background-color: #14b8a6; border-radius: 6px;">
                          <a href="${baseUrl}/${lng}/courses" style="display: inline-block; padding: 14px 28px; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 600;">
                            ${content.cta}
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding: 40px 0 0; border-top: 1px solid #e5e7eb; margin-top: 40px;">
              <p style="margin: 20px 0 8px; color: #9ca3af; font-size: 12px;">
                © ${new Date().getFullYear()} ${content.footer_rights}
              </p>
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                ${content.unsubscribe_text} <a href="${baseUrl}/unsubscribe?email=${email}" style="color: #14b8a6;">${content.unsubscribe_link}</a>.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `;

      const emailResult = await apiInstance.sendTransacEmail(sendSmtpEmail);
      console.log("Email sent successfully:", emailResult);

      // Send notification to admin
      try {
        const adminNotification = new brevo.SendSmtpEmail();
        adminNotification.subject = `Nueva suscripción: ${email}`;
        adminNotification.sender = {
          name: "Memento Academy",
          email: "posicionadoenlaweb@gmail.com",
        };
        adminNotification.to = [{ email: "callejaj@proton.me", name: "Admin" }];
        adminNotification.htmlContent = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #06b6d4;">Nueva Suscripción al Newsletter</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Nombre:</strong> ${fullName || "No proporcionado"}</p>
            <p><strong>Preferencias:</strong></p>
            <ul>
              ${web3Basics ? "<li>Web3 Basics</li>" : ""}
              ${cbdcEducation ? "<li>CBDC Education</li>" : ""}
              ${freeCourses ? "<li>Free Courses</li>" : ""}
              ${communityEvents ? "<li>Community Events</li>" : ""}
            </ul>
            <p><strong>Fecha:</strong> ${new Date().toLocaleString("es-ES")}</p>
          </div>
        `;
        await apiInstance.sendTransacEmail(adminNotification);
        console.log("Admin notification sent");
      } catch (adminEmailError) {
        console.error("Admin notification failed:", adminEmailError);
        // Don't fail the subscription if admin notification fails
      }

      return {
        success: true,
        messageKey: "success",
      };
    } catch (emailError: any) {
      console.error("Email sending failed:", emailError);

      // Still return success for database insertion, but mention email issue
      return {
        success: true,
        messageKey: "success_email_delayed",
        emailError: emailError.message,
      };
    }
  } catch (error: any) {
    console.error("Newsletter subscription error:", error);
    return {
      success: false,
      messageKey: "error",
    };
  }
}

export async function unsubscribeFromNewsletter(email: string) {
  try {
    const supabase = await createClient();

    // Find the subscriber
    const { data: subscriber, error: findError } = await supabase
      .from("newsletter_subscribers")
      .select("id")
      .eq("email", email.toLowerCase().trim())
      .single();

    if (findError || !subscriber) {
      console.error("Subscriber not found:", email, findError);
      return {
        success: false,
        message: "Email not found in our subscription list.",
      };
    }

    // Update the subscriber to inactive
    const { error: updateError } = await supabase
      .from("newsletter_subscribers")
      .update({ is_active: false })
      .eq("id", subscriber.id);

    if (updateError) {
      console.error("Error updating subscriber:", updateError);
      throw updateError;
    }

    return {
      success: true,
      message: "You've been successfully unsubscribed from our newsletter.",
    };
  } catch (error: any) {
    console.error("Unsubscribe error:", error);
    return {
      success: false,
      message: error.message || "Failed to unsubscribe. Please try again.",
    };
  }
}
