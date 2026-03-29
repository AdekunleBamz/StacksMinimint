import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl less than encoding behavior coverage.
// Scope note: validates contract getExplorerUrl less than encoding behavior for regressions.
describe('getExplorerUrl', () => {
  it('encodes less-than characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx<id")).toBe("https://explorer.hiro.so/txid/tx%3Cid?chain=mainnet")
  })
})
