import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl dollar sign encoding behavior coverage.
// Scope note: validates contract getTokenExplorerUrl dollar sign encoding behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('encodes dollar sign characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token$id")).toBe("https://explorer.hiro.so/token/token%24id?chain=mainnet")
  })
})
