import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl symbol id encoding behavior coverage.
// Scope note: validates contract getAddressExplorerUrl symbol id encoding behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('encodes symbol address ids without throwing', () => {
    expect(getAddressExplorerUrl(Symbol('address'))).toBe(
      'https://explorer.hiro.so/address/Symbol(address)?chain=mainnet'
    )
  })
})
