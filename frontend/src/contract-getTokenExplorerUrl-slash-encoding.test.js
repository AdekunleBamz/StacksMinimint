import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl slash encoding behavior coverage.
// Scope note: validates contract getTokenExplorerUrl slash encoding behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('encodes slashes in token identifiers', () => {
    expect(getTokenExplorerUrl('set/1')).toBe('https://explorer.hiro.so/token/set%2F1?chain=mainnet')
  })
})
