import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

describe('getTokenExplorerUrl', () => {
  it('encodes unicode token identifiers safely', () => {
    const tokenId = 'こんにちは/123'
    expect(getTokenExplorerUrl(tokenId)).toBe(`https://explorer.hiro.so/token/${encodeURIComponent(tokenId)}?chain=mainnet`)
  })
})
