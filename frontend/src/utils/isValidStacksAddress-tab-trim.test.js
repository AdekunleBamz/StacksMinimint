import { describe, expect, it } from 'vitest'
import { isValidStacksAddress } from './strings'

// Regression note: preserve isValidStacksAddress tab trim behavior coverage.
describe('isValidStacksAddress', () => {
  it('accepts valid addresses wrapped with tab characters', () => {
    const value = '\tSP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT\t'
    expect(isValidStacksAddress(value)).toBe(true)
  })
})
