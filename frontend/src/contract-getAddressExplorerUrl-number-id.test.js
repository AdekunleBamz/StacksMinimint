import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl number id behavior coverage.
// Scope note: validates contract getAddressExplorerUrl number id behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('supports numeric identifiers when building address links', () => {
    expect(getAddressExplorerUrl(42)).toBe('https://explorer.hiro.so/address/42?chain=mainnet')
  })
})
