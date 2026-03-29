import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl tilde character encoding behavior coverage.
describe('getTokenExplorerUrl', () => {
  it('encodes tilde characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token~id")).toBe("https://explorer.hiro.so/token/token~id?chain=mainnet")
  })
})
