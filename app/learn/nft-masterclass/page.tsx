"use client"

import { useState } from "react"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Image as ImageIcon, Palette, TrendingUp, Shield, FileText, Sparkles, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionCompleteButton } from "@/components/progress/section-complete-button"

export default function NFTMasterclassPage() {
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
            
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                NFT Masterclass
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Master the world of Non-Fungible Tokens from creation to curation. 
              Learn to mint, trade, and build value in the NFT ecosystem.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-purple-400">6</div>
                <div className="text-sm text-slate-400">Modules</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-pink-400">Advanced</div>
                <div className="text-sm text-slate-400">Level</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-blue-400">~4h</div>
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
              <Link href="/learn">
                <Button variant="outline" className="border-slate-700 text-slate-300 hover:text-white">
                  ← Back to Courses
                </Button>
              </Link>
            </div>

            {/* Course Progress Track */}
            <div className="relative pl-8">
              
              {/* Section 1: NFT Fundamentals */}
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
                      <ImageIcon className="w-5 h-5 text-purple-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">1. NFT Fundamentals</h3>
                        <p className="text-sm text-slate-400">Understanding Non-Fungible Tokens</p>
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
                          <strong className="text-white">NFTs (Non-Fungible Tokens)</strong> are unique digital assets verified on a blockchain. 
                          Unlike cryptocurrencies, each NFT is one-of-a-kind and cannot be exchanged on a like-for-like basis.
                        </p>

                        <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-5">
                          <h4 className="text-purple-400 font-semibold mb-3">🎨 What Makes NFTs Special?</h4>
                          <ul className="space-y-2 text-sm">
                            <li><strong className="text-white">Uniqueness:</strong> Each NFT has a unique identifier and metadata</li>
                            <li><strong className="text-white">Ownership:</strong> Blockchain verifies provenance and ownership history</li>
                            <li><strong className="text-white">Scarcity:</strong> Limited supply enforced by smart contracts</li>
                            <li><strong className="text-white">Programmability:</strong> Smart contracts can include royalties and special rules</li>
                          </ul>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                            <h5 className="text-blue-400 font-semibold mb-2">🖼️ Digital Art</h5>
                            <p className="text-xs text-slate-400">
                              Artists can prove authenticity and earn royalties on secondary sales. Examples: Beeple's $69M artwork, 
                              CryptoPunks collectibles.
                            </p>
                          </div>
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                            <h5 className="text-green-400 font-semibold mb-2">🎮 Gaming Assets</h5>
                            <p className="text-xs text-slate-400">
                              In-game items players truly own: skins, weapons, characters. Can be traded across games or sold.
                            </p>
                          </div>
                          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                            <h5 className="text-purple-400 font-semibold mb-2">🎵 Music & Media</h5>
                            <p className="text-xs text-slate-400">
                              Musicians sell exclusive content, concert tickets, or album rights directly to fans.
                            </p>
                          </div>
                          <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-4">
                            <h5 className="text-pink-400 font-semibold mb-2">📜 Real Estate & Documents</h5>
                            <p className="text-xs text-slate-400">
                              Property deeds, certificates, memberships - anything needing verified ownership.
                            </p>
                          </div>
                        </div>

                        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 mt-4">
                          <h5 className="text-white font-semibold mb-2">Technical Deep Dive</h5>
                          <p className="text-sm mb-3">
                            NFTs are typically built on ERC-721 (Ethereum) or ERC-1155 (multi-token) standards. 
                            The token points to metadata (JSON file) stored on IPFS or centralized servers.
                          </p>
                          <div className="bg-slate-900/50 rounded p-3 font-mono text-xs">
                            <div className="text-cyan-400">// Simplified NFT Metadata</div>
                            <div className="text-slate-400">{`{`}</div>
                            <div className="text-slate-400 ml-4">"name": "Cool NFT #1",</div>
                            <div className="text-slate-400 ml-4">"description": "A unique digital artwork",</div>
                            <div className="text-slate-400 ml-4">"image": "ipfs://Qm...",</div>
                            <div className="text-slate-400 ml-4">"attributes": [...]</div>
                            <div className="text-slate-400">{`}`}</div>
                          </div>
                        </div>
                        
                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton 
                            courseId="nft-masterclass"
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

              {/* Section 2: Mintingand Creating NFTs */}
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
                      <Palette className="w-5 h-5 text-pink-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">2. Minting & Creating NFTs</h3>
                        <p className="text-sm text-slate-400">From concept to blockchain</p>
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
                          <strong className="text-white">Minting</strong> is the process of creating an NFT on the blockchain. 
                          It involves uploading your digital asset, writing metadata, and deploying a smart contract.
                        </p>

                        <div className="bg-pink-500/10 border border-pink-500/20 rounded-xl p-5">
                          <h4 className="text-pink-400 font-semibold mb-3">🎨 The Minting Process</h4>
                          <ol className="space-y-3">
                            <li className="flex gap-2">
                              <span className="bg-pink-500/20 text-pink-400 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">1</span>
                              <div>
                                <strong className="text-white block">Create Your Art</strong>
                                <span className="text-sm">Digital artwork, 3D model, music, video - any digital file</span>
                              </div>
                            </li>
                            <li className="flex gap-2">
                              <span className="bg-pink-500/20 text-pink-400 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">2</span>
                              <div>
                                <strong className="text-white block">Choose Blockchain</strong>
                                <span className="text-sm">Ethereum (most popular), Polygon (cheap), Solana (fast), Tezos (eco-friendly)</span>
                              </div>
                            </li>
                            <li className="flex gap-2">
                              <span className="bg-pink-500/20 text-pink-400 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">3</span>
                              <div>
                                <strong className="text-white block">Select Platform</strong>
                                <span className="text-sm">OpenSea (beginner-friendly), Rarible, Foundation (curated), Zora (creator-owned)</span>
                              </div>
                            </li>
                            <li className="flex gap-2">
                              <span className="bg-pink-500/20 text-pink-400 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">4</span>
                              <div>
                                <strong className="text-white block">Upload & Add Metadata</strong>
                                <span className="text-sm">Description, properties, royalties (typically 2.5-10%)</span>
                              </div>
                            </li>
                            <li className="flex gap-2">
                              <span className="bg-pink-500/20 text-pink-400 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">5</span>
                              <div>
                                <strong className="text-white block">Pay Gas Fees & Mint</strong>
                                <span className="text-sm">Transaction confirms on blockchain - your NFT is live!</span>
                              </div>
                            </li>
                          </ol>
                        </div>

                        <div className="grid md:grid-cols-3 gap-3 mt-4">
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                            <h5 className="text-blue-400 font-semibold text-sm mb-2">💰 Lazy Minting</h5>
                            <p className="text-xs text-slate-400">
                              Defer gas costs until the NFT is sold. OpenSea and Rarible support this. Great for testing the market.
                            </p>
                          </div>
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                            <h5 className="text-green-400 font-semibold text-sm mb-2">🎯 Collection vs Single</h5>
                            <p className="text-xs text-slate-400">
                              Single NFT: one piece. Collection: series with shared contract. Collections build brand value.
                            </p>
                          </div>
                          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                            <h5 className="text-purple-400 font-semibold text-sm mb-2">📊 Rarity & Traits</h5>
                            <p className="text-xs text-slate-400">
                              For PFP projects: define traits (background, eyes, accessories). Tools like Rarity.tools rank scarcity.
                            </p>
                          </div>
                        </div>

                        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mt-4">
                          <h5 className="text-yellow-400 font-semibold mb-2 flex items-center gap-2">
                            ⚠️ Important Considerations
                          </h5>
                          <ul className="text-sm space-y-1 text-slate-300">
                            <li>• <strong>Copyright:</strong> Only mint work you own or have rights to</li>
                            <li>• <strong>Storage:</strong> IPFS is decentralized, but can be slow. Arweave offers permanent storage</li>
                            <li>• <strong>Gas Optimization:</strong> Mint during low network activity (weekends, late nights UTC)</li>
                            <li>• <strong>Royalties:</strong> Set royalty % - you earn on every resale perpetually</li>
                          </ul>
                        </div>

                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton 
                            courseId="nft-masterclass"
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

              {/* Continue with remaining sections... I'll create a condensed version to save tokens */}
              
              {/* Section 3: NFT Marketplaces & Trading */}
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
                      <TrendingUp className="w-5 h-5 text-blue-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">3. NFT Marketplaces & Trading</h3>
                        <p className="text-sm text-slate-400">Buying, selling, and trading NFTs</p>
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
                          <strong className="text-white">NFT Marketplaces</strong> are platforms where you can discover, buy, sell, and trade NFTs. 
                          Each marketplace has its own fees, curation standards, and community.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                            <h5 className="text-blue-400 font-semibold mb-2 flex items-center gap-2">
                              🌊 OpenSea
                            </h5>
                            <p className="text-sm mb-2">Largest NFT marketplace with 80M+ items</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              <li>• 2.5% platform fee</li>
                              <li>• Supports Ethereum, Polygon, Solana</li>
                              <li>• Easy for beginners</li>
                              <li>• Offers for collections & bundles</li>
                            </ul>
                          </div>
                          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                            <h5 className="text-purple-400 font-semibold mb-2 flex items-center gap-2">
                              💎 Blur
                            </h5>
                            <p className="text-sm mb-2">Pro trader platform with zero fees</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              <li>• 0% platform fee during beta</li>
                              <li>• Advanced trading tools</li>
                              <li>• Portfolio analytics</li>
                              <li>• Airdrop rewards for activity</li>
                            </ul>
                          </div>
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                            <h5 className="text-green-400 font-semibold mb-2 flex items-center gap-2">
                              🎨 Foundation
                            </h5>
                            <p className="text-sm mb-2">Curated platform for digital artists</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              <li>• 15% commission on primary sales</li>
                              <li>• Invite-only or application</li>
                              <li>• High-quality curation</li>
                              <li>• Artist-focused community</li>
                            </ul>
                          </div>
                          <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-4">
                            <h5 className="text-pink-400 font-semibold mb-2 flex items-center gap-2">
                              ⚡ Magic Eden
                            </h5>
                            <p className="text-sm mb-2">Solana's leading NFT marketplace</p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              <li>• 2% platform fee</li>
                              <li>• Low transaction costs on Solana</li>
                              <li>• Launchpad for new projects</li>
                              <li>• Fast transactions</li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-5 mt-4">
                          <h4 className="text-cyan-400 font-semibold mb-3">💡 Trading Best Practices</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            <div>
                              <p className="text-white font-semibold text-sm mb-1">Research Before Buying</p>
                              <ul className="text-xs text-slate-400 space-y-0.5">
                                <li>• Check contract address</li>
                                <li>• Verify creator/collection</li>
                                <li>• Review trading volume & floor price</li>
                                <li>• Check rarity tools (for collections)</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-white font-semibold text-sm mb-1">Safe Trading Tips</p>
                              <ul className="text-xs text-slate-400 space-y-0.5">
                                <li>• Never share seed phrases</li>
                                <li>• Use hardware wallets for valuable NFTs</li>
                                <li>• Be wary of too-good offers (phishing)</li>
                                <li>• Double-check URLs before connecting wallet</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                          <h5 className="text-white font-semibold mb-2">Understanding NFT Pricing</h5>
                          <div className="space-y-2 text-sm">
                            <div>
                              <strong className="text-cyan-400">Floor Price:</strong> Lowest listed price in a collection. 
                              Good entry point but may lack rare traits.
                            </div>
                            <div>
                              <strong className="text-green-400">Average Price:</strong> Mean sale price over recent transactions. 
                              Better indicator of true market value.
                            </div>
                            <div>
                              <strong className="text-purple-400">Ceiling Price:</strong> Highest recent sale. 
                              Often for rare items or exceptional pieces.
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton 
                            courseId="nft-masterclass"
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

              {/* Section 4: NFT Investment Strategies */}
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
                      <Shield className="w-5 h-5 text-green-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">4. NFT Investment Strategies</h3>
                        <p className="text-sm text-slate-400">Building a valuable NFT portfolio</p>
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
                          <strong className="text-white">NFT investing</strong> requires a strategic approach. 
                          Unlike traditional assets, NFTs blend art appreciation, community dynamics, and speculation.
                        </p>

                        <div className="grid md:grid-cols-3 gap-3">
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                            <h5 className="text-blue-400 font-semibold mb-2">🎯 Blue-Chip Strategy</h5>
                            <p className="text-xs text-slate-400 mb-2">
                              Invest in established collections with proven track records
                            </p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              <li>• CryptoPunks, BAYC, Azuki</li>
                              <li>• Lower risk, stable floor prices</li>
                              <li>• Strong community & utility</li>
                              <li>• Higher entry cost</li>
                            </ul>
                          </div>
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                            <h5 className="text-green-400 font-semibold mb-2">🚀 Early Adoption</h5>
                            <p className="text-xs text-slate-400 mb-2">
                              Get in early on promising new projects
                            </p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              <li>• Research team & roadmap</li>
                              <li>• Higher risk, higher potential returns</li>
                              <li>• Whitelist opportunities</li>
                              <li>• Community engagement crucial</li>
                            </ul>
                          </div>
                          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                            <h5 className="text-purple-400 font-semibold mb-2">💎 Rarity Play</h5>
                            <p className="text-xs text-slate-400 mb-2">
                              Target undervalued rare items in collections
                            </p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              <li>• Study rarity rankings</li>
                              <li>• Look for mispricings</li>
                              <li>• Hold for appreciation</li>
                              <li>• Requires deep knowledge</li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5">
                          <h4 className="text-green-400 font-semibold mb-3">📊 Portfolio Diversification</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between items-center">
                              <span className="text-white">Blue-Chips (30-40%)</span>
                              <span className="text-slate-400">Stable value, low risk</span>
                            </div>
                            <div className="w-full bg-slate-800 rounded-full h-2">
                              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{width: '35%'}}></div>
                            </div>

                            <div className="flex justify-between items-center mt-3">
                              <span className="text-white">Mid-Caps (30-40%)</span>
                              <span className="text-slate-400">Growth potential</span>
                            </div>
                            <div className="w-full bg-slate-800 rounded-full h-2">
                              <div className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full" style={{width: '35%'}}></div>
                            </div>

                            <div className="flex justify-between items-center mt-3">
                              <span className="text-white">Speculative (20-30%)</span>
                              <span className="text-slate-400">High risk/reward</span>
                            </div>
                            <div className="w-full bg-slate-800 rounded-full h-2">
                              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '25%'}}></div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                          <h5 className="text-yellow-400 font-semibold mb-2 flex items-center gap-2">
                            ⚠️ Red Flags to Avoid
                          </h5>
                          <ul className="text-sm space-y-1">
                            <li>• Anonymous team with no track record</li>
                            <li>• Unrealistic promises or guaranteed returns</li>
                            <li>• Lack of utility or roadmap</li>
                            <li>• Suspicious social media activity (bots, fake engagement)</li>
                            <li>• Derivative art with no unique value proposition</li>
                          </ul>
                        </div>
                        
                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton 
                            courseId="nft-masterclass"
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

              {/* Section 5: Legal & IP Considerations */}
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
                      <FileText className="w-5 h-5 text-yellow-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">5. Legal & IP Considerations</h3>
                        <p className="text-sm text-slate-400">Copyright, licensing, and regulations</p>
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
                          Understanding <strong className="text-white">intellectual property rights</strong> is crucial in the NFT space. 
                          Owning an NFT does NOT automatically grant you copyright or commercial rights to the underlying artwork.
                        </p>

                        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                          <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                            ⚖️ Copyright Basics
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-white font-semibold mb-2">What You OWN</p>
                              <ul className="text-xs text-slate-400 space-y-1">
                                <li>✅ The NFT token itself</li>
                                <li>✅ Right to sell/transfer the NFT</li>
                                <li>✅ Bragging rights & provenance</li>
                                <li>✅ Access to holder-only benefits</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-white font-semibold mb-2">What You DON'T Own (Usually)</p>
                              <ul className="text-xs text-slate-400 space-y-1">
                                <li>❌ Copyright to the artwork</li>
                                <li>❌ Right to reproduce commercially</li>
                                <li>❌ Right to create derivatives</li>
                                <li>❌ Intellectual property rights</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                            <h5 className="text-blue-400 font-semibold mb-2">📜 CC0 NFTs</h5>
                            <p className="text-xs text-slate-400">
                              <strong className="text-white">Creative Commons Zero:</strong> Creator waives all rights. 
                              Holders can use however they want - commercially, derivatives, etc. 
                              Examples: CrypToadz, Nouns.
                            </p>
                          </div>
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                            <h5 className="text-green-400 font-semibold mb-2">🎯 Commercial Rights</h5>
                            <p className="text-xs text-slate-400">
                              Some projects grant holders commercial rights. 
                              BAYC holders can create products using their ape. 
                              Always read the license terms!
                            </p>
                          </div>
                        </div>

                        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                          <h5 className="text-yellow-400 font-semibold mb-2">💼 Tax Implications</h5>
                          <p className="text-sm mb-2">
                            NFTs are treated as property/collectibles for tax purposes in most jurisdictions:
                          </p>
                          <ul className="text-sm space-y-1">
                            <li>• <strong>Capital Gains:</strong> Profit from selling NFTs is taxable (often 28% collectibles rate in US)</li>
                            <li>• <strong>Record Keeping:</strong> Track purchase price, sale price, dates, gas fees</li>
                            <li>• <strong>Airdrops:</strong> May be taxable as income at fair market value when received</li>
                            <li>• <strong>Minting:</strong> Gas fees may be deductible as cost basis</li>
                          </ul>
                          <p className="text-xs text-slate-500 mt-2 italic">
                            *Consult a tax professional for your specific situation. Laws vary by country.
                          </p>
                        </div>

                        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                          <h5 className="text-white font-semibold mb-2">🌍 Regulatory Landscape</h5>
                          <p className="text-sm mb-3">
                            NFT regulations are evolving. Key considerations:
                          </p>
                          <div className="space-y-2 text-sm">
                            <div>
                              <strong className="text-cyan-400">Securities Law:</strong> Fractionalized NFTs or those promising returns may be securities
                            </div>
                            <div>
                              <strong className="text-green-400">AML/KYC:</strong> Major marketplaces implementing identity verification for large transactions
                            </div>
                            <div>
                              <strong className="text-purple-400">Consumer Protection:</strong> EU and other regions adding NFT-specific consumer rights
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton 
                            courseId="nft-masterclass"
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

              {/* Section 6: Future of NFTs */}
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
                      <Sparkles className="w-5 h-5 text-purple-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">6. Future of NFTs</h3>
                        <p className="text-sm text-slate-400">Emerging trends and innovations</p>
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
                          The <strong className="text-white">future of NFTs</strong> extends far beyond digital art. 
                          Emerging use cases are transforming how we think about ownership, identity, and digital experiences.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                            <h5 className="text-blue-400 font-semibold mb-2">🎮 Gaming & Metaverse</h5>
                            <p className="text-xs text-slate-400 mb-2">
                              Play-to-earn economies where your in-game assets have real value
                            </p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              <li>• Interoperable items across games</li>
                              <li>• Virtual land ownership (Decentraland, Sandbox)</li>
                              <li>• Cross-platform identities & avatars</li>
                              <li>• NFT-gated gaming experiences</li>
                            </ul>
                          </div>
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                            <h5 className="text-green-400 font-semibold mb-2">🎵 Music & Entertainment</h5>
                            <p className="text-xs text-slate-400 mb-2">
                              Artists monetizing directly, fans owning a piece of culture
                            </p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              <li>• Royalty-sharing music NFTs</li>
                              <li>• Exclusive concert access & backstage passes</li>
                              <li>• Fan club memberships as NFTs</li>
                              <li>• Collaborative songs with holders</li>
                            </ul>
                          </div>
                          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                            <h5 className="text-purple-400 font-semibold mb-2">🏠 Real World Assets (RWAs)</h5>
                            <p className="text-xs text-slate-400 mb-2">
                              Tokenizing physical assets for fractional ownership
                            </p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              <li>• Real estate fractional ownership</li>
                              <li>• Luxury goods authentication (watches, bags)</li>
                              <li>• Equipment leasing & rental NFTs</li>
                              <li>• Supply chain tracking</li>
                            </ul>
                          </div>
                          <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-4">
                            <h5 className="text-pink-400 font-semibold mb-2">🆔 Identity & Credentials</h5>
                            <p className="text-xs text-slate-400 mb-2">
                              Verifiable credentials and decentralized identity
                            </p>
                            <ul className="text-xs text-slate-400 space-y-1">
                              <li>• Education diplomas as NFTs</li>
                              <li>• Professional certifications</li>
                              <li>• Medical records & prescriptions</li>
                              <li>• Soulbound tokens (non-transferable identity)</li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-5">
                          <h4 className="text-cyan-400 font-semibold mb-3">🚀 Technological Innovations</h4>
                          <div className="space-y-3">
                            <div>
                              <p className="text-white font-semibold text-sm">Dynamic NFTs</p>
                              <p className="text-xs text-slate-400">
                                NFTs that change based on external data (weather, time, real-world events). 
                                Example: A soccer player card that updates stats in real-time.
                              </p>
                            </div>
                            <div>
                              <p className="text-white font-semibold text-sm">AI-Generated NFTs</p>
                              <p className="text-xs text-slate-400">
                                AI art tools integrated into minting platforms. Prompt-to-NFT in seconds. 
                                Questions about originality and value.
                              </p>
                            </div>
                            <div>
                              <p className="text-white font-semibold text-sm">Layer 2 Scaling</p>
                              <p className="text-xs text-slate-400">
                                Cheaper, faster NFT transactions on L2s like Arbitrum, Optimism, zkSync. 
                                Bridging between mainnets becoming seamless.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-5">
                          <h5 className="text-white font-semibold mb-2 text-center">🔮 Bold Predictions for 2025-2030</h5>
                          <div className="grid md:grid-cols-2 gap-3 text-sm mt-3">
                            <div className="flex items-start gap-2">
                              <span className="text-purple-400 text-xl">💼</span>
                              <p className="text-xs">
                                <strong>Mainstream Adoption:</strong> Fortune 500 companies will have NFT loyalty programs
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-pink-400 text-xl">🏛️</span>
                              <p className="text-xs">
                                <strong>Regulation Clarity:</strong> Clear legal frameworks in major markets
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-blue-400 text-xl">🌉</span>
                              <p className="text-xs">
                                <strong>Cross-Chain NFTs:</strong> Seamless movement of NFTs across all blockchains
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-green-400 text-xl">🎓</span>
                              <p className="text-xs">
                                <strong>Education Evolution:</strong> Academic credentials issued as NFTs globally
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-center">
                          <p className="text-white font-semibold mb-2">🎯 Your NFT Journey Starts Now</p>
                          <p className="text-sm text-slate-400">
                            Whether you're an artist, collector, investor, or builder - the NFT space offers endless opportunities. 
                            Stay curious, keep learning, and always DYOR (Do Your Own Research).
                          </p>
                        </div>
                        
                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton 
                            courseId="nft-masterclass"
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
    </div>
  )
}
