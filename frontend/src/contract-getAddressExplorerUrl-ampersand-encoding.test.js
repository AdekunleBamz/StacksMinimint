import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl ampersand encoding behavior coverage.
// Scope note: validates contract getAddressExplorerUrl ampersand encoding behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('encodes ampersand characters in wallet addresses', () => {
    expect(getAddressExplorerUrl("SP5K&TJT")).toBe("https://explorer.hiro.so/address/SP5K%26TJT?chain=mainnet")
  })
})
