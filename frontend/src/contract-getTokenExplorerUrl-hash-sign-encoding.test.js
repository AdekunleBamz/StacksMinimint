import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl hash sign encoding behavior coverage.
// Scope note: validates contract getTokenExplorerUrl hash sign encoding behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('encodes hash sign characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token#id")).toBe("https://explorer.hiro.so/token/token%23id?chain=mainnet")
  })
})
