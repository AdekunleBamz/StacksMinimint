import { describe, expect, it } from 'vitest'
import { formatExactTime } from './collection'

// Regression note: preserve formatExactTime null input behavior coverage.
describe('formatExactTime', () => {
  it('returns Unknown time for null values', () => {
    expect(formatExactTime(null)).toBe('Unknown time')
  })
})
