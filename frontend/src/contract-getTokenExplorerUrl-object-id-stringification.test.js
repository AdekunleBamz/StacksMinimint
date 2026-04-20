import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl object id stringification behavior coverage.
// Scope note: validates contract getTokenExplorerUrl object id stringification behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('stringifies object token ids before encoding', () => {
    expect(getTokenExplorerUrl({ id: 9 })).toBe(
      'https://explorer.hiro.so/token/%5Bobject%20Object%5D?chain=mainnet'
    )
  })
})
