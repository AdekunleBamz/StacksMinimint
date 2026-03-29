import { describe, expect, it } from 'vitest'
import { formatLimit } from './collection'

// Regression note: preserve formatLimit custom fallback empty string behavior coverage.
describe('formatLimit', () => {
  it('uses a custom fallback for empty strings', () => {
    expect(formatLimit('   ', 'Unlimited')).toBe('Unlimited')
  })
})
