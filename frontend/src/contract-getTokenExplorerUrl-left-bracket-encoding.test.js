import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl left bracket encoding behavior coverage.
// Scope note: validates contract getTokenExplorerUrl left bracket encoding behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('encodes left bracket characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token[id")).toBe("https://explorer.hiro.so/token/token%5Bid?chain=mainnet")
  })
})
