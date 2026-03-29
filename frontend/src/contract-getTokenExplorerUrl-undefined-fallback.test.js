import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl undefined fallback behavior coverage.
// Scope note: validates contract getTokenExplorerUrl undefined fallback behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('falls back to explorer home for undefined token ids', () => {
    expect(getTokenExplorerUrl(undefined)).toBe('https://explorer.hiro.so?chain=mainnet')
  })
})
