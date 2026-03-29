import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl number id behavior coverage.
// Scope note: validates contract getExplorerUrl number id behavior for regressions.
describe('getExplorerUrl', () => {
  it('supports numeric transaction identifiers', () => {
    expect(getExplorerUrl(42)).toBe('https://explorer.hiro.so/txid/42?chain=mainnet')
  })
})
