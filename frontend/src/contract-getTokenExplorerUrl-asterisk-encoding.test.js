import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl asterisk encoding behavior coverage.
// Scope note: validates contract getTokenExplorerUrl asterisk encoding behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('encodes asterisk characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token*id")).toBe("https://explorer.hiro.so/token/token*id?chain=mainnet")
  })
})
