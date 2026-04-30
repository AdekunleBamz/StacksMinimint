import { describe, expect, it } from 'vitest'
import { getRecentMintKey } from './RecentMints'

describe('getRecentMintKey', () => {
  it('falls back to token-and-time composite when tx id is missing', () => {
    expect(getRecentMintKey({ txId: '', tokenId: 9, timestamp: 1710000000 })).toBe('9-1710000000')
  })
})
