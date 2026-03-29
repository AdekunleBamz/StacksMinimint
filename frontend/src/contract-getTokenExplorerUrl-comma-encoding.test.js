import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl comma encoding behavior coverage.
// Scope note: validates contract getTokenExplorerUrl comma encoding behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('encodes comma characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token,id")).toBe("https://explorer.hiro.so/token/token%2Cid?chain=mainnet")
  })
})
