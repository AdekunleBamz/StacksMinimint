import { describe, expect, it } from 'vitest'
import { isValidOwnerAddress } from './validators'

describe('isValidOwnerAddress', () => {
  it('accepts valid testnet owner addresses', () => {
    expect(isValidOwnerAddress('ST5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT')).toBe(true)
  })
})
