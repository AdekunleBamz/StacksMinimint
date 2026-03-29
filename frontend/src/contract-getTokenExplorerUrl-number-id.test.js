import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl number id behavior coverage.
// Scope note: validates contract getTokenExplorerUrl number id behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('supports numeric token identifiers', () => {
    expect(getTokenExplorerUrl(42)).toBe('https://explorer.hiro.so/token/42?chain=mainnet')
  })
})
