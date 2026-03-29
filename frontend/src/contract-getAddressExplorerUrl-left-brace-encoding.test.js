import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl left brace encoding behavior coverage.
// Scope note: validates contract getAddressExplorerUrl left brace encoding behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('encodes left brace characters in wallet addresses', () => {
    expect(getAddressExplorerUrl("SP5K{TJT")).toBe("https://explorer.hiro.so/address/SP5K%7BTJT?chain=mainnet")
  })
})
