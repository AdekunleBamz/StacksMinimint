import { describe, expect, it } from 'vitest'
import { getMintSubmitLabel } from './MintCard'

describe('getMintSubmitLabel', () => {
  it('returns minting copy while transaction submission is active', () => {
    expect(getMintSubmitLabel({
      isMinting: true,
      isSoldOut: false,
      walletLimitReached: false,
      mintFee: 1000
    })).toBe('Minting...')
  })
})
