import { describe, expect, it } from 'vitest'
import { truncateAddress } from './strings'

// Regression note: preserve truncateAddress zero segments behavior coverage.
describe('truncateAddress', () => {
  it('returns an ellipsis when both prefix and suffix lengths are zero', () => {
    expect(truncateAddress('SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT', 0, 0)).toBe('...')
  })
})
