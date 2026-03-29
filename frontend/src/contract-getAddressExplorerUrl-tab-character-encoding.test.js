import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl tab character encoding behavior coverage.
// Scope note: validates contract getAddressExplorerUrl tab character encoding behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('encodes tab characters in wallet addresses', () => {
    expect(getAddressExplorerUrl("SP5K\tTJT")).toBe("https://explorer.hiro.so/address/SP5K%09TJT?chain=mainnet")
  })
})
