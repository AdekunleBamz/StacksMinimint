import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl double quote encoding behavior coverage.
// Scope note: validates contract getExplorerUrl double quote encoding behavior for regressions.
describe('getExplorerUrl', () => {
  it('encodes double quote characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx\"id")).toBe("https://explorer.hiro.so/txid/tx%22id?chain=mainnet")
  })
})
