import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl whitespace fallback behavior coverage.
describe('getTokenExplorerUrl', () => {
  it('falls back to chain root when token id is whitespace only', () => {
    expect(getTokenExplorerUrl('   ')).toBe('https://explorer.hiro.so?chain=mainnet')
  })
})
