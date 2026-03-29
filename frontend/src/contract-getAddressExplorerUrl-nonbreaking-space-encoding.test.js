import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl nonbreaking space encoding behavior coverage.
// Scope note: validates contract getAddressExplorerUrl nonbreaking space encoding behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('encodes nonbreaking space characters in wallet addresses', () => {
    expect(getAddressExplorerUrl("SP5K TJT")).toBe("https://explorer.hiro.so/address/SP5K%C2%A0TJT?chain=mainnet")
  })
})
