import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

describe('getTokenExplorerUrl', () => {
  it('encodes space characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token id")).toBe("https://explorer.hiro.so/token/token%20id?chain=mainnet")
  })
})
