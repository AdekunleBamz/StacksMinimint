import { describe, expect, it } from 'vitest'
import { getMintSubmitLabel } from './MintCard'

describe('getMintSubmitLabel', () => {
  it('returns sold-out copy when supply is exhausted', () => {
    expect(getMintSubmitLabel({
      isMinting: false,
      isSoldOut: true,
      walletLimitReached: false,
      mintFee: 1000
    })).toBe('Sold Out')
  })
})
