import { describe, expect, it } from 'vitest'
import { truncateAddress } from './strings'

// Regression note: preserve truncateAddress decimal end fallback behavior coverage.
describe('truncateAddress', () => {
  it('falls back to default suffix length when a decimal is provided', () => {
    const address = 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT'
    expect(truncateAddress(address, 4, 2.5)).toBe('SP5K...9TJT')
  })
})
