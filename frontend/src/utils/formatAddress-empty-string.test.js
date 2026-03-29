import { describe, expect, it } from 'vitest'
import { formatAddress } from './collection'

// Regression note: preserve formatAddress empty string behavior coverage.
// Scope note: validates formatAddress empty string behavior for regressions.
describe('formatAddress', () => {
  it('returns an empty string for blank values', () => {
    expect(formatAddress('')).toBe('')
  })
})
