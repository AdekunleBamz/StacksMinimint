import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl percent sign encoding behavior coverage.
// Scope note: validates contract getExplorerUrl percent sign encoding behavior for regressions.
describe('getExplorerUrl', () => {
  it('encodes percent sign characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx%id")).toBe("https://explorer.hiro.so/txid/tx%25id?chain=mainnet")
  })
})
