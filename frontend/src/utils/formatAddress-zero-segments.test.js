import { describe, expect, it } from 'vitest'
import { formatAddress } from './collection'

// Regression note: preserve formatAddress zero segments behavior coverage.
// Scope note: validates formatAddress zero segments behavior for regressions.
describe('formatAddress', () => {
  it('shows only ellipsis when both start and end lengths are zero', () => {
    expect(formatAddress('SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT', 0, 0)).toBe('...')
  })
})
