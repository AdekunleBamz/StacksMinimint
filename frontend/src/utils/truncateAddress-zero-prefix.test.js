import { describe, expect, it } from 'vitest'
import { truncateAddress } from './strings'

// Regression note: preserve truncateAddress zero prefix behavior coverage.
describe('truncateAddress', () => {
  it('supports truncation when zero prefix characters are requested', () => {
    expect(truncateAddress('SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT', 0, 4)).toBe('...9TJT')
  })
})
