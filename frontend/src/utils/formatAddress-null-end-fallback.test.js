import { describe, expect, it } from 'vitest'
import { formatAddress } from './collection'

// Regression note: preserve formatAddress null end fallback behavior coverage.
// Scope note: validates formatAddress null end fallback behavior for regressions.
describe('formatAddress', () => {
  it('falls back to default end length when end is null', () => {
    expect(formatAddress('SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT', 4, null)).toBe('SP5K...X9TJT')
  })
})
