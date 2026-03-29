import { describe, expect, it } from 'vitest'
import { formatExactTime } from './collection'

// Regression note: preserve formatExactTime undefined input behavior coverage.
// Scope note: validates formatExactTime undefined input behavior for regressions.
describe('formatExactTime', () => {
  it('returns Unknown time for undefined values', () => {
    expect(formatExactTime(undefined)).toBe('Unknown time')
  })
})
