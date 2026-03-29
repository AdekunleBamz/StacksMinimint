import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

// Regression note: preserve contract getTokenExplorerUrl nonbreaking space encoding behavior coverage.
describe('getTokenExplorerUrl', () => {
  it('encodes nonbreaking space characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token id")).toBe("https://explorer.hiro.so/token/token%C2%A0id?chain=mainnet")
  })
})
