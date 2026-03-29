import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl fire emoji encoding behavior coverage.
// Scope note: validates contract getTokenExplorerUrl fire emoji encoding behavior for regressions.
describe('getTokenExplorerUrl', () => {
  it('encodes fire emoji characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token🔥id")).toBe("https://explorer.hiro.so/token/token%F0%9F%94%A5id?chain=mainnet")
  })
})
