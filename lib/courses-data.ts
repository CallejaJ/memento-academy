import { 
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
  LucideIcon,
  // Add other icons needed for the mapping
  Activity,
  CreditCard,
  Building,
  Lock,
  Globe,
  Wallet,
  ArrowRightLeft,
  Briefcase
} from "lucide-react"

export interface CourseSection {
  id: string
  title: string
  description: string
}

export interface Course {
  id: string
  title: string
  slug: string
  description: string
  longDescription: string
  duration: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  isPremium: boolean
  icon: string
  color: string
  href: string
  sections: CourseSection[]
  learningOutcomes: string[]
}

// Free courses - Open for SEO indexing
export const freeCourses: Course[] = [
  {
    id: "web3-basics",
    title: "What is Web3?",
    slug: "web3-basics",
    description: "The definitive guide to understanding the new era of the internet.",
    longDescription: "Learn what Web3 and blockchain are, explained simply. This comprehensive guide covers the evolution of the internet, blockchain technology, and real-world applications.",
    duration: "45 min",
    difficulty: "beginner",
    isPremium: false,
    icon: 'Blocks',
    color: "cyan",
    href: "/learn/web3-basics",
    sections: [
      { id: "evolution", title: "The Evolution of the Internet", description: "From Web 1.0 to Web 3.0" },
      { id: "blockchain", title: "What is Blockchain?", description: "The technology behind Web3" },
      { id: "applications", title: "Web3 Applications", description: "DeFi, NFTs, and more" },
      { id: "benefits", title: "Why Should You Care?", description: "Benefits and opportunities" },
      { id: "history", title: "History of Web3", description: "Key milestones and events" },
      { id: "use-cases", title: "Real-World Use Cases", description: "Voting, supply chain, identity" },
      { id: "future", title: "Future Trends", description: "What's coming next" },
    ],
    learningOutcomes: [
      "Understand the difference between Web 1.0, 2.0, and 3.0",
      "Explain how blockchain technology works",
      "Identify real-world Web3 applications",
      "Evaluate opportunities in the Web3 space"
    ]
  },
  {
    id: "crypto-101",
    title: "Crypto 101",
    slug: "crypto-101",
    description: "Everything you need to know about cryptocurrencies.",
    longDescription: "A comprehensive introduction to cryptocurrencies, wallets, and how to safely enter the crypto world.",
    duration: "60 min",
    difficulty: "beginner",
    isPremium: false,
    icon: 'Coins',
    color: "teal",
    href: "/learn/crypto-101",
    sections: [
      { id: "what-is-crypto", title: "What are Cryptocurrencies?", description: "Digital money explained" },
      { id: "main-cryptos", title: "The Main Cryptocurrencies", description: "Bitcoin, Ethereum, and more" },
      { id: "wallets", title: "What is a Wallet?", description: "Hot vs cold wallets" },
      { id: "security", title: "Key Security Concepts", description: "Seed phrases and private keys" },
      { id: "first-steps", title: "Recommended First Steps", description: "How to get started" },
      { id: "exchanges", title: "How to Buy Crypto", description: "Exchange comparison and fees" },
      { id: "trading-basics", title: "Trading Basics", description: "Order types and strategies" },
      { id: "portfolio", title: "Building Your Portfolio", description: "Diversification basics" },
    ],
    learningOutcomes: [
      "Understand how cryptocurrencies work",
      "Set up and secure a crypto wallet",
      "Compare different exchanges",
      "Make your first cryptocurrency purchase safely"
    ]
  },
  {
    id: "cbdc",
    title: "Understanding CBDCs",
    slug: "cbdc",
    description: "Central Bank Digital Currencies: the future of government money.",
    longDescription: "Discover how governments are creating their own digital currencies and what impact they'll have on your daily life.",
    duration: "40 min",
    difficulty: "beginner",
    isPremium: false,
    icon: 'Landmark',
    color: "emerald",
    href: "/learn/cbdc",
    sections: [
      { id: "definition", title: "Simple Definition", description: "What are CBDCs?" },
      { id: "comparison", title: "CBDCs vs Crypto vs Cash", description: "Key differences" },
      { id: "digital-euro", title: "The Digital Euro", description: "Europe's CBDC project" },
      { id: "global", title: "CBDCs Around the World", description: "China, Brazil, and more" },
      { id: "privacy", title: "Privacy Implications", description: "Surveillance concerns" },
      { id: "timeline", title: "Implementation Timeline", description: "When and where" },
      { id: "stablecoins", title: "CBDCs vs Stablecoins", description: "Comparison table" },
    ],
    learningOutcomes: [
      "Explain what CBDCs are and how they differ from crypto",
      "Understand the privacy implications",
      "Track global CBDC development",
      "Make informed decisions about digital currencies"
    ]
  },
  {
    id: "safety",
    title: "Security Guide",
    slug: "safety",
    description: "Protect yourself from scams and keep your assets safe.",
    longDescription: "Learn to identify common cryptocurrency scams and implement best practices for securing your digital assets.",
    duration: "50 min",
    difficulty: "beginner",
    isPremium: false,
    icon: 'Shield',
    color: "red",
    href: "/learn/safety",
    sections: [
      { id: "golden-rule", title: "The Golden Rule", description: "Never share your seed phrase" },
      { id: "phishing", title: "Phishing Scams", description: "How to identify fake sites" },
      { id: "fake-support", title: "Fake Tech Support", description: "Common tactics" },
      { id: "fake-airdrops", title: "Fake Airdrops", description: "Dangerous free tokens" },
      { id: "checklist", title: "Security Checklist", description: "Best practices" },
      { id: "recovery", title: "If You Get Hacked", description: "Recovery procedures" },
      { id: "insurance", title: "Crypto Insurance", description: "Protection options" },
      { id: "tools", title: "Security Tools", description: "Recommended software" },
    ],
    learningOutcomes: [
      "Identify common cryptocurrency scams",
      "Implement security best practices",
      "Recover from security incidents",
      "Use security tools effectively"
    ]
  }
]

