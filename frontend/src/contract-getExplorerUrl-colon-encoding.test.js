import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl colon encoding behavior coverage.
// Scope note: validates contract getExplorerUrl colon encoding behavior for regressions.
describe('getExplorerUrl', () => {
  it('encodes colon characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx:id")).toBe("https://explorer.hiro.so/txid/tx%3Aid?chain=mainnet")
  })
})
