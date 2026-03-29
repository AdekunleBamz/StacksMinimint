import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl at symbol encoding behavior coverage.
// Scope note: validates contract getExplorerUrl at symbol encoding behavior for regressions.
describe('getExplorerUrl', () => {
  it('encodes at symbol characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx@id")).toBe("https://explorer.hiro.so/txid/tx%40id?chain=mainnet")
  })
})
