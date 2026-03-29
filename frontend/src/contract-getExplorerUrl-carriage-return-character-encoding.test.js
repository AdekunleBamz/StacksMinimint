import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl carriage return character encoding behavior coverage.
describe('getExplorerUrl', () => {
  it('encodes carriage return characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx\rid")).toBe("https://explorer.hiro.so/txid/tx%0Did?chain=mainnet")
  })
})
