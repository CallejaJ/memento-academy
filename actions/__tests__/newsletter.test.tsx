import { subscribeToNewsletter } from '../newsletter'

// Mock de Prisma

// Mock de Brevo/TransactionalEmailsApi
// Importamos solo para tipos si fuera necesario, pero aquí mockeamos todo el módulo

jest.mock('@/lib/prisma', () => ({
  __esModule: true,
  default: {
    newsletter_subscribers: {
      findUnique: jest.fn(),
      create: jest.fn(),
    },
  },
}))

jest.mock('@getbrevo/brevo', () => {
  return {
    TransactionalEmailsApi: jest.fn().mockImplementation(() => {
      return {
        setApiKey: jest.fn(),
        sendTransacEmail: jest.fn(),
      }
    }),
    TransactionalEmailsApiApiKeys: {
      apiKey: 'apiKey',
    },
    SendSmtpEmail: jest.fn(),
  }
})

import prisma from '@/lib/prisma'
import { TransactionalEmailsApi } from '@getbrevo/brevo'

describe('Newsletter Action (Server-Side)', () => {
  const mockFindUnique = prisma.newsletter_subscribers.findUnique as jest.Mock
  const mockCreate = prisma.newsletter_subscribers.create as jest.Mock
  
  // Brevo Mock setup
  // @ts-ignore
  const mockSendTransacEmail = new TransactionalEmailsApi().sendTransacEmail as jest.Mock

  beforeEach(() => {
    jest.clearAllMocks()
    process.env.BREVO_API_KEY = 'test-key'
    process.env.VERCEL_URL = 'localhost:3000'
  })

  it('connects to Prisma to check duplicates', async () => {
    // Simulamos que el email ya existe
    mockFindUnique.mockResolvedValue({ id: '123', email: 'test@example.com' })

    const formData = new FormData()
    formData.append('email', 'test@example.com')

    const result = await subscribeToNewsletter(formData)

    expect(mockFindUnique).toHaveBeenCalledWith({
      where: { email: 'test@example.com' },
    })
    expect(result.success).toBe(false)
    expect(result.message).toContain('already subscribed')
  })

  it('creates a new subscriber in Prisma if not exists', async () => {
    // Simulamos que NO existe
    mockFindUnique.mockResolvedValue(null)
    mockCreate.mockResolvedValue({ id: '456', email: 'new@example.com' })
    mockSendTransacEmail.mockResolvedValue({ messageId: 'msg-123' })

    const formData = new FormData()
    formData.append('email', 'new@example.com')
    formData.append('fullName', 'John Doe')

    const result = await subscribeToNewsletter(formData)

    expect(mockCreate).toHaveBeenCalledWith(expect.objectContaining({
      data: expect.objectContaining({
        email: 'new@example.com',
        full_name: 'John Doe'
      })
    }))
    expect(result.success).toBe(true)
  })

  it('handles database connection errors gracefully', async () => {
    mockFindUnique.mockRejectedValue(new Error('Database connection failed'))

    const formData = new FormData()
    formData.append('email', 'error@example.com')

    const result = await subscribeToNewsletter(formData)

    expect(result.success).toBe(false)
    expect(result.message).toContain('Database connection failed')
  })
  
  it('validates email format before hitting DB', async () => {
    const formData = new FormData()
    formData.append('email', 'not-an-email') // Input inválido
    
    // Ejecutamos la acción
    const result = await subscribeToNewsletter(formData)
    
    // Ahora esperamos que falle y nos diga por qué
    expect(result.success).toBe(false)
    expect(result.message).toContain('valid email')
    
    // Y lo más importante: ¡NO debe tocar la base de datos!
    expect(mockFindUnique).not.toHaveBeenCalled()
  })
})
