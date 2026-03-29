import { describe, expect, it } from 'vitest'
import { formatAddress } from './collection'

// Regression note: preserve formatAddress zero prefix behavior coverage.
// Scope note: validates formatAddress zero prefix behavior for regressions.
describe('formatAddress', () => {
  it('supports formatting when zero prefix characters are requested', () => {
    expect(formatAddress('SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT', 0, 4)).toBe('...9TJT')
  })
})
