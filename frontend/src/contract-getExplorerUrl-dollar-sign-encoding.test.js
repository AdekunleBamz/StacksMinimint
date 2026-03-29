import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl dollar sign encoding behavior coverage.
// Scope note: validates contract getExplorerUrl dollar sign encoding behavior for regressions.
describe('getExplorerUrl', () => {
  it('encodes dollar sign characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx$id")).toBe("https://explorer.hiro.so/txid/tx%24id?chain=mainnet")
  })
})
