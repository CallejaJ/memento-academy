import { sendPasswordResetEmail } from '../auth'

// Mock Supabase Admin
const mockGenerateLink = jest.fn()
jest.mock('@/lib/supabase-admin', () => ({
  supabaseAdmin: {
    auth: {
      admin: {
        generateLink: (...args: any[]) => mockGenerateLink(...args),
      },
    },
  },
}))

// Mock Resend
const mockSendEmail = jest.fn()
jest.mock('resend', () => {
  return {
    Resend: jest.fn().mockImplementation(() => ({
      emails: {
        send: mockSendEmail
      }
    }))
  }
})

describe('Auth Action: Password Reset (Resend + Custom HTML)', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    process.env.RESEND_API_KEY = 're_123456789'
    process.env.VERCEL_URL = 'localhost:3000'
  })

  it('validates email format', async () => {
    const result = await sendPasswordResetEmail('invalid-email')
    expect(result.success).toBe(false)
    expect(result.message).toContain('valid email')
  })

  it('generates link and sends email with custom template', async () => {
    // Mock successful link generation
    mockGenerateLink.mockResolvedValue({
      data: {
        properties: { action_link: 'http://link-de-recuperacion' },
        user: { id: 'user-123' }
      },
      error: null
    })

    // Mock successful email sending
    mockSendEmail.mockResolvedValue({
      data: { id: 'email-id-123' },
      error: null
    })

    const result = await sendPasswordResetEmail('test@example.com')

    // Verify correct redirection URL in Supabase call
    expect(mockGenerateLink).toHaveBeenCalledWith(expect.objectContaining({
      options: {
        redirectTo: 'https://localhost:3000/auth/reset-password'
      }
    }))

    // Verify Resend was called with custom template elements
    expect(mockSendEmail).toHaveBeenCalledWith(expect.objectContaining({
      to: ['test@example.com'],
      from: expect.stringContaining('Memento Academy'),
      html: expect.stringContaining('http://link-de-recuperacion') // ensure link is injected
    }))

    expect(result.success).toBe(true)
  })
})
