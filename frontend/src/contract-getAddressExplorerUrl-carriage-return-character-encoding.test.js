import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

describe('getAddressExplorerUrl', () => {
  it('encodes carriage return characters in wallet addresses', () => {
    expect(getAddressExplorerUrl("SP5K\rTJT")).toBe("https://explorer.hiro.so/address/SP5K%0DTJT?chain=mainnet")
  })
})
