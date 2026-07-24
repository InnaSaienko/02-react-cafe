import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import VoteOptions from './VoteOptions'

describe('VoteOptions', () => {
  const mockOnVote = vi.fn()
  const mockOnReset = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders three vote buttons and a reset button', () => {
    render(<VoteOptions onVote={mockOnVote} onReset={mockOnReset} />)

    expect(screen.getByRole('button', { name: /Good/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Neutral/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Bad/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Reset/i })).toBeInTheDocument()
  })

  it('calls onVote with correct argument when vote buttons are clicked', async () => {
    const user = userEvent.setup()
    render(<VoteOptions onVote={mockOnVote} onReset={mockOnReset} />)

    const goodButton = screen.getByRole('button', { name: /Good/i })
    const neutralButton = screen.getByRole('button', { name: /Neutral/i })
    const badButton = screen.getByRole('button', { name: /Bad/i })

    await user.click(goodButton)
    expect(mockOnVote).toHaveBeenCalledWith('good')

    await user.click(neutralButton)
    expect(mockOnVote).toHaveBeenCalledWith('neutral')

    await user.click(badButton)
    expect(mockOnVote).toHaveBeenCalledWith('bad')
  })

  it('calls onReset when reset button is clicked', async () => {
    const user = userEvent.setup()
    render(<VoteOptions onVote={mockOnVote} onReset={mockOnReset} />)

    const resetButton = screen.getByRole('button', { name: /Reset/i })
    await user.click(resetButton)

    expect(mockOnReset).toHaveBeenCalledTimes(1)
  })
})