import { Metadata } from "next"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Building2, Globe, Landmark, AlertTriangle, CheckCircle, Eye, Ban, Fingerprint, Calendar, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsletterForm } from "@/components/newsletter/newsletter-form"

export const metadata: Metadata = {
  title: "What are CBDCs? Central Bank Digital Currencies | Memento Academy",
  description: "Understand what CBDCs are, how the Digital Euro will work, and what impact they'll have on your daily life. Complete guide.",
  keywords: ["cbdc", "digital euro", "central bank digital currency", "digital dollar", "digital yuan"],
}

export default function CBDCPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav />
      
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
              🏛️ Financial News
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              What are <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">CBDCs</span>?
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Central Bank Digital Currencies: the future of government-created money.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Landmark className="w-8 h-8 text-emerald-400" />
                Simple Definition
              </h2>
              <p className="text-slate-300 text-lg">
                A <strong className="text-white">CBDC</strong> (Central Bank Digital Currency) is digital money issued directly by a central bank, 
                like the European Central Bank or the Federal Reserve. It's the digital equivalent of cash.
              </p>
              <p className="text-slate-300 mt-4">
                Unlike cryptocurrencies like Bitcoin, CBDCs are <strong className="text-white">controlled by the government</strong> 
                and have the legal backing of the State.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Fingerprint className="w-8 h-8 text-red-400" />
              Privacy Deep Dive: The Real Concern
            </h2>
            <div className="bg-slate-800/30 border-l-4 border-red-500 rounded-r-xl p-6 mb-12 space-y-4">
              <p className="text-slate-300">
                The biggest debate surrounding CBDCs is about <strong>programmability</strong>. 
                Since CBDCs are code, the issuer (the Central Bank) can program rules into the money itself.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-orange-400" />
                    Expiration Dates
                  </h4>
                  <p className="text-sm text-slate-400">
                    Money that "expires" if not spent by a certain date, to stimulate the economy.
                  </p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold flex items-center gap-2 mb-2">
                    <Lock className="w-4 h-4 text-orange-400" />
                    Purchase Restrictions
                  </h4>
                  <p className="text-sm text-slate-400">
                    Forbidding the purchase of certain goods (e.g., alcohol, travel) based on your social score or carbon footprint.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">CBDCs vs Cryptocurrencies vs Current Money</h2>
            
            <div className="overflow-x-auto mb-12">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-4 px-4 text-slate-400">Feature</th>
                    <th className="text-center py-4 px-4 text-cyan-400">Bitcoin</th>
                    <th className="text-center py-4 px-4 text-emerald-400">CBDC</th>
                    <th className="text-center py-4 px-4 text-slate-400">Dollar/Euro</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4">Control</td>
                    <td className="text-center py-4 px-4">No one (decentralized)</td>
                    <td className="text-center py-4 px-4">Central Bank</td>
                    <td className="text-center py-4 px-4">Banks + Central Bank</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4">Privacy</td>
                    <td className="text-center py-4 px-4">Pseudonymous</td>
                    <td className="text-center py-4 px-4">100% Traceable</td>
                    <td className="text-center py-4 px-4">Partially private</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4">Supply limit</td>
                    <td className="text-center py-4 px-4">21 million fixed</td>
                    <td className="text-center py-4 px-4">Unlimited</td>
                    <td className="text-center py-4 px-4">Unlimited</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4">Works offline</td>
                    <td className="text-center py-4 px-4">No</td>
                    <td className="text-center py-4 px-4">Possible (offline)</td>
                    <td className="text-center py-4 px-4">Yes (cash)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Globe className="w-8 h-8 text-cyan-400" />
              The Digital Euro
            </h2>
            
            <p className="text-slate-300 mb-6">
              The European Central Bank is developing the <strong className="text-white">Digital Euro</strong>, expected by 2027-2028. 
              It will be a complement to cash, not a replacement. These are the planned features:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-emerald-400 font-semibold mb-4">✅ Promised Benefits</h3>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    Instant payments across the eurozone
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    Offline functionality
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    Financial inclusion for the unbanked
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    Lower cross-border payment costs
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-red-400 font-semibold mb-4">⚠️ Concerns</h3>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <Eye className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    Total transaction surveillance
                  </li>
                  <li className="flex items-start gap-2">
                    <Ban className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    Ability to remotely block funds
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    Programmable money with restrictions
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    Possible elimination of physical cash
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">CBDCs Around the World</h2>
            
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              <Card className="bg-red-500/10 border-red-500/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white text-lg">🇨🇳 China</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm">
                    <strong className="text-white">Digital Yuan (e-CNY)</strong> - In use since 2020. Over 260 million active wallets.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-500/10 border-blue-500/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white text-lg">🇪🇺 Europe</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm">
                    <strong className="text-white">Digital Euro</strong> - In development phase. Launch expected 2027-2028.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-green-500/10 border-green-500/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white text-lg">🇧🇷 Brazil</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm">
                    <strong className="text-white">Drex</strong> - Advanced pilot. Focused on asset tokenization.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Calendar className="w-8 h-8 text-teal-400" />
                Global Implementation Timeline
              </h2>
              <div className="relative border-l border-slate-700 ml-4 space-y-8 pl-8">
                <div className="relative">
                  <span className="absolute -left-[41px] bg-slate-800 border border-slate-600 rounded-full w-6 h-6 flex items-center justify-center text-xs text-slate-400">1</span>
                  <h3 className="text-white font-bold ml-2">2020: The Start</h3>
                  <p className="text-slate-400 text-sm ml-2">Bahamas launches the "Sand Dollar", the world's first nationwide CBDC.</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[41px] bg-slate-800 border border-slate-600 rounded-full w-6 h-6 flex items-center justify-center text-xs text-slate-400">2</span>
                  <h3 className="text-white font-bold ml-2">2022: Major Pilots</h3>
                  <p className="text-slate-400 text-sm ml-2">China expands digital yuan pilot to major cities. India launches digital rupee wholesale pilot.</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[41px] bg-cyan-900/50 border border-cyan-500/50 rounded-full w-6 h-6 flex items-center justify-center text-xs text-cyan-400">3</span>
                  <h3 className="text-cyan-400 font-bold ml-2">2024-2025: Regulation</h3>
                  <p className="text-slate-300 text-sm ml-2">EU finalizes legal framework for Digital Euro. UK advances "Britcoin" design.</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[41px] bg-slate-800 border border-slate-600 rounded-full w-6 h-6 flex items-center justify-center text-xs text-slate-400">4</span>
                  <h3 className="text-white font-bold ml-2">2027+: Launch</h3>
                  <p className="text-slate-400 text-sm ml-2">Expected launch of Digital Euro and potential US Digital Dollar.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">💡 Our Recommendation</h3>
              <p className="text-slate-300">
                Regardless of your opinion on CBDCs, it's crucial to understand how they'll work. 
                Stay informed, diversify your savings (cash + crypto + traditional banks), 
                and know your rights as a citizen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold text-white">Protect Your Financial Future</h2>
            <p className="text-slate-400">Learn to identify scams and keep your assets safe.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/learn/safety">
                <Button className="bg-gradient-to-r from-cyan-500 to-teal-500">
                  Security Guide <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <NewsletterForm variant="modal" buttonText="Get Alerts" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
