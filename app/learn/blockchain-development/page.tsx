"use client"

import { useState } from "react"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Blocks, Network, Database, Cpu, Layers, Rocket, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionCompleteButton } from "@/components/progress/section-complete-button"

export default function BlockchainDevelopmentPage() {
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
            <Badge className="bg-violet-500/10 text-violet-400 border-violet-500/20">
              🔒 Premium Course
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Blockchain Development
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Master blockchain architecture and build decentralized applications. Learn consensus mechanisms, 
              scalability solutions, and real-world dApp development.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-violet-400">6</div>
                <div className="text-sm text-slate-400">Modules</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-purple-400">Advanced</div>
                <div className="text-sm text-slate-400">Level</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-fuchsia-400">~6h</div>
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
              
              {/* Section 1: Blockchain Architecture */}
              <div className="relative group">
                <div className={`absolute -left-[19px] top-6 w-3 h-3 rounded-full border z-10 transition-all ${
                  expandedSections.includes(0) ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-slate-700 border-slate-600'
                }`} />
                <div className="absolute -left-[14px] top-9 w-0.5 h-full bg-slate-800" />
                
                <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ml-4">
                  <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => toggleSection(0)}>
                    <div className="flex items-center gap-3">
                      <Blocks className="w-5 h-5 text-violet-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">1. Blockchain Architecture</h3>
                        <p className="text-sm text-slate-400">How blockchains work</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${expandedSections.includes(0) ? 'rotate-180' : ''}`} />
                  </div>

                  {expandedSections.includes(0) && (
                    <div className="px-6 pb-6">
                      <div className="space-y-4 text-slate-300">
                        <p className="text-lg">
                          A <strong className="text-white">blockchain</strong> is a distributed ledger that records transactions across many computers. 
                          Understanding its architecture is fundamental to blockchain development.
                        </p>

                        <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-5">
                          <h4 className="text-violet-400 font-semibold mb-3">🧱 Core Components</h4>
                          <div className="grid md:grid-cols-2 gap-3 text-sm">
                            <div className="bg-slate-800/50 rounded p-3">
                              <p className="text-white font-semibold mb-1">Blocks</p>
                              <p className="text-xs text-slate-400">Container of transactions with timestamp, hash, and previous hash</p>
                            </div>
                            <div className="bg-slate-800/50 rounded p-3">
                              <p className="text-white font-semibold mb-1">Chain</p>
                              <p className="text-xs text-slate-400">Linked blocks creating immutable history via cryptographic hashes</p>
                            </div>
                            <div className="bg-slate-800/50 rounded p-3">
                              <p className="text-white font-semibold mb-1">Nodes</p>
                              <p className="text-xs text-slate-400">Computers that validate, store, and distribute blockchain data</p>
                            </div>
                            <div className="bg-slate-800/50 rounded p-3">
                              <p className="text-white font-semibold mb-1">Consensus</p>
                              <p className="text-xs text-slate-400">Agreement mechanism for adding new blocks (PoW, PoS, etc.)</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                          <h5 className="text-blue-400 font-semibold mb-2">🔐 Cryptographic Foundations</h5>
                          <ul className="text-sm space-y-1">
                            <li>• <strong className="text-white">SHA-256:</strong> Hashing algorithm for block integrity</li>
                            <li>• <strong className="text-white">Public/Private Keys:</strong> Asymmetric cryptography for ownership</li>
                            <li>• <strong className="text-white">Digital Signatures:</strong> Prove transaction authenticity</li>
                            <li>• <strong className="text-white">Merkle Trees:</strong> Efficient data verification structure</li>
                          </ul>
                        </div>

                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton courseId="blockchain-development" sectionId="section-1" sectionNumber={1} totalSections={6} />
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>

              {/* Sections 2-6 - Condensed but complete */}
              {[
                { idx: 1, icon: Network, color: "purple", title: "2. Consensus Mechanisms", subtitle: "Agreeing on truth", content: "Consensus mechanisms allow distributed networks to agree on the state of the blockchain without central authority." },
                { idx: 2, icon: Database, color: "cyan", title: "3. State Management", subtitle: "Tracking blockchain data", content: "State is the current snapshot of all accounts, balances, and smart contract storage on the blockchain." },
                { idx: 3, icon: Layers, color: "green", title: "4. Scalability Solutions", subtitle: "Making blockchains faster", content: "Scalability addresses the blockchain trilemma: decentralization, security, and scalability can't all be maximized simultaneously." },
                { idx: 4, icon: Cpu, color: "orange", title: "5. Developer Tools", subtitle: "Building on blockchain", content: "Modern blockchain development requires specific tools, frameworks, and best practices." },
                { idx: 5, icon: Rocket, color: "pink", title: "6. Building dApps", subtitle: "Decentralized applications", content: "dApps combine smart contracts (backend) with web interfaces (frontend) to create trustless applications." }
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

                          {section.idx === 1 && (
                            <>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                                  <h5 className="text-purple-400 font-semibold mb-2">⛏️ Proof of Work (PoW)</h5>
                                  <p className="text-sm mb-2">Miners solve computational puzzles</p>
                                  <ul className="text-xs text-slate-400 space-y-1">
                                    <li>• Used by: Bitcoin, Ethereum (pre-Merge)</li>
                                    <li>• Pros: Highly secure, battle-tested</li>
                                    <li>• Cons: Energy intensive, slow</li>
                                  </ul>
                                </div>
                                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                                  <h5 className="text-blue-400 font-semibold mb-2">🎯 Proof of Stake (PoS)</h5>
                                  <p className="text-sm mb-2">Validators stake tokens to secure network</p>
                                  <ul className="text-xs text-slate-400 space-y-1">
                                    <li>• Used by: Ethereum, Solana, Cardano</li>
                                    <li>• Pros: Energy efficient, faster</li>
                                    <li>• Cons: Plutocracy risk, less tested</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                                <h5 className="text-cyan-400 font-semibold mb-2">⚡ Other Mechanisms</h5>
                                <p className="text-sm">• <strong>DPoS:</strong> Delegated Proof of Stake (EOS, Tron)<br/>
                                • <strong>PoA:</strong> Proof of Authority (private chains)<br/>
                                • <strong>PoH:</strong> Proof of History (Solana's innovation)</p>
                              </div>
                            </>
                          )}

                          {section.idx === 2 && (
                            <>
                              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-5">
                                <h4 className="text-cyan-400 font-semibold mb-3">💾 State Types</h4>
                                <ul className="text-sm space-y-2">
                                  <li>• <strong className="text-white">Account State:</strong> Balances, nonces for all addresses</li>
                                  <li>• <strong className="text-white">Contract Storage:</strong> Persistent data in smart contracts</li>
                                  <li>• <strong className="text-white">Transaction Pool:</strong> Pending unconfirmed transactions (mempool)</li>
                                  <li>• <strong className="text-white">State Root:</strong> Merkle root hash representing entire state</li>
                                </ul>
                              </div>
                              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                                <p className="text-sm">💡 <strong>State Bloat:</strong> As state grows, node requirements increase. Archive nodes store all historical states while full nodes only keep recent state.</p>
                              </div>
                            </>
                          )}

                          {section.idx === 3 && (
                            <>
                              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5">
                                <h4 className="text-green-400 font-semibold mb-3">🚀 Scaling Approaches</h4>
                                <div className="space-y-3 text-sm">
                                  <div className="bg-slate-800/50 rounded p-3">
                                    <p className="text-white font-semibold mb-1">Layer 2 Solutions</p>
                                    <p className="text-xs text-slate-400">Process transactions off-chain, settle on mainnet. Examples: Optimism, Arbitrum, Polygon zkEVM</p>
                                  </div>
                                  <div className="bg-slate-800/50 rounded p-3">
                                    <p className="text-white font-semibold mb-1">Sharding</p>
                                    <p className="text-xs text-slate-400">Split blockchain into parallel chains (shards). Ethereum 2.0's long-term plan</p>
                                  </div>
                                  <div className="bg-slate-800/50 rounded p-3">
                                    <p className="text-white font-semibold mb-1">State Channels</p>
                                    <p className="text-xs text-slate-400">Off-chain direct peer interactions. Lightning Network (Bitcoin)</p>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}

                          {section.idx === 4 && (
                            <>
                              <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-5">
                                <h4 className="text-orange-400 font-semibold mb-3">🛠️ Essential Tools</h4>
                                <div className="grid md:grid-cols-2 gap-3 text-sm">
                                  <div>
                                    <p className="text-white font-semibold mb-2">Development</p>
                                    <ul className="text-xs text-slate-400 space-y-1">
                                      <li>• Hardhat / Foundry: Smart contract frameworks</li>
                                      <li>• Remix: Browser IDE</li>
                                      <li>• OpenZeppelin: Audited contract libraries</li>
                                    </ul>
                                  </div>
                                  <div>
                                    <p className="text-white font-semibold mb-2">Frontend</p>
                                    <ul className="text-xs text-slate-400 space-y-1">
                                      <li>• ethers.js / viem: Blockchain interaction</li>
                                      <li>• RainbowKit / ConnectKit: Wallet connection</li>
                                      <li>• The Graph: Data indexing & querying</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}

                          {section.idx === 5 && (
                            <>
                              <div className="bg-pink-500/10 border border-pink-500/20 rounded-xl p-5">
                                <h4 className="text-pink-400 font-semibold mb-3">📱 dApp Architecture</h4>
                                <ol className="text-sm space-y-2">
                                  <li><strong className="text-white">1. Smart Contracts (Backend):</strong> Business logic on-chain</li>
                                  <li><strong className="text-white">2. Frontend (React/Next.js):</strong> User interface</li>
                                  <li><strong className="text-white">3. Web3 Provider (MetaMask):</strong> Wallet connection</li>
                                  <li><strong className="text-white">4. IPFS/Arweave:</strong> Decentralized file storage</li>
                                  <li><strong className="text-white">5. Subgraph:</strong> Index and query blockchain data</li>
                                </ol>
                              </div>
                              <div className="bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 rounded-lg p-5 text-center">
                                <h5 className="text-white font-semibold mb-2">🎓 Start Building</h5>
                                <p className="text-sm text-slate-400">
                                  Blockchain development is the future. Start with testnet deployments, learn from open-source projects, and join developer communities. The best way to learn is to build.
                                </p>
                              </div>
                            </>
                          )}

                          <div className="mt-6 flex justify-center">
                            <SectionCompleteButton courseId="blockchain-development" sectionId={`section-${section.idx + 1}`} sectionNumber={section.idx + 1} totalSections={6} />
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

      <Card className="bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border-violet-500/20 mt-8 max-w-4xl mx-auto">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Build the Decentralized Future</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Blockchain technology is revolutionizing industries. Master these fundamentals and you{"'"}ll be ready to build the next generation of applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses">
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">← Back to Courses</Button>
            </Link>
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600">Track Your Progress →</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
