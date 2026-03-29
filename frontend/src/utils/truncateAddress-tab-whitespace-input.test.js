import { describe, expect, it } from 'vitest'
import { truncateAddress } from './strings'

// Regression note: preserve truncateAddress tab whitespace input behavior coverage.
describe('truncateAddress', () => {
  it('returns an empty string for tab-only values after trimming', () => {
    expect(truncateAddress('\t\t')).toBe('')
  })
})
