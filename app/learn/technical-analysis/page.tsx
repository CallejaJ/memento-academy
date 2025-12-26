"use client"

import { useState } from "react"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, BarChart3, LineChart, Activity, Target, Brain, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionCompleteButton } from "@/components/progress/section-complete-button"
import { CardContent } from "@/components/ui/card"

export default function TechnicalAnalysisPage() {
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
            <Badge className="bg-green-500/10 text-green-400 border-green-500/20">
              🔒 Premium Course
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Technical Analysis
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Master the art of reading charts and predicting market movements. Learn indicators, patterns, 
              and trading strategies used by professional traders.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-green-400">6</div>
                <div className="text-sm text-slate-400">Modules</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-emerald-400">Advanced</div>
                <div className="text-sm text-slate-400">Level</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-teal-400">~4h</div>
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

            {/* Course Progress Track */}
            <div className="relative pl-8 space-y-4">
              
              {/* Section 1: Chart Reading Basics */}
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
                    <div className="flex items-center gap-3">
                      <BarChart3 className="w-5 h-5 text-green-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">1. Chart Reading Basics</h3>
                        <p className="text-sm text-slate-400">Understanding price action</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${
                      expandedSections.includes(0) ? 'rotate-180' : ''
                    }`} />
                  </div>

                  {expandedSections.includes(0) && (
                    <div className="px-6 pb-6">
                      <div className="space-y-4 text-slate-300">
                        <p className="text-lg">
                          <strong className="text-white">Technical Analysis</strong> is the study of historical price and volume data 
                          to predict future market movements. Unlike fundamental analysis, TA focuses solely on chart patterns.
                        </p>

                        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5">
                          <h4 className="text-green-400 font-semibold mb-3">📊 Chart Types</h4>
                          <div className="grid md:grid-cols-3 gap-3">
                            <div className="bg-slate-800/50 rounded p-3">
                              <h5 className="text-white font-semibold text-sm mb-2">Line Charts</h5>
                              <p className="text-xs text-slate-400 mb-2">
                                Simple price over time. Good for beginners.
                              </p>
                              <p className="text-xs text-green-400">✓ Best for: Trend spotting</p>
                            </div>
                            <div className="bg-slate-800/50 rounded p-3">
                              <h5 className="text-white font-semibold text-sm mb-2">Candlestick Charts</h5>
                              <p className="text-xs text-slate-400 mb-2">
                                Shows OHLC (Open, High, Low, Close)
                              </p>
                              <p className="text-xs text-green-400">✓ Best for: Pattern recognition</p>
                            </div>
                            <div className="bg-slate-800/50 rounded p-3">
                              <h5 className="text-white font-semibold text-sm mb-2">Heikin-Ashi</h5>
                              <p className="text-xs text-slate-400 mb-2">
                                Smoothed candlesticks, less noise
                              </p>
                              <p className="text-xs text-green-400">✓ Best for: Trend confirmation</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                          <h5 className="text-blue-400 font-semibold mb-2">Understanding Candlesticks</h5>
                          <div className="grid md:grid-cols-2 gap-3 text-sm">
                            <div>
                              <p className="text-white font-semibold mb-2">Bullish Candle (Green)</p>
                              <ul className="text-xs text-slate-400 space-y-1">
                                <li>• Close {">"} Open</li>
                                <li>• Buyers in control</li>
                                <li>• Price moved up</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-white font-semibold mb-2">Bearish Candle (Red)</p>
                              <ul className="text-xs text-slate-400 space-y-1">
                                <li>• Close {"<"} Open</li>
                                <li>• Sellers in control</li>
                                <li>• Price moved down</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                          <h5 className="text-cyan-400 font-semibold mb-2">Timeframes</h5>
                          <p className="text-sm mb-2">Different timeframes suit different trading styles:</p>
                          <ul className="text-sm space-y-1">
                            <li>• <strong className="text-white">1m - 5m:</strong> Scalping (very short-term)</li>
                            <li>• <strong className="text-white">15m - 1h:</strong> Day trading</li>
                            <li>• <strong className="text-white">4h - Daily:</strong> Swing trading</li>
                            <li>• <strong className="text-white">Weekly - Monthly:</strong> Position trading (long-term)</li>
                          </ul>
                        </div>
                        
                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton 
                            courseId="technical-analysis"
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

              {/* Section 2: Support & Resistance + Trend Lines */}
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
                    <div className="flex items-center gap-3">
                      <LineChart className="w-5 h-5 text-emerald-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">2. Support, Resistance & Trends</h3>
                        <p className="text-sm text-slate-400">Key price levels and directions</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${
                      expandedSections.includes(1) ? 'rotate-180' : ''
                    }`} />
                  </div>

                  {expandedSections.includes(1) && (
                    <div className="px-6 pb-6">
                      <div className="space-y-4 text-slate-300">
                        <p className="text-lg">
                          <strong className="text-white">Support and Resistance</strong> are horizontal price levels where buying or selling pressure historically occurs. 
                          These levels act as psychological barriers for traders.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                            <h5 className="text-green-400 font-semibold mb-2">📈 Support</h5>  
                            <p className="text-sm mb-2">Price level where buying interest is strong enough to prevent further decline</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              <li>• Acts as a "floor"</li>
                              <li>• Buyers step in</li>
                              <li>• If broken, becomes resistance</li>
                              <li>• Example: BTC bouncing at $30k multiple times</li>
                            </ul>
                          </div>
                          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                            <h5 className="text-red-400 font-semibold mb-2">📉 Resistance</h5>
                            <p className="text-sm mb-2">Price level where selling pressure prevents further rise</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              <li>• Acts as a "ceiling"</li>
                              <li>• Sellers step in</li>
                              <li>• If broken, becomes support</li>
                              <li>• Example: ETH rejected at $2k multiple times</li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5">
                          <h4 className="text-blue-400 font-semibold mb-3">📐 Trend Lines</h4>
                          <div className="space-y-3 text-sm">
                            <div>
                              <p className="text-white font-semibold">Uptrend (Higher Highs, Higher Lows)</p>
                              <p className="text-xs text-slate-400">Draw line connecting rising lows. Stay long above the line.</p>
                            </div>
                            <div>
                              <p className="text-white font-semibold">Downtrend (Lower Highs, Lower Lows)</p>
                              <p className="text-xs text-slate-400">Draw line connecting falling highs. Stay short below the line.</p>
                            </div>
                            <div>
                              <p className="text-white font-semibold">Sideways (Range-bound)</p>
                              <p className="text-xs text-slate-400">Price oscillates between support and resistance. Buy low, sell high within range.</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                          <h5 className="text-yellow-400 font-semibold mb-2 flex items-center gap-2">
                            💡 Pro Tips
                          </h5>
                          <ul className="text-sm space-y-1">
                            <li>• The more times a level is tested, the stronger it is</li>
                            <li>• When support breaks, it often becomes resistance (and vice versa)</li>
                            <li>• Round numbers (e.g., $1000, $50k) often act as psychological levels</li>
                            <li>• Volume confirms breakouts - high volume = strong move</li>
                          </ul>
                        </div>

                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton 
                            courseId="technical-analysis"
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

              {/* Section 3: Technical Indicators */}
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
                    <div className="flex items-center gap-3">
                      <Activity className="w-5 h-5 text-purple-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">3. Technical Indicators</h3>
                        <p className="text-sm text-slate-400">RSI, MACD, Moving Averages</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${
                      expandedSections.includes(2) ? 'rotate-180' : ''
                    }`} />
                  </div>

                  {expandedSections.includes(2) && (
                    <div className="px-6 pb-6">
                      <div className="space-y-4 text-slate-300">
                        <p className="text-lg">
                          <strong className="text-white">Technical Indicators</strong> are mathematical calculations based on price, volume, or open interest 
                          that help traders identify trends, momentum, and potential reversal points.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                            <h5 className="text-purple-400 font-semibold mb-2">📊 Moving Averages</h5>
                            <p className="text-sm mb-2">Smooth out price action to identify trends</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              <li>• <strong className="text-white">SMA (Simple):</strong> Average of prices</li>
                              <li>• <strong className="text-white">EMA (Exponential):</strong> Reacts faster to recent price</li>
                              <li>• <strong className="text-white">Golden Cross:</strong> 50 MA crosses above 200 MA (bullish)</li>
                              <li>• <strong className="text-white">Death Cross:</strong> 50 MA crosses below 200 MA (bearish)</li>
                            </ul>
                          </div>
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                            <h5 className="text-blue-400 font-semibold mb-2">⚡ RSI (Relative Strength Index)</h5>
                            <p className="text-sm mb-2">Measures momentum on 0-100 scale</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              <li>• <strong className="text-white">Above 70:</strong> Overbought - potential sell</li>
                              <li>• <strong className="text-white">Below 30:</strong> Oversold - potential buy</li>
                              <li>• <strong className="text-white">Divergence:</strong> Price makes new high but RSI doesn{"'"}t (bearish)</li>
                              <li>• Period: Usually 14 candles</li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5">
                          <h4 className="text-green-400 font-semibold mb-3">📈 MACD (Moving Average Convergence Divergence)</h4>
                          <p className="text-sm mb-3">Shows relationship between two moving averages</p>
                          <div className="grid md:grid-cols-3 gap-3 text-xs">
                            <div className="bg-slate-800/50 rounded p-2">
                              <p className="text-white font-semibold mb-1">MACD Line</p>
                              <p className="text-slate-400">12 EMA - 26 EMA</p>
                            </div>
                            <div className="bg-slate-800/50 rounded p-2">
                              <p className="text-white font-semibold mb-1">Signal Line</p>
                              <p className="text-slate-400">9 EMA of MACD</p>
                            </div>
                            <div className="bg-slate-800/50 rounded p-2">
                              <p className="text-white font-semibold mb-1">Histogram</p>
                              <p className="text-slate-400">MACD - Signal</p>
                            </div>
                          </div>
                          <p className="text-sm mt-3">
                            <strong className="text-white">Signal:</strong> When MACD crosses above signal line = Buy, below = Sell
                          </p>
                        </div>

                        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                          <h5 className="text-yellow-400 font-semibold mb-2">⚠️ Important Notes</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Never use a single indicator alone - confirm with multiple</li>
                            <li>• Indicators lag price - they{"'"}re based on past data</li>
                            <li>• What works in trending markets may fail in ranging markets</li>
                            <li>• Customize settings for different assets and timeframes</li>
                          </ul>
                        </div>

                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton 
                            courseId="technical-analysis"
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

              {/* Section 4: Chart Patterns */}
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
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-pink-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">4. Chart Patterns</h3>
                        <p className="text-sm text-slate-400">Recognizing formations</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${
                      expandedSections.includes(3) ? 'rotate-180' : ''
                    }`} />
                  </div>

                  {expandedSections.includes(3) && (
                    <div className="px-6 pb-6">
                      <div className="space-y-4 text-slate-300">
                        <p className="text-lg">
                          <strong className="text-white">Chart Patterns</strong> are visual formations created by price movements that often predict future direction. 
                          Recognizing these patterns can give you an edge in the market.
                        </p>

                        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5">
                          <h4 className="text-red-400 font-semibold mb-3">🔻 Reversal Patterns</h4>
                          <div className="space-y-3">
                            <div className="bg-slate-800/50 rounded p-3">
                              <h5 className="text-white font-semibold text-sm mb-1">Head and Shoulders</h5>
                              <p className="text-xs text-slate-400 mb-2">
                                Three peaks: middle (head) is highest, two shoulders are lower. Indicates trend reversal from bullish to bearish.
                              </p>
                              <p className="text-xs text-green-400">Trading: Sell when neckline breaks, target = neckline distance to head</p>
                            </div>
                            <div className="bg-slate-800/50 rounded p-3">
                              <h5 className="text-white font-semibold text-sm mb-1">Double Top / Double Bottom</h5>
                              <p className="text-xs text-slate-400 mb-2">
                                Two peaks (top) or troughs (bottom) at roughly same level. Shows failed attempt to break level.
                              </p>
                              <p className="text-xs text-green-400">Trading: Confirm with volume decline on second attempt</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5">
                          <h4 className="text-blue-400 font-semibold mb-3">🔄 Continuation Patterns</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            <div className="bg-slate-800/50 rounded p-3">
                              <h5 className="text-white font-semibold text-sm mb-1">Triangles</h5>
                              <p className="text-xs text-slate-400">
                                • <strong>Ascending:</strong> Higher lows, flat top (bullish)<br/>
                                • <strong>Descending:</strong> Lower highs, flat bottom (bearish)<br/>
                                • <strong>Symmetrical:</strong> Converging lines (direction of breakout matters)
                              </p>
                            </div>
                            <div className="bg-slate-800/50 rounded p-3">
                              <h5 className="text-white font-semibold text-sm mb-1">Flags & Pennants</h5>
                              <p className="text-xs text-slate-400">
                                Short consolidation after strong move (flagpole). Flag = rectangle, Pennant = small triangle. Usually continues original trend.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                          <h5 className="text-purple-400 font-semibold mb-2">🕯️ Candlestick Patterns</h5>
                          <div className="grid md:grid-cols-3 gap-2 text-xs">
                            <div><strong className="text-white">Doji:</strong> Indecision, potential reversal</div>
                            <div><strong className="text-white">Hammer:</strong> Bullish reversal at bottom</div>
                            <div><strong className="text-white">Shooting Star:</strong> Bearish reversal at top</div>
                            <div><strong className="text-white">Engulfing:</strong> Large candle engulfs previous</div>
                            <div><strong className="text-white">Morning Star:</strong> 3-candle bullish reversal</div>
                            <div><strong className="text-white">Evening Star:</strong> 3-candle bearish reversal</div>
                          </div>
                        </div>

                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton 
                            courseId="technical-analysis"
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

              {/* Section 5: Volume Analysis */}
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
                    <div className="flex items-center gap-3">
                      <BarChart3 className="w-5 h-5 text-orange-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">5. Volume Analysis</h3>
                        <p className="text-sm text-slate-400">Confirming price movements</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${
                      expandedSections.includes(4) ? 'rotate-180' : ''
                    }`} />
                  </div>

                  {expandedSections.includes(4) && (
                    <div className="px-6 pb-6">
                      <div className="space-y-4 text-slate-300">
                        <p className="text-lg">
                          <strong className="text-white">Volume</strong> is the number of shares/tokens traded during a period. 
                          It{"'"}s a crucial confirmation tool - price moves with high volume are more significant than low volume moves.
                        </p>

                        <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-5">
                          <h4 className="text-orange-400 font-semibold mb-3">📊 Volume Principles</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex gap-2">
                              <span className="text-green-400">✓</span>
                              <div>
                                <strong className="text-white">Uptrend + Rising Volume:</strong> Strong, healthy trend - buyers in control
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <span className="text-red-400">✗</span>
                              <div>
                                <strong className="text-white">Uptrend + Falling Volume:</strong> Weakening trend - fewer buyers, potential reversal
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <span className="text-green-400">✓</span>
                              <div>
                                <strong className="text-white">Breakout + High Volume:</strong> Valid breakout, likely to continue
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <span className="text-red-400">✗</span>
                              <div>
                                <strong className="text-white">Breakout + Low Volume:</strong> False breakout, likely to reverse
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                            <h5 className="text-blue-400 font-semibold mb-2">📈 Volume Spikes</h5>
                            <p className="text-sm mb-2">Sudden large increase in volume indicates:</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              <li>• Institutional money entering/exiting</li>
                              <li>• News or event occurred</li>
                              <li>• Potential trend reversal</li>
                              <li>• Watch for consolidation after spike</li>
                            </ul>
                          </div>
                          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                            <h5 className="text-purple-400 font-semibold mb-2">📊 OBV (On-Balance Volume)</h5>
                            <p className="text-sm mb-2">Cumulative indicator showing volume flow:</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              <li>• Adds volume on up days</li>
                              <li>• Subtracts volume on down days</li>
                              <li>• Divergence with price signals reversal</li>
                              <li>• Leading indicator for price</li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                          <h5 className="text-cyan-400 font-semibold mb-2">💡 Crypto-Specific Notes</h5>
                          <ul className="text-sm space-y-1">
                            <li>• 24/7 markets = volume more spread out, watch for timezone patterns</li>
                            <li>• Wash trading is common - verify on multiple exchanges</li>
                            <li>• Low volume coins are easier to manipulate</li>
                            <li>• DEX volume is fragmented across platforms</li>
                          </ul>
                        </div>

                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton 
                            courseId="technical-analysis"
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

              {/* Section 6: Trading Strategies */}
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
                    <div className="flex items-center gap-3">
                      <Brain className="w-5 h-5 text-cyan-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">6. Trading Strategies</h3>
                        <p className="text-sm text-slate-400">Putting it all together</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${
                      expandedSections.includes(5) ? 'rotate-180' : ''
                    }`} />
                  </div>

                  {expandedSections.includes(5) && (
                    <div className="px-6 pb-6">
                      <div className="space-y-4 text-slate-300">
                        <p className="text-lg">
                          <strong className="text-white">A trading strategy</strong> combines multiple technical analysis tools to create a system for entering and exiting trades. 
                          The key is consistency and disciplined execution.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                            <h5 className="text-green-400 font-semibold mb-2">📈 Trend Following</h5>
                            <p className="text-sm mb-2">Ride the trend until it reverses</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              <li>• <strong className="text-white">Entry:</strong> Pullback to MA in uptrend</li>
                              <li>• <strong className="text-white">Confirm:</strong> RSI {">"} 50, MACD bullish</li>
                              <li>• <strong className="text-white">Stop Loss:</strong> Below recent swing low</li>
                              <li>• <strong className="text-white">Exit:</strong> Trend line break or MA cross</li>
                            </ul>
                          </div>
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                            <h5 className="text-blue-400 font-semibold mb-2">🔄 Range Trading</h5>
                            <p className="text-sm mb-2">Buy support, sell resistance</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              <li>• <strong className="text-white">Entry:</strong> Near support with RSI {"<"} 40</li>
                              <li>• <strong className="text-white">Target:</strong> Resistance level</li>
                              <li>• <strong className="text-white">Stop Loss:</strong> Below support</li>
                              <li>• <strong className="text-white">Best:</strong> Sideways markets</li>
                            </ul>
                          </div>
                          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                            <h5 className="text-purple-400 font-semibold mb-2">💥 Breakout Trading</h5>
                            <p className="text-sm mb-2">Trade strong breakouts from consolidation</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              <li>• <strong className="text-white">Setup:</strong> Tight consolidation near resistance</li>
                              <li>• <strong className="text-white">Entry:</strong> Break above resistance + volume</li>
                              <li>• <strong className="text-white">Confirm:</strong> Retest holds as support</li>
                              <li>• <strong className="text-white">Risk:</strong> False breakouts common</li>
                            </ul>
                          </div>
                          <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-4">
                            <h5 className="text-pink-400 font-semibold mb-2">🎯 Scalping</h5>
                            <p className="text-sm mb-2">Quick trades for small profits</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              <li>• <strong className="text-white">Timeframe:</strong> 1m - 5m charts</li>
                              <li>• <strong className="text-white">Target:</strong> 0.5-1% profit</li>
                              <li>• <strong className="text-white">Volume:</strong> High liquidity essential</li>
     <li>• <strong className="text-white">Note:</strong> High stress, needs focus</li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                          <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                            ⚠️ Risk Management Rules
                          </h4>
                          <ul className="text-sm space-y-2">
                            <li>• <strong className="text-white">Never risk more than 1-2%</strong> of your portfolio on a single trade</li>
                            <li>• <strong className="text-white">Always set stop losses</strong> before entering a trade</li>
                            <li>• <strong className="text-white">Risk/Reward ratio minimum 1:2</strong> (risk $100 to make $200)</li>
                            <li>• <strong className="text-white">Don{"'"}t overtrade</strong> - quality over quantity</li>
                            <li>• <strong className="text-white">Keep a trading journal</strong> to track and improve</li>
                            <li>• <strong className="text-white">Psychology is key</strong> - control emotions, stick to plan</li>
                          </ul>
                        </div>

                        <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-lg p-5 text-center">
                          <h5 className="text-white font-semibold mb-2">🎓 Final Thoughts</h5>
                          <p className="text-sm text-slate-400">
                            Technical analysis is a skill that takes time to master. Start with demo trading, backtest your strategies, 
                            and be patient. Even the best traders have losing trades - what matters is your overall win rate and risk management.
                          </p>
                        </div>

                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton 
                            courseId="technical-analysis"
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
              
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Card className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20 mt-8 mb-16 max-w-4xl mx-auto">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Start Trading Like a Pro</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Technical analysis is both an art and a science. Practice on demo accounts before risking real money.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses">
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                ← Back to Courses
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
                Track Your Progress →
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
