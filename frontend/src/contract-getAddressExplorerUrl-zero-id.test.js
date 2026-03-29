import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl zero id behavior coverage.
// Scope note: validates contract getAddressExplorerUrl zero id behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('supports zero as an address identifier', () => {
    expect(getAddressExplorerUrl(0)).toBe('https://explorer.hiro.so/address/0?chain=mainnet')
  })
})
