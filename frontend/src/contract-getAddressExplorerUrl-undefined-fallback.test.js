import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

describe('getAddressExplorerUrl', () => {
  it('falls back when the address identifier is undefined', () => {
    expect(getAddressExplorerUrl(undefined)).toBe('https://explorer.hiro.so?chain=mainnet')
  })
})
