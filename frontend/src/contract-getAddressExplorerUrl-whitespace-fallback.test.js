import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

// Regression note: preserve contract getAddressExplorerUrl whitespace fallback behavior coverage.
// Scope note: validates contract getAddressExplorerUrl whitespace fallback behavior for regressions.
describe('getAddressExplorerUrl', () => {
  it('falls back to chain root when address is whitespace only', () => {
    expect(getAddressExplorerUrl('   ')).toBe('https://explorer.hiro.so?chain=mainnet')
  })
})
