import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

// Regression note: preserve formatSTX nan string input behavior coverage.
describe('formatSTX', () => {
  it('returns zero when NaN is provided as a string', () => {
    expect(formatSTX('NaN')).toBe('0')
  })
})
