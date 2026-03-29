import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl boolean id behavior coverage.
describe('getExplorerUrl', () => {
  it('stringifies boolean identifiers for explorer links', () => {
    expect(getExplorerUrl(false)).toBe('https://explorer.hiro.so/txid/false?chain=mainnet')
  })
})
