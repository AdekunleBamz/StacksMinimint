import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl question mark encoding behavior coverage.
// Scope note: validates contract getExplorerUrl question mark encoding behavior for regressions.
describe('getExplorerUrl', () => {
  it('encodes question mark characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx?id")).toBe("https://explorer.hiro.so/txid/tx%3Fid?chain=mainnet")
  })
})
