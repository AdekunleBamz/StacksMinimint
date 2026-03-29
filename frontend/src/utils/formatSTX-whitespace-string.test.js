import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

// Regression note: preserve formatSTX whitespace string behavior coverage.
describe('formatSTX', () => {
  it('parses numeric strings with surrounding whitespace', () => {
    expect(formatSTX('   2000000   ')).toBe('2')
  })
})
