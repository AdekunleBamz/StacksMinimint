import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl trimmed id behavior coverage.
// Scope note: validates contract getTokenExplorerUrl trimmed id behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('trims surrounding spaces before encoding token ids', () => {
    expect(getTokenExplorerUrl(' 123 ')).toBe('https://explorer.hiro.so/token/123?chain=mainnet')
  })
})
