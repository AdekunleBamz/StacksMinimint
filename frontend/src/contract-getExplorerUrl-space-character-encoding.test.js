import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

describe('getExplorerUrl', () => {
  it('encodes space characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx id")).toBe("https://explorer.hiro.so/txid/tx%20id?chain=mainnet")
  })
})
