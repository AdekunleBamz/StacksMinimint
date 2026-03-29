import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl right brace encoding behavior coverage.
// Scope note: validates contract getAddressExplorerUrl right brace encoding behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('encodes right brace characters in address identifiers', () => {
    expect(getAddressExplorerUrl("SP5K}TJT")).toBe("https://explorer.hiro.so/address/SP5K%7DTJT?chain=mainnet")
  })
})
