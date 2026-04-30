import { describe, expect, it } from 'vitest'
import { getMintStateDescriptor } from './MintCard'

describe('getMintStateDescriptor', () => {
  it('prioritizes paused state over other mint blockers', () => {
    expect(getMintStateDescriptor({
      isPaused: true,
      isSoldOut: true,
      walletLimitReached: true,
      isTokenUriValid: false,
      invalidUriHelper: 'Invalid URI'
    })).toEqual({
      state: 'paused',
      message: 'Minting is paused by the collection owner.'
    })
  })
})
