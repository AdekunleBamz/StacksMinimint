import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

describe('getTokenExplorerUrl', () => {
  it('encodes carriage return characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token\rid")).toBe("https://explorer.hiro.so/token/token%0Did?chain=mainnet")
  })
})
