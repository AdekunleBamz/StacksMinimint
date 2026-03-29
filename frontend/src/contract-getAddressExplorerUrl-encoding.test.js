import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl encoding behavior coverage.
// Scope note: validates contract getAddressExplorerUrl encoding behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('encodes addresses safely for explorer links', () => {
    expect(getAddressExplorerUrl('SP123/abc?x=1')).toBe('https://explorer.hiro.so/address/SP123%2Fabc%3Fx%3D1?chain=mainnet')
  })
})
