import { describe, expect, it } from 'vitest'
import { formatAddress } from './collection'

// Regression note: preserve formatAddress whitespace only behavior coverage.
// Scope note: validates formatAddress whitespace only behavior for regressions.
describe('formatAddress', () => {
  it('returns an empty string for whitespace-only input', () => {
    expect(formatAddress('    ')).toBe('')
  })
})
