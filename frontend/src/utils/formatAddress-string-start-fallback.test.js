import { describe, expect, it } from 'vitest'
import { formatAddress } from './collection'

// Regression note: preserve formatAddress string start fallback behavior coverage.
// Scope note: validates formatAddress string start fallback behavior for regressions.
describe('formatAddress', () => {
  it('falls back to default start length when a string is provided', () => {
    const address = 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT'
    expect(formatAddress(address, '4', 4)).toBe('SP5K2...9TJT')
  })
})
