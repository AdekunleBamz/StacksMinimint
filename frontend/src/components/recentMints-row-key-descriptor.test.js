import { describe, expect, it } from 'vitest'
import { getRecentMintKey } from './RecentMints'

describe('getRecentMintKey', () => {
  it('uses tx id as primary list key when available', () => {
    expect(getRecentMintKey({ txId: '0xabc', tokenId: 7, timestamp: 1710000000 })).toBe('0xabc')
  })
})
