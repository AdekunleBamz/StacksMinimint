import { describe, expect, it } from 'vitest'
import { getMintStateDescriptor } from './MintCard'

describe('getMintStateDescriptor', () => {
  it('returns ready state when no blockers are active', () => {
    expect(getMintStateDescriptor({
      isPaused: false,
      isSoldOut: false,
      walletLimitReached: false,
      isTokenUriValid: true,
      invalidUriHelper: 'unused'
    })).toEqual({
      state: 'ready',
      message: 'Ready to mint.'
    })
  })
})
