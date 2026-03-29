import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

// Regression note: preserve formatSTX leading zeros string behavior coverage.
describe('formatSTX', () => {
  it('normalizes numeric strings with leading zeros', () => {
    expect(formatSTX('000001000000')).toBe('1')
  })
})
