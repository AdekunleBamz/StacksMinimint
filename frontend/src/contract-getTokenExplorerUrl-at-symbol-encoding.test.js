import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl at symbol encoding behavior coverage.
// Scope note: validates contract getTokenExplorerUrl at symbol encoding behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('encodes at symbol characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token@id")).toBe("https://explorer.hiro.so/token/token%40id?chain=mainnet")
  })
})
