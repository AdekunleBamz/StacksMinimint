import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl comma encoding behavior coverage.
describe('getExplorerUrl', () => {
  it('encodes comma characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx,id")).toBe("https://explorer.hiro.so/txid/tx%2Cid?chain=mainnet")
  })
})
