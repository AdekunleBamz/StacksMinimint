import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl space character encoding behavior coverage.
// Scope note: validates contract getAddressExplorerUrl space character encoding behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('encodes space characters in wallet addresses', () => {
    expect(getAddressExplorerUrl("SP5K TJT")).toBe("https://explorer.hiro.so/address/SP5K%20TJT?chain=mainnet")
  })
})
