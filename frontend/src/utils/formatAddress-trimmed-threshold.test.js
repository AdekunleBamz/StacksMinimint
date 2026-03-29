import { describe, expect, it } from 'vitest'
import { formatAddress } from './collection'

// Regression note: preserve formatAddress trimmed threshold behavior coverage.
// Scope note: validates formatAddress trimmed threshold behavior for regressions.
describe('formatAddress', () => {
  it('trims before evaluating truncation thresholds', () => {
    expect(formatAddress('  SP1234567890  ')).toBe('SP1234567890')
  })
})
