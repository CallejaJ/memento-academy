"use client"

import { useState } from "react"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Lock, Droplets, AlertTriangle, BarChart3, PieChart, Shield, CheckCircle, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionCompleteButton } from "@/components/progress/section-complete-button"

export default function DefiDeepDivePage() {
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
            <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20">
              🔒 Premium Course
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">DeFi</span> Deep Dive
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Master decentralized finance protocols, from basic lending to advanced yield farming strategies.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            <Card className="bg-slate-800/50 border-slate-700 mb-12">
              <CardContent className="pt-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  What You'll Learn
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">Navigate major DeFi protocols</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">Understand lending and borrowing mechanics</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">Evaluate yield farming opportunities</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">Manage DeFi risks effectively</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-white mb-6">Course Curriculum</h2>
            
            <div className="space-y-4">
              {/* Section 1: DeFi Fundamentals */}
              <div className="relative group">
                <div className={`absolute -left-[19px] top-6 w-3 h-3 rounded-full border z-10 transition-all ${
                  expandedSections.includes(0) 
                    ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50' 
                    : 'bg-slate-700 border-slate-600'
                }`} />
                <div className="absolute -left-[14px] top-9 w-0.5 h-full bg-slate-800" />
                
                <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ml-4">
                  <div 
                    className="p-4 flex items-center justify-between cursor-pointer"
                    onClick={() => toggleSection(0)}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-mono text-sm flex-shrink-0">
                        01
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-medium mb-1 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-purple-400" />
                          DeFi Fundamentals
                        </h3>
                        <p className="text-slate-500 text-sm">Core concepts and protocols</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${expandedSections.includes(0) ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {expandedSections.includes(0) && (
                    <div className="px-6 pb-6">
                      <div className="space-y-4 text-slate-300">
                        <p className="text-lg">
                          <strong className="text-white">Decentralized Finance (DeFi)</strong> is an ecosystem of financial applications built on blockchain technology, 
                          primarily Ethereum. Unlike traditional finance, DeFi operates without intermediaries like banks or brokers.
                        </p>
                        
                        <div className="bg-slate-900/50 border border-purple-500/20 rounded-xl p-4">
                          <h4 className="text-purple-400 font-semibold mb-2">📊 Key DeFi Metrics</h4>
                          <ul className="space-y-1 text-sm">
                            <li><strong className="text-white">TVL:</strong> Total Value Locked in protocols</li>
                            <li><strong className="text-white">APY:</strong> Annual Percentage Yield (with compounding)</li>
                            <li><strong className="text-white">APR:</strong> Annual Percentage Rate (simple interest)</li>
                          </ul>
                        </div>

                        <div className="grid md:grid-cols-3 gap-3">
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                            <h5 className="text-blue-400 font-semibold text-sm mb-1">Lending</h5>
                            <p className="text-slate-400 text-xs">Earn interest by lending crypto</p>
                          </div>
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                            <h5 className="text-green-400 font-semibold text-sm mb-1">Borrowing</h5>
                            <p className="text-slate-400 text-xs">Access liquidity without selling</p>
                          </div>
                          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                            <h5 className="text-purple-400 font-semibold text-sm mb-1">Trading</h5>
                            <p className="text-slate-400 text-xs">Swap tokens directly</p>
                          </div>
                        </div>
                        
                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton 
                            courseId="defi-deep-dive"
                            sectionId="section-1"
                            sectionNumber={1}
                            totalSections={6}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>

              {/* Section 2: Lending & Borrowing */}
              <div className="relative group">
                <div className={`absolute -left-[19px] top-6 w-3 h-3 rounded-full border z-10 transition-all ${
                  expandedSections.includes(1) 
                    ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50' 
                    : 'bg-slate-700 border-slate-600'
                }`} />
                <div className="absolute -left-[14px] top-9 w-0.5 h-full bg-slate-800" />
                
                <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ml-4">
                  <div 
                    className="p-4 flex items-center justify-between cursor-pointer"
                    onClick={() => toggleSection(1)}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-mono text-sm flex-shrink-0">
                        02
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-medium mb-1 flex items-center gap-2">
                          <Lock className="w-5 h-5 text-cyan-400" />
                          Lending & Borrowing
                        </h3>
                        <p className="text-slate-500 text-sm">Aave, Compound explained</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${expandedSections.includes(1) ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {expandedSections.includes(1) && (
                    <div className="px-6 pb-6">
                      <div className="space-y-4 text-slate-300">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                            <h4 className="text-white font-semibold mb-2">Aave</h4>
                            <p className="text-sm text-slate-400 mb-3">One of the largest lending protocols with innovative features like flash loans.</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              <li>• Variable and stable rates</li>
                              <li>• 30+ supported assets</li>
                              <li>• Flash loans available</li>
                            </ul>
                          </div>
                          
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                            <h4 className="text-white font-semibold mb-2">Compound</h4>
                            <p className="text-sm text-slate-400 mb-3">Pioneering protocol with algorithmic interest rates.</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              <li>• Algorithmic rates</li>
                              <li>• cTokens for deposits</li>
                              <li>• COMP governance</li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                          <h4 className="text-cyan-400 font-semibold mb-3 text-sm">How It Works</h4>
                          <ol className="space-y-2 text-sm">
                            <li className="flex gap-2">
                              <span className="bg-cyan-500/20 text-cyan-400 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs">1</span>
                              <span>Deposit collateral (e.g., ETH)</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="bg-cyan-500/20 text-cyan-400 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs">2</span>
                              <span>Borrow up to 75% of collateral value</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="bg-cyan-500/20 text-cyan-400 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs">3</span>
                              <span>Monitor health factor</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="bg-cyan-500/20 text-cyan-400 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs">4</span>
                              <span>Repay to unlock collateral</span>
                            </li>
                          </ol>
                        </div>
                        
                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton 
                            courseId="defi-deep-dive"
                            sectionId="section-2"
                            sectionNumber={2}
                            totalSections={6}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>

              {/* Section 3: Yield Farming */}
              <div className="relative group">
                <div className={`absolute -left-[19px] top-6 w-3 h-3 rounded-full border z-10 transition-all ${
                  expandedSections.includes(2) 
                    ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50' 
                    : 'bg-slate-700 border-slate-600'
                }`} />
                <div className="absolute -left-[14px] top-9 w-0.5 h-full bg-slate-800" />
                
                <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ml-4">
                  <div 
                    className="p-4 flex items-center justify-between cursor-pointer"
                    onClick={() => toggleSection(2)}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-mono text-sm flex-shrink-0">
                        03
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-medium mb-1 flex items-center gap-2">
                          <BarChart3 className="w-5 h-5 text-green-400" />
                          Yield Farming
                        </h3>
                        <p className="text-slate-500 text-sm">Maximizing returns</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${expandedSections.includes(2) ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {expandedSections.includes(2) && (
                    <div className="px-6 pb-6">
                      <div className="space-y-4 text-slate-300">
                        <p>
                          Yield farming is the practice of depositing crypto assets into DeFi protocols to earn maximum returns. 
                          "Farmers" move funds between protocols to capture the best yields.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                            <h4 className="text-green-400 font-semibold mb-2 text-sm">Popular Strategies</h4>
                            <ul className="space-y-1 text-xs text-slate-400">
                              <li>• <strong className="text-white">Staking:</strong> Lock tokens for rewards</li>
                              <li>• <strong className="text-white">Liquidity Mining:</strong> Earn protocol tokens</li>
                              <li>• <strong className="text-white">Lending:</strong> Earn interest</li>
                              <li>• <strong className="text-white">Leveraged:</strong> Amplify yields (high risk)</li>
                            </ul>
                          </div>

                          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                            <h4 className="text-orange-400 font-semibold mb-2 text-sm flex items-center gap-1">
                              <AlertTriangle className="w-4 h-4" />
                              Key Risks
                            </h4>
                            <ul className="space-y-1 text-xs text-slate-400">
                              <li>• Impermanent loss</li>
                              <li>• Smart contract bugs</li>
                              <li>• Rug pulls</li>
                              <li>• High gas fees</li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                          <p className="text-yellow-400 font-semibold text-sm mb-1">APY vs APR</p>
                          <p className="text-xs text-slate-400">
                            APY includes compound interest, APR doesn't. A 100% APY doubles your money in a year if compounded.
                          </p>
                        </div>
                        
                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton 
                            courseId="defi-deep-dive"
                            sectionId="section-3"
                            sectionNumber={3}
                            totalSections={6}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>

              {/* Section 4: Liquidity Pools */}
              <div className="relative group">
                <div className={`absolute -left-[19px] top-6 w-3 h-3 rounded-full border z-10 transition-all ${
                  expandedSections.includes(3) 
                    ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50' 
                    : 'bg-slate-700 border-slate-600'
                }`} />
                <div className="absolute -left-[14px] top-9 w-0.5 h-full bg-slate-800" />
                
                <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ml-4">
                  <div 
                    className="p-4 flex items-center justify-between cursor-pointer"
                    onClick={() => toggleSection(3)}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-mono text-sm flex-shrink-0">
                        04
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-medium mb-1 flex items-center gap-2">
                          <Droplets className="w-5 h-5 text-blue-400" />
                          Liquidity Pools
                        </h3>
                        <p className="text-slate-500 text-sm">AMMs and impermanent loss</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${expandedSections.includes(3) ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {expandedSections.includes(3) && (
                    <div className="px-6 pb-6">
                      <div className="space-y-4 text-slate-300">
                        <p>
                          Liquidity pools are smart contracts containing token pairs that enable decentralized trading. 
                          By providing liquidity, you earn trading fees.
                        </p>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                          <h4 className="text-blue-400 font-semibold mb-2 text-sm">How AMMs Work</h4>
                          <p className="text-xs text-slate-400 mb-2">
                            Formula: <code className="bg-slate-800 px-2 py-0.5 rounded text-cyan-400">x * y = k</code>
                          </p>
                          <ul className="space-y-1 text-xs text-slate-400">
                            <li>• <strong className="text-white">x</strong> = Token A amount</li>
                            <li>• <strong className="text-white">y</strong> = Token B amount</li>
                            <li>• <strong className="text-white">k</strong> = Constant product</li>
                          </ul>
                        </div>

                        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                          <h4 className="text-red-400 font-semibold mb-2 text-sm flex items-center gap-1">
                            <AlertTriangle className="w-4 h-4" />
                            Impermanent Loss
                          </h4>
                          <p className="text-xs text-slate-400">
                            When price ratio changes significantly, you'd have more by just holding. 
                            The loss is "impermanent" because it disappears if prices return to original.
                          </p>
                        </div>
                        
                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton 
                            courseId="defi-deep-dive"
                            sectionId="section-4"
                            sectionNumber={4}
                            totalSections={6}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>

              {/* Section 5: DeFi Risks */}
              <div className="relative group">
                <div className={`absolute -left-[19px] top-6 w-3 h-3 rounded-full border z-10 transition-all ${
                  expandedSections.includes(4) 
                    ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50' 
                    : 'bg-slate-700 border-slate-600'
                }`} />
                <div className="absolute -left-[14px] top-9 w-0.5 h-full bg-slate-800" />
                
                <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ml-4">
                  <div 
                    className="p-4 flex items-center justify-between cursor-pointer"
                    onClick={() => toggleSection(4)}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-mono text-sm flex-shrink-0">
                        05
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-medium mb-1 flex items-center gap-2">
                          <Shield className="w-5 h-5 text-red-400" />
                          DeFi Risks
                        </h3>
                        <p className="text-slate-500 text-sm">Smart contract and protocol risks</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${expandedSections.includes(4) ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {expandedSections.includes(4) && (
                    <div className="px-6 pb-6">
                      <div className="space-y-3 text-slate-300">
                        <p className="text-sm">
                          DeFi offers unprecedented opportunities but comes with significant risks. Understanding them is crucial.
                        </p>

                        <div className="space-y-2">
                          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                            <h4 className="text-red-400 font-semibold text-sm mb-1">1. Smart Contract Risk</h4>
                            <p className="text-xs text-slate-400">Even audited code can have bugs. Exploits can drain millions.</p>
                            <p className="text-xs text-slate-500 mt-1"><strong className="text-white">Mitigation:</strong> Use established protocols</p>
                          </div>

                          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3">
                            <h4 className="text-orange-400 font-semibold text-sm mb-1">2. Liquidation Risk</h4>
                            <p className="text-xs text-slate-400">If collateral drops, you can be liquidated at a loss.</p>
                            <p className="text-xs text-slate-500 mt-1"><strong className="text-white">Mitigation:</strong> Maintain health factor above 2</p>
                          </div>

                          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                            <h4 className="text-yellow-400 font-semibold text-sm mb-1">3. Oracle Manipulation</h4>
                            <p className="text-xs text-slate-400">Attackers can manipulate price feeds.</p>
                            <p className="text-xs text-slate-500 mt-1"><strong className="text-white">Mitigation:</strong> Prefer Chainlink oracles</p>
                          </div>
                        </div>

                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-3">
                          <p className="text-cyan-400 font-semibold text-sm mb-2">✅ Best Practices</p>
                          <ul className="text-xs text-slate-400 space-y-0.5">
                            <li>• Only invest what you can afford to lose</li>
                            <li>• Diversify across protocols</li>
                            <li>• Use hardware wallets</li>
                            <li>• Double-check addresses</li>
                          </ul>
                        </div>
                        
                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton 
                            courseId="defi-deep-dive"
                            sectionId="section-5"
                            sectionNumber={5}
                            totalSections={6}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>

              {/* Section 6: DeFi Strategies */}
              <div className="relative group">
                <div className={`absolute -left-[19px] top-6 w-3 h-3 rounded-full border z-10 transition-all ${
                  expandedSections.includes(5) 
                    ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50' 
                    : 'bg-slate-700 border-slate-600'
                }`} />
                
                <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ml-4">
                  <div 
                    className="p-4 flex items-center justify-between cursor-pointer"
                    onClick={() => toggleSection(5)}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-mono text-sm flex-shrink-0">
                        06
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-medium mb-1 flex items-center gap-2">
                          <PieChart className="w-5 h-5 text-purple-400" />
                          DeFi Strategies
                        </h3>
                        <p className="text-slate-500 text-sm">Building your DeFi portfolio</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${expandedSections.includes(5) ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {expandedSections.includes(5) && (
                    <div className="px-6 pb-6">
                      <div className="space-y-3 text-slate-300">
                        <p className="text-sm">
                          Build a DeFi portfolio balancing risk and reward. Here are strategies for different risk profiles.
                        </p>

                        <div className="space-y-3">
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                            <h4 className="text-green-400 font-semibold mb-2 text-sm">🟢 Conservative (Low Risk)</h4>
                            <ul className="space-y-1 text-xs text-slate-400">
                              <li>• 70% Stablecoins in Aave (5-10% APY)</li>
                              <li>• 20% Blue-chip lending (2-5% APY)</li>
                              <li>• 10% Established LP (variable)</li>
                            </ul>
                            <p className="text-xs text-slate-500 mt-2">
                              Expected: <span className="text-green-400 font-semibold">5-8% APY</span>
                            </p>
                          </div>

                          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                            <h4 className="text-yellow-400 font-semibold mb-2 text-sm">🟡 Moderate (Medium Risk)</h4>
                            <ul className="space-y-1 text-xs text-slate-400">
                              <li>• 40% Stablecoin farming (8-15% APY)</li>
                              <li>• 30% Blue-chip LP (10-20% APY)</li>
                              <li>• 20% Leveraged positions (15-30%)</li>
                              <li>• 10% New protocols (higher risk)</li>
                            </ul>
                            <p className="text-xs text-slate-500 mt-2">
                              Expected: <span className="text-yellow-400 font-semibold">12-20% APY</span>
                            </p>
                          </div>

                          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                            <h4 className="text-red-400 font-semibold mb-2 text-sm">🔴 Aggressive (High Risk)</h4>
                            <ul className="space-y-1 text-xs text-slate-400">
                              <li>• 30% Leveraged farming (30-100% APY)</li>
                              <li>• 30% New protocols (50-500% APY)</li>
                              <li>• 20% Volatile pairs (20-100% APY)</li>
                              <li>• 20% Stables as backup</li>
                            </ul>
                            <p className="text-xs text-slate-500 mt-2">
                              Expected: <span className="text-red-400 font-semibold">30-100%+ APY</span>
                            </p>
                          </div>
                        </div>

                        <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                          <h4 className="text-purple-400 font-semibold mb-2 text-sm">💡 Pro Tips</h4>
                          <ul className="space-y-1 text-xs text-slate-400">
                            <li>• Compound rewards regularly</li>
                            <li>• Use L2s to save on gas</li>
                            <li>• Rebalance quarterly</li>
                            <li>• Keep detailed tax records</li>
                          </ul>
                        </div>
                        
                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton 
                            courseId="defi-deep-dive"
                            sectionId="section-6"
                            sectionNumber={6}
                            totalSections={6}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>

              {/* CTA Section */}
              <Card className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border-cyan-500/20 mt-8">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your DeFi Journey?</h3>
                  <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                    Remember: Start small, learn continuously, and never invest more than you can afford to lose.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/courses">
                      <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                        ← Back to Courses
                      </Button>
                    </Link>
                    <Link href="/dashboard">
                      <Button className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600">
                        Track Your Progress →
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
