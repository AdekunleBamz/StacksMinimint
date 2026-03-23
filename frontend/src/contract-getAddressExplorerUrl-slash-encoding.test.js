import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

describe('getAddressExplorerUrl', () => {
  it('encodes slash characters in address identifiers', () => {
    expect(getAddressExplorerUrl('SP12/34')).toBe('https://explorer.hiro.so/address/SP12%2F34?chain=mainnet')
  })
})
