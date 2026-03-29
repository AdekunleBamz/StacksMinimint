import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl colon encoding behavior coverage.
// Scope note: validates contract getAddressExplorerUrl colon encoding behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('encodes colon characters in wallet addresses', () => {
    expect(getAddressExplorerUrl("SP5K:TJT")).toBe("https://explorer.hiro.so/address/SP5K%3ATJT?chain=mainnet")
  })
})
