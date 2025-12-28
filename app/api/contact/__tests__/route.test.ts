/**
 * @jest-environment node
 */
import { POST } from '../route'
import { NextRequest } from 'next/server'

// Mock de Brevo
const mockSendTransacEmail = jest.fn()

jest.mock('@getbrevo/brevo', () => {
  return {
    TransactionalEmailsApi: jest.fn().mockImplementation(() => {
      return {
        setApiKey: jest.fn(),
        sendTransacEmail: mockSendTransacEmail,
      }
    }),
    TransactionalEmailsApiApiKeys: {
      apiKey: 'apiKey',
    },
    SendSmtpEmail: jest.fn(),
  }
})

describe('Contact API Route', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    process.env.BREVO_API_KEY = 'test-key'
  })

  it('rejects invalid email addresses', async () => {
    const req = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'John Doe',
        email: 'not-an-email',
        subject: 'Hello',
        message: 'This is a valid message body.'
      })
    })

    const res = await POST(req)
    const json = await res.json()

    expect(res.status).toBe(400)
    expect(json.error).toBe('Validation failed')
    expect(mockSendTransacEmail).not.toHaveBeenCalled()
  })

  it('rejects short messages', async () => {
    const req = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com',
        subject: 'Hello',
        message: 'Hi' // Too short (< 10 chars)
      })
    })

    const res = await POST(req)
    const json = await res.json()

    expect(res.status).toBe(400)
    expect(json.details[0].message).toContain('at least 10 characters')
  })

  it('sends email when input is valid', async () => {
    mockSendTransacEmail.mockResolvedValue({ body: { messageId: '123' } })

    const req = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com',
        subject: 'Test Subject',
        message: 'This is a perfectly valid message that is long enough.'
      })
    })

    const res = await POST(req)
    const json = await res.json()

    expect(res.status).toBe(200)
    expect(json.success).toBe(true)
    expect(mockSendTransacEmail).toHaveBeenCalled()
  })
})
