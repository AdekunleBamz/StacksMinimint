import { describe, expect, it } from 'vitest'
import { formatNFTName } from './format'

describe('formatNFTName', () => {
  it('supports string token ids in NFT title formatting', () => {
    expect(formatNFTName('MiniMint', '007')).toBe('MiniMint #007')
  })
})
