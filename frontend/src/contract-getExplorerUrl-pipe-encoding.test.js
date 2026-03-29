import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl pipe encoding behavior coverage.
describe('getExplorerUrl', () => {
  it('encodes pipe characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx|id")).toBe("https://explorer.hiro.so/txid/tx%7Cid?chain=mainnet")
  })
})
