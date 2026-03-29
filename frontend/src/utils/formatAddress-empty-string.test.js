import { describe, expect, it } from 'vitest'
import { formatAddress } from './collection'

// Regression note: preserve formatAddress empty string behavior coverage.
describe('formatAddress', () => {
  it('returns an empty string for blank values', () => {
    expect(formatAddress('')).toBe('')
  })
})
