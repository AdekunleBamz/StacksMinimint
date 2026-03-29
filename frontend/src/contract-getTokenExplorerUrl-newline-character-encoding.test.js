import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl newline character encoding behavior coverage.
// Scope note: validates contract getTokenExplorerUrl newline character encoding behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('encodes newline characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token\nid")).toBe("https://explorer.hiro.so/token/token%0Aid?chain=mainnet")
  })
})
