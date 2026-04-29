import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

describe('getTokenExplorerUrl', () => {
  it('encodes braille pattern token identifiers safely', () => {
    const tokenId = 'token-⠓⠊'
    expect(getTokenExplorerUrl(tokenId)).toBe(`https://explorer.hiro.so/token/${encodeURIComponent(tokenId)}?chain=mainnet`)
  })
})
