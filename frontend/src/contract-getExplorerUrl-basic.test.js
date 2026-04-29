import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

describe('getExplorerUrl', () => {
  it('builds a transaction explorer URL for a standard transaction id', () => {
    expect(getExplorerUrl('0xabc123')).toBe('https://explorer.hiro.so/txid/0xabc123?chain=mainnet')
  })
})
