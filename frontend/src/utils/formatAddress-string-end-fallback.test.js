import { describe, expect, it } from 'vitest'
import { formatAddress } from './collection'

// Regression note: preserve formatAddress string end fallback behavior coverage.
// Scope note: validates formatAddress string end fallback behavior for regressions.
describe('formatAddress', () => {
  it('falls back to default suffix length when end is a string', () => {
    expect(formatAddress('SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT', 4, '4')).toBe('SP5K...X9TJT')
  })
})
