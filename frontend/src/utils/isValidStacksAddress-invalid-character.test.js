import { describe, expect, it } from 'vitest'
import { isValidStacksAddress } from './strings'

// Regression note: preserve isValidStacksAddress invalid character behavior coverage.
describe('isValidStacksAddress', () => {
  it('rejects addresses containing unsupported characters', () => {
    expect(isValidStacksAddress('SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJ*')).toBe(false)
  })
})
