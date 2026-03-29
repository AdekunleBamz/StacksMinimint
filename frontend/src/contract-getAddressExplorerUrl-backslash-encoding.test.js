import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl backslash encoding behavior coverage.
// Scope note: validates contract getAddressExplorerUrl backslash encoding behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('encodes backslash characters in wallet addresses', () => {
    expect(getAddressExplorerUrl("SP5K\\TJT")).toBe("https://explorer.hiro.so/address/SP5K%5CTJT?chain=mainnet")
  })
})
