import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

describe('getTokenExplorerUrl', () => {
  it('encodes arabic token identifiers safely', () => {
    const tokenId = 'رمز-٣٣'
    expect(getTokenExplorerUrl(tokenId)).toBe(`https://explorer.hiro.so/token/${encodeURIComponent(tokenId)}?chain=mainnet`)
  })
})
