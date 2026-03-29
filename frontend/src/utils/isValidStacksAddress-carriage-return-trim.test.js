import { describe, expect, it } from 'vitest'
import { isValidStacksAddress } from './strings'

// Regression note: preserve isValidStacksAddress carriage return trim behavior coverage.
describe('isValidStacksAddress', () => {
  it('accepts valid addresses surrounded by carriage returns', () => {
    const value = '\rSP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT\r'
    expect(isValidStacksAddress(value)).toBe(true)
  })
})
