import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl close parenthesis encoding behavior coverage.
// Scope note: validates contract getAddressExplorerUrl close parenthesis encoding behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('encodes close parenthesis characters in address identifiers', () => {
    expect(getAddressExplorerUrl("SP5K)TJT")).toBe("https://explorer.hiro.so/address/SP5K)TJT?chain=mainnet")
  })
})
