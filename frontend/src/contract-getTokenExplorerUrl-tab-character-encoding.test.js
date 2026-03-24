import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

describe('getTokenExplorerUrl', () => {
  it('encodes tab characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token\tid")).toBe("https://explorer.hiro.so/token/token%09id?chain=mainnet")
  })
})
