import { Metadata } from "next"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Blocks, Globe, Wallet, Code, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsletterForm } from "@/components/newsletter/newsletter-form"

export const metadata: Metadata = {
  title: "What is Web3? Beginner's Guide | Memento Academy",
  description: "Learn what Web3 and blockchain are, explained simply. Free guide for beginners with no technical background required.",
  keywords: ["what is web3", "blockchain for beginners", "web3 explained", "decentralized internet", "blockchain basics"],
}

export default function Web3BasicsPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav />
      
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
              📚 Free Course
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              What is <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Web3</span>?
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              The definitive guide to understanding the new era of the internet. No jargon, completely free.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
            
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mt-0">The Evolution of the Internet</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="text-center p-4 rounded-xl bg-slate-900/50">
                  <div className="text-3xl mb-2">📖</div>
                  <h3 className="text-cyan-400 font-semibold">Web 1.0</h3>
                  <p className="text-slate-400 text-sm">Read-only. Static pages with no interaction.</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-900/50">
                  <div className="text-3xl mb-2">💬</div>
                  <h3 className="text-teal-400 font-semibold">Web 2.0</h3>
                  <p className="text-slate-400 text-sm">Social media. You create content but don't control it.</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-900/50">
                  <div className="text-3xl mb-2">🔐</div>
                  <h3 className="text-emerald-400 font-semibold">Web 3.0</h3>
                  <p className="text-slate-400 text-sm">You control your data, identity, and money.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-4">
              <Blocks className="w-8 h-8 text-cyan-400" />
              What is Blockchain?
            </h2>
            <p className="text-slate-300">
              Imagine a giant ledger that everyone can see, but no one can modify once written. 
              That's blockchain: a public, transparent, and immutable record of all transactions.
            </p>
            <p className="text-slate-300">
              Instead of trusting a bank or company, trust is distributed among thousands of computers 
              that verify each operation. There's no single point of failure or central authority.
            </p>

            <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-xl p-6 my-8">
              <h3 className="text-cyan-400 font-semibold mt-0 mb-3">💡 Everyday Example</h3>
              <p className="text-slate-300 mb-0">
                When you send money via bank transfer, the bank is the intermediary that verifies and processes it. 
                With blockchain, thousands of computers automatically verify transactions, without intermediaries, 
                24/7 and at lower cost.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-4">
              <Globe className="w-8 h-8 text-teal-400" />
              Web3 Applications
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Wallet className="w-5 h-5 text-cyan-400" />
                    Decentralized Finance (DeFi)
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-400">
                  Loans, savings, and investments without traditional banks. Accessible to anyone with internet.
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Code className="w-5 h-5 text-teal-400" />
                    NFTs & Digital Ownership
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-400">
                  Unique digital certificates that prove ownership of art, music, virtual land, and more.
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Why Should You Care?</h2>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300"><strong className="text-white">Control your data:</strong> You decide who accesses your personal information.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300"><strong className="text-white">Censorship-resistant:</strong> Content and transactions that can't be blocked by third parties.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300"><strong className="text-white">Financial inclusion:</strong> Banking services accessible to the 1.7 billion unbanked people worldwide.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300"><strong className="text-white">New opportunities:</strong> Jobs, investments, and business models that didn't exist before.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold text-white">Ready for the Next Step?</h2>
            <p className="text-slate-400">Continue learning with our cryptocurrency guide for beginners.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/learn/crypto-101">
                <Button className="bg-gradient-to-r from-cyan-500 to-teal-500">
                  Crypto 101 <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <NewsletterForm variant="modal" buttonText="Subscribe Free" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
