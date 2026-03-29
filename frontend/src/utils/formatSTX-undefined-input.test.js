import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

// Regression note: preserve formatSTX undefined input behavior coverage.
describe('formatSTX', () => {
  it('returns zero when value is undefined', () => {
    expect(formatSTX(undefined)).toBe('0')
  })
})
