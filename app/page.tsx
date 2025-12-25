import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, BookOpen, Globe, Users, Star, GraduationCap, LayoutPanelLeft, ShieldCheck } from "lucide-react"
import Image from "next/image"
import { NewsletterForm } from "@/components/newsletter/newsletter-form"
import { MainNav } from "@/components/main-nav"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 transition-colors duration-300">
      <MainNav />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="bg-cyan-500/10 text-cyan-400 dark:border dark:border-cyan-500/20 transition-colors duration-300"
                >
                  🚀 New: CBDC & Digital Future Guide
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight transition-colors duration-300">
                  Unlock the
                  <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                    {" "}
                    Digital Future
                  </span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed transition-colors duration-300">
                  The simplest onboarding to Web3 and Blockchain. We break down complex concepts like CBDCs and Cripto for absolute beginners. Best of all? It's 100% free.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <NewsletterForm
                  variant="modal"
                  buttonText="Start Learning Free"
                  title="Begin Your Journey"
                  description="Join our newsletter and get immediate access to our 'Web3 for Beginners' guide."
                />
                <Link href="/courses">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors duration-300"
                  >
                    Explore Courses
                  </Button>
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-6 text-sm text-slate-400 transition-colors duration-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-teal-400" />
                  <span>No hidden fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-teal-400" />
                  <span>Expert-led CBDC guides</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/hero-image.png"
                  alt="Memento Academy - Web3 Onboarding"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl shadow-cyan-500/10 transition-all duration-300 mx-auto border border-slate-800"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl blur-3xl opacity-20 transform scale-105 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="features" className="py-20 bg-slate-900/50 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white transition-colors duration-300">
              Web3 Education for Everyone
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto transition-colors duration-300">
              Starting from zero? You're in the right place. Our mission is to democratize blockchain knowledge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-slate-800 bg-slate-900/50 shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:border-cyan-500/30">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 border border-cyan-500/20 transition-colors duration-300">
                  <BookOpen className="w-6 h-6 text-cyan-400" />
                </div>
                <CardTitle className="text-white transition-colors duration-300">
                  Web3 Foundations
                </CardTitle>
                <CardDescription className="text-slate-400 transition-colors duration-300">
                  Learn what blockchain is and why it matters, explained in plain English. No technical background required.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-800 bg-slate-900/50 shadow-lg hover:shadow-teal-500/10 transition-all duration-300 hover:border-teal-500/30">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4 border border-teal-500/20 transition-colors duration-300">
                  <Globe className="w-6 h-6 text-teal-400" />
                </div>
                <CardTitle className="text-white transition-colors duration-300">
                  CBDC Decoding
                </CardTitle>
                <CardDescription className="text-slate-400 transition-colors duration-300">
                  Understand Central Bank Digital Currencies and how they will change the way you use money.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-800 bg-slate-900/50 shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 hover:border-emerald-500/30">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 border border-emerald-500/20 transition-colors duration-300">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>
                <CardTitle className="text-white transition-colors duration-300">
                  Security Basics
                </CardTitle>
                <CardDescription className="text-slate-400 transition-colors duration-300">
                  Protect yourself in the digital age. Learn how to identify scams and keep your assets safe.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-800 bg-slate-900/50 shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:border-cyan-500/30">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 border border-cyan-500/20 transition-colors duration-300">
                  <Users className="w-6 h-6 text-cyan-400" />
                </div>
                <CardTitle className="text-white transition-colors duration-300">
                  Supportive Community
                </CardTitle>
                <CardDescription className="text-slate-400 transition-colors duration-300">
                   Join thousands of others starting their journey. Ask questions freely in our beginner-first Discord.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Proof */}
      <section id="community" className="py-20 bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white transition-colors duration-300">
              A Growing Global Community
            </h2>
            <p className="text-xl text-slate-300 transition-colors duration-300">
              Thousands are learning to navigate the digital era with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-slate-800 bg-slate-900/50 shadow-lg transition-colors duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-cyan-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-300 mb-6 transition-colors duration-300">
                  "I was terrified of losing money or getting scammed. Memento Academy explained everything so simply that I finally feel confident using my first wallet."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400">RC</div>
                  <div>
                    <div className="font-semibold text-white transition-colors duration-300">
                      Ricardo C.
                    </div>
                    <div className="text-sm text-slate-400 transition-colors duration-300">
                      Newcomer
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-800 bg-slate-900/50 shadow-lg transition-colors duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-cyan-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-300 mb-6 transition-colors duration-300">
                  "The guide on CBDCs changed how I see the future of money. Essential reading for anyone who wants to stay ahead of government digital currencies."
                </blockquote>
                <div className="flex items-center space-x-3">
                   <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-teal-400">SM</div>
                  <div>
                    <div className="font-semibold text-white transition-colors duration-300">
                      Sofia M.
                    </div>
                    <div className="text-sm text-slate-400 transition-colors duration-300">
                      Student
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-800 bg-slate-900/50 shadow-lg transition-colors duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-cyan-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-300 mb-6 transition-colors duration-300">
                  "Finally, a place that doesn't try to sell me a trading bot. Pure education and real support. Highly recommended for beginners."
                </blockquote>
                <div className="flex items-center space-x-3">
                   <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-emerald-400">JT</div>
                  <div>
                    <div className="font-semibold text-white transition-colors duration-300">
                      Juan T.
                    </div>
                    <div className="text-sm text-slate-400 transition-colors duration-300">
                      Professional
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Free Access Section (Replacing Pricing) */}
      <section id="start" className="py-20 bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 bg-slate-900/50 border border-slate-800 p-8 rounded-3xl">
            <div className="space-y-4">
               <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto border border-cyan-500/20">
                  <GraduationCap className="w-8 h-8 text-cyan-400" />
                </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white transition-colors duration-300">
                100% Free Knowledge
              </h2>
              <p className="text-xl text-slate-300 transition-colors duration-300">
                No credit cards, no subscriptions, no tricks. Just free education for the community.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left max-w-5xl mx-auto mt-12">
                <div className="space-y-3 p-6 rounded-2xl bg-slate-800/30 border border-slate-800 hover:border-cyan-500/30 transition-colors">
                  <CheckCircle className="w-6 h-6 text-teal-400" />
                  <h3 className="font-semibold text-white">Course Library</h3>
                  <p className="text-sm text-slate-400">Complete Web3 and Blockchain foundations courses at no cost.</p>
                </div>
                <div className="space-y-3 p-6 rounded-2xl bg-slate-800/30 border border-slate-800 hover:border-cyan-500/30 transition-colors">
                  <CheckCircle className="w-6 h-6 text-teal-400" />
                  <h3 className="font-semibold text-white">Weekly Newsletter</h3>
                  <p className="text-sm text-slate-400">Curated news and insights delivered to your inbox every week.</p>
                </div>
                <div className="space-y-3 p-6 rounded-2xl bg-slate-800/30 border border-slate-800 hover:border-cyan-500/30 transition-colors">
                  <CheckCircle className="w-6 h-6 text-teal-400" />
                  <h3 className="font-semibold text-white">CBDC Research</h3>
                  <p className="text-sm text-slate-400">Public documents and analysis on Digital Government Currencies.</p>
                </div>
                <div className="space-y-3 p-6 rounded-2xl bg-slate-800/30 border border-slate-800 hover:border-cyan-500/30 transition-colors">
                  <CheckCircle className="w-6 h-6 text-teal-400" />
                  <h3 className="font-semibold text-white">Community Support</h3>
                  <p className="text-sm text-slate-400">Interactive help from tutors and peers in our Discord server.</p>
                </div>
                <div className="space-y-3 p-6 rounded-2xl bg-slate-800/30 border border-slate-800 hover:border-cyan-500/30 transition-colors">
                  <CheckCircle className="w-6 h-6 text-teal-400" />
                  <h3 className="font-semibold text-white">Security Guides</h3>
                  <p className="text-sm text-slate-400">Practical tips to stay safe and avoid scams in the digital world.</p>
                </div>
                <div className="space-y-3 p-6 rounded-2xl bg-slate-800/30 border border-slate-800 hover:border-cyan-500/30 transition-colors">
                  <CheckCircle className="w-6 h-6 text-teal-400" />
                  <h3 className="font-semibold text-white">Open Knowledge</h3>
                  <p className="text-sm text-slate-400">All our educational materials are open source and free to share.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-t border-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Never Miss a Web3 Beat
              </h2>
              <p className="text-xl text-slate-300">
                Get the latest beginner guides, CBDC updates, and community news delivered to your inbox.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 text-center shadow-lg">
                    <div className="text-2xl font-bold text-cyan-400">50K+</div>
                    <div className="text-sm text-slate-400">Learners</div>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 text-center shadow-lg">
                    <div className="text-2xl font-bold text-teal-400">Weekly</div>
                    <div className="text-sm text-slate-400">Insights</div>
                  </div>
                </div>

                <div className="space-y-3 font-medium">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-400" />
                    <span className="text-slate-300">Curated Web3 news for newcomers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-400" />
                    <span className="text-slate-300">Deep dives into Digital Currencies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-400" />
                    <span className="text-slate-300">Early access to free study tools</span>
                  </div>
                </div>
              </div>

              <NewsletterForm
                variant="hero"
                title="Join the Global Community"
                description="Become part of the 50,000+ enthusiasts mastering the future of finance."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-slate-950 text-white py-16 transition-colors duration-300 border-t border-slate-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image src="/memento-academy-logo.png" alt="Memento Academy" width={40} height={40} />
                <span className="text-xl font-bold">Memento Academy</span>
              </div>
              <p className="text-slate-400 transition-colors duration-300">
                Empowering newcomers to navigate the digital financial landscape through free, accessible education.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Learn</h3>
              <ul className="space-y-3">
                <li><a href="/learn/web3-basics" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Web3 Basics</a></li>
                <li><a href="/learn/crypto-101" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Crypto 101</a></li>
                <li><a href="/learn/cbdc" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Understanding CBDCs</a></li>
                <li><a href="/learn/safety" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Safety Guide</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Academy</h3>
              <ul className="space-y-3">
                <li><a href="/about" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Our Mission</a></li>
                <li><a href="/courses" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Free Courses</a></li>
                <li><a href="/knowledge-base" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Knowledge Base</a></li>
                <li><a href="/contribute" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Contribute</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Connect</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Discord</a></li>
                <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">X (Twitter)</a></li>
                <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">LinkedIn</a></li>
                <li><a href="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Contact Support</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Memento Academy. All knowledge free to use.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Privacy</a>
              <a href="/terms" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
