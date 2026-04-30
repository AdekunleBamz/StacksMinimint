import { describe, expect, it } from 'vitest'
import { getMintStateDescriptor } from './MintCard'

describe('getMintStateDescriptor', () => {
  it('returns invalid-uri state when token URI fails validation', () => {
    expect(getMintStateDescriptor({
      isPaused: false,
      isSoldOut: false,
      walletLimitReached: false,
      isTokenUriValid: false,
      invalidUriHelper: 'Use an ipfs:// or https:// URI'
    })).toEqual({
      state: 'invalid-uri',
      message: 'Use an ipfs:// or https:// URI'
    })
  })
})
