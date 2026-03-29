import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl unicode encoding behavior coverage.
// Scope note: validates contract getAddressExplorerUrl unicode encoding behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('encodes unicode address identifiers safely', () => {
    const address = 'адрес/123'
    expect(getAddressExplorerUrl(address)).toBe(`https://explorer.hiro.so/address/${encodeURIComponent(address)}?chain=mainnet`)
  })
})
