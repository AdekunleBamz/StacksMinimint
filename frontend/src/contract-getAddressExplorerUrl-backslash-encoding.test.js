import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

describe('getAddressExplorerUrl', () => {
  it('encodes backslash characters in wallet addresses', () => {
    expect(getAddressExplorerUrl("SP5K\\TJT")).toBe("https://explorer.hiro.so/address/SP5K%5CTJT?chain=mainnet")
  })
})
