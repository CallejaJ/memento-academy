"use client"

import { useState } from "react"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PieChart, Shield, TrendingDown, RefreshCw, Target, Wallet, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionCompleteButton } from "@/components/progress/section-complete-button"

export default function PortfolioManagementPage() {
  const [expandedSections, setExpandedSections] = useState<number[]>([0])

  const toggleSection = (index: number) => {
    setExpandedSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav />
      
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-indigo-500/10 text-indigo-400 border-indigo-500/20">
              🔒 Premium Course
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Portfolio Management
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Build and maintain a balanced crypto portfolio. Learn diversification strategies, 
              risk management, and rebalancing techniques for long-term success.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-indigo-400">6</div>
                <div className="text-sm text-slate-400">Modules</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-purple-400">Intermediate</div>
                <div className="text-sm text-slate-400">Level</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-pink-400">~3h</div>
                <div className="text-sm text-slate-400">Duration</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href="/courses">
                <Button variant="outline" className="border-slate-700 text-slate-300 hover:text-white">
                  ← Back to Courses
                </Button>
              </Link>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">Course Curriculum</h2>

            <div className="relative pl-8 space-y-4">
              
              {/* Section 1: Portfolio Basics */}
              <div className="relative group">
                <div className={`absolute -left-[19px] top-6 w-3 h-3 rounded-full border z-10 transition-all ${
                  expandedSections.includes(0) ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-slate-700 border-slate-600'
                }`} />
                <div className="absolute -left-[14px] top-9 w-0.5 h-full bg-slate-800" />
                
                <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ml-4">
                  <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => toggleSection(0)}>
                    <div className="flex items-center gap-3">
                      <Wallet className="w-5 h-5 text-indigo-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">1. Portfolio Basics</h3>
                        <p className="text-sm text-slate-400">Building your foundation</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${expandedSections.includes(0) ? 'rotate-180' : ''}`} />
                  </div>

                  {expandedSections.includes(0) && (
                    <div className="px-6 pb-6">
                      <div className="space-y-4 text-slate-300">
                        <p className="text-lg">
                          A <strong className="text-white">crypto portfolio</strong> is your collection of digital assets. 
                          Like traditional investing, diversification and strategy are key to managing risk and maximizing returns.
                        </p>

                        <div className="grid md:grid-cols-3 gap-3">
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                            <h5 className="text-blue-400 font-semibold mb-2">💎 Blue Chips</h5>
                            <p className="text-xs text-slate-400 mb-2">BTC, ETH - Established, lower risk</p>
                            <p className="text-xs text-green-400">Allocation: 40-60%</p>
                          </div>
                          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                            <h5 className="text-purple-400 font-semibold mb-2">🚀 Mid Caps</h5>
                            <p className="text-xs text-slate-400 mb-2">SOL, AVAX - Higher potential</p>
                            <p className="text-xs text-green-400">Allocation: 20-40%</p>
                          </div>
                          <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-4">
                            <h5 className="text-pink-400 font-semibold mb-2">💥 Small Caps</h5>
                            <p className="text-xs text-slate-400 mb-2">New projects - High risk/reward</p>
                            <p className="text-xs text-green-400">Allocation: 5-20%</p>
                          </div>
                        </div>

                        <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5">
                          <h4 className="text-indigo-400 font-semibold mb-3">🎯 Portfolio Goals</h4>
                          <div className="space-y-2 text-sm">
                            <p>• <strong className="text-white">Conservative:</strong> 80% BTC/ETH, 20% alts - Capital preservation</p>
                            <p>• <strong className="text-white">Balanced:</strong> 50% majors, 30% mid-caps, 20% small - Growth + stability</p>
                            <p>• <strong className="text-white">Aggressive:</strong> 30% majors, 70% alts - Maximum growth potential</p>
                          </div>
                        </div>

                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton courseId="portfolio-management" sectionId="section-1" sectionNumber={1} totalSections={6} />
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>

              {/* Sections 2-6 - Condensed but complete */}
              {[
                { idx: 1, icon: PieChart, color: "purple", title: "2. Diversification Strategies", subtitle: "Don't put all eggs in one basket", content: "Diversification reduces risk by spreading investments across different assets, sectors, and strategies." },
                { idx: 2, icon: Shield, color: "red", title: "3. Risk Management", subtitle: "Protecting your capital", content: "Risk management is about preserving capital during downturns while maintaining upside potential." },
                { idx: 3, icon: RefreshCw, color: "green", title: "4. Rebalancing Techniques", subtitle: "Maintaining your targets", content: "Rebalancing ensures your portfolio stays aligned with your strategy as market conditions change." },
                { idx: 4, icon: TrendingDown, color: "orange", title: "5. Tax Optimization", subtitle: "Keeping more profits", content: "Understanding crypto taxes helps you legally minimize tax burden and maximize net returns." },
                { idx: 5, icon: Target, color: "cyan", title: "6. Performance Tracking", subtitle: "Measuring success", content: "Track your portfolio's performance to make informed decisions and improve your strategy over time." }
              ].map(section => (
                <div key={section.idx} className="relative group">
                  <div className={`absolute -left-[19px] top-6 w-3 h-3 rounded-full border z-10 transition-all ${
                    expandedSections.includes(section.idx) ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-slate-700 border-slate-600'
                  }`} />
                  <div className={`absolute -left-[14px] top-9 w-0.5 ${section.idx === 5 ? 'h-0' : 'h-full'} bg-slate-800`} />
                  
                  <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ml-4">
                    <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => toggleSection(section.idx)}>
                      <div className="flex items-center gap-3">
                        <section.icon className={`w-5 h-5 text-${section.color}-400`} />
                        <div>
                          <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                          <p className="text-sm text-slate-400">{section.subtitle}</p>
                        </div>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${expandedSections.includes(section.idx) ? 'rotate-180' : ''}`} />
                    </div>

                    {expandedSections.includes(section.idx) && (
                      <div className="px-6 pb-6">
                        <div className="space-y-4 text-slate-300">
                          <p className="text-lg">{section.content}</p>

                          {section.idx ===1 && (
                            <>
                              <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-5">
                                <h4 className="text-purple-400 font-semibold mb-3">🎲 Diversification Types</h4>
                                <ul className="text-sm space-y-1">
                                  <li>• <strong className="text-white">By Market Cap:</strong> BTC, ETH, mid-caps, small-caps</li>
                                  <li>• <strong className="text-white">By Sector:</strong> DeFi, NFTs, Gaming, Infrastructure</li>
                                  <li>• <strong className="text-white">By L1/L2:</strong> Ethereum, Solana, Polygon, Optimism</li>
                                  <li>• <strong className="text-white">By Geography:</strong> Different regulatory environments</li>
                                </ul>
                              </div>
                              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                                <p className="text-sm">⚠️ Over-diversification reduces gains. 5-15 positions is optimal for most investors.</p>
                              </div>
                            </>
                          )}

                          {section.idx === 2 && (
                            <>
                              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5">
                                <h4 className="text-red-400 font-semibold mb-3">🛡️ Risk Management Rules</h4>
                                <ul className="text-sm space-y-2">
                                  <li>• <strong className="text-white">Position Sizing:</strong> No single position {">"} 20% of portfolio</li>
                                  <li>• <strong className="text-white">Stop Losses:</strong> Set mental or hard stops at -20% to -30%</li>
                                  <li>• <strong className="text-white">Take Profits:</strong> Scale out on way up (25% at 2x, 50% at 4x, etc.)</li>
                                  <li>• <strong className="text-white">Bear Market Cash:</strong> Hold 20-50% stablecoins in downtrends</li>
                                </ul>
                              </div>
                            </>
                          )}

                          {section.idx === 3 && (
                            <>
                              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5">
                                <h4 className="text-green-400 font-semibold mb-3">🔄 Rebalancing Methods</h4>
                                <div className="grid md:grid-cols-2 gap-3 text-sm">
                                  <div className="bg-slate-800/50 rounded p-3">
                                    <p className="text-white font-semibold mb-1">Time-Based</p>
                                    <p className="text-xs text-slate-400">Rebalance monthly/quarterly regardless of deviation</p>
                                  </div>
                                  <div className="bg-slate-800/50 rounded p-3">
                                    <p className="text-white font-semibold mb-1">Threshold-Based</p>
                                    <p className="text-xs text-slate-400">Rebalance when allocation drifts {">"} 5-10% from target</p>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}

                          {section.idx === 4 && (
                            <>
                              <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-5">
                                <h4 className="text-orange-400 font-semibold mb-3">💰 Tax Strategies</h4>
                                <ul className="text-sm space-y-1">
                                  <li>• <strong className="text-white">Long-term Holdings:</strong> Hold {">"} 1 year for lower tax rate</li>
                                  <li>• <strong className="text-white">Tax-Loss Harvesting:</strong> Sell losers to offset gains</li>
                                  <li>• <strong className="text-white">Stablecoin Swaps:</strong> May not be taxable events (consult CPA)</li>
                                  <li>• <strong className="text-white">Track Everything:</strong> Use CoinTracker, Koinly, or similar</li>
                                </ul>
                              </div>
                            </>
                          )}

                          {section.idx === 5 && (
                            <>
                              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-5">
                                <h4 className="text-cyan-400 font-semibold mb-3">📊 Key Metrics</h4>
                                <ul className="text-sm space-y-2">
                                  <li>• <strong className="text-white">Total Return:</strong> (Current Value - Initial Investment) / Initial Investment</li>
                                  <li>• <strong className="text-white">vs BTC/ETH:</strong> Did you outperform just holding majors?</li>
                                  <li>• <strong className="text-white">Max Drawdown:</strong> Peak to trough decline (manage risk)</li>
                                  <li>• <strong className="text-white">Sharpe Ratio:</strong> Risk-adjusted returns (higher = better)</li>
                                </ul>
                              </div>
                              <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-lg p-5 text-center">
                                <h5 className="text-white font-semibold mb-2">🎓 Portfolio Success</h5>
                                <p className="text-sm text-slate-400">
                                  Great portfolio management is about discipline, not luck. Stick to your plan, rebalance regularly, and don{"'"}t let emotions drive decisions.
                                </p>
                              </div>
                            </>
                          )}

                          <div className="mt-6 flex justify-center">
                            <SectionCompleteButton courseId="portfolio-management" sectionId={`section-${section.idx + 1}`} sectionNumber={section.idx + 1} totalSections={6} />
                          </div>
                        </div>
                      </div>
                    )}
                  </Card>
                </div>
              ))}
              
            </div>
          </div>
        </div>
      </section>

      <Card className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-500/20 mt-8 mb-16 max-w-4xl mx-auto">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Build Your Wealth Portfolio</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            A well-managed portfolio compounds gains over time. Start small, stay disciplined, and never invest more than you can afford to lose.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses">
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">← Back to Courses</Button>
            </Link>
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600">Track Your Progress →</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
