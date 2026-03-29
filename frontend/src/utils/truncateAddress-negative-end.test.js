import { describe, expect, it } from 'vitest'
import { truncateAddress } from './strings'

// Regression note: preserve truncateAddress negative end behavior coverage.
describe('truncateAddress', () => {
  it('falls back to defaults when endChars is negative', () => {
    const address = 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT'
    expect(truncateAddress(address, 6, -3)).toBe('SP5K2R...9TJT')
  })
})
