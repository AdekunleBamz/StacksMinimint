import { describe, expect, it } from 'vitest'
import ErrorBoundary from './ErrorBoundary'

describe('ErrorBoundary', () => {
  it('derives fallback state from runtime errors', () => {
    const nextState = ErrorBoundary.getDerivedStateFromError(new Error('Boom'))
    expect(nextState.hasError).toBe(true)
    expect(nextState.error).toBeInstanceOf(Error)
  })
})
