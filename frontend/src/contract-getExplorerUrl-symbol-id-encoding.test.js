import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl symbol id encoding behavior coverage.
// Scope note: validates contract getExplorerUrl symbol id encoding behavior for regressions.
describe('getExplorerUrl', () => {
  it('encodes symbol identifiers without throwing', () => {
    expect(getExplorerUrl(Symbol('tx'))).toBe(
      'https://explorer.hiro.so/txid/Symbol(tx)?chain=mainnet'
    )
  })
})
