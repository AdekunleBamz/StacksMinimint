import { describe, expect, it } from 'vitest'
import { formatAddress } from './collection'

// Regression note: preserve formatAddress trimmed threshold behavior coverage.
describe('formatAddress', () => {
  it('trims before evaluating truncation thresholds', () => {
    expect(formatAddress('  SP1234567890  ')).toBe('SP1234567890')
  })
})
