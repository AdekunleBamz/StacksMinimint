import { describe, expect, it } from 'vitest'
import { formatListingPrice } from './format'

describe('formatListingPrice', () => {
  it('formats trimmed numeric strings to fixed decimals', () => {
    expect(formatListingPrice(' 2.5 ')).toBe('2.50 STX')
  })
})
