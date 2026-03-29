import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl caret encoding behavior coverage.
// Scope note: validates contract getTokenExplorerUrl caret encoding behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('encodes caret characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token^id")).toBe("https://explorer.hiro.so/token/token%5Eid?chain=mainnet")
  })
})
