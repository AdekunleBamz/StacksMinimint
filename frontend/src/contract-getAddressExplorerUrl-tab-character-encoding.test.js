import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

describe('getAddressExplorerUrl', () => {
  it('encodes tab characters in wallet addresses', () => {
    expect(getAddressExplorerUrl("SP5K\tTJT")).toBe("https://explorer.hiro.so/address/SP5K%09TJT?chain=mainnet")
  })
})
