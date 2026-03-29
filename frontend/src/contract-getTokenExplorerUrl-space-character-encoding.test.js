import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl space character encoding behavior coverage.
// Scope note: validates contract getTokenExplorerUrl space character encoding behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('encodes space characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token id")).toBe("https://explorer.hiro.so/token/token%20id?chain=mainnet")
  })
})
