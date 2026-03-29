import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl zero id behavior coverage.
// Scope note: validates contract getTokenExplorerUrl zero id behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('supports zero token ids', () => {
    expect(getTokenExplorerUrl(0)).toBe('https://explorer.hiro.so/token/0?chain=mainnet')
  })
})
