import { describe, expect, it } from 'vitest'
import { formatFloorPrice } from './format'

describe('formatFloorPrice', () => {
  it('formats numeric strings as fixed-decimal floor price output', () => {
    expect(formatFloorPrice('2.5')).toBe('Floor 2.50 STX')
  })
})
