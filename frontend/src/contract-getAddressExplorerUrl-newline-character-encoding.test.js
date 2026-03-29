import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl newline character encoding behavior coverage.
// Scope note: validates contract getAddressExplorerUrl newline character encoding behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('encodes newline characters in wallet addresses', () => {
    expect(getAddressExplorerUrl("SP5K\nTJT")).toBe("https://explorer.hiro.so/address/SP5K%0ATJT?chain=mainnet")
  })
})
