import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl close parenthesis encoding behavior coverage.
// Scope note: validates contract getTokenExplorerUrl close parenthesis encoding behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('encodes close parenthesis characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token)id")).toBe("https://explorer.hiro.so/token/token)id?chain=mainnet")
  })
})
