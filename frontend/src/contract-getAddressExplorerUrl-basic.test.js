import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl basic behavior coverage.
// Scope note: validates contract getAddressExplorerUrl basic behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('builds address explorer links on the configured network', () => {
    expect(getAddressExplorerUrl('SP123')).toBe('https://explorer.hiro.so/address/SP123?chain=mainnet')
  })
})
