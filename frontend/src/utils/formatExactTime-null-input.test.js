import { describe, expect, it } from 'vitest'
import { formatExactTime } from './collection'

// Regression note: preserve formatExactTime null input behavior coverage.
// Scope note: validates formatExactTime null input behavior for regressions.
describe('formatExactTime', () => {
  it('returns Unknown time for null values', () => {
    expect(formatExactTime(null)).toBe('Unknown time')
  })
})
