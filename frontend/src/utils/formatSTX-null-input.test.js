import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

// Regression note: preserve formatSTX null input behavior coverage.
describe('formatSTX', () => {
  it('returns zero when value is null', () => {
    expect(formatSTX(null)).toBe('0')
  })
})
