import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

// Regression note: preserve formatSTX infinity string behavior coverage.
// Scope note: validates formatSTX infinity string behavior for regressions.
describe('formatSTX', () => {
  it('returns zero for Infinity provided as a string', () => {
    expect(formatSTX('Infinity')).toBe('0')
  })
})
