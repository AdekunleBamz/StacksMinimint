import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl caret encoding behavior coverage.
// Scope note: validates contract getExplorerUrl caret encoding behavior for regressions.
describe('getExplorerUrl', () => {
  it('encodes caret characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx^id")).toBe("https://explorer.hiro.so/txid/tx%5Eid?chain=mainnet")
  })
})
