import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

describe('getAddressExplorerUrl', () => {
  it('encodes asterisk characters in address identifiers', () => {
    expect(getAddressExplorerUrl("SP5K*TJT")).toBe("https://explorer.hiro.so/address/SP5K*TJT?chain=mainnet")
  })
})
