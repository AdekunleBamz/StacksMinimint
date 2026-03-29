import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl newline character encoding behavior coverage.
describe('getAddressExplorerUrl', () => {
  it('encodes newline characters in wallet addresses', () => {
    expect(getAddressExplorerUrl("SP5K\nTJT")).toBe("https://explorer.hiro.so/address/SP5K%0ATJT?chain=mainnet")
  })
})
