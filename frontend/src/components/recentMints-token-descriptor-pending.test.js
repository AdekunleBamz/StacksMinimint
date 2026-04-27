import { describe, expect, it } from 'vitest'
import { getRecentMintTokenDescriptor } from './RecentMints'

describe('getRecentMintTokenDescriptor', () => {
  it('uses pending copy for blank token ids', () => {
    expect(getRecentMintTokenDescriptor('   ')).toEqual({
      tokenLabel: 'Pending',
      receiptLabel: 'Submitted ↗',
      explorerLabel: 'View submitted transaction on Explorer',
      isPendingToken: true
    })
  })
})
