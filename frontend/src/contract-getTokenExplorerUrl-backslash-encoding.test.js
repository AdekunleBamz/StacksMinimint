import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl backslash encoding behavior coverage.
// Scope note: validates contract getTokenExplorerUrl backslash encoding behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('encodes backslash characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token\\id")).toBe("https://explorer.hiro.so/token/token%5Cid?chain=mainnet")
  })
})
