import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl nonbreaking space encoding behavior coverage.
// Scope note: validates contract getExplorerUrl nonbreaking space encoding behavior for regressions.
describe('getExplorerUrl', () => {
  it('encodes nonbreaking space characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx id")).toBe("https://explorer.hiro.so/txid/tx%C2%A0id?chain=mainnet")
  })
})
