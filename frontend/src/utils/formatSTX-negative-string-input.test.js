import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

// Regression note: preserve formatSTX negative string input behavior coverage.
describe('formatSTX', () => {
  it('formats negative numeric strings', () => {
    expect(formatSTX('-500000')).toBe('-0.5')
  })
})
