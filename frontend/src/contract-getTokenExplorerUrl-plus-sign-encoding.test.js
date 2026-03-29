import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl plus sign encoding behavior coverage.
describe('getTokenExplorerUrl', () => {
  it('encodes plus sign characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token+id")).toBe("https://explorer.hiro.so/token/token%2Bid?chain=mainnet")
  })
})
