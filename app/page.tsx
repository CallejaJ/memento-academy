import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Coins, TrendingUp, Users, Star, Newspaper } from "lucide-react"
import Image from "next/image"
import { NewsletterForm } from "@/components/newsletter/newsletter-form"
import { MainNav } from "@/components/main-nav"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Header with new navigation */}
      <MainNav />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-cyan-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 hover:bg-cyan-100 dark:hover:bg-cyan-500/20 dark:border dark:border-cyan-500/20 transition-colors duration-300"
                >
                  🚀 New: AI-Powered NFT Analytics
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-300">
                  Master the
                  <span className="bg-gradient-to-r from-cyan-500 to-teal-500 dark:from-cyan-400 dark:to-teal-400 bg-clip-text text-transparent">
                    {" "}
                    Web3 World
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">
                  Your ultimate destination for NFT token sales, blockchain education, and cutting-edge crypto news.
                  Join thousands of traders and collectors building wealth in the digital economy.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <NewsletterForm
                  variant="modal"
                  buttonText="Start Learning"
                  title="Join Memento Academy"
                  description="Get exclusive access to Web3 courses, NFT insights, and crypto trading signals."
                />
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-500 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-300 transition-colors duration-300"
                >
                  Browse NFTs
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600 dark:text-slate-400 transition-colors duration-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-teal-500 dark:text-teal-400" />
                  <span>Free blockchain courses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-teal-500 dark:text-teal-400" />
                  <span>Exclusive NFT drops</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/hero-image.png"
                  alt="Memento Academy"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl dark:shadow-cyan-500/20 transition-all duration-300 mx-auto"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 dark:from-cyan-500 dark:to-teal-500 rounded-2xl blur-3xl opacity-20 dark:opacity-30 transform scale-105 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-2xl blur-2xl opacity-10 dark:opacity-20 transform scale-110 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-slate-800/50 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
              Everything You Need for Web3 Success
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto transition-colors duration-300">
              From NFT trading to blockchain education, we provide the tools and knowledge for your crypto journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 bg-white dark:bg-slate-800/50 dark:border-slate-700 shadow-lg hover:shadow-xl dark:hover:shadow-cyan-500/10 transition-all duration-300 dark:hover:border-cyan-500/30">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 dark:border dark:border-cyan-500/20 transition-colors duration-300">
                  <Coins className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <CardTitle className="text-gray-900 dark:text-white transition-colors duration-300">
                  NFT Marketplace
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-slate-400 transition-colors duration-300">
                  Discover, buy, and sell exclusive NFTs from emerging artists and established creators.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-white dark:bg-slate-800/50 dark:border-slate-700 shadow-lg hover:shadow-xl dark:hover:shadow-teal-500/10 transition-all duration-300 dark:hover:border-teal-500/30">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-500/10 rounded-lg flex items-center justify-center mb-4 dark:border dark:border-teal-500/20 transition-colors duration-300">
                  <Newspaper className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <CardTitle className="text-gray-900 dark:text-white transition-colors duration-300">
                  Blockchain News
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-slate-400 transition-colors duration-300">
                  Stay updated with the latest crypto trends, market analysis, and breaking blockchain news.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-white dark:bg-slate-800/50 dark:border-slate-700 shadow-lg hover:shadow-xl dark:hover:shadow-emerald-500/10 transition-all duration-300 dark:hover:border-emerald-500/30">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 dark:border dark:border-emerald-500/20 transition-colors duration-300">
                  <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle className="text-gray-900 dark:text-white transition-colors duration-300">
                  Trading Analytics
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-slate-400 transition-colors duration-300">
                  Advanced tools and insights to help you make informed decisions in the volatile crypto market.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-white dark:bg-slate-800/50 dark:border-slate-700 shadow-lg hover:shadow-xl dark:hover:shadow-cyan-500/10 transition-all duration-300 dark:hover:border-cyan-500/30">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 dark:border dark:border-cyan-500/20 transition-colors duration-300">
                  <Users className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <CardTitle className="text-gray-900 dark:text-white transition-colors duration-300">
                  Community Hub
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-slate-400 transition-colors duration-300">
                  Connect with fellow traders, share strategies, and learn from experienced crypto enthusiasts.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
              Trusted by 50,000+ Crypto Enthusiasts
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-300 transition-colors duration-300">
              See what our community members say about Memento Academy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 bg-white dark:bg-slate-800/50 dark:border-slate-700 shadow-lg transition-colors duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-cyan-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 dark:text-slate-300 mb-6 transition-colors duration-300">
                  "Memento Academy helped me understand NFTs from the ground up. I've made my first successful trades
                  and learned so much about blockchain technology."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Alex Chen"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                      Alex Chen
                    </div>
                    <div className="text-sm text-gray-600 dark:text-slate-400 transition-colors duration-300">
                      NFT Collector
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white dark:bg-slate-800/50 dark:border-slate-700 shadow-lg transition-colors duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-cyan-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 dark:text-slate-300 mb-6 transition-colors duration-300">
                  "The daily blockchain news and market analysis are incredibly valuable. I stay ahead of trends and
                  make better investment decisions thanks to their insights."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Maria Rodriguez"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                      Maria Rodriguez
                    </div>
                    <div className="text-sm text-gray-600 dark:text-slate-400 transition-colors duration-300">
                      Crypto Trader
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white dark:bg-slate-800/50 dark:border-slate-700 shadow-lg transition-colors duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-cyan-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 dark:text-slate-300 mb-6 transition-colors duration-300">
                  "The community here is amazing. I've connected with other artists and collectors, and even sold my
                  first NFT collection through their marketplace."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Jordan Kim"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                      Jordan Kim
                    </div>
                    <div className="text-sm text-gray-600 dark:text-slate-400 transition-colors duration-300">
                      Digital Artist
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white dark:bg-slate-800/30 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
              Choose Your Membership Level
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-300 transition-colors duration-300">
              Unlock exclusive features and benefits based on your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white dark:bg-slate-800/50 border-2 border-gray-200 dark:border-slate-700 hover:border-cyan-300 dark:hover:border-cyan-500/50 transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-gray-900 dark:text-white transition-colors duration-300">
                  Explorer
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                    Free
                  </span>
                </div>
                <CardDescription className="mt-2 text-gray-600 dark:text-slate-400 transition-colors duration-300">
                  Perfect for beginners exploring Web3
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 dark:text-teal-400" />
                    <span className="text-gray-700 dark:text-slate-300 transition-colors duration-300">
                      Basic blockchain courses
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 dark:text-teal-400" />
                    <span className="text-gray-700 dark:text-slate-300 transition-colors duration-300">
                      Daily crypto news
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 dark:text-teal-400" />
                    <span className="text-gray-700 dark:text-slate-300 transition-colors duration-300">
                      Community access
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 dark:text-teal-400" />
                    <span className="text-gray-700 dark:text-slate-300 transition-colors duration-300">
                      Basic NFT browsing
                    </span>
                  </div>
                </div>
                <Button
                  className="w-full mt-8"
                  variant="outline"
                  className="border-cyan-500 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-300 transition-colors duration-300"
                >
                  Get Started Free
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800/50 border-2 border-cyan-500 relative hover:border-cyan-600 dark:hover:border-cyan-400 transition-all duration-300 shadow-lg dark:shadow-cyan-500/20">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-cyan-500 text-white shadow-lg dark:shadow-cyan-500/50">Most Popular</Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-gray-900 dark:text-white transition-colors duration-300">
                  Trader
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                    $49
                  </span>
                  <span className="text-gray-600 dark:text-slate-400 transition-colors duration-300">/month</span>
                </div>
                <CardDescription className="mt-2 text-gray-600 dark:text-slate-400 transition-colors duration-300">
                  For serious traders and collectors
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 dark:text-teal-400" />
                    <span className="text-gray-700 dark:text-slate-300 transition-colors duration-300">
                      Advanced trading courses
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 dark:text-teal-400" />
                    <span className="text-gray-700 dark:text-slate-300 transition-colors duration-300">
                      Premium market analysis
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 dark:text-teal-400" />
                    <span className="text-gray-700 dark:text-slate-300 transition-colors duration-300">
                      NFT trading tools
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 dark:text-teal-400" />
                    <span className="text-gray-700 dark:text-slate-300 transition-colors duration-300">
                      Early access to drops
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 dark:text-teal-400" />
                    <span className="text-gray-700 dark:text-slate-300 transition-colors duration-300">
                      Portfolio tracking
                    </span>
                  </div>
                </div>
                <Button className="w-full mt-8 bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg dark:shadow-cyan-500/25 transition-all duration-300">
                  Join Trader
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800/50 border-2 border-gray-200 dark:border-slate-700 hover:border-teal-300 dark:hover:border-teal-500/50 transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-gray-900 dark:text-white transition-colors duration-300">
                  Whale
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                    $199
                  </span>
                  <span className="text-gray-600 dark:text-slate-400 transition-colors duration-300">/month</span>
                </div>
                <CardDescription className="mt-2 text-gray-600 dark:text-slate-400 transition-colors duration-300">
                  For high-volume traders and institutions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 dark:text-teal-400" />
                    <span className="text-gray-700 dark:text-slate-300 transition-colors duration-300">
                      1-on-1 mentorship
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 dark:text-teal-400" />
                    <span className="text-gray-700 dark:text-slate-300 transition-colors duration-300">
                      Exclusive alpha calls
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 dark:text-teal-400" />
                    <span className="text-gray-700 dark:text-slate-300 transition-colors duration-300">
                      Private Discord channel
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 dark:text-teal-400" />
                    <span className="text-gray-700 dark:text-slate-300 transition-colors duration-300">
                      Whitelist guarantees
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 dark:text-teal-400" />
                    <span className="text-gray-700 dark:text-slate-300 transition-colors duration-300">
                      Custom analytics
                    </span>
                  </div>
                </div>
                <Button
                  className="w-full mt-8"
                  variant="outline"
                  className="border-teal-500 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-500/10 dark:hover:text-teal-300 transition-colors duration-300"
                >
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-teal-500/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Master Web3?</h2>
            <p className="text-xl text-cyan-100">
              Join the future of digital ownership and decentralized finance. Start your journey with Memento Academy
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NewsletterForm
                variant="modal"
                buttonText="Join the Academy"
                title="Ready to Master Web3?"
                description="Start your journey with exclusive courses, market insights, and community access."
              />
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-cyan-600 transition-colors duration-300"
              >
                Explore NFTs
              </Button>
            </div>
            <p className="text-sm text-cyan-200">Free to start • No hidden fees • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                Never Miss a Beat in Web3
              </h2>
              <p className="text-xl text-gray-600 dark:text-slate-300 transition-colors duration-300">
                Get the latest crypto news, NFT drops, and exclusive trading insights delivered to your inbox.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-800/50 rounded-lg p-4 text-center shadow-lg">
                    <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">50K+</div>
                    <div className="text-sm text-gray-600 dark:text-slate-400">Subscribers</div>
                  </div>
                  <div className="bg-white dark:bg-slate-800/50 rounded-lg p-4 text-center shadow-lg">
                    <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">Daily</div>
                    <div className="text-sm text-gray-600 dark:text-slate-400">Updates</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 dark:text-teal-400" />
                    <span className="text-gray-700 dark:text-slate-300">Breaking crypto news & market analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 dark:text-teal-400" />
                    <span className="text-gray-700 dark:text-slate-300">Exclusive NFT drop alerts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 dark:text-teal-400" />
                    <span className="text-gray-700 dark:text-slate-300">Free trading signals & tips</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 dark:text-teal-400" />
                    <span className="text-gray-700 dark:text-slate-300">Course announcements & discounts</span>
                  </div>
                </div>
              </div>

              <NewsletterForm
                variant="hero"
                title="Join 50,000+ Crypto Enthusiasts"
                description="Get insider access to the latest Web3 trends and opportunities."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-gray-100 dark:bg-slate-950 text-gray-900 dark:text-white py-16 transition-colors duration-300"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image src="/memento-academy-logo.png" alt="Memento Academy" width={40} height={40} />
                <span className="text-xl font-bold">Memento Academy</span>
              </div>
              <p className="text-gray-600 dark:text-slate-400 transition-colors duration-300">
                Your ultimate destination for NFT token sales, blockchain education, and cutting-edge crypto news.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
                  >
                    NFT Marketplace
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
                  >
                    Trading Tools
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Connect</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
                  >
                    Discord Community
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-slate-400">
              © {new Date().getFullYear()} Memento Academy. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
