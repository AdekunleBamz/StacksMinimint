import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

describe('getExplorerUrl', () => {
  it('encodes accented latin transaction identifiers safely', () => {
    const txId = 'transacción-ñ'
    expect(getExplorerUrl(txId)).toBe(`https://explorer.hiro.so/txid/${encodeURIComponent(txId)}?chain=mainnet`)
  })
})
