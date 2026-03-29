import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl colon encoding behavior coverage.
// Scope note: validates contract getTokenExplorerUrl colon encoding behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('encodes colon characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token:id")).toBe("https://explorer.hiro.so/token/token%3Aid?chain=mainnet")
  })
})
