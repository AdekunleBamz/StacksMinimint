import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl left bracket encoding behavior coverage.
// Scope note: validates contract getExplorerUrl left bracket encoding behavior for regressions.
describe('getExplorerUrl', () => {
  it('encodes left bracket characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx[id")).toBe("https://explorer.hiro.so/txid/tx%5Bid?chain=mainnet")
  })
})