// Premium courses - Require login
export const premiumCourses: Course[] = [
  {
    id: "defi-deep-dive",
    title: "DeFi Deep Dive",
    slug: "defi-deep-dive",
    description: "Master decentralized finance protocols and strategies.",
    longDescription: "Go beyond the basics and learn to use DeFi protocols for lending, borrowing, yield farming, and liquidity provision.",
    duration: "90 min",
    difficulty: "intermediate",
    isPremium: true,
    icon: 'TrendingUp',
    color: "purple",
    href: "/learn/defi-deep-dive",
    sections: [
      { id: "defi-intro", title: "DeFi Fundamentals", description: "Core concepts and protocols" },
      { id: "lending", title: "Lending & Borrowing", description: "Aave, Compound explained" },
      { id: "yield-farming", title: "Yield Farming", description: "Maximizing returns" },
      { id: "liquidity", title: "Liquidity Pools", description: "AMMs and impermanent loss" },
      { id: "risks", title: "DeFi Risks", description: "Smart contract and protocol risks" },
      { id: "strategies", title: "DeFi Strategies", description: "Building your DeFi portfolio" },
    ],
    learningOutcomes: [
      "Navigate major DeFi protocols",
      "Understand lending and borrowing mechanics",
      "Evaluate yield farming opportunities",
      "Manage DeFi risks effectively"
    ]
  },
  {
    id: "nft-masterclass",
    title: "NFT Masterclass",
    slug: "nft-masterclass",
    description: "Create, collect, and trade NFTs like a pro.",
    longDescription: "From creation to trading, learn everything about NFTs including legal considerations and marketplace strategies.",
    duration: "75 min",
    difficulty: "intermediate",
    isPremium: true,
    icon: 'Palette',
    color: "pink",
    href: "/learn/nft-masterclass",
    sections: [
      { id: "nft-basics", title: "NFT Fundamentals", description: "What makes NFTs unique" },
      { id: "creating", title: "Creating NFTs", description: "Tools and best practices" },
      { id: "minting", title: "Minting Guide", description: "Step-by-step process" },
      { id: "marketplaces", title: "NFT Marketplaces", description: "OpenSea, Blur, and more" },
      { id: "valuation", title: "NFT Valuation", description: "How to assess value" },
      { id: "legal", title: "Legal Considerations", description: "Rights and royalties" },
    ],
    learningOutcomes: [
      "Create and mint your own NFTs",
      "Navigate major NFT marketplaces",
      "Evaluate NFT investments",
      "Understand legal implications"
    ]
  },
  {
    id: "smart-contracts",
    title: "Smart Contracts 101",
    slug: "smart-contracts",
    description: "Introduction to blockchain programming with Solidity.",
    longDescription: "Learn the fundamentals of smart contract development, from Solidity basics to deployment and security considerations.",
    duration: "120 min",
    difficulty: "intermediate",
    isPremium: true,
    icon: 'Code',
    color: "blue",
    href: "/learn/smart-contracts",
    sections: [
      { id: "what-are-sc", title: "What are Smart Contracts?", description: "Self-executing code" },
      { id: "solidity-basics", title: "Solidity Basics", description: "Language fundamentals" },
      { id: "development", title: "Development Environment", description: "Tools and setup" },
      { id: "writing", title: "Writing Your First Contract", description: "Hands-on tutorial" },
      { id: "deployment", title: "Deployment", description: "Testnets and mainnet" },
      { id: "security", title: "Security Considerations", description: "Common vulnerabilities" },
    ],
    learningOutcomes: [
      "Understand smart contract architecture",
      "Write basic Solidity code",
      "Deploy contracts to testnets",
      "Identify common security issues"
    ]
  },
  {
    id: "technical-analysis",
    title: "Technical Analysis",
    slug: "technical-analysis",
    description: "Read charts and identify trading opportunities.",
    longDescription: "Master the art of technical analysis with chart patterns, indicators, and proven trading strategies for crypto markets.",
    duration: "100 min",
    difficulty: "intermediate",
    isPremium: true,
    icon: 'LineChart',
    color: "orange",
    href: "/learn/technical-analysis",
    sections: [
      { id: "chart-basics", title: "Chart Basics", description: "Candlesticks and timeframes" },
      { id: "patterns", title: "Chart Patterns", description: "Head & shoulders, triangles" },
      { id: "indicators", title: "Technical Indicators", description: "RSI, MACD, moving averages" },
      { id: "volume", title: "Volume Analysis", description: "Understanding market activity" },
      { id: "strategies", title: "Trading Strategies", description: "Entry and exit points" },
      { id: "risk-management", title: "Risk Management", description: "Position sizing and stops" },
    ],
    learningOutcomes: [
      "Read and interpret crypto charts",
      "Use technical indicators effectively",
      "Develop trading strategies",
      "Manage trading risk"
    ]
  },
  {
    id: "portfolio-management",
    title: "Portfolio Management",
    slug: "portfolio-management",
    description: "Build and manage a balanced crypto portfolio.",
    longDescription: "Learn professional portfolio management techniques including diversification, rebalancing, and tax optimization.",
    duration: "80 min",
    difficulty: "intermediate",
    isPremium: true,
    icon: 'PieChart',
    color: "green",
    href: "/learn/portfolio-management",
    sections: [
      { id: "principles", title: "Investment Principles", description: "Long-term thinking" },
      { id: "allocation", title: "Asset Allocation", description: "Balancing your portfolio" },
      { id: "diversification", title: "Diversification", description: "Reducing risk" },
      { id: "rebalancing", title: "Rebalancing Strategies", description: "When and how" },
      { id: "tracking", title: "Portfolio Tracking", description: "Tools and metrics" },
      { id: "taxes", title: "Tax Implications", description: "Reporting and optimization" },
    ],
    learningOutcomes: [
      "Build a diversified crypto portfolio",
      "Implement rebalancing strategies",
      "Track portfolio performance",
      "Understand tax obligations"
    ]
  },
  {
    id: "blockchain-dev",
    title: "Blockchain Development",
    slug: "blockchain-dev",
    description: "Build full-stack decentralized applications.",
    longDescription: "From frontend to smart contracts, learn to build complete dApps with modern Web3 development tools and frameworks.",
    duration: "150 min",
    difficulty: "advanced",
    isPremium: true,
    icon: 'Layers',
    color: "indigo",
    href: "/learn/blockchain-dev",
    sections: [
      { id: "architecture", title: "dApp Architecture", description: "Frontend, backend, blockchain" },
      { id: "web3-libs", title: "Web3 Libraries", description: "ethers.js, wagmi, viem" },
      { id: "frontend", title: "Frontend Development", description: "React + Web3" },
      { id: "backend", title: "Backend Services", description: "APIs and indexing" },
      { id: "testing", title: "Testing dApps", description: "Unit and integration tests" },
      { id: "deployment", title: "Production Deployment", description: "Going live" },
    ],
    learningOutcomes: [
      "Architect complete dApps",
      "Integrate Web3 with React",
      "Build and test smart contracts",
      "Deploy production applications"
    ]
  }
]

// All courses combined
export const allCourses: Course[] = [...freeCourses, ...premiumCourses]

// Helper functions
export function getCourseById(id: string): Course | undefined {
  return allCourses.find(course => course.id === id)
}

export function getCourseBySlug(slug: string): Course | undefined {
  return allCourses.find(course => course.slug === slug)
}

export function getFreeCourses(): Course[] {
  return freeCourses
}

export function getPremiumCourses(): Course[] {
  return premiumCourses
}
