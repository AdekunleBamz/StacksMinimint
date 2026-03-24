import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

describe('getExplorerUrl', () => {
  it('encodes pipe characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx|id")).toBe("https://explorer.hiro.so/txid/tx%7Cid?chain=mainnet")
  })
})
