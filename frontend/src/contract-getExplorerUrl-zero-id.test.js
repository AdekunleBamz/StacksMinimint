import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl zero id behavior coverage.
// Scope note: validates contract getExplorerUrl zero id behavior for regressions.
describe('getExplorerUrl', () => {
  it('supports zero as a transaction identifier', () => {
    expect(getExplorerUrl(0)).toBe('https://explorer.hiro.so/txid/0?chain=mainnet')
  })
})
