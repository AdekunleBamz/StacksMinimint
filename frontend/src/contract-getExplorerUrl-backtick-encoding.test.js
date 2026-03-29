import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl backtick encoding behavior coverage.
// Scope note: validates contract getExplorerUrl backtick encoding behavior for regressions.
describe('getExplorerUrl', () => {
  it('encodes backtick characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx`id")).toBe("https://explorer.hiro.so/txid/tx%60id?chain=mainnet")
  })
})
