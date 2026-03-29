import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl equals sign encoding behavior coverage.
describe('getExplorerUrl', () => {
  it('encodes equals sign characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx=id")).toBe("https://explorer.hiro.so/txid/tx%3Did?chain=mainnet")
  })
})
