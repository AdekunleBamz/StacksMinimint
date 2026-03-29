import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

// Regression note: preserve formatSTX comma number string behavior coverage.
describe('formatSTX', () => {
  it('falls back to zero for comma-formatted strings', () => {
    expect(formatSTX('1,000')).toBe('0')
  })
})
