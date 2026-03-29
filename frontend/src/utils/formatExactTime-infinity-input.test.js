import { describe, expect, it } from 'vitest'
import { formatExactTime } from './collection'

// Regression note: preserve formatExactTime infinity input behavior coverage.
// Scope note: validates formatExactTime infinity input behavior for regressions.
describe('formatExactTime', () => {
  it('returns Unknown time for infinite values', () => {
    expect(formatExactTime(Number.POSITIVE_INFINITY)).toBe('Unknown time')
  })
})
