import { describe, expect, it } from 'vitest'
import { getMintSubmitLabel } from './MintCard'

describe('getMintSubmitLabel', () => {
  it('returns wallet-limit button copy when wallet mint cap is reached', () => {
    expect(getMintSubmitLabel({
      isMinting: false,
      isSoldOut: false,
      walletLimitReached: true,
      mintFee: 1000
    })).toBe('Wallet Limit Reached')
  })
})
