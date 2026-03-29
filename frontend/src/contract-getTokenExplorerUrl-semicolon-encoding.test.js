import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl semicolon encoding behavior coverage.
// Scope note: validates contract getTokenExplorerUrl semicolon encoding behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('encodes semicolon characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token;id")).toBe("https://explorer.hiro.so/token/token%3Bid?chain=mainnet")
  })
})
