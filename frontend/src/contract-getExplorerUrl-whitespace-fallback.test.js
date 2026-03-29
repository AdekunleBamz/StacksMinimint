import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl whitespace fallback behavior coverage.
// Scope note: validates contract getExplorerUrl whitespace fallback behavior for regressions.
describe('getExplorerUrl', () => {
  it('falls back to the network overview when tx id is whitespace only', () => {
    expect(getExplorerUrl('   ')).toBe('https://explorer.hiro.so?chain=mainnet')
  })
})
