import { describe, expect, it } from 'vitest'
import { getRecentMintTokenDescriptor } from './RecentMints'

describe('getRecentMintTokenDescriptor', () => {
  it('returns minted copy for concrete token ids', () => {
    expect(getRecentMintTokenDescriptor(42)).toEqual({
      tokenLabel: '#42',
      receiptLabel: 'Minted ↗',
      explorerLabel: 'View transaction for token #42 on Explorer',
      isPendingToken: false
    })
  })
})
