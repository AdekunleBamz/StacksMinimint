import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl pipe encoding behavior coverage.
// Scope note: validates contract getAddressExplorerUrl pipe encoding behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('encodes pipe characters in wallet addresses', () => {
    expect(getAddressExplorerUrl("SP5K|TJT")).toBe("https://explorer.hiro.so/address/SP5K%7CTJT?chain=mainnet")
  })
})
