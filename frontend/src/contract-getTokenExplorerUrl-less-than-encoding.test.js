import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl less than encoding behavior coverage.
// Scope note: validates contract getTokenExplorerUrl less than encoding behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('encodes less-than characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token<id")).toBe("https://explorer.hiro.so/token/token%3Cid?chain=mainnet")
  })
})
