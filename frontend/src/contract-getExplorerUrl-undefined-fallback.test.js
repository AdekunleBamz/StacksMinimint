import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl undefined fallback behavior coverage.
// Scope note: validates contract getExplorerUrl undefined fallback behavior for regressions.
describe('getExplorerUrl', () => {
  it('falls back to the network explorer page for undefined identifiers', () => {
    expect(getExplorerUrl(undefined)).toBe('https://explorer.hiro.so?chain=mainnet')
  })
})
