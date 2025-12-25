"use client"

import { useState } from "react"
import { Course } from "@/lib/courses-data"
import { useAuth } from "@/contexts/auth-context"
import { useAuthModal } from "@/contexts/auth-modal-context"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Lock, 
  Clock, 
  BarChart3, 
  ChevronDown, 
  ChevronUp, 
  PlayCircle, 
  CheckCircle,
  Blocks, 
  Coins, 
  Landmark, 
  Shield, 
  TrendingUp, 
  Palette, 
  Code, 
  LineChart, 
  PieChart, 
  Layers,
  Activity,
  CreditCard,
  Building,
  Globe,
  Wallet,
  LucideIcon
} from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  Blocks,
  Coins,
  Landmark,
  Shield,
  TrendingUp,
  Palette,
  Code,
  LineChart,
  PieChart,
  Layers,
  Activity,
  CreditCard,
  Building,
  Lock,
  Globe,
  Wallet
}

interface CourseViewerProps {
  course: Course
}

export function CourseViewer({ course }: CourseViewerProps) {
  const { user } = useAuth()
  const { openSignup } = useAuthModal()
  
  // If user is logged in OR course is free, they have access
  const hasAccess = user || !course.isPremium
  
  const Icon = iconMap[course.icon] || Blocks

  return (
    <div className="min-h-screen bg-slate-950 pb-20">
      {/* Course Header */}
      <section className={`py-20 relative overflow-hidden ${
        hasAccess ? "bg-slate-900" : "bg-slate-900/50"
      }`}>
        {/* Background gradient effects */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 bg-gradient-to-b from-${course.color}-500/20 to-transparent pointer-events-none`} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-xl bg-slate-800 border border-slate-700`}>
                <Icon className={`w-8 h-8 text-${course.color}-400`} />
              </div>
              <Badge variant="outline" className={`
                ${course.difficulty === "beginner" ? "text-emerald-400 border-emerald-500/30" : ""}
                ${course.difficulty === "intermediate" ? "text-yellow-400 border-yellow-500/30" : ""}
                ${course.difficulty === "advanced" ? "text-red-400 border-red-500/30" : ""}
              `}>
                {course.difficulty.charAt(0).toUpperCase() + course.difficulty.slice(1)}
              </Badge>
              {course.isPremium && (
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  Premium
                </Badge>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {course.title}
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              {course.longDescription || course.description}
            </p>
            
            <div className="flex flex-wrap gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                <span>{course.sections.length} Sections</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content / Syllabus */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="max-w-4xl mx-auto">
          
          {/* Learning Outcomes */}
          <Card className="bg-slate-800/80 border-slate-700 backdrop-blur-sm mb-12">
            <CardHeader>
              <CardTitle className="text-white">What You'll Learn</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {course.learningOutcomes.map((outcome, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className={`w-5 h-5 text-${course.color}-400 mt-0.5 flex-shrink-0`} />
                    <span className="text-slate-300 text-sm">{outcome}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Syllabus */}
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">Course Curriculum</h2>
              {!hasAccess && (
                <Badge variant="secondary" className="bg-slate-800 text-slate-400">
                  Locked
                </Badge>
              )}
            </div>

            {hasAccess ? (
              // Unlocked View
              <div className="space-y-4">
                {course.sections.map((section, index) => (
                  <div key={section.id} className="relative group">
                    <div className="absolute -left-[19px] top-6 w-3 h-3 bg-slate-700 rounded-full border border-slate-600 z-10 group-hover:bg-cyan-400 group-hover:border-cyan-400 transition-colors" />
                    <div className="absolute -left-[14px] top-9 w-0.5 h-full bg-slate-800 last:hidden" />
                    
                    <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ml-4">
                      <div className="p-4 flex items-center justify-between cursor-pointer">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-mono text-sm">
                            {(index + 1).toString().padStart(2, '0')}
                          </div>
                          <div>
                            <h3 className="text-white font-medium">{section.title}</h3>
                            <p className="text-slate-500 text-sm">{section.description}</p>
                          </div>
                        </div>
                        <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                          <PlayCircle className="w-5 h-5" />
                        </Button>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            ) : (
              // Locked View
              <div className="relative">
                {/* Blurred Content */}
                <div className="space-y-4 filter blur-sm select-none pointer-events-none opacity-50">
                  {course.sections.map((section, index) => (
                    <Card key={section.id} className="bg-slate-900/50 border-slate-800 ml-4">
                      <div className="p-4 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-800" />
                        <div className="space-y-2">
                          <div className="h-4 w-40 bg-slate-800 rounded" />
                          <div className="h-3 w-60 bg-slate-800/50 rounded" />
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Lock Overlay */}
                <div className="absolute inset-0 z-10 flex items-center justify-center p-4">
                  <div className="bg-slate-800/90 backdrop-blur-md border border-slate-700 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
                    <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Lock className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Unlock Full Access
                    </h3>
                    <p className="text-slate-400 mb-8">
                      Create a free account to access this premium course and track your progress.
                    </p>
                    <Button 
                      onClick={openSignup}
                      size="lg" 
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    >
                      <Lock className="w-4 h-4 mr-2" />
                      Sign Up to Unlock
                    </Button>
                    <p className="mt-4 text-xs text-slate-500">
                      Already have an account? <button onClick={openSignup} className="text-purple-400 hover:underline">Log in</button>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
