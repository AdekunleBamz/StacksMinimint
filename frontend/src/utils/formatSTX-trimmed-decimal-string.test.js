import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

// Regression note: preserve formatSTX trimmed decimal string behavior coverage.
describe('formatSTX', () => {
  it('trims decimal strings before formatting', () => {
    expect(formatSTX(' 2500000.5 ')).toBe('2.500001')
  })
})
