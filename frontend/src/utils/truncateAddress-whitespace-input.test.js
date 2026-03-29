import { describe, expect, it } from 'vitest'
import { truncateAddress } from './strings'

// Regression note: preserve truncateAddress whitespace input behavior coverage.
describe('truncateAddress', () => {
  it('returns an empty string for whitespace-only addresses', () => {
    expect(truncateAddress('   ')).toBe('')
  })
})
