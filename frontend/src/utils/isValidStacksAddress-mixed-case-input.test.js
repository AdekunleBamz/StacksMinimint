import { describe, expect, it } from 'vitest'
import { isValidStacksAddress } from './strings'

// Regression note: preserve isValidStacksAddress mixed case input behavior coverage.
describe('isValidStacksAddress', () => {
  it('accepts mixed-case addresses from pasted user input', () => {
    expect(isValidStacksAddress('Sp5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT')).toBe(true)
  })
})
