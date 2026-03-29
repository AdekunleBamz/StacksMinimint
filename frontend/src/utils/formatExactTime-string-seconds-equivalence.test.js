import { describe, expect, it } from 'vitest'
import { formatExactTime } from './collection'

// Regression note: preserve formatExactTime string seconds equivalence behavior coverage.
// Scope note: validates formatExactTime string seconds equivalence behavior for regressions.
describe('formatExactTime', () => {
  it('formats second strings and second numbers equivalently', () => {
    expect(formatExactTime('1710000000')).toBe(formatExactTime(1710000000))
  })
})
