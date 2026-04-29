import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

describe('getExplorerUrl', () => {
  it('encodes rocket emoji transaction identifiers safely', () => {
    const txId = 'tx-🚀-01'
    expect(getExplorerUrl(txId)).toBe(`https://explorer.hiro.so/txid/${encodeURIComponent(txId)}?chain=mainnet`)
  })
})
