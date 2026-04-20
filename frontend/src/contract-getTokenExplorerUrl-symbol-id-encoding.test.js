import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl symbol id encoding behavior coverage.
// Scope note: validates contract getTokenExplorerUrl symbol id encoding behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('encodes symbol token ids without throwing', () => {
    expect(getTokenExplorerUrl(Symbol('token'))).toBe(
      'https://explorer.hiro.so/token/Symbol(token)?chain=mainnet'
    )
  })
})
