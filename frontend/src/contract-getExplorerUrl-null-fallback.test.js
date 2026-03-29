import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl null fallback behavior coverage.
describe('getExplorerUrl', () => {
  it('falls back to chain root when tx id is null', () => {
    expect(getExplorerUrl(null)).toBe('https://explorer.hiro.so?chain=mainnet')
  })
})
