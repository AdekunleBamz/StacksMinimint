import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl backtick encoding behavior coverage.
// Scope note: validates contract getAddressExplorerUrl backtick encoding behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('encodes backtick characters in wallet addresses', () => {
    expect(getAddressExplorerUrl("SP5K`TJT")).toBe("https://explorer.hiro.so/address/SP5K%60TJT?chain=mainnet")
  })
})
