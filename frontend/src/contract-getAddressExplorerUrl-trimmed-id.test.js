import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl trimmed id behavior coverage.
// Scope note: validates contract getAddressExplorerUrl trimmed id behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('trims surrounding spaces before encoding addresses', () => {
    expect(getAddressExplorerUrl(' SP123 ')).toBe('https://explorer.hiro.so/address/SP123?chain=mainnet')
  })
})
