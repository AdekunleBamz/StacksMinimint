import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl trimmed id behavior coverage.
describe('getExplorerUrl', () => {
  it('trims surrounding spaces before encoding transaction ids', () => {
    expect(getExplorerUrl(' 0xabc123 ')).toBe('https://explorer.hiro.so/txid/0xabc123?chain=mainnet')
  })
})
