import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl close parenthesis encoding behavior coverage.
// Scope note: validates contract getExplorerUrl close parenthesis encoding behavior for regressions.
describe('getExplorerUrl', () => {
  it('encodes close parenthesis characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx)id")).toBe("https://explorer.hiro.so/txid/tx)id?chain=mainnet")
  })
})
