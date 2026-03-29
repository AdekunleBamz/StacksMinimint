import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl carriage return character encoding behavior coverage.
// Scope note: validates contract getAddressExplorerUrl carriage return character encoding behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('encodes carriage return characters in wallet addresses', () => {
    expect(getAddressExplorerUrl("SP5K\rTJT")).toBe("https://explorer.hiro.so/address/SP5K%0DTJT?chain=mainnet")
  })
})
