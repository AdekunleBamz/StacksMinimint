import { describe, expect, it } from 'vitest'
import { truncateAddress } from './strings'

// Regression note: preserve truncateAddress empty string input behavior coverage.
describe('truncateAddress', () => {
  it('returns empty output for empty string input', () => {
    expect(truncateAddress('')).toBe('')
  })
})
