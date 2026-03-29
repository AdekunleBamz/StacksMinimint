import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl apostrophe encoding behavior coverage.
describe('getExplorerUrl', () => {
  it('encodes apostrophe characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx'id")).toBe("https://explorer.hiro.so/txid/tx'id?chain=mainnet")
  })
})
