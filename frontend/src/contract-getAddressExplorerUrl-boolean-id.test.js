import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl boolean id behavior coverage.
// Scope note: validates contract getAddressExplorerUrl boolean id behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('stringifies boolean address identifiers', () => {
    expect(getAddressExplorerUrl(false)).toBe('https://explorer.hiro.so/address/false?chain=mainnet')
  })
})
