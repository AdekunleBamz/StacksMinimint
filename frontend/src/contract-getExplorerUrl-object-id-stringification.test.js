import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl object id stringification behavior coverage.
// Scope note: validates contract getExplorerUrl object id stringification behavior for regressions.
describe('getExplorerUrl', () => {
  it('stringifies object tx ids before encoding', () => {
    expect(getExplorerUrl({ id: 1 })).toBe(
      'https://explorer.hiro.so/txid/%5Bobject%20Object%5D?chain=mainnet'
    )
  })
})
