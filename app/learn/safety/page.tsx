import { Metadata } from "next"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, AlertTriangle, Lock, Eye, Phone, Mail, CheckCircle, XCircle, LifeBuoy, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsletterForm } from "@/components/newsletter/newsletter-form"

export const metadata: Metadata = {
  title: "Crypto Security Guide | Avoid Scams | Memento Academy",
  description: "Learn to protect yourself from cryptocurrency scams. Complete security guide for wallets, phishing, and common frauds.",
  keywords: ["avoid crypto scams", "bitcoin security", "crypto phishing", "protect wallet", "cryptocurrency fraud"],
}

export default function SafetyPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav />
      
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-red-500/10 text-red-400 border-red-500/20">
              🛡️ Essential Security
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Security</span> Guide
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Protect yourself from scams and learn to keep your digital assets safe.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-red-400" />
                The Golden Rule
              </h2>
              <p className="text-xl text-slate-300">
                <strong className="text-white">NEVER share your seed phrase or private key with ANYONE.</strong>
              </p>
              <p className="text-slate-400 mt-4">
                No legitimate company, tech support, or "expert" will ever ask for this information. 
                Anyone who asks is trying to steal from you.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">Most Common Scams</h2>
            
            <div className="space-y-6 mb-12">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <Mail className="w-6 h-6 text-red-400" />
                    Phishing (Impersonation)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300">
                    Fake emails, messages, or websites that imitate legitimate platforms to steal your credentials.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                      <h4 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                        <XCircle className="w-4 h-4" /> Warning Signs
                      </h4>
                      <ul className="text-slate-400 text-sm space-y-1">
                        <li>• Slightly different URLs (metamsk.io)</li>
                        <li>• Urgency: "Your account will be locked"</li>
                        <li>• Asking for seed phrase or private key</li>
                      </ul>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                      <h4 className="text-emerald-400 font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" /> How to Protect Yourself
                      </h4>
                      <ul className="text-slate-400 text-sm space-y-1">
                        <li>• ALWAYS verify the official URL</li>
                        <li>• Use bookmarks for important sites</li>
                        <li>• Never click links in emails</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <Phone className="w-6 h-6 text-red-400" />
                    Fake Tech Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300">
                    "Support agents" who contact you to "help" with a problem you never had.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                      <h4 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                        <XCircle className="w-4 h-4" /> Common Tactics
                      </h4>
                      <ul className="text-slate-400 text-sm space-y-1">
                        <li>• They contact you first (you didn't seek them)</li>
                        <li>• Ask for remote access to your device</li>
                        <li>• Request to "verify" your wallet</li>
                      </ul>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                      <h4 className="text-emerald-400 font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" /> How to Protect Yourself
                      </h4>
                      <ul className="text-slate-400 text-sm space-y-1">
                        <li>• Support NEVER contacts first</li>
                        <li>• Only use official channels</li>
                        <li>• Never give remote access</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <Eye className="w-6 h-6 text-red-400" />
                    Fake Airdrops & Free Tokens
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300">
                    Tokens that magically appear in your wallet. When you try to sell them, they steal your real funds.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                      <h4 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                        <XCircle className="w-4 h-4" /> How They Work
                      </h4>
                      <ul className="text-slate-400 text-sm space-y-1">
                        <li>• You receive "free" tokens you didn't request</li>
                        <li>• When you approve the sale, they drain your wallet</li>
                        <li>• Malicious contracts hidden inside</li>
                      </ul>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                      <h4 className="text-emerald-400 font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" /> How to Protect Yourself
                      </h4>
                      <ul className="text-slate-400 text-sm space-y-1">
                        <li>• IGNORE unknown tokens</li>
                        <li>• Never interact with them</li>
                        <li>• Don't approve suspicious contracts</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <LifeBuoy className="w-6 h-6 text-orange-400" />
                  What to do if hacked?
                </h2>
                <ol className="space-y-3 text-sm text-slate-300">
                  <li className="flex gap-2">
                    <span className="font-bold text-orange-400">1.</span>
                    <span><strong>Disconnect immediately:</strong> Revoke all permissions and disconnect your wallet from all sites.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-orange-400">2.</span>
                    <span><strong>Move remaining funds:</strong> If you still have access, send remaining assets to a secure device/wallet.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-orange-400">3.</span>
                    <span><strong>Scan for malware:</strong> Do not use the compromised device until it has been cleaned or formatted.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-orange-400">4.</span>
                    <span><strong>Report:</strong> Contact the platform (if CEX) or report to databases like Chainabuse.</span>
                  </li>
                </ol>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                  Protection Tools
                </h2>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex gap-2">
                    <span className="font-bold text-emerald-400">•</span>
                    <span><strong>Hardware Wallets:</strong> Ledger, Trezor (Physical protection).</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-emerald-400">•</span>
                    <span><strong>Revoke.cash:</strong> Tool to revoke permissions you gave to smart contracts.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-emerald-400">•</span>
                    <span><strong>Pocket Universe / Fire:</strong> Browser extensions that simulate transactions before you sign.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-emerald-400">•</span>
                    <span><strong>DeFi Insurance:</strong> Protocols like Nexus Mutual that cover smart contract bugs.</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Lock className="w-8 h-8 text-teal-400" />
              Security Checklist
            </h2>
            
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 mb-12">
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold">Enable 2FA everywhere</h4>
                    <p className="text-slate-400 text-sm">Two-factor authentication with apps like Google Authenticator or Authy. Avoid SMS.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold">Use unique passwords</h4>
                    <p className="text-slate-400 text-sm">A password manager like Bitwarden or 1Password is essential.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold">Store your seed phrase offline</h4>
                    <p className="text-slate-400 text-sm">On paper or metal, never in photos, cloud storage, or digital notes.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold">Separate hot and cold wallets</h4>
                    <p className="text-slate-400 text-sm">Use hot wallets for daily use with small amounts, cold wallets for storage.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold">Verify addresses before sending</h4>
                    <p className="text-slate-400 text-sm">Malware can change copied addresses. Always verify the first and last characters.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">🚨 Have you been scammed?</h3>
              <p className="text-slate-300">
                Unfortunately, blockchain transactions are irreversible. Report the incident to authorities 
                and warn the community to prevent more victims. Learn from the experience to better protect yourself in the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold text-white">Stay Updated</h2>
            <p className="text-slate-400">Receive alerts about new scams and security tips.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NewsletterForm variant="modal" buttonText="Subscribe Free" />
              <Link href="/learn/web3-basics">
                <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                  Back to Web3 Basics
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
