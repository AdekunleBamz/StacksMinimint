import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

describe('getAddressExplorerUrl', () => {
  it('encodes nonbreaking space characters in wallet addresses', () => {
    expect(getAddressExplorerUrl("SP5K TJT")).toBe("https://explorer.hiro.so/address/SP5K%C2%A0TJT?chain=mainnet")
  })
})
