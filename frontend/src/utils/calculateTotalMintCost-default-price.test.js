import { describe, expect, it } from 'vitest'
import { calculateTotalMintCost } from './format'

describe('calculateTotalMintCost', () => {
  it('uses the default NFT price when price is omitted', () => {
    expect(calculateTotalMintCost(2)).toBe('20 STX')
  })
})
