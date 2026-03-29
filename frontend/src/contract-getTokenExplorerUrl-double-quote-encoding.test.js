import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl double quote encoding behavior coverage.
// Scope note: validates contract getTokenExplorerUrl double quote encoding behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('encodes double quote characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token\"id")).toBe("https://explorer.hiro.so/token/token%22id?chain=mainnet")
  })
})
