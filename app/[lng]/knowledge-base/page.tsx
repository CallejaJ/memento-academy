import { Metadata } from "next"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, HelpCircle, BookOpen, MessageCircle, ChevronDown, Blocks, Wallet, Shield, Landmark } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Knowledge Base | FAQ | Memento Academy",
  description: "Find answers to common questions about Web3, blockchain, cryptocurrencies, and CBDCs. Comprehensive FAQ and help center.",
  keywords: ["web3 faq", "blockchain questions", "crypto help", "cbdc questions", "cryptocurrency answers"],
}

const categories = [
  {
    title: "Web3 & Blockchain",
    icon: Blocks,
    color: "cyan",
    faqs: [
      { q: "What's the difference between Web2 and Web3?", a: "Web2 is the current internet where platforms own your data (Facebook, Google). Web3 is the decentralized internet where you own your data, identity, and assets through blockchain technology." },
      { q: "Do I need to be technical to understand Web3?", a: "Not at all! Our courses are designed for absolute beginners. We explain everything in simple terms without requiring any technical background." },
      { q: "Is blockchain the same as cryptocurrency?", a: "No. Blockchain is the technology (a decentralized ledger), while cryptocurrency is one application of that technology (digital money). Blockchain can be used for many things beyond currencies." },
    ]
  },
  {
    title: "Cryptocurrencies",
    icon: Wallet,
    color: "teal",
    faqs: [
      { q: "Is cryptocurrency legal?", a: "In most countries, yes. However, regulations vary. Some countries have banned it, while others have embraced it. Always check your local laws." },
      { q: "How do I buy my first cryptocurrency?", a: "You can use exchanges like Coinbase or Binance. Create an account, verify your identity, and purchase with bank transfer or card. Start with small amounts while learning." },
      { q: "What's a wallet and do I need one?", a: "A wallet stores your cryptocurrency. For beginners, exchange wallets are fine. As you learn more, you may want a personal wallet like MetaMask (hot) or Ledger (cold) for better security." },
    ]
  },
  {
    title: "CBDCs",
    icon: Landmark,
    color: "emerald",
    faqs: [
      { q: "When will the Digital Euro launch?", a: "The European Central Bank is targeting 2027-2028 for a potential launch. It's currently in the 'preparation phase' after completing the investigation phase in 2023." },
      { q: "Will CBDCs replace cash?", a: "Central banks claim CBDCs will complement cash, not replace it. However, many privacy advocates are concerned this could eventually lead to a cashless society." },
      { q: "Are CBDCs like Bitcoin?", a: "No. CBDCs are centrally controlled by governments, while Bitcoin is decentralized with no central authority. CBDCs can be censored and monitored; Bitcoin transactions are pseudonymous." },
    ]
  },
  {
    title: "Security",
    icon: Shield,
    color: "red",
    faqs: [
      { q: "How do I spot a crypto scam?", a: "Red flags: promises of guaranteed returns, pressure to act fast, requests for your seed phrase, unsolicited offers, and projects with anonymous teams. If it sounds too good to be true, it is." },
      { q: "What should I do if I've been scammed?", a: "Unfortunately, blockchain transactions are irreversible. Document everything, report to authorities and the platform involved, and warn others to prevent more victims." },
      { q: "Is it safe to keep crypto on an exchange?", a: "For beginners with small amounts, it's convenient. But 'not your keys, not your crypto' - for larger amounts, use a personal wallet where you control the private keys." },
    ]
  },
]

export default async function KnowledgeBasePage({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params
  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav lng={lng} />
      
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20">
              ❓ Help Center
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Knowledge <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Base</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Find quick answers to the most common questions about Web3, crypto, and digital finance.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <div key={category.title}>
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Icon className={`w-8 h-8 text-${category.color}-400`} />
                    {category.title}
                  </h2>
                  
                  <div className="space-y-4">
                    {category.faqs.map((faq, index) => (
                      <Card key={index} className="bg-slate-800/50 border-slate-700">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-white text-lg flex items-start gap-3">
                            <HelpCircle className={`w-5 h-5 text-${category.color}-400 flex-shrink-0 mt-0.5`} />
                            {faq.q}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pl-11">
                          <p className="text-slate-400">{faq.a}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )
            })}
            
            <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-2xl p-8 text-center">
              <MessageCircle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Still Have Questions?</h3>
              <p className="text-slate-300 mb-6 max-w-xl mx-auto">
                Can't find what you're looking for? Join our community Discord where our team and fellow learners can help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/${lng}/contact`}>
                  <Button className="bg-gradient-to-r from-cyan-500 to-teal-500">
                    Contact Us
                  </Button>
                </Link>
                <Link href={`/${lng}/learn/web3-basics`}>
                  <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                    Start Learning
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
