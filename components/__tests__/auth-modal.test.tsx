import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { AuthModal } from '../auth/auth-modal'

// Mock de useAuth
const mockSignIn = jest.fn()
const mockSignUp = jest.fn()
const mockResetPassword = jest.fn()

jest.mock('@/contexts/auth-context', () => ({
  useAuth: () => ({
    signIn: mockSignIn,
    signUp: mockSignUp,
    resetPassword: mockResetPassword,
    isLoading: false,
  }),
}))

describe('AuthModal Component', () => {
  const onClose = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders login form by default', () => {
    render(<AuthModal isOpen={true} onClose={onClose} />)
    
    expect(screen.getByRole('heading', { name: 'Sign In' })).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Sign In' })).toBeInTheDocument()
  })

  it('switches to signup mode', () => {
    render(<AuthModal isOpen={true} onClose={onClose} />)
    
    const signupLink = screen.getByText('Sign up')
    fireEvent.click(signupLink)

    expect(screen.getByText('Create an Account')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Create Account' })).toBeInTheDocument()
  })

  it('handles login submission', async () => {
    render(<AuthModal isOpen={true} onClose={onClose} />)

    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } })
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password123' } })
    
    fireEvent.click(screen.getByRole('button', { name: 'Sign In' }))

    await waitFor(() => {
      expect(mockSignIn).toHaveBeenCalledWith('test@example.com', 'password123')
    })
  })

  it('displays error message on login failure', async () => {
    mockSignIn.mockRejectedValueOnce(new Error('Invalid credentials'))
    
    render(<AuthModal isOpen={true} onClose={onClose} />)

    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'wrong@example.com' } })
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'wrongpass' } })
    
    fireEvent.click(screen.getByRole('button', { name: 'Sign In' }))

    await waitFor(() => {
      expect(screen.getByText('Invalid credentials')).toBeInTheDocument()
    })
  })

  it('validates password length in signup', async () => {
    render(<AuthModal isOpen={true} onClose={onClose} defaultMode="signup" />)

    const passwordInput = screen.getByLabelText('Password')
    // HTML5 validation usually prevents submission, but we can verify the attribute
    expect(passwordInput).toHaveAttribute('minlength', '6')
  })
})
