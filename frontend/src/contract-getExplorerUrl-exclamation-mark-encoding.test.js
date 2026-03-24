import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

describe('getExplorerUrl', () => {
  it('encodes exclamation mark characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx!id")).toBe("https://explorer.hiro.so/txid/tx!id?chain=mainnet")
  })
})
