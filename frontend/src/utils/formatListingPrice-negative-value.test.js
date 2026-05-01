import { describe, expect, it } from 'vitest'
import { formatListingPrice } from './format'

describe('formatListingPrice', () => {
  it('formats negative listing prices with fixed decimals', () => {
    expect(formatListingPrice(-2)).toBe('-2.00 STX')
  })
})
