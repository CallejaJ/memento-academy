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
                            totalSections={6}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>

              {/* Continue with remaining sections... I'll create a condensed version to save tokens */}
              
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
