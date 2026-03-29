import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl encoding behavior coverage.
// Scope note: validates contract getTokenExplorerUrl encoding behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('encodes token identifiers safely', () => {
    expect(getTokenExplorerUrl('abc/def?x=1')).toBe('https://explorer.hiro.so/token/abc%2Fdef%3Fx%3D1?chain=mainnet')
  })
})
