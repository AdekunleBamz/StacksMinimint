import { describe, expect, it } from 'vitest'
import { getRecentMintTxId } from './RecentMints'

describe('getRecentMintTxId', () => {
  it('falls back to txHash when txId is blank', () => {
    expect(getRecentMintTxId({ txId: '   ', txHash: '0xhash123' })).toBe('0xhash123')
  })
})
