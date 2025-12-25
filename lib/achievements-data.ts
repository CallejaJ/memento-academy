// Achievement definitions
export interface Achievement {
  id: string
  name: string
  description: string
  icon: string
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
  condition: (stats: UserStats) => boolean
}

export interface UserStats {
  coursesCompleted: number
  totalProgress: number
  streak: number
  sectionsCompleted: number
}

export const ACHIEVEMENTS: Record<string, Achievement> = {
  FIRST_STEPS: {
    id: 'first-steps',
    name: 'First Steps',
    description: 'Complete your first course section',
    icon: '🎓',
    rarity: 'common',
    condition: (stats) => stats.sectionsCompleted >= 1
  },
  FIRST_COURSE: {
    id: 'first-course',
    name: 'Course Graduate',
    description: 'Complete your first course',
    icon: '🏆',
    rarity: 'common',
    condition: (stats) => stats.coursesCompleted >= 1
  },
  SPEED_LEARNER: {
    id: 'speed-learner',
    name: 'Speed Learner',
    description: 'Complete a course in less than 24 hours',
    icon: '⚡',
    rarity: 'rare',
    condition: () => false // Checked separately based on timestamps
  },
  DEDICATED_STUDENT: {
    id: 'dedicated-student',
    name: 'Dedicated Student',
    description: 'Complete 5 courses',
    icon: '📚',
    rarity: 'rare',
    condition: (stats) => stats.coursesCompleted >= 5
  },
  DEFI_MASTER: {
    id: 'defi-master',
    name: 'DeFi Master',
    description: 'Complete all DeFi courses',
    icon: '💎',
    rarity: 'epic',
    condition: () => false // Checked separately based on specific courses
  },
  PERFECT_SCORE: {
    id: 'perfect-score',
    name: 'Perfect Score',
    description: 'Complete a full course with 100%',
    icon: '✨',
    rarity: 'epic',
    condition: () => false // Checked when completing a course
  },
  CRYPTO_EXPERT: {
    id: 'crypto-expert',
    name: 'Crypto Expert',
    description: 'Complete 10 courses',
    icon: '🚀',
    rarity: 'legendary',
    condition: (stats) => stats.coursesCompleted >= 10
  },
  KNOWLEDGE_SEEKER: {
    id: 'knowledge-seeker',
    name: 'Knowledge Seeker',
    description: 'Complete 50 sections across all courses',
    icon: '🧠',
    rarity: 'epic',
    condition: (stats) => stats.sectionsCompleted >= 50
  }
}

export const RARITY_COLORS = {
  common: {
    bg: 'bg-slate-500/10',
    border: 'border-slate-500/30',
    text: 'text-slate-400',
    glow: 'shadow-slate-500/50'
  },
  rare: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    text: 'text-blue-400',
    glow: 'shadow-blue-500/50'
  },
  epic: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    text: 'text-purple-400',
    glow: 'shadow-purple-500/50'
  },
  legendary: {
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
    text: 'text-yellow-400',
    glow: 'shadow-yellow-500/50'
  }
}
