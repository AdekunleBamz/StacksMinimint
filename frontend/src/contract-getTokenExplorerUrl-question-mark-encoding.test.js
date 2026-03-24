import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

describe('getTokenExplorerUrl', () => {
  it('encodes question mark characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token?id")).toBe("https://explorer.hiro.so/token/token%3Fid?chain=mainnet")
  })
})
