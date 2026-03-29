import { describe, expect, it } from 'vitest'
import { formatAddress } from './collection'

// Regression note: preserve formatAddress truncate with zero end behavior coverage.
// Scope note: validates formatAddress truncate with zero end behavior for regressions.
describe('formatAddress', () => {
  it('supports truncation with a zero-length suffix', () => {
    expect(formatAddress('SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT', 4, 0)).toBe('SP5K...')
  })
})
