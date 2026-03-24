import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

describe('getTokenExplorerUrl', () => {
  it('encodes pipe characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token|id")).toBe("https://explorer.hiro.so/token/token%7Cid?chain=mainnet")
  })
})
