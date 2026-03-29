import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl right brace encoding behavior coverage.
// Scope note: validates contract getTokenExplorerUrl right brace encoding behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('encodes right brace characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token}id")).toBe("https://explorer.hiro.so/token/token%7Did?chain=mainnet")
  })
})
