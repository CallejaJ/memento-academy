import { Metadata } from "next"
import { MainNav } from "@/components/main-nav"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Privacy Policy | Memento Academy",
  description: "Learn how Memento Academy collects, uses, and protects your personal information.",
  keywords: ["privacy policy", "data protection", "memento academy privacy"],
}

export default async function PrivacyPage({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params
  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav lng={lng} />
      
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <Badge className="bg-slate-800 text-slate-400 border-slate-700">
              Last updated: December 2024
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Privacy Policy
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-invert prose-slate">
            
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-8">
              <p className="text-slate-300 text-lg mb-0">
                At Memento Academy, we take your privacy seriously. This policy explains how we collect, 
                use, and protect your personal information.
              </p>
            </div>

            <h2 className="text-xl font-bold text-white">1. Information We Collect</h2>
            <p className="text-slate-400">We collect information you provide directly:</p>
            <ul className="text-slate-400">
              <li><strong className="text-white">Email address</strong> - when you subscribe to our newsletter</li>
              <li><strong className="text-white">Name</strong> - optionally, when provided with your subscription</li>
              <li><strong className="text-white">Preferences</strong> - your selected content interests</li>
            </ul>
            <p className="text-slate-400">We automatically collect:</p>
            <ul className="text-slate-400">
              <li>Basic analytics data (pages visited, time on site)</li>
              <li>Device information (browser type, operating system)</li>
            </ul>

            <h2 className="text-xl font-bold text-white">2. How We Use Your Information</h2>
            <p className="text-slate-400">We use your information to:</p>
            <ul className="text-slate-400">
              <li>Send you our newsletter and updates you've subscribed to</li>
              <li>Improve our content and user experience</li>
              <li>Respond to your questions and requests</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="text-slate-400">
              <strong className="text-white">We never sell your data</strong> to third parties. We never share your 
              email with advertisers.
            </p>

            <h2 className="text-xl font-bold text-white">3. Email Communications</h2>
            <p className="text-slate-400">
              If you subscribe to our newsletter, you'll receive educational content based on your preferences. 
              Every email includes an unsubscribe link. We use Brevo (formerly Sendinblue) to send emails.
            </p>

            <h2 className="text-xl font-bold text-white">4. Cookies & Tracking</h2>
            <p className="text-slate-400">
              We use minimal, privacy-respecting analytics. We do not use advertising cookies or 
              cross-site tracking. Essential cookies may be used for authentication and site functionality.
            </p>

            <h2 className="text-xl font-bold text-white">5. Data Security</h2>
            <p className="text-slate-400">
              We implement appropriate security measures to protect your information. Our database is 
              hosted on Supabase with encryption at rest. However, no internet transmission is 100% secure.
            </p>

            <h2 className="text-xl font-bold text-white">6. Your Rights</h2>
            <p className="text-slate-400">You have the right to:</p>
            <ul className="text-slate-400">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Unsubscribe from communications at any time</li>
            </ul>
            <p className="text-slate-400">
              To exercise these rights, contact us at <strong className="text-cyan-400">privacy@memento.academy</strong>
            </p>

            <h2 className="text-xl font-bold text-white">7. Third-Party Services</h2>
            <p className="text-slate-400">We use the following third-party services:</p>
            <ul className="text-slate-400">
              <li><strong className="text-white">Supabase</strong> - Database and authentication</li>
              <li><strong className="text-white">Brevo</strong> - Email delivery</li>
              <li><strong className="text-white">Vercel</strong> - Website hosting</li>
            </ul>

            <h2 className="text-xl font-bold text-white">8. Children's Privacy</h2>
            <p className="text-slate-400">
              Our service is not directed to children under 13. We do not knowingly collect 
              information from children under 13.
            </p>

            <h2 className="text-xl font-bold text-white">9. Changes to This Policy</h2>
            <p className="text-slate-400">
              We may update this policy from time to time. We'll notify you of significant changes 
              via email or a notice on our website.
            </p>

            <h2 className="text-xl font-bold text-white">10. Contact Us</h2>
            <p className="text-slate-400">
              Questions about this policy? Contact us at <strong className="text-cyan-400">privacy@memento.academy</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
