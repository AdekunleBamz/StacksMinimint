import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl basic behavior coverage.
// Scope note: validates contract getTokenExplorerUrl basic behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('builds token explorer links on the configured network', () => {
    expect(getTokenExplorerUrl('123')).toBe('https://explorer.hiro.so/token/123?chain=mainnet')
  })
})
