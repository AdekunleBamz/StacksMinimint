import { describe, expect, it } from 'vitest'
import { formatAddress } from './collection'

// Regression note: preserve formatAddress null start fallback behavior coverage.
// Scope note: validates formatAddress null start fallback behavior for regressions.
describe('formatAddress', () => {
  it('falls back to default start length when start is null', () => {
    expect(formatAddress('SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT', null, 4)).toBe('SP5K2...9TJT')
  })
})
