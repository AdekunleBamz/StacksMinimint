import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

describe('getExplorerUrl', () => {
  it('encodes zero-width-joiner emoji sequences safely', () => {
    const txId = 'tx-👨‍👩‍👧‍👦'
    expect(getExplorerUrl(txId)).toBe(`https://explorer.hiro.so/txid/${encodeURIComponent(txId)}?chain=mainnet`)
  })
})
