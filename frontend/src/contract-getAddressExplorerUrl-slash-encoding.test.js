import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl slash encoding behavior coverage.
// Scope note: validates contract getAddressExplorerUrl slash encoding behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('encodes slash characters in address identifiers', () => {
    expect(getAddressExplorerUrl('SP12/34')).toBe('https://explorer.hiro.so/address/SP12%2F34?chain=mainnet')
  })
})
