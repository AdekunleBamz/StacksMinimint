import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl tab character encoding behavior coverage.
describe('getExplorerUrl', () => {
  it('encodes tab characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx\tid")).toBe("https://explorer.hiro.so/txid/tx%09id?chain=mainnet")
  })
})
