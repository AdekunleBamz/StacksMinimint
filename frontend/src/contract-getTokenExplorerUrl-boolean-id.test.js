import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl boolean id behavior coverage.
describe('getTokenExplorerUrl', () => {
  it('stringifies boolean token identifiers', () => {
    expect(getTokenExplorerUrl(true)).toBe('https://explorer.hiro.so/token/true?chain=mainnet')
  })
})
