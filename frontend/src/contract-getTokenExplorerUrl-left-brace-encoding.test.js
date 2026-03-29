import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl left brace encoding behavior coverage.
// Scope note: validates contract getTokenExplorerUrl left brace encoding behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('encodes left brace characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token{id")).toBe("https://explorer.hiro.so/token/token%7Bid?chain=mainnet")
  })
})
