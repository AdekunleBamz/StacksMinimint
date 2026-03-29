import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl fire emoji encoding behavior coverage.
// Scope note: validates contract getExplorerUrl fire emoji encoding behavior for regressions.
describe('getExplorerUrl', () => {
  it('encodes fire emoji characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx🔥id")).toBe("https://explorer.hiro.so/txid/tx%F0%9F%94%A5id?chain=mainnet")
  })
})
