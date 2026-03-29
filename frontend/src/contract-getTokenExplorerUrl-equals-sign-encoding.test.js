import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl equals sign encoding behavior coverage.
// Scope note: validates contract getTokenExplorerUrl equals sign encoding behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('encodes equals sign characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token=id")).toBe("https://explorer.hiro.so/token/token%3Did?chain=mainnet")
  })
})
