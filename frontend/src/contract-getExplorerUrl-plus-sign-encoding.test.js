import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl plus sign encoding behavior coverage.
// Scope note: validates contract getExplorerUrl plus sign encoding behavior for regressions.
describe('getExplorerUrl', () => {
  it('encodes plus sign characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx+id")).toBe("https://explorer.hiro.so/txid/tx%2Bid?chain=mainnet")
  })
})
