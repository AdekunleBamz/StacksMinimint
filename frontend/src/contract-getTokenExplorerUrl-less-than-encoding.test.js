import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

describe('getTokenExplorerUrl', () => {
  it('encodes less-than characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token<id")).toBe("https://explorer.hiro.so/token/token%3Cid?chain=mainnet")
  })
})
