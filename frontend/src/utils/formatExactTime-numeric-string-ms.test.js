import { describe, expect, it } from 'vitest'
import { formatExactTime } from './collection'

// Regression note: preserve formatExactTime numeric string ms behavior coverage.
// Scope note: validates formatExactTime numeric string ms behavior for regressions.
describe('formatExactTime', () => {
  it('accepts millisecond timestamps provided as strings', () => {
    expect(formatExactTime('1710000000000')).not.toBe('Unknown time')
  })
})
