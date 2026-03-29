import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

// Regression note: preserve formatSTX exponent string input behavior coverage.
// Scope note: validates formatSTX exponent string input behavior for regressions.
describe('formatSTX', () => {
  it('accepts exponent notation in string input', () => {
    expect(formatSTX('1e6')).toBe('1')
  })
})
