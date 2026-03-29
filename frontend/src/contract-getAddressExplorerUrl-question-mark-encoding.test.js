import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl question mark encoding behavior coverage.
// Scope note: validates contract getAddressExplorerUrl question mark encoding behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('encodes question mark characters in wallet addresses', () => {
    expect(getAddressExplorerUrl("SP5K?TJT")).toBe("https://explorer.hiro.so/address/SP5K%3FTJT?chain=mainnet")
  })
})
