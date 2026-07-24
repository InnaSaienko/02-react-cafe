import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  it('renders cafe info, vote options, and vote stats', () => {
    render(<App />)

    expect(screen.getByText(/Sip Happens Café/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Good/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Neutral/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Bad/i })).toBeInTheDocument()
    expect(screen.getByText((content) => content.startsWith('Total:'))).toHaveTextContent('0')
  })

  it('updates vote counts when buttons are clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    const goodButton = screen.getByRole('button', { name: /Good/i })
    const neutralButton = screen.getByRole('button', { name: /Neutral/i })
    const badButton = screen.getByRole('button', { name: /Bad/i })

    await user.click(goodButton)
    await user.click(goodButton)
    await user.click(neutralButton)
    await user.click(badButton)

    expect(screen.getByText((content) => content.startsWith('Total:'))).toHaveTextContent('4')
    expect(screen.getByText((content) => content.startsWith('Good:'))).toHaveTextContent('2')
    expect(screen.getByText((content) => content.startsWith('Neutral:'))).toHaveTextContent('1')
    expect(screen.getByText((content) => content.startsWith('Bad:'))).toHaveTextContent('1')
    expect(screen.getByText((content) => content.startsWith('Positive:'))).toHaveTextContent('50%')
  })

  it('resets vote counts when reset button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    const goodButton = screen.getByRole('button', { name: /Good/i })
    const resetButton = screen.getByRole('button', { name: /Reset/i })

    await user.click(goodButton)
    await user.click(goodButton)
    expect(screen.getByText((content) => content.startsWith('Total:'))).toHaveTextContent('2')

    await user.click(resetButton)
    expect(screen.getByText((content) => content.startsWith('Total:'))).toHaveTextContent('0')
    expect(screen.getByText((content) => content.startsWith('Good:'))).toHaveTextContent('0')
    expect(screen.getByText((content) => content.startsWith('Neutral:'))).toHaveTextContent('0')
    expect(screen.getByText((content) => content.startsWith('Bad:'))).toHaveTextContent('0')
  })
})