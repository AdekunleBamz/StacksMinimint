import { describe, expect, it } from 'vitest'
import { getAddressExplorerUrl } from './contract'

describe('getAddressExplorerUrl', () => {
  it('falls back to chain root when address is empty', () => {
    expect(getAddressExplorerUrl('')).toBe('https://explorer.hiro.so?chain=mainnet')
  })
})
