import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

// Regression note: preserve formatSTX string number behavior coverage.
describe('formatSTX', () => {
  it('formats numeric strings as micro-STX values', () => {
    expect(formatSTX('1000000')).toBe('1')
  })
})
