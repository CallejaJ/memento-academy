import { Metadata } from "next"
import { MainNav } from "@/components/main-nav"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Terms of Service | Memento Academy",
  description: "Terms and conditions for using Memento Academy educational platform.",
  keywords: ["terms of service", "terms and conditions", "memento academy terms"],
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav />
      
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <Badge className="bg-slate-800 text-slate-400 border-slate-700">
              Last updated: December 2024
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Terms of Service
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
                By using Memento Academy, you agree to these terms. Please read them carefully.
              </p>
            </div>

            <h2 className="text-xl font-bold text-white">1. Acceptance of Terms</h2>
            <p className="text-slate-400">
              By accessing or using Memento Academy ("the Service"), you agree to be bound by these 
              Terms of Service. If you disagree with any part, you may not access the Service.
            </p>

            <h2 className="text-xl font-bold text-white">2. Description of Service</h2>
            <p className="text-slate-400">
              Memento Academy is a free educational platform providing content about Web3, blockchain, 
              cryptocurrencies, and related topics. Our content is for educational purposes only.
            </p>

            <h2 className="text-xl font-bold text-white">3. Educational Content Disclaimer</h2>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 my-4">
              <p className="text-amber-300 mb-0">
                <strong>Important:</strong> Our content is educational only. We do NOT provide financial, 
                investment, legal, or tax advice. Cryptocurrency investments carry significant risk. 
                Always do your own research and consult professionals before making financial decisions.
              </p>
            </div>

            <h2 className="text-xl font-bold text-white">4. User Responsibilities</h2>
            <p className="text-slate-400">You agree to:</p>
            <ul className="text-slate-400">
              <li>Provide accurate information when registering</li>
              <li>Use the Service for lawful purposes only</li>
              <li>Not attempt to harm or disrupt the Service</li>
              <li>Not copy, modify, or redistribute our content without permission</li>
              <li>Not use the Service to spam or harass others</li>
            </ul>

            <h2 className="text-xl font-bold text-white">5. Intellectual Property</h2>
            <p className="text-slate-400">
              All content on Memento Academy (text, graphics, logos, images) is our property or 
              licensed to us. You may share our content for personal, non-commercial purposes 
              with proper attribution.
            </p>
            <p className="text-slate-400">
              Our educational materials are freely available, but may not be sold or used in 
              commercial products without written permission.
            </p>

            <h2 className="text-xl font-bold text-white">6. User-Generated Content</h2>
            <p className="text-slate-400">
              If you submit content (comments, forum posts, etc.), you grant us a non-exclusive, 
              royalty-free license to use, display, and distribute that content. You remain 
              responsible for your submissions.
            </p>

            <h2 className="text-xl font-bold text-white">7. Third-Party Links</h2>
            <p className="text-slate-400">
              Our Service may contain links to external websites. We are not responsible for 
              their content or practices. Access third-party sites at your own risk.
            </p>

            <h2 className="text-xl font-bold text-white">8. Limitation of Liability</h2>
            <p className="text-slate-400">
              Memento Academy is provided "as is" without warranties of any kind. We are not 
              liable for any damages arising from your use of the Service, including but not 
              limited to financial losses from cryptocurrency investments.
            </p>

            <h2 className="text-xl font-bold text-white">9. Modifications to Service</h2>
            <p className="text-slate-400">
              We reserve the right to modify, suspend, or discontinue any part of the Service 
              at any time without notice. We may also update these Terms periodically.
            </p>

            <h2 className="text-xl font-bold text-white">10. Termination</h2>
            <p className="text-slate-400">
              We may terminate or suspend your access to the Service immediately, without prior 
              notice, for conduct that we believe violates these Terms or is harmful to other users.
            </p>

            <h2 className="text-xl font-bold text-white">11. Governing Law</h2>
            <p className="text-slate-400">
              These Terms shall be governed by and construed in accordance with applicable laws, 
              without regard to conflict of law provisions.
            </p>

            <h2 className="text-xl font-bold text-white">12. Contact Information</h2>
            <p className="text-slate-400">
              For questions about these Terms, contact us at <strong className="text-cyan-400">legal@memento.academy</strong>
            </p>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mt-8">
              <p className="text-slate-400 mb-0">
                By using Memento Academy, you acknowledge that you have read, understood, and 
                agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
