import { describe, expect, it } from 'vitest'
import { getMintSubmitLabel } from './MintCard'

describe('getMintSubmitLabel', () => {
  it('prioritizes sold-out copy when sold-out and wallet-limit are both true', () => {
    expect(getMintSubmitLabel({
      isMinting: false,
      isSoldOut: true,
      walletLimitReached: true,
      mintFee: 1000
    })).toBe('Sold Out')
  })
})
