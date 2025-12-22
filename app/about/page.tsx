import { Metadata } from "next"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Globe, BookOpen, Users, Target, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsletterForm } from "@/components/newsletter/newsletter-form"

export const metadata: Metadata = {
  title: "About Us | Our Mission | Memento Academy",
  description: "Memento Academy's mission is to democratize Web3 and blockchain education. Free knowledge for everyone, everywhere.",
  keywords: ["memento academy", "web3 education", "blockchain learning", "free crypto courses", "about us"],
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav />
      
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
              🎓 About Memento Academy
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Our <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Mission</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Empowering everyone to understand and navigate the digital financial revolution.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Target className="w-8 h-8 text-cyan-400" />
                Why We Exist
              </h2>
              <p className="text-slate-300 text-lg">
                The world of cryptocurrencies, blockchain, and CBDCs can be overwhelming. 
                Complex jargon, conflicting information, and predatory "gurus" make it hard for newcomers to learn safely.
              </p>
              <p className="text-slate-300 mt-4">
                <strong className="text-white">Memento Academy was created to change that.</strong> We believe that understanding 
                digital finance shouldn't require a computer science degree or expensive courses.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">Our Core Values</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">100% Free Education</h3>
                      <p className="text-slate-400 text-sm">
                        All our courses, guides, and resources are completely free. No hidden fees, no premium tiers, no paywalls.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Beginner-First Approach</h3>
                      <p className="text-slate-400 text-sm">
                        We explain everything assuming zero prior knowledge. No jargon, no gatekeeping.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">No Shilling, No Scams</h3>
                      <p className="text-slate-400 text-sm">
                        We never promote specific cryptocurrencies or investment advice. Our goal is education, not sales.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Global & Accessible</h3>
                      <p className="text-slate-400 text-sm">
                        Knowledge should have no borders. We're working to make our content available in multiple languages.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-teal-400" />
              Our Community
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6 bg-slate-800/30 border border-slate-700 rounded-xl">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50K+</div>
                <div className="text-slate-400">Community Members</div>
              </div>
              <div className="text-center p-6 bg-slate-800/30 border border-slate-700 rounded-xl">
                <div className="text-4xl font-bold text-teal-400 mb-2">100%</div>
                <div className="text-slate-400">Free Content</div>
              </div>
              <div className="text-center p-6 bg-slate-800/30 border border-slate-700 rounded-xl">
                <div className="text-4xl font-bold text-emerald-400 mb-2">0</div>
                <div className="text-slate-400">Hidden Fees</div>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Want to Help?</h3>
              <p className="text-slate-300 mb-6">
                Memento Academy is a community project. We welcome contributions in many forms: 
                writing guides, translating content, helping newcomers in our Discord, or spreading the word.
              </p>
              <Link href="/contribute">
                <Button className="bg-gradient-to-r from-cyan-500 to-teal-500">
                  Learn How to Contribute
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold text-white">Start Your Journey Today</h2>
            <p className="text-slate-400">Join our community and begin learning for free.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses">
                <Button className="bg-gradient-to-r from-cyan-500 to-teal-500">
                  Explore Courses
                </Button>
              </Link>
              <NewsletterForm variant="modal" buttonText="Join Newsletter" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
