import { Metadata } from "next"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PenLine, Languages, MessageCircle, Share2, Code, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Contribute | Join Our Mission | Memento Academy",
  description: "Help democratize Web3 education. Contribute by writing, translating, coding, or spreading the word about free blockchain education.",
  keywords: ["contribute web3 education", "volunteer blockchain", "help crypto community", "open source education"],
}

const contributions = [
  {
    title: "Write Content",
    description: "Help us create guides, tutorials, and explainers for beginners. Share your knowledge in accessible language.",
    icon: PenLine,
    color: "cyan",
    requirements: ["Understanding of Web3/crypto topics", "Ability to explain complex concepts simply", "English writing skills"],
  },
  {
    title: "Translate",
    description: "Help us reach more people by translating content into your native language.",
    icon: Languages,
    color: "teal",
    requirements: ["Fluency in English + another language", "Understanding of crypto terminology", "Attention to detail"],
  },
  {
    title: "Community Support",
    description: "Help newcomers in our Discord, answer questions, and create a welcoming environment.",
    icon: MessageCircle,
    color: "purple",
    requirements: ["Basic Web3/crypto knowledge", "Patience and empathy", "Available a few hours per week"],
  },
  {
    title: "Spread the Word",
    description: "Share our content on social media, forums, and with friends who are curious about crypto.",
    icon: Share2,
    color: "emerald",
    requirements: ["Social media presence", "Genuine belief in our mission", "No special skills needed!"],
  },
  {
    title: "Development",
    description: "Contribute to our open-source platform. We use Next.js, React, and Tailwind CSS.",
    icon: Code,
    color: "orange",
    requirements: ["React/Next.js experience", "Git/GitHub knowledge", "Interest in education tech"],
  },
  {
    title: "Donate",
    description: "Help keep our servers running and content free. Every contribution helps.",
    icon: Heart,
    color: "red",
    requirements: ["No requirements!", "Any amount helps", "100% goes to operations"],
  },
]

export default function ContributePage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav />
      
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
              🤝 Join the Movement
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Contribute</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Memento Academy is a community project. There are many ways to help democratize Web3 education.
            </p>
          </div>
        </div>
      </section>

      {/* Contribution Options */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Ways to Contribute</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {contributions.map((item) => {
                const Icon = item.icon
                return (
                  <Card key={item.title} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                    <CardHeader>
                      <div className={`w-12 h-12 bg-${item.color}-500/10 rounded-lg flex items-center justify-center mb-4 border border-${item.color}-500/20`}>
                        <Icon className={`w-6 h-6 text-${item.color}-400`} />
                      </div>
                      <CardTitle className="text-white">{item.title}</CardTitle>
                      <CardDescription className="text-slate-400">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-slate-500">What we're looking for:</p>
                        <ul className="text-sm text-slate-400 space-y-1">
                          {item.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-cyan-400">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 mb-12">
              <h3 className="text-xl font-bold text-white mb-4">How to Get Started</h3>
              <ol className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="bg-cyan-500/20 text-cyan-400 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</span>
                  <div>
                    <h4 className="text-white font-semibold">Join our Discord</h4>
                    <p className="text-slate-400 text-sm">Introduce yourself in the #contributors channel and tell us how you'd like to help.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="bg-cyan-500/20 text-cyan-400 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</span>
                  <div>
                    <h4 className="text-white font-semibold">Pick a task</h4>
                    <p className="text-slate-400 text-sm">Check our task board for open items or propose something new based on your skills.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="bg-cyan-500/20 text-cyan-400 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</span>
                  <div>
                    <h4 className="text-white font-semibold">Start contributing</h4>
                    <p className="text-slate-400 text-sm">Work on your contribution and submit it for review. We'll provide feedback and guidance.</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Ready to Make a Difference?</h3>
              <p className="text-slate-300 mb-6 max-w-xl mx-auto">
                Every contribution, no matter how small, helps someone understand crypto and Web3 a little better.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-cyan-500 to-teal-500">
                    Get in Touch
                  </Button>
                </Link>
                <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                  View GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
