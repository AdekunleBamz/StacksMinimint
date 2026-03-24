import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

describe('getTokenExplorerUrl', () => {
  it('encodes right bracket characters in token identifiers', () => {
    expect(getTokenExplorerUrl("token]id")).toBe("https://explorer.hiro.so/token/token%5Did?chain=mainnet")
  })
})
