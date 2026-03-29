import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl fire emoji encoding behavior coverage.
// Scope note: validates contract getAddressExplorerUrl fire emoji encoding behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('encodes fire emoji characters in wallet addresses', () => {
    expect(getAddressExplorerUrl("SP5K🔥TJT")).toBe("https://explorer.hiro.so/address/SP5K%F0%9F%94%A5TJT?chain=mainnet")
  })
})
