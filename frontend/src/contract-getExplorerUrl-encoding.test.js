import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

describe('getExplorerUrl', () => {
  it('encodes reserved characters in transaction identifiers', () => {
    const txId = 'abc/123?frag'
    expect(getExplorerUrl(txId)).toBe(`https://explorer.hiro.so/txid/${encodeURIComponent(txId)}?chain=mainnet`)
  })
})
