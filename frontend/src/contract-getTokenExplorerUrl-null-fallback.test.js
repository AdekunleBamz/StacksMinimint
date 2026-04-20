import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl null fallback behavior coverage.
// Scope note: validates contract getTokenExplorerUrl null fallback behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('falls back to chain root when token id is null', () => {
    expect(getTokenExplorerUrl(null)).toBe('https://explorer.hiro.so?chain=mainnet')
  })
})
