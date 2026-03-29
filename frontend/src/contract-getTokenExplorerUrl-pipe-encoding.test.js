import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl pipe encoding behavior coverage.
// Scope note: validates contract getTokenExplorerUrl pipe encoding behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('encodes pipe characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token|id")).toBe("https://explorer.hiro.so/token/token%7Cid?chain=mainnet")
  })
})
