import { Metadata } from "next"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Wallet, AlertTriangle, Coins } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsletterForm } from "@/components/newsletter/newsletter-form"

export const metadata: Metadata = {
  title: "Cryptocurrency for Beginners | Crypto 101 | Memento Academy",
  description: "Learn what cryptocurrencies are, how wallets work, and the basics of Bitcoin and Ethereum. Free beginner's guide.",
  keywords: ["cryptocurrency for beginners", "what is bitcoin", "how ethereum works", "crypto wallet", "buy cryptocurrency"],
}

export default function Crypto101Page() {
  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav />
      
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-teal-500/10 text-teal-400 border-teal-500/20">
              💰 Free Course
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Crypto</span> 101
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Everything you need to know about cryptocurrencies, explained without technical jargon.
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
                <Coins className="w-8 h-8 text-cyan-400" />
                What are Cryptocurrencies?
              </h2>
              <p className="text-slate-300 text-lg">
                Cryptocurrencies are <strong className="text-white">digital money</strong> that work without banks or governments. 
                They use blockchain technology to ensure transactions are secure, transparent, and irreversible.
              </p>
              <p className="text-slate-300 mt-4">
                Unlike the dollar or euro, cryptocurrencies are not controlled by any central institution. 
                Their value is determined by supply and demand in the market, similar to company stocks.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">The Main Cryptocurrencies</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border-orange-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <span className="text-3xl">₿</span>
                    Bitcoin (BTC)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-300">The first and most well-known cryptocurrency. Created in 2009 by Satoshi Nakamoto.</p>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li>• Maximum 21 million units</li>
                    <li>• "Digital gold" - store of value</li>
                    <li>• Most decentralized and secure</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <span className="text-3xl">Ξ</span>
                    Ethereum (ETH)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-300">Platform for building decentralized applications. Created in 2015 by Vitalik Buterin.</p>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li>• Programmable smart contracts</li>
                    <li>• Foundation of DeFi and NFTs</li>
                    <li>• More than just money: it's a platform</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Wallet className="w-8 h-8 text-teal-400" />
              What is a Wallet?
            </h2>
            
            <p className="text-slate-300 mb-6">
              A wallet is like your digital bank account, but you are your own bank. There are two main types:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-cyan-400 font-semibold mb-3">🔥 Hot Wallets</h3>
                <p className="text-slate-400 text-sm mb-3">Connected to the internet. Practical for daily use.</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• MetaMask, Trust Wallet</li>
                  <li>• Mobile apps and browser extensions</li>
                  <li>• ⚠️ Less secure, more risk of hacking</li>
                </ul>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-teal-400 font-semibold mb-3">❄️ Cold Wallets</h3>
                <p className="text-slate-400 text-sm mb-3">Not connected to the internet. For long-term storage.</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Ledger, Trezor</li>
                  <li>• Physical USB-like devices</li>
                  <li>• ✅ Maximum security for large amounts</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6 my-8">
              <h3 className="text-red-400 font-semibold flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5" />
                Key Security Concepts
              </h3>
              <ul className="text-slate-300 space-y-2">
                <li><strong className="text-white">Seed Phrase:</strong> 12-24 words that recover your wallet. NEVER share it.</li>
                <li><strong className="text-white">Private Key:</strong> Full access to your funds. Whoever has it controls your crypto.</li>
                <li><strong className="text-white">Public Address:</strong> Like your IBAN. You can share it to receive payments.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">Recommended First Steps</h2>
            <ol className="space-y-4">
              <li className="flex items-start gap-4 bg-slate-800/30 border border-slate-700 rounded-xl p-4">
                <span className="bg-cyan-500/20 text-cyan-400 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</span>
                <div>
                  <h4 className="text-white font-semibold">Educate yourself first</h4>
                  <p className="text-slate-400 text-sm">Don't invest money you can't afford to lose. Learn before you buy.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 bg-slate-800/30 border border-slate-700 rounded-xl p-4">
                <span className="bg-cyan-500/20 text-cyan-400 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</span>
                <div>
                  <h4 className="text-white font-semibold">Create a test wallet</h4>
                  <p className="text-slate-400 text-sm">Install MetaMask and practice with testnets without spending real money.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 bg-slate-800/30 border border-slate-700 rounded-xl p-4">
                <span className="bg-cyan-500/20 text-cyan-400 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</span>
                <div>
                  <h4 className="text-white font-semibold">Start small</h4>
                  <p className="text-slate-400 text-sm">If you decide to invest, start with small amounts while you learn.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold text-white">Continue Your Learning</h2>
            <p className="text-slate-400">Discover how governments are creating their own digital currencies.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/learn/cbdc">
                <Button className="bg-gradient-to-r from-cyan-500 to-teal-500">
                  Understanding CBDCs <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/learn/safety">
                <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                  Security Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
