import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl empty fallback behavior coverage.
// Scope note: validates contract getAddressExplorerUrl empty fallback behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('falls back to chain root when address is empty', () => {
    expect(getAddressExplorerUrl('')).toBe('https://explorer.hiro.so?chain=mainnet')
  })
})
