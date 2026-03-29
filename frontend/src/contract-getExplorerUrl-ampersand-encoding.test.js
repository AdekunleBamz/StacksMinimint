import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl ampersand encoding behavior coverage.
// Scope note: validates contract getExplorerUrl ampersand encoding behavior for regressions.
describe('getExplorerUrl', () => {
  it('encodes ampersand characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx&id")).toBe("https://explorer.hiro.so/txid/tx%26id?chain=mainnet")
  })
})
