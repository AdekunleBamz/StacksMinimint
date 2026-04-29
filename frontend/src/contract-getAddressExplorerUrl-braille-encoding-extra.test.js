import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

describe('getAddressExplorerUrl', () => {
  it('encodes braille pattern addresses safely', () => {
    const address = 'SP-⠓⠊'
    expect(getAddressExplorerUrl(address)).toBe(`https://explorer.hiro.so/address/${encodeURIComponent(address)}?chain=mainnet`)
  })
})
