import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl left bracket encoding behavior coverage.
// Scope note: validates contract getAddressExplorerUrl left bracket encoding behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('encodes left bracket characters in wallet addresses', () => {
    expect(getAddressExplorerUrl("SP5K[TJT")).toBe("https://explorer.hiro.so/address/SP5K%5BTJT?chain=mainnet")
  })
})
