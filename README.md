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

## Educational Model

Memento Academy offers a structured learning path designed to take users from novices to Web3 experts.

### Course Types

#### 1. Free Courses (Foundation)

Designed for maximum accessibility and SEO.

- **Access**: Open to everyone (no login required to view).
- **Structure**: Fully dynamic content loaded from Supabase.
- **Progress**: Users who log in can track their progress and earn badges. Non-logged users see all content unlocked.
- **Current Courses**: `web3-basics`, `crypto-101`, `blockchain-dev`, `cbdc`.

#### 2. Premium Courses (Specialized)

Advanced content with strict progression.

- **Access**: Requires login (and future subscription).
- **Locking**: content is strictly sequential; you must complete Section 1 to unlock Section 2.
- **Deep Dives**: `defi-deep-dive`, `nft-masterclass`, `smart-contracts-101`.

### Learning Structure

- **Modular Design**: Each course consists of **6-9 sections**.
- **Dynamic Engine**: Content is stored in SQL/JSON, allowing instant updates without redeploying the app.
- **Interactive Quizzes**: Embedded quizzes with instant feedback at the end of each section.
- **Progress Persistence**: synchronized across devices via Supabase.

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
    AuthContext -- "SSR Cookies" --> Supabase
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

### 1. Robust Authentication

- **Hybrid System**: Uses `@supabase/ssr` with **httpOnly cookies** for secure Server-Side Rendering (SSR) in Next.js 15.
- **Client Sync**: `createBrowserClient` ensures the client-side state stays in sync with server sessions.
- **Middleware**: Automatic session refreshing to prevent stale tokens.

### 2. Dynamic Content Engine

- **SQL-Driven**: Course content is decoupled from code, stored in `course_sections` table with JSONB for rich text and components.
- **Localization**: Native JSON support for `en` and `es` content within the same database row.
- **Performance**: Fetched via Server Components for optimal LCP.

### 3. High-Performance Newsletter System

Built with **Next.js Server Actions** for secure, low-latency processing.

- **Data Validation**: Real-time email validation and duplicate checking.
- **Preference Engine**: Personalized content delivery based on user interests.

### 4. Premium Design System

Fully responsive interface designed with a focus on dark-mode aesthetics.

- **Adaptive Theming**: Seamless switching between Dark and Light modes.
- **Glassmorphism**: Modern UI elements with blurred backdrops.

### 5. Automated Database Health

Custom **GitHub Actions** workflows ensure the Supabase tier remains active.

## Testing Strategy

The project implements a robust automated testing strategy using **Jest** and **React Testing Library**.

### Test Coverage

#### 1. Frontend Unit Tests

- **AuthModal**: Login/signup form rendering and validation.
- **BadgeGrid**: Visual distinction between earned/locked badges.

#### 2. Backend Integration Tests

- **Newsletter Action**: Verify duplicate handling.
- **Contact API**: Tests API route flow and rate limiting.

### Security & Validation

- **Zod**: Strict input validation for all forms and APIs.
- **SQL Injection**: Prevented via ORM and parameterized queries.
- **XSS**: Automatic escaping in React components.

Run the full suite with:

```bash
npm run test
```

## 🌍 Localization Workflow

The platform supports full internationalization (i18n) for **English** and **Spanish**, using a hybrid approach of static dictionaries and dynamic routing.

### Structure

- **Routing**: Creating a directory structure `app/[lng]/` where `lng` can be `en` or `es`.
- **Content**:
  - **Component UI**: Uses `translations` objects directly within components for small UI text.
  - **Static Data**: Large content (courses, achievements) is split into separate files (e.g., `courses-data.ts` vs `courses-data-es.ts`).
  - **Client-Side**: Hooks like `useParams` detect the language and serve the correct content instantly.

### Adding New Content

1. **Create the component**: Build the UI structure.
2. **Define translations**: Create an internal `translations` object with `en` and `es` keys.
3. **Propagate `lng`**: Ensure the `lng` prop is passed down from the page level to all child components.
4. **Data Files**: If adding a new course, update both `lib/courses-data.ts` and `lib/courses-data-es.ts`.

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
