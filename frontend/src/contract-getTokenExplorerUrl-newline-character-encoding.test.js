import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

describe('getTokenExplorerUrl', () => {
  it('encodes newline characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token\nid")).toBe("https://explorer.hiro.so/token/token%0Aid?chain=mainnet")
  })
})
