import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

describe('getAddressExplorerUrl', () => {
  it('supports numeric identifiers when building address links', () => {
    expect(getAddressExplorerUrl(42)).toBe('https://explorer.hiro.so/address/42?chain=mainnet')
  })
})
