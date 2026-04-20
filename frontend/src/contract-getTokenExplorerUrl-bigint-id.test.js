import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl bigint id encoding behavior coverage.
// Scope note: validates contract getTokenExplorerUrl bigint id encoding behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('encodes bigint token ids through string conversion', () => {
    expect(getTokenExplorerUrl(999n)).toBe('https://explorer.hiro.so/token/999?chain=mainnet')
  })
})
