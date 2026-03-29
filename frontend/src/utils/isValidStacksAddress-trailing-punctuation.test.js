import { describe, expect, it } from 'vitest'
import { isValidStacksAddress } from './strings'

// Regression note: preserve isValidStacksAddress trailing punctuation behavior coverage.
describe('isValidStacksAddress', () => {
  it('rejects addresses with trailing punctuation', () => {
    expect(isValidStacksAddress('SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT.')).toBe(false)
  })
})
