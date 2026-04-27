import { describe, expect, it } from 'vitest'
import ErrorBoundary from './ErrorBoundary'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates errorBoundary derives state from error behavior for regressions.
describe('ErrorBoundary', () => {
  it('derives fallback state from runtime errors', () => {
    const nextState = ErrorBoundary.getDerivedStateFromError(new Error('Boom'))
    expect(nextState.hasError).toBe(true)
    expect(nextState.error).toBeInstanceOf(Error)
    expect(typeof nextState.errorMessage).toBe('string')
  })
})
