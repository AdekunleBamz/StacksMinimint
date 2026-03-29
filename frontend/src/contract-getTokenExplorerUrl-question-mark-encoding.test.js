import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl question mark encoding behavior coverage.
describe('getTokenExplorerUrl', () => {
  it('encodes question mark characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token?id")).toBe("https://explorer.hiro.so/token/token%3Fid?chain=mainnet")
  })
})
