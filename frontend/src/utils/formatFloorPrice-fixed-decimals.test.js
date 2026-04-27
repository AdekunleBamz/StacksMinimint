import { describe, expect, it } from 'vitest'
import { formatFloorPrice } from './format'

describe('formatFloorPrice', () => {
  it('formats floor price with two decimals', () => {
    expect(formatFloorPrice(1)).toBe('Floor 1.00 STX')
  })
})
