import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl null fallback behavior coverage.
// Scope note: validates contract getAddressExplorerUrl null fallback behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('falls back to chain root when address is null', () => {
    expect(getAddressExplorerUrl(null)).toBe('https://explorer.hiro.so?chain=mainnet')
  })
})
