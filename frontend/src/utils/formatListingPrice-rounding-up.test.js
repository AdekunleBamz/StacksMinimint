import { describe, expect, it } from 'vitest'
import { formatListingPrice } from './format'

describe('formatListingPrice', () => {
  it('rounds listing prices to two decimal places', () => {
    expect(formatListingPrice(1.239)).toBe('1.24 STX')
  })
})
