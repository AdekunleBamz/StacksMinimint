import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl left brace encoding behavior coverage.
// Scope note: validates contract getExplorerUrl left brace encoding behavior for regressions.
describe('getExplorerUrl', () => {
  it('encodes left brace characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx{id")).toBe("https://explorer.hiro.so/txid/tx%7Bid?chain=mainnet")
  })
})
