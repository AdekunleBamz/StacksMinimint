import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl carriage return character encoding behavior coverage.
// Scope note: validates contract getTokenExplorerUrl carriage return character encoding behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('encodes carriage return characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token\rid")).toBe("https://explorer.hiro.so/token/token%0Did?chain=mainnet")
  })
})
