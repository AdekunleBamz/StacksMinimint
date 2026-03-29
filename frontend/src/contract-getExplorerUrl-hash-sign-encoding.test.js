import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl hash sign encoding behavior coverage.
// Scope note: validates contract getExplorerUrl hash sign encoding behavior for regressions.
describe('getExplorerUrl', () => {
  it('encodes hash sign characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx#id")).toBe("https://explorer.hiro.so/txid/tx%23id?chain=mainnet")
  })
})
