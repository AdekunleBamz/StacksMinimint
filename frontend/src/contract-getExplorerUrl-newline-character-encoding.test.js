import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

describe('getExplorerUrl', () => {
  it('encodes newline characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx\nid")).toBe("https://explorer.hiro.so/txid/tx%0Aid?chain=mainnet")
  })
})
