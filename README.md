# Memento Academy

<div align="center">
    <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/Prisma-7-2D3748?style=for-the-badge&logo=prisma" alt="Prisma" />
    <img src="https://img.shields.io/badge/Supabase-Database-3ECF8E?style=for-the-badge&logo=supabase" alt="Supabase" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Brevo-Email-0077B5?style=for-the-badge" alt="Brevo" />
</div>

<p align="center">
    <i>Free educational platform designed for Web3 newcomers. We simplify Cryptocurrencies, CBDCs, and Blockchain technology with zero costs for the community.</i>
</p>

## 🎓 Educational Model

Memento Academy offers a structured learning path designed to take users from novices to Web3 experts.

### Premium Course Library
We currently offer **6 specialized premium courses**, each designed with a specific focus:

| Course | Level | Focus | Dependencies |
|--------|-------|-------|--------------|
| **DeFi Deep Dive** | Intermediate | Lending, Yield Farming, Liquidity Pools | None |
| **NFT Masterclass** | Advanced | Minting, Trading, Digital Art, Security | None |
| **Smart Contracts 101** | Beginner | Solidity, Deployment, Security | None |
| **Technical Analysis** | Advanced | Charts, Indicators, Patterns, Strategy | None |
| **Portfolio Management** | Intermediate | Asset Allocation, Risk Mgmt, Rebalancing | None |
| **Blockchain Development** | Advanced | Architecture, Consensus, dApps | Smart Contracts 101 |

### Learning Structure
- **Modular Design**: Each course consists of **6 progressive sections**.
- **Sequential Unlocking**: Users must complete sections in order (1 → 6) to ensure foundational knowledge is built correctly.
- **Interactive Completion**: Each section requires active confirmation of understanding via the "Mark as Complete" action.
- **Progress Tracking**: The specific progress of every user is persisted in Supabase, allowing seamless cross-device learning.

---

## 🏆 Achievements & Badges

The platform features a gamified progression system to encourage consistent learning. Badges are displayed on the User Dashboard.

### Badge Collection
There are currently **8 unique badges** available across 4 rarity tiers:

#### Common (Entry Level)
- 🎓 **First Steps**: Complete your very first course section.
- 🏆 **Course Graduate**: Complete any full course (100%).

#### Rare (Consistent Effort)
- ⚡ **Speed Learner**: Complete a full course in under 24 hours.
- 📚 **Dedicated Student**: Complete 5 different courses.

#### Epic (Mastery)
- 💎 **DeFi Master**: Complete all DeFi-related courses.
- ✨ **Perfect Score**: Achieve 100% on a course final assessment.
- 🧠 **Knowledge Seeker**: Complete a total of 50 sections across the platform.

#### Legendary (Elite)
- 🚀 **Crypto Expert**: Complete 10 courses to prove ultimate mastery.

---

## System Architecture

The application follows a modern serverless architecture with a focus on type safety and automated background processes.

```mermaid
graph TD
    User([User])
    NextJS[Next.js App Router]
    AuthContext[Auth Context]
    ServerAction[Server Actions]
    Prisma[Prisma ORM 7]
    Supabase[(Supabase PostgreSQL)]
    Brevo[Brevo Email API]
    GHA[GitHub Actions]

    User -- "Authenticates" --> NextJS
    NextJS -- "Manages State" --> AuthContext
    AuthContext -- "SSR Auth" --> Supabase
    NextJS -- "Process Data" --> ServerAction
    ServerAction -- "Persistence" --> Prisma
    Prisma -- "Query/Update" --> Supabase
    ServerAction -- "Trigger Email" --> Brevo
    Brevo -- "Welcome Email" --> User
    GHA -- "Daily Ping (Keep-Alive)" --> Supabase
```

## Technology Stack

- **Frontend**: [Next.js 15](https://nextjs.org/) (App Router), [React 19](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/)
- **Interactions**: [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/), [Framer Motion](https://www.framer.com/motion/)
- **Data & Persistence**: [Supabase](https://supabase.com/) (PostgreSQL), [Prisma 7](https://www.prisma.io/)
- **Communications**: [Brevo](https://www.brevo.com/) (Email API)
- **DevOps**: [GitHub Actions](https://github.com/features/actions) for DB health maintenance

## Key Features

### 1. Authentication Context
Centralized authentication state management using React Context and Supabase Auth.
- **Server-Side Rendering**: Seamless SSR authentication with `@supabase/ssr`.
- **Auth Modal**: Unified login/signup modal with OAuth and email/password support.
- **Session Persistence**: Automatic token refresh and session management.

### 2. High-Performance Newsletter System
Built with **Next.js Server Actions** for secure, low-latency processing.
- **Data Validation**: Real-time email validation and duplicate checking.
- **Preference Engine**: Personalized content delivery based on user interests.
- **Automated Onboarding**: Instant welcome sequences triggered via the Brevo API.

### 3. Premium Design System
Fully responsive interface designed with a focus on dark-mode aesthetics and fluid micro-interactions.
- **Adaptive Theming**: Seamless switching between Dark and Light modes.
- **Dynamic Feedback**: Real-time status updates for user interactions.

### 4. Automated Database Health
Custom **GitHub Actions** workflows ensure the Supabase tier remains active by performing periodic health checks, preventing service pauses during inactivity.

## Project Setup

### Environment Configuration
Create a `.env.local` file with the following parameters:

```env
# Database Connection (Prisma 7 Style)
DATABASE_URL="your_supabase_pooler_url"
DIRECT_URL="your_supabase_direct_url"

# Service Keys
BREVO_API_KEY="xkeysib-..."
NEXT_PUBLIC_SUPABASE_URL="https://..."
NEXT_PUBLIC_SUPABASE_ANON_KEY="..."
```

### Essential Commands

```bash
# Install dependencies
npm install

# Generate Prisma Client (Required for type safety)
npx prisma generate

# Sync schema with database
npx prisma db pull

# Start development server
npm run dev
```

---
Built with precision for **Memento Academy**.
