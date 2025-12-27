"use client"

import { useState } from "react"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, FileCode, Shield, Zap, Bug, Rocket, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionCompleteButton } from "@/components/progress/section-complete-button"

export default function SmartContracts101Page() {
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
            <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">
              🔒 Premium Course
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Smart Contracts 101
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Master the fundamentals of smart contract development. Learn to write, deploy, and audit 
              self-executing code on the blockchain.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-blue-400">6</div>
                <div className="text-sm text-slate-400">Modules</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-cyan-400">Intermediate</div>
                <div className="text-sm text-slate-400">Level</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-teal-400">~5h</div>
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
              
              {/* Section 1: Smart Contract Basics */}
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
                      <Code className="w-5 h-5 text-blue-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">1. Smart Contract Basics</h3>
                        <p className="text-sm text-slate-400">What are smart contracts?</p>
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
                          <strong className="text-white">Smart Contracts</strong> are self-executing programs stored on a blockchain. 
                          They automatically execute when predetermined conditions are met, without intermediaries.
                        </p>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5">
                          <h4 className="text-blue-400 font-semibold mb-3">🔑 Key Characteristics</h4>
                          <ul className="space-y-2 text-sm">
                            <li><strong className="text-white">Autonomous:</strong> Executes automatically when conditions are met</li>
                            <li><strong className="text-white">Trustless:</strong> No need to trust a third party - code is law</li>
                            <li><strong className="text-white">Immutable:</strong> Once deployed, the code cannot be changed</li>
                            <li><strong className="text-white">Transparent:</strong> Anyone can verify the code and execution</li>
                            <li><strong className="text-white">Deterministic:</strong> Same input always produces same output</li>
                          </ul>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                            <h5 className="text-green-400 font-semibold mb-2">💰 Financial Use Cases</h5>
                            <p className="text-xs text-slate-400 mb-2">
                              DeFi protocols, lending/borrowing, DEXs, stablecoins, derivatives
                            </p>
                            <p className="text-xs italic text-slate-500">
                              Example: Uniswap automatically swaps tokens based on AMM formula
                            </p>
                          </div>
                          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                            <h5 className="text-purple-400 font-semibold mb-2">🎮 NFT & Gaming</h5>
                            <p className="text-xs text-slate-400 mb-2">
                              NFT minting, marketplaces, in-game economies, ownership
                            </p>
                            <p className="text-xs italic text-slate-500">
                              Example: CryptoPunks minting contract created 10,000 unique avatars
                            </p>
                          </div>
                          <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                            <h5 className="text-cyan-400 font-semibold mb-2">🏛️ Governance</h5>
                            <p className="text-xs text-slate-400 mb-2">
                              DAOs, voting mechanisms, proposals, treasury management
                            </p>
                            <p className="text-xs italic text-slate-500">
                              Example: MakerDAO governance controls $5B+ protocol
                            </p>
                          </div>
                          <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-4">
                            <h5 className="text-pink-400 font-semibold mb-2">�� Supply Chain</h5>
                            <p className="text-xs text-slate-400 mb-2">
                              Tracking, authenticity verification, automated payments
                            </p>
                            <p className="text-xs italic text-slate-500">
                              Example: Walmart uses blockchain to track food supply
                            </p>
                          </div>
                        </div>

                        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                          <h5 className="text-white font-semibold mb-2">Your First Smart Contract</h5>
                          <p className="text-sm mb-3">
                            Here's a simple "Hello World" smart contract in Solidity:
                          </p>
                          <div className="bg-slate-900/50 rounded p-3 font-mono text-xs overflow-x-auto">
                            <div className="text-green-400">// SPDX-License-Identifier: MIT</div>
                            <div className="text-purple-400">pragma solidity ^0.8.0;</div>
                            <div className="mt-2 text-blue-400">contract HelloWorld {`{`}</div>
                            <div className="ml-4 text-slate-300">string public message;</div>
                            <div className="ml-4 mt-2 text-cyan-400">constructor(string memory _message) {`{`}</div>
                            <div className="ml-8 text-slate-300">message = _message;</div>
                            <div className="ml-4 text-cyan-400">{`}`}</div>
                            <div className="ml-4 mt-2 text-cyan-400">function setMessage(string memory _message) public {`{`}</div>
                            <div className="ml-8 text-slate-300">message = _message;</div>
                            <div className="ml-4 text-cyan-400">{`}`}</div>
                            <div className="text-blue-400">{`}`}</div>
                          </div>
                        </div>
                        
                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton 
                            courseId="smart-contracts-101"
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

              {/* Section 2: Solidity Fundamentals */}
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
                      <FileCode className="w-5 h-5 text-cyan-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">2. Solidity Fundamentals</h3>
                        <p className="text-sm text-slate-400">Learn the programming language</p>
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
                          <strong className="text-white">Solidity</strong> is the most popular programming language for Ethereum smart contracts. 
                          It's statically-typed, supports inheritance, libraries, and complex user-defined types.
                        </p>

                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-5">
                          <h4 className="text-cyan-400 font-semibold mb-3">📚 Data Types & Variables</h4>
                          <div className="grid md:grid-cols-2 gap-3 text-sm">
                            <div>
                              <p className="text-white font-semibold mb-2">Value Types</p>
                              <ul className="text-xs text-slate-400 space-y-1">
                                <li>• <code className="text-cyan-300">bool</code>: true/false</li>
                                <li>• <code className="text-cyan-300">uint/int</code>: unsigned/signed integers</li>
                                <li>• <code className="text-cyan-300">address</code>: Ethereum address</li>
                                <li>• <code className="text-cyan-300">bytes</code>: byte arrays</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-white font-semibold mb-2">Reference Types</p>
                              <ul className="text-xs text-slate-400 space-y-1">
                                <li>• <code className="text-cyan-300">arrays</code>: fixed or dynamic</li>
                                <li>• <code className="text-cyan-300">struct</code>: custom data structures</li>
                                <li>• <code className="text-cyan-300">mapping</code>: key-value storage</li>
                                <li>• <code className="text-cyan-300">string</code>: UTF-8 encoded text</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                          <h5 className="text-white font-semibold mb-2">Functions & Modifiers</h5>
                          <div className="bg-slate-900/50 rounded p-3 font-mono text-xs overflow-x-auto mb-3">
                            <div className="text-blue-400">function transfer(address to, uint amount) public {`{`}</div>
                            <div className="ml-4 text-slate-300">require(balance[msg.sender] &gt;= amount, "Insufficient balance");</div>
                            <div className="ml-4 text-slate-300">balance[msg.sender] -= amount;</div>
                            <div className="ml-4 text-slate-300">balance[to] += amount;</div>
                            <div className="text-blue-400">{`}`}</div>
                          </div>
                          <p className="text-sm">
                            <strong className="text-white">Visibility:</strong> <code className="text-cyan-300">public</code>, <code className="text-cyan-300">private</code>, <code className="text-cyan-300">internal</code>, <code className="text-cyan-300">external</code><br/>
                            <strong className="text-white">State Mutability:</strong> <code className="text-cyan-300">view</code> (read-only), <code className="text-cyan-300">pure</code> (no state access), <code className="text-cyan-300">payable</code> (accepts ETH)
                          </p>
                        </div>

                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton 
                            courseId="smart-contracts-101"
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

              {/* Section 3: Deploying Contracts */}
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
                      <Rocket className="w-5 h-5 text-green-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">3. Deploying Contracts</h3>
                        <p className="text-sm text-slate-400">From local to mainnet</p>
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
                          Deploying a smart contract means publishing it to the blockchain, making it permanently available and executable.
                        </p>

                        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5">
                          <h4 className="text-green-400 font-semibold mb-3">🛠️ Development Tools</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-slate-800/50 rounded p-3">
                              <h5 className="text-white font-semibold text-sm mb-2">Hardhat</h5>
                              <p className="text-xs text-slate-400 mb-2">Professional development environment</p>
                              <ul className="text-xs text-slate-500 space-y-0.5">
                                <li>• Built-in testing framework</li>
                                <li>• TypeScript support</li>
                                <li>• Extensive plugin ecosystem</li>
                              </ul>
                            </div>
                            <div className="bg-slate-800/50 rounded p-3">
                              <h5 className="text-white font-semibold text-sm mb-2">Remix IDE</h5>
                              <p className="text-xs text-slate-400 mb-2">Browser-based IDE for beginners</p>
                              <ul className="text-xs text-slate-500 space-y-0.5">
                                <li>• No setup required</li>
                                <li>• Visual debugger</li>
                                <li>• Deploy to testnets easily</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                          <h5 className="text-blue-400 font-semibold mb-2">Deployment Process</h5>
                          <ol className="space-y-2 text-sm">
                            <li className="flex gap-2">
                              <span className="text-blue-400 font-semibold">1.</span>
                              <div>
                                <strong className="text-white">Compile:</strong> Convert Solidity to bytecode
                                <code className="block mt-1 bg-slate-900 px-2 py-1 rounded text-xs">npx hardhat compile</code>
                              </div>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-blue-400 font-semibold">2.</span>
                              <div>
                                <strong className="text-white">Test Locally:</strong> Run on Hardhat Network (local blockchain)
                              </div>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-blue-400 font-semibold">3.</span>
                              <div>
                                <strong className="text-white">Deploy to Testnet:</strong> Sepolia, Goerli - free test ETH
                              </div>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-blue-400 font-semibold">4.</span>
                              <div>
                                <strong className="text-white">Verify Contract:</strong> Publish source code on Etherscan
                              </div>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-blue-400 font-semibold">5.</span>
                              <div>
                                <strong className="text-white">Deploy to Mainnet:</strong> Real ETH, irreversible!
                              </div>
                            </li>
                          </ol>
                        </div>

                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton 
                            courseId="smart-contracts-101"
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

              {/* Section 4: Security Best Practices */}
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
                      <Shield className="w-5 h-5 text-red-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">4. Security Best Practices</h3>
                        <p className="text-sm text-slate-400">Protect against vulnerabilities</p>
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
                          <strong className="text-white">Security is paramount</strong> in smart contracts. A single bug can lead to millions in losses. 
                          The DAO hack (2016) lost $60M due to a reentrancy vulnerability.
                        </p>

                        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                         <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                            ⚠️ Common Vulnerabilities
                          </h4>
                          <div className="space-y-3">
                            <div className="bg-slate-800/50 rounded p-3">
                              <h5 className="text-white font-semibold text-sm mb-1">Reentrancy</h5>
                              <p className="text-xs text-slate-400 mb-2">
                                Attacker calls back into contract before state updates
                              </p>
                              <p className="text-xs text-green-400">✅ Fix: Use Checks-Effects-Interactions pattern or ReentrancyGuard</p>
                            </div>
                            <div className="bg-slate-800/50 rounded p-3">
                              <h5 className="text-white font-semibold text-sm mb-1">Integer Overflow/Underflow</h5>
                              <p className="text-xs text-slate-400 mb-2">
                                Arithmetic operations exceed max/min values
                              </p>
                              <p className="text-xs text-green-400">✅ Fix: Use Solidity 0.8.0+ (built-in checks) or SafeMath library</p>
                            </div>
                            <div className="bg-slate-800/50 rounded p-3">
                              <h5 className="text-white font-semibold text-sm mb-1">Access Control</h5>
                              <p className="text-xs text-slate-400 mb-2">
                                Unauthorized users can call privileged functions
                              </p>
                              <p className="text-xs text-green-400">✅ Fix: Use modifiers (onlyOwner) and OpenZeppelin's AccessControl</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                          <h5 className="text-cyan-400 font-semibold mb-2">Security Checklist</h5>
                          <ul className="text-sm space-y-1">
                            <li>✅ Use latest Solidity version (0.8.x+)</li>
                            <li>✅ Import audited libraries (OpenZeppelin)</li>
                            <li>✅ Follow Checks-Effects-Interactions pattern</li>
                            <li>✅ Add require() statements for input validation</li>
                            <li>✅ Use events for important state changes</li>
                            <li>✅ Consider circuit breakers (pause functionality)</li>
                            <li>✅ Get professional audit before mainnet deployment</li>
                          </ul>
                        </div>

                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton 
                            courseId="smart-contracts-101"
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

              {/* Section 5: Testing Smart Contracts */}
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
                      <Bug className="w-5 h-5 text-yellow-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">5. Testing Smart Contracts</h3>
                        <p className="text-sm text-slate-400">Ensuring code reliability</p>
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
                          <strong className="text-white">Testing is mandatory</strong> for smart contracts. Aim for 100% code coverage. 
                          Remember: you can't patch bugs after deployment!
                        </p>

                        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-5">
                          <h4 className="text-yellow-400 font-semibold mb-3">🧪 Testing Frameworks</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            <div className="bg-slate-800/50 rounded p-3">
                              <h5 className="text-white font-semibold text-sm mb-2">Hardhat Testing</h5>
                              <p className="text-xs text-slate-400 mb-2">JavaScript/TypeScript with Mocha & Chai</p>
                              <div className="bg-slate-900 rounded p-2 font-mono text-xs">
                                <div className="text-green-400">describe(&quot;Token&quot;, () =&gt; {`{`}</div>
                                <div className="ml-2 text-cyan-400">it(&quot;should transfer&quot;, ...</div>
                                <div className="text-green-400">{`}`});</div>
                              </div>
                            </div>
                            <div className="bg-slate-800/50 rounded p-3">
                              <h5 className="text-white font-semibold text-sm mb-2">Foundry Testing</h5>
                              <p className="text-xs text-slate-400 mb-2">Write tests in Solidity itself</p>
                              <div className="bg-slate-900 rounded p-2 font-mono text-xs">
                                <div className="text-purple-400">function testTransfer()</div>
                                <div className="ml-2 text-slate-300">public {`{`}</div>
                                <div className="ml-4 text-cyan-300">assertTrue(...)</div>
                                <div className="ml-2 text-slate-300">{`}`}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                          <h5 className="text-blue-400 font-semibold mb-2">Test Coverage Areas</h5>
                          <ul className="space-y-2 text-sm">
                            <li>
                              <strong className="text-white">Unit Tests:</strong> Test individual functions in isolation
                            </li>
                            <li>
                              <strong className="text-white">Integration Tests:</strong> Test interactions between contracts
                            </li>
                            <li>
                              <strong className="text-white">Edge Cases:</strong> Zero values, max values, empty arrays
                            </li>
                            <li>
                              <strong className="text-white">Access Control:</strong> Unauthorized access attempts
                            </li>
                            <li>
                              <strong className="text-white">Gas Usage:</strong> Optimize expensive operations
                            </li>
                          </ul>
                        </div>

                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton 
                            courseId="smart-contracts-101"
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

              {/* Section 6: Advanced Patterns */}
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
                      <Zap className="w-5 h-5 text-purple-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">6. Advanced Patterns</h3>
                        <p className="text-sm text-slate-400">Professional development techniques</p>
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
                          <strong className="text-white">Design patterns</strong> help you write efficient, secure, and maintainable smart contracts.
                        </p>

                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                            <h5 className="text-purple-400 font-semibold mb-2">🔄 Proxy Pattern</h5>
                            <p className="text-xs text-slate-400 mb-2">
                              Enable upgradeable contracts via delegation
                            </p>
                            <p className="text-xs text-slate-500">
                              Used by: USDC, USDT, Compound
                            </p>
                          </div>
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                            <h5 className="text-blue-400 font-semibold mb-2">🏭 Factory Pattern</h5>
                            <p className="text-xs text-slate-400 mb-2">
                              Deploy multiple instances programmatically
                            </p>
                            <p className="text-xs text-slate-500">
                              Used by: Uniswap (pair creation)
                            </p>
                          </div>
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                            <h5 className="text-green-400 font-semibold mb-2">💎 Diamond Pattern</h5>
                            <p className="text-xs text-slate-400 mb-2">
                              Modular contracts with multiple facets
                            </p>
                            <p className="text-xs text-slate-500">
                              Breaks 24KB contract size limit
                            </p>
                          </div>
                          <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-4">
                            <h5 className="text-pink-400 font-semibold mb-2">🗳️ Pull Payment</h5>
                            <p className="text-xs text-slate-400 mb-2">
                              Let users withdraw instead of push payments
                            </p>
                            <p className="text-xs text-slate-500">
                              Safer than direct transfers
                            </p>
                          </div>
                        </div>

                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-5">
                          <h4 className="text-cyan-400 font-semibold mb-3">⚡ Gas Optimization Tips</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Use <code className="text-cyan-300">uint256</code> instead of smaller uints (cheaper in EVM)</li>
                            <li>• Pack storage variables to save slots (saves 20K gas per slot)</li>
                            <li>• Use <code className="text-cyan-300">immutable</code> for constants set in constructor</li>
                            <li>• Avoid loops with unbounded arrays</li>
                            <li>• Cache storage variables in memory when used multiple times</li>
                            <li>• Use events instead of storage for historical data</li>
                          </ul>
                        </div>

                        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-5 text-center">
                          <h5 className="text-white font-semibold mb-2">🎓 You're Ready to Build!</h5>
                          <p className="text-sm text-slate-400">
                            You now have the fundamentals to start your smart contract development journey. 
                            Keep practicing, stay updated on security, and never stop learning.
                          </p>
                        </div>

                        <div className="mt-6 flex justify-center">
                          <SectionCompleteButton 
                            courseId="smart-contracts-101"
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
      <Card className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/20 mt-8 mb-16 max-w-4xl mx-auto">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Start Building Smart Contracts</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            You now have the foundation to build secure smart contracts. Practice on testnets, study open-source code, and always prioritize security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses">
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                ← Back to Courses
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                Track Your Progress →
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
