import { describe, expect, it } from 'vitest'
import { formatAddress } from './collection'

// Regression note: preserve formatAddress boundary threshold behavior coverage.
// Scope note: validates formatAddress boundary threshold behavior for regressions.
describe('formatAddress', () => {
  it('keeps addresses unchanged at the truncation threshold', () => {
    expect(formatAddress('SP1234567890')).toBe('SP1234567890')
  })
})
