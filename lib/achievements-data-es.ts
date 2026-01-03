import { Achievement } from "./achievements-data";

export const ACHIEVEMENTS_ES: Record<string, Achievement> = {
  FIRST_STEPS: {
    id: 'first-steps',
    name: 'Primeros Pasos',
    description: 'Completa tu primera sección del curso',
    icon: '🎓',
    rarity: 'common',
    condition: (stats) => stats.sectionsCompleted >= 1
  },
  FIRST_COURSE: {
    id: 'first-course',
    name: 'Graduado del Curso',
    description: 'Completa tu primer curso',
    icon: '🏆',
    rarity: 'common',
    condition: (stats) => stats.coursesCompleted >= 1
  },
  SPEED_LEARNER: {
    id: 'speed-learner',
    name: 'Aprendiz Veloz',
    description: 'Completa un curso en menos de 24 horas',
    icon: '⚡',
    rarity: 'rare',
    condition: () => false // Checked separately based on timestamps
  },
  DEDICATED_STUDENT: {
    id: 'dedicated-student',
    name: 'Estudiante Dedicado',
    description: 'Completa 5 cursos',
    icon: '📚',
    rarity: 'rare',
    condition: (stats) => stats.coursesCompleted >= 5
  },
  DEFI_MASTER: {
    id: 'defi-master',
    name: 'Maestro DeFi',
    description: 'Completa todos los cursos DeFi',
    icon: '💎',
    rarity: 'epic',
    condition: () => false // Checked separately based on specific courses
  },
  PERFECT_SCORE: {
    id: 'perfect-score',
    name: 'Puntuación Perfecta',
    description: 'Completa un curso con 100%',
    icon: '✨',
    rarity: 'epic',
    condition: () => false // Checked when completing a course
  },
  CRYPTO_EXPERT: {
    id: 'crypto-expert',
    name: 'Experto en Cripto',
    description: 'Completa 10 cursos',
    icon: '🚀',
    rarity: 'legendary',
    condition: (stats) => stats.coursesCompleted >= 10
  },
  KNOWLEDGE_SEEKER: {
    id: 'knowledge-seeker',
    name: 'Buscador de Conocimiento',
    description: 'Completa 50 secciones entre todos los cursos',
    icon: '🧠',
    rarity: 'epic',
    condition: (stats) => stats.sectionsCompleted >= 50
  }
}
