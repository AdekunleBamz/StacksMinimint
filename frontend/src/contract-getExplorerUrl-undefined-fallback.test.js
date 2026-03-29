import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl undefined fallback behavior coverage.
describe('getExplorerUrl', () => {
  it('falls back to the network explorer page for undefined identifiers', () => {
    expect(getExplorerUrl(undefined)).toBe('https://explorer.hiro.so?chain=mainnet')
  })
})
