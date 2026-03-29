import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl plus sign encoding behavior coverage.
// Scope note: validates contract getAddressExplorerUrl plus sign encoding behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('encodes plus sign characters in wallet addresses', () => {
    expect(getAddressExplorerUrl("SP5K+TJT")).toBe("https://explorer.hiro.so/address/SP5K%2BTJT?chain=mainnet")
  })
})
