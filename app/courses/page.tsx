import { Metadata } from "next"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, Users, ArrowRight, Star, Blocks, Shield, Landmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsletterForm } from "@/components/newsletter/newsletter-form"

export const metadata: Metadata = {
  title: "Free Courses | Web3 & Blockchain | Memento Academy",
  description: "Explore our free courses on Web3, blockchain, cryptocurrencies, and CBDCs. Learn at your own pace with beginner-friendly content.",
  keywords: ["free web3 courses", "blockchain courses", "crypto education", "cbdc learning", "free cryptocurrency courses"],
}

const courses = [
  {
    id: "web3-basics",
    title: "Web3 Fundamentals",
    description: "Understand the evolution from Web1 to Web3 and why decentralization matters.",
    duration: "30 min",
    level: "Beginner",
    icon: Blocks,
    color: "cyan",
    href: "/learn/web3-basics",
    available: true,
  },
  {
    id: "crypto-101",
    title: "Cryptocurrency 101",
    description: "Learn about Bitcoin, Ethereum, wallets, and how to stay safe in crypto.",
    duration: "45 min",
    level: "Beginner",
    icon: Star,
    color: "teal",
    href: "/learn/crypto-101",
    available: true,
  },
  {
    id: "cbdc",
    title: "Understanding CBDCs",
    description: "Explore Central Bank Digital Currencies and their impact on the future of money.",
    duration: "40 min",
    level: "Beginner",
    icon: Landmark,
    color: "emerald",
    href: "/learn/cbdc",
    available: true,
  },
  {
    id: "security",
    title: "Crypto Security",
    description: "Protect yourself from scams, phishing, and learn wallet security best practices.",
    duration: "35 min",
    level: "Beginner",
    icon: Shield,
    color: "red",
    href: "/learn/safety",
    available: true,
  },
  {
    id: "defi",
    title: "DeFi Essentials",
    description: "Introduction to Decentralized Finance: lending, borrowing, and yield farming.",
    duration: "50 min",
    level: "Intermediate",
    icon: BookOpen,
    color: "purple",
    href: "#",
    available: false,
  },
  {
    id: "nfts",
    title: "NFTs Explained",
    description: "What are NFTs, how do they work, and what's their real utility beyond art.",
    duration: "40 min",
    level: "Beginner",
    icon: BookOpen,
    color: "orange",
    href: "#",
    available: false,
  },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav />
      
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-teal-500/10 text-teal-400 border-teal-500/20">
              📚 Free Learning
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Free <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Courses</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Master Web3, blockchain, and digital finance at your own pace. Always free, always accessible.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">Available Courses</h2>
              <Badge variant="outline" className="border-slate-700 text-slate-400">
                {courses.filter(c => c.available).length} courses available
              </Badge>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {courses.map((course) => {
                const Icon = course.icon
                return (
                  <Card 
                    key={course.id} 
                    className={`bg-slate-800/50 border-slate-700 hover:border-${course.color}-500/30 transition-all duration-300 ${
                      !course.available ? "opacity-60" : ""
                    }`}
                  >
                    <CardHeader>
                      <div className={`w-12 h-12 bg-${course.color}-500/10 rounded-lg flex items-center justify-center mb-4 border border-${course.color}-500/20`}>
                        <Icon className={`w-6 h-6 text-${course.color}-400`} />
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${
                            course.level === "Beginner" 
                              ? "border-emerald-500/30 text-emerald-400" 
                              : "border-amber-500/30 text-amber-400"
                          }`}
                        >
                          {course.level}
                        </Badge>
                        {!course.available && (
                          <Badge className="bg-slate-700 text-slate-400 text-xs">
                            Coming Soon
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-white">{course.title}</CardTitle>
                      <CardDescription className="text-slate-400">
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Clock className="w-4 h-4" />
                          {course.duration}
                        </div>
                        {course.available ? (
                          <Link href={course.href}>
                            <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-teal-500">
                              Start <ArrowRight className="ml-1 h-4 w-4" />
                            </Button>
                          </Link>
                        ) : (
                          <Button size="sm" variant="outline" disabled className="border-slate-700">
                            Coming Soon
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Want to Be Notified of New Courses?</h3>
              <p className="text-slate-300 mb-6 max-w-xl mx-auto">
                Subscribe to our newsletter and be the first to know when we launch new free courses and guides.
              </p>
              <NewsletterForm variant="modal" buttonText="Subscribe for Updates" />
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Recommended Learning Path</h2>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-800"></div>
              
              <div className="space-y-8">
                <div className="relative flex items-center gap-6">
                  <div className="flex-1 text-right">
                    <h3 className="text-white font-semibold">Start Here</h3>
                    <p className="text-slate-400 text-sm">Web3 Fundamentals</p>
                  </div>
                  <div className="w-4 h-4 bg-cyan-500 rounded-full z-10"></div>
                  <div className="flex-1"></div>
                </div>
                
                <div className="relative flex items-center gap-6">
                  <div className="flex-1"></div>
                  <div className="w-4 h-4 bg-teal-500 rounded-full z-10"></div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold">Then Learn</h3>
                    <p className="text-slate-400 text-sm">Cryptocurrency 101</p>
                  </div>
                </div>
                
                <div className="relative flex items-center gap-6">
                  <div className="flex-1 text-right">
                    <h3 className="text-white font-semibold">Stay Informed</h3>
                    <p className="text-slate-400 text-sm">Understanding CBDCs</p>
                  </div>
                  <div className="w-4 h-4 bg-emerald-500 rounded-full z-10"></div>
                  <div className="flex-1"></div>
                </div>
                
                <div className="relative flex items-center gap-6">
                  <div className="flex-1"></div>
                  <div className="w-4 h-4 bg-red-500 rounded-full z-10"></div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold">Stay Safe</h3>
                    <p className="text-slate-400 text-sm">Crypto Security</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
