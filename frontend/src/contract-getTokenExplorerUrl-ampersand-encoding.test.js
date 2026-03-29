import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl ampersand encoding behavior coverage.
// Scope note: validates contract getTokenExplorerUrl ampersand encoding behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('encodes ampersand characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token&id")).toBe("https://explorer.hiro.so/token/token%26id?chain=mainnet")
  })
})
