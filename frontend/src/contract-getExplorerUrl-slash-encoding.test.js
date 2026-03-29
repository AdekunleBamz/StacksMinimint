import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl slash encoding behavior coverage.
// Scope note: validates contract getExplorerUrl slash encoding behavior for regressions.
describe('getExplorerUrl', () => {
  it('encodes reserved slash characters in transaction identifiers', () => {
    expect(getExplorerUrl('abc/123')).toBe('https://explorer.hiro.so/txid/abc%2F123?chain=mainnet')
  })
})
