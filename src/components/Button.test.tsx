import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Button from './Button'

test('renders app', () => {
  render(<Button />)
  expect(screen.getByText(/Click me/i)).toBeInTheDocument()
})