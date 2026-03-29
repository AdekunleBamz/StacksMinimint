import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl open parenthesis encoding behavior coverage.
// Scope note: validates contract getTokenExplorerUrl open parenthesis encoding behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('encodes open parenthesis characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token(id")).toBe("https://explorer.hiro.so/token/token(id?chain=mainnet")
  })
})
