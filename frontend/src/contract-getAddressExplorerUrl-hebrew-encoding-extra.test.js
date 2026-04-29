import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

describe('getAddressExplorerUrl', () => {
  it('encodes hebrew address identifiers safely', () => {
    const address = 'כתובת-17'
    expect(getAddressExplorerUrl(address)).toBe(`https://explorer.hiro.so/address/${encodeURIComponent(address)}?chain=mainnet`)
  })
})
