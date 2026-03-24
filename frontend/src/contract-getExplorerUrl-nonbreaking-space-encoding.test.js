import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

describe('getExplorerUrl', () => {
  it('encodes nonbreaking space characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx id")).toBe("https://explorer.hiro.so/txid/tx%C2%A0id?chain=mainnet")
  })
})
