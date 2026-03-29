import { describe, expect, it } from 'vitest'
import { formatExactTime } from './collection'

// Regression note: preserve formatExactTime invalid number behavior coverage.
// Scope note: validates formatExactTime invalid number behavior for regressions.
describe('formatExactTime', () => {
  it('returns Unknown time for NaN values', () => {
    expect(formatExactTime(Number.NaN)).toBe('Unknown time')
  })
})
