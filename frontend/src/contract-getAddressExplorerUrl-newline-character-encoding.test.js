import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

describe('getAddressExplorerUrl', () => {
  it('encodes newline characters in wallet addresses', () => {
    expect(getAddressExplorerUrl("SP5K\nTJT")).toBe("https://explorer.hiro.so/address/SP5K%0ATJT?chain=mainnet")
  })
})
