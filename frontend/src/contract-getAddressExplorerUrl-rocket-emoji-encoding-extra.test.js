import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

describe('getAddressExplorerUrl', () => {
  it('encodes rocket emoji addresses safely', () => {
    const address = 'SP-🚀-01'
    expect(getAddressExplorerUrl(address)).toBe(`https://explorer.hiro.so/address/${encodeURIComponent(address)}?chain=mainnet`)
  })
})
