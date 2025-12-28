# Guía de Configuración de Testing (Jest + React Testing Library)

Sigue estos pasos para configurar el entorno de testing en tu proyecto Next.js.

## 1. Instalar Dependencias

Ejecuta el siguiente comando en tu terminal para instalar Jest y las librerías de testing necesarias:

```bash
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom ts-node
```

## 2. Crear Archivo de Configuración de Jest

Crea un archivo llamado `jest.config.ts` en la raíz de tu proyecto (al mismo nivel que `package.json`) con el siguiente contenido:

```typescript
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
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/app/(.*)$': '<rootDir>/app/$1',
    '^@/lib/(.*)$': '<rootDir>/lib/$1',
  },
}

// createJestConfig se exporta de esta manera para asegurar que next/jest pueda cargar la configuración de Next.js
export default createJestConfig(config)
```

## 3. Crear Archivo de Setup

Crea un archivo llamado `jest.setup.ts` en la raíz del proyecto para importar los matchers de `jest-dom` (como `toBeInTheDocument`):

```typescript
import '@testing-library/jest-dom'
```

## 4. Agregar Script a package.json

Abre tu archivo `package.json` y agrega el siguiente script en la sección `"scripts"`:

```json
"scripts": {
  // ... otros scripts
  "test": "jest",
  "test:watch": "jest --watch"
}
```

## 5. Crear tu Primer Test

Para verificar que todo funciona, crea una carpeta `__tests__` en la raíz o crea un archivo de prueba junto a un componente.
Por ejemplo, crea `components/__tests__/example.test.tsx`:

```tsx
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Example Test', () => {
  it('renders a heading', () => {
    render(<h1>Hola Mundo</h1>)
    
    const heading = screen.getByRole('heading', { level: 1 })
    
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Hola Mundo')
  })
})
```

## 6. Ejecutar los Tests

Finalmente, corre el comando:

```bash
npm run test
```

¡Si todo está bien, deberías ver que el test pasa en verde! ✅
