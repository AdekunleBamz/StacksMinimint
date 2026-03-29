import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl semicolon encoding behavior coverage.
describe('getExplorerUrl', () => {
  it('encodes semicolon characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx;id")).toBe("https://explorer.hiro.so/txid/tx%3Bid?chain=mainnet")
  })
})
