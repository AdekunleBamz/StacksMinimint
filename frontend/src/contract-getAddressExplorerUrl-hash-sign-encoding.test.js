import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl hash sign encoding behavior coverage.
// Scope note: validates contract getAddressExplorerUrl hash sign encoding behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('encodes hash sign characters in wallet addresses', () => {
    expect(getAddressExplorerUrl("SP5K#TJT")).toBe("https://explorer.hiro.so/address/SP5K%23TJT?chain=mainnet")
  })
})
