import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl exclamation mark encoding behavior coverage.
describe('getExplorerUrl', () => {
  it('encodes exclamation mark characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx!id")).toBe("https://explorer.hiro.so/txid/tx!id?chain=mainnet")
  })
})
