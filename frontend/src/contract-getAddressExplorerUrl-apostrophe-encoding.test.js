import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl apostrophe encoding behavior coverage.
// Scope note: validates contract getAddressExplorerUrl apostrophe encoding behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('encodes apostrophe characters in wallet addresses', () => {
    expect(getAddressExplorerUrl("SP5K'TJT")).toBe("https://explorer.hiro.so/address/SP5K'TJT?chain=mainnet")
  })
})
