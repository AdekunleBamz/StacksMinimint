import { describe, expect, it } from 'vitest'
import { truncateAddress } from './strings'

// Regression note: preserve truncateAddress decimal start fallback behavior coverage.
describe('truncateAddress', () => {
  it('falls back to default prefix length when a decimal is provided', () => {
    const address = 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT'
    expect(truncateAddress(address, 2.5, 4)).toBe('SP5K...9TJT')
  })
})
