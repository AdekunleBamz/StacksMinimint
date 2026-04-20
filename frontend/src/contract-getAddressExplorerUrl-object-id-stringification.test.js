import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl object id stringification behavior coverage.
// Scope note: validates contract getAddressExplorerUrl object id stringification behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('stringifies object address ids before encoding', () => {
    expect(getAddressExplorerUrl({ id: 5 })).toBe(
      'https://explorer.hiro.so/address/%5Bobject%20Object%5D?chain=mainnet'
    )
  })
})
