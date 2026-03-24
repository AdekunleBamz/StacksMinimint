import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

describe('getExplorerUrl', () => {
  it('encodes hash sign characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx#id")).toBe("https://explorer.hiro.so/txid/tx%23id?chain=mainnet")
  })
})
