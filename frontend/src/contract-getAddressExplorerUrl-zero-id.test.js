import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

describe('getAddressExplorerUrl', () => {
  it('supports zero as an address identifier', () => {
    expect(getAddressExplorerUrl(0)).toBe('https://explorer.hiro.so/address/0?chain=mainnet')
  })
})
