import { describe, expect, it } from 'vitest'
import { formatFloorPrice } from './format'

describe('formatFloorPrice', () => {
  it('falls back to zero when the value is not numeric', () => {
    expect(formatFloorPrice('invalid')).toBe('Floor 0.00 STX')
  })
})
