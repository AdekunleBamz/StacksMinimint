import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl right bracket encoding behavior coverage.
// Scope note: validates contract getAddressExplorerUrl right bracket encoding behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('encodes right bracket characters in wallet addresses', () => {
    expect(getAddressExplorerUrl("SP5K]TJT")).toBe("https://explorer.hiro.so/address/SP5K%5DTJT?chain=mainnet")
  })
})
