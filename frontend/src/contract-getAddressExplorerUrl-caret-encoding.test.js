import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl caret encoding behavior coverage.
// Scope note: validates contract getAddressExplorerUrl caret encoding behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('encodes caret characters in wallet addresses', () => {
    expect(getAddressExplorerUrl("SP5K^TJT")).toBe("https://explorer.hiro.so/address/SP5K%5ETJT?chain=mainnet")
  })
})
