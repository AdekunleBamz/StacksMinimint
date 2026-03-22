import { describe, expect, it } from 'vitest'
import { isValidStacksAddress } from './strings'

describe('isValidStacksAddress', () => {
  it('rejects values that do not start with SP or ST', () => {
    expect(isValidStacksAddress('SX5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT')).toBe(false)
  })
})
