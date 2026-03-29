import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl backslash encoding behavior coverage.
describe('getExplorerUrl', () => {
  it('encodes backslash characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx\\id")).toBe("https://explorer.hiro.so/txid/tx%5Cid?chain=mainnet")
  })
})
