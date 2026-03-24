import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

describe('getAddressExplorerUrl', () => {
  it('encodes dollar sign characters in wallet addresses', () => {
    expect(getAddressExplorerUrl("SP5K$TJT")).toBe("https://explorer.hiro.so/address/SP5K%24TJT?chain=mainnet")
  })
})
