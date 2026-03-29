import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl comma encoding behavior coverage.
// Scope note: validates contract getAddressExplorerUrl comma encoding behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('encodes comma characters in wallet addresses', () => {
    expect(getAddressExplorerUrl("SP5K,TJT")).toBe("https://explorer.hiro.so/address/SP5K%2CTJT?chain=mainnet")
  })
})
