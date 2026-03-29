import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl tab character encoding behavior coverage.
// Scope note: validates contract getTokenExplorerUrl tab character encoding behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('encodes tab characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token\tid")).toBe("https://explorer.hiro.so/token/token%09id?chain=mainnet")
  })
})
