import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

describe('getTokenExplorerUrl', () => {
  it('encodes globe emoji token identifiers safely', () => {
    const tokenId = 'token-🌍-88'
    expect(getTokenExplorerUrl(tokenId)).toBe(`https://explorer.hiro.so/token/${encodeURIComponent(tokenId)}?chain=mainnet`)
  })
})
