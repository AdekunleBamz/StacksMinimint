import { describe, expect, it } from 'vitest'
import { getRecentMintTxId } from './RecentMints'

describe('getRecentMintTxId', () => {
  it('prefers txId over txHash when both are present', () => {
    expect(getRecentMintTxId({ txId: '0xpreferred', txHash: '0xfallback' })).toBe('0xpreferred')
  })
})
