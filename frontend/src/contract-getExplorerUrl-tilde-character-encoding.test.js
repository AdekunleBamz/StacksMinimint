import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract getExplorerUrl tilde character encoding behavior coverage.
describe('getExplorerUrl', () => {
  it('encodes tilde characters in transaction identifiers', () => {
    expect(getExplorerUrl("tx~id")).toBe("https://explorer.hiro.so/txid/tx~id?chain=mainnet")
  })
})
