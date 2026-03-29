import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl percent sign encoding behavior coverage.
// Scope note: validates contract getTokenExplorerUrl percent sign encoding behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('encodes percent sign characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token%id")).toBe("https://explorer.hiro.so/token/token%25id?chain=mainnet")
  })
})
