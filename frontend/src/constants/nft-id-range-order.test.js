import { describe, expect, it } from 'vitest'
import { NFT_ID_MIN, NFT_ID_MAX, MAX_SUPPLY } from './index.js'

describe('constants NFT id boundaries', () => {
  it('keeps NFT id range aligned with configured max supply', () => {
    expect(NFT_ID_MIN).toBe(1)
    expect(NFT_ID_MAX).toBe(MAX_SUPPLY)
    expect(NFT_ID_MAX).toBeGreaterThanOrEqual(NFT_ID_MIN)
  })
})
