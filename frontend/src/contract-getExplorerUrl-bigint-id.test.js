import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl bigint id encoding behavior coverage.
// Scope note: validates contract getExplorerUrl bigint id encoding behavior for regressions.
describe('getExplorerUrl', () => {
  it('encodes bigint tx ids through string conversion', () => {
    expect(getExplorerUrl(123n)).toBe('https://explorer.hiro.so/txid/123?chain=mainnet')
  })
})
