import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

describe('getTokenExplorerUrl', () => {
  it('encodes caret characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token^id")).toBe("https://explorer.hiro.so/token/token%5Eid?chain=mainnet")
  })
})
