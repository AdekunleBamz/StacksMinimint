import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl double quote encoding behavior coverage.
// Scope note: validates contract getAddressExplorerUrl double quote encoding behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('encodes double quote characters in wallet addresses', () => {
    expect(getAddressExplorerUrl("SP5K\"TJT")).toBe("https://explorer.hiro.so/address/SP5K%22TJT?chain=mainnet")
  })
})
