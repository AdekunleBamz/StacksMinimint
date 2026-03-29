import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl right bracket encoding behavior coverage.
// Scope note: validates contract getExplorerUrl right bracket encoding behavior for regressions.
describe('getExplorerUrl', () => {
  it('encodes right bracket characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx]id")).toBe("https://explorer.hiro.so/txid/tx%5Did?chain=mainnet")
  })
})
