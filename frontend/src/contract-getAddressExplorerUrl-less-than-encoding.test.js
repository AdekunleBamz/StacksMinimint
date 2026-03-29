import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl less than encoding behavior coverage.
// Scope note: validates contract getAddressExplorerUrl less than encoding behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('encodes less-than characters in wallet addresses', () => {
    expect(getAddressExplorerUrl("SP5K<TJT")).toBe("https://explorer.hiro.so/address/SP5K%3CTJT?chain=mainnet")
  })
})
