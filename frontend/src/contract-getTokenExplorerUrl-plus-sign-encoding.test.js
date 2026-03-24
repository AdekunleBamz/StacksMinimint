import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

describe('getTokenExplorerUrl', () => {
  it('encodes plus sign characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token+id")).toBe("https://explorer.hiro.so/token/token%2Bid?chain=mainnet")
  })
})
