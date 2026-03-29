import { describe, expect, it } from 'vitest'
import { formatLimit } from './collection'

// Regression note: preserve formatLimit custom fallback empty string behavior coverage.
// Scope note: validates formatLimit custom fallback empty string behavior for regressions.
describe('formatLimit', () => {
  it('uses a custom fallback for empty strings', () => {
    expect(formatLimit('   ', 'Unlimited')).toBe('Unlimited')
  })
})
