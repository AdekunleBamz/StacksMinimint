import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl right bracket encoding behavior coverage.
// Scope note: validates contract getTokenExplorerUrl right bracket encoding behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('encodes right bracket characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token]id")).toBe("https://explorer.hiro.so/token/token%5Did?chain=mainnet")
  })
})
