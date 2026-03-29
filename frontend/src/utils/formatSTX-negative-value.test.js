import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

// Regression note: preserve formatSTX negative value behavior coverage.
describe('formatSTX', () => {
  it('preserves sign when formatting negative values', () => {
    expect(formatSTX(-1000000)).toBe('-1')
  })
})
