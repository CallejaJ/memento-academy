import type { Config } from 'jest'
import nextJest from 'next/jest'

const createJestConfig = nextJest({
  // Proporciona la ruta a tu aplicación Next.js para cargar next.config.js y archivos .env
  dir: './',
})

// Configuración personalizada de Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Agrega más configuraciones aquí antes de iniciar Jest
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    // Manejo de alias de rutas (ajusta si usas otros alias en tsconfig.json)
    '^@/(.*)$': '<rootDir>/$1',
  },
}

// createJestConfig se exporta de esta manera para asegurar que next/jest pueda cargar la configuración de Next.js
export default createJestConfig(config)