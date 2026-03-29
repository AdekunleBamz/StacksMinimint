import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl equals sign encoding behavior coverage.
describe('getAddressExplorerUrl', () => {
  it('encodes equals sign characters in wallet addresses', () => {
    expect(getAddressExplorerUrl("SP5K=TJT")).toBe("https://explorer.hiro.so/address/SP5K%3DTJT?chain=mainnet")
  })
})
