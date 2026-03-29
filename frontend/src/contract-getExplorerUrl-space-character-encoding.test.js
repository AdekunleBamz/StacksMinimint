import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl space character encoding behavior coverage.
// Scope note: validates contract getExplorerUrl space character encoding behavior for regressions.
describe('getExplorerUrl', () => {
  it('encodes space characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx id")).toBe("https://explorer.hiro.so/txid/tx%20id?chain=mainnet")
  })
})
