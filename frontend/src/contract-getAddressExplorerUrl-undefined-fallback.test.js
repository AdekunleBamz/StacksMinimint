import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl undefined fallback behavior coverage.
// Scope note: validates contract getAddressExplorerUrl undefined fallback behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('falls back when the address identifier is undefined', () => {
    expect(getAddressExplorerUrl(undefined)).toBe('https://explorer.hiro.so?chain=mainnet')
  })
})
