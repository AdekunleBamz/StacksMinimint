import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl right brace encoding behavior coverage.
// Scope note: validates contract getExplorerUrl right brace encoding behavior for regressions.
describe('getExplorerUrl', () => {
  it('encodes right brace characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx}id")).toBe("https://explorer.hiro.so/txid/tx%7Did?chain=mainnet")
  })
})
