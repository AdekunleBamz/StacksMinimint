import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl bigint id encoding behavior coverage.
// Scope note: validates contract getAddressExplorerUrl bigint id encoding behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('encodes bigint address ids through string conversion', () => {
    expect(getAddressExplorerUrl(77n)).toBe('https://explorer.hiro.so/address/77?chain=mainnet')
  })
})
