import { describe, expect, it } from 'vitest'
import { isValidStacksAddress } from './strings'

// Regression note: preserve isValidStacksAddress max length behavior coverage.
describe('isValidStacksAddress', () => {
  it('rejects addresses that exceed the max supported length', () => {
    const tooLongAddress = 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJTAA'
    expect(isValidStacksAddress(tooLongAddress)).toBe(false)
  })
})
