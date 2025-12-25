import { Metadata } from "next"
import { MainNav } from "@/components/main-nav"
import { Badge } from "@/components/ui/badge"
import { NewsletterForm } from "@/components/newsletter/newsletter-form"
import { CoursesGrid } from "@/components/courses/courses-grid"
import { allCourses } from "@/lib/courses-data"

export const metadata: Metadata = {
  title: "Courses | Web3 & Blockchain | Memento Academy",
  description: "Explore our free and premium courses on Web3, blockchain, cryptocurrencies, and CBDCs.",
  keywords: ["web3 courses", "blockchain education", "crypto learning", "defi course", "nft masterclass"],
}

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav />
      
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-teal-500/10 text-teal-400 border-teal-500/20">
              📚 Academy
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Explore Our <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Courses</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Master Web3, blockchain, and digital finance. From beginner basics to advanced professional skills.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">All Courses</h2>
              <Badge variant="outline" className="border-slate-700 text-slate-400">
                {allCourses.length} courses available
              </Badge>
            </div>
            
            <CoursesGrid />

            <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Want to Be Notified of New Courses?</h3>
              <p className="text-slate-300 mb-6 max-w-xl mx-auto">
                Subscribe to our newsletter and be the first to know when we launch new content.
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
                    <p className="text-slate-400 text-sm">Web3 Basics</p>
                  </div>
                  <div className="w-4 h-4 bg-cyan-500 rounded-full z-10"></div>
                  <div className="flex-1"></div>
                </div>
                
                <div className="relative flex items-center gap-6">
                  <div className="flex-1"></div>
                  <div className="w-4 h-4 bg-teal-500 rounded-full z-10"></div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold">Then Learn</h3>
                    <p className="text-slate-400 text-sm">Crypto 101</p>
                  </div>
                </div>
                
                <div className="relative flex items-center gap-6">
                  <div className="flex-1 text-right">
                    <h3 className="text-white font-semibold">Go Deeper</h3>
                    <p className="text-slate-400 text-sm">DeFi & NFTs (Premium)</p>
                  </div>
                  <div className="w-4 h-4 bg-purple-500 rounded-full z-10"></div>
                  <div className="flex-1"></div>
                </div>
                
                <div className="relative flex items-center gap-6">
                  <div className="flex-1"></div>
                  <div className="w-4 h-4 bg-indigo-500 rounded-full z-10"></div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold">Become a Pro</h3>
                    <p className="text-slate-400 text-sm">Blockchain Development</p>
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
