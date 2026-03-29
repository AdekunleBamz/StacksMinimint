import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl open parenthesis encoding behavior coverage.
describe('getAddressExplorerUrl', () => {
  it('encodes open parenthesis characters in address identifiers', () => {
    expect(getAddressExplorerUrl("SP5K(TJT")).toBe("https://explorer.hiro.so/address/SP5K(TJT?chain=mainnet")
  })
})
