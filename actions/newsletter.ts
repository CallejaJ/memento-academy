"use server";

import { createClient } from "@/lib/supabase-server";
import { Database } from "@/types/supabase";
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
  const lng = (formData.get("lng") as string) || "en";
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

    // Generate base URL for links
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

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
        cta: "Visit Your Dashboard",
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
        cta: "Visita tu Panel de Control",
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
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #0e1629; padding: 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0;">${content.title}</h1>
          </div>
          <div style="padding: 20px; background-color: #ffffff;">
            <p>${content.greeting}</p>
            <p>${content.intro}</p>
            <p>${content.expect}</p>
            <ul>
              ${web3Basics ? `<li>${content.list.web3}</li>` : ""}
              ${cbdcEducation ? `<li>${content.list.cbdc}</li>` : ""}
              ${freeCourses ? `<li>${content.list.free}</li>` : ""}
              ${communityEvents ? `<li>${content.list.community}</li>` : ""}
            </ul>
            <p>${content.stay_tuned}</p>
            <div style="text-align: center; margin-top: 30px;">
              <a href="${baseUrl}/${lng}/dashboard" style="background-color: #06b6d4; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">${content.cta}</a>
            </div>
          </div>
          <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
            <p>© ${new Date().getFullYear()} ${content.footer_rights}</p>
            <p>${content.unsubscribe_text} <a href="${baseUrl}/unsubscribe?email=${email}" style="color: #06b6d4;">${content.unsubscribe_link}</a>.</p>
          </div>
        </div>
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
