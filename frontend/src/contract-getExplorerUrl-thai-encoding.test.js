import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

describe('getExplorerUrl', () => {
  it('encodes thai transaction identifiers safely', () => {
    const txId = 'ธุรกรรม-88'
    expect(getExplorerUrl(txId)).toBe(`https://explorer.hiro.so/txid/${encodeURIComponent(txId)}?chain=mainnet`)
  })
})
