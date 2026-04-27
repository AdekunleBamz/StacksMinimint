import { describe, expect, it } from 'vitest'
import { getMintStateDescriptor } from './MintCard'

describe('getMintStateDescriptor', () => {
  it('returns wallet-limit state and message when wallet cap is reached', () => {
    expect(getMintStateDescriptor({
      isPaused: false,
      isSoldOut: false,
      walletLimitReached: true,
      isTokenUriValid: true,
      invalidUriHelper: 'Use an ipfs:// URI'
    })).toEqual({
      state: 'wallet-limit',
      message: 'This wallet has reached the configured mint limit.'
    })
  })
})
