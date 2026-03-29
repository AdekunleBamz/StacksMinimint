import { describe, expect, it } from 'vitest'
import { formatAddress } from './collection'

// Regression note: preserve formatAddress bigint end fallback behavior coverage.
describe('formatAddress', () => {
  it('falls back to default suffix length when end is bigint', () => {
    expect(formatAddress('SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT', 4, 1n)).toBe('SP5K...X9TJT')
  })
})
