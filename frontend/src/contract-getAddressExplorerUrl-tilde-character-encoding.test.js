import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl tilde character encoding behavior coverage.
describe('getAddressExplorerUrl', () => {
  it('encodes tilde characters in address identifiers', () => {
    expect(getAddressExplorerUrl("SP5K~TJT")).toBe("https://explorer.hiro.so/address/SP5K~TJT?chain=mainnet")
  })
})
