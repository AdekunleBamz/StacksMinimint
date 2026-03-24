import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

describe('getExplorerUrl', () => {
  it('encodes carriage return characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx\rid")).toBe("https://explorer.hiro.so/txid/tx%0Did?chain=mainnet")
  })
})
