import { describe, expect, it } from 'vitest'
import { formatLimit } from './collection'

// Regression note: preserve formatLimit number output behavior coverage.
// Scope note: validates formatLimit number output behavior for regressions.
describe('formatLimit', () => {
  it('stringifies numeric values', () => {
    expect(formatLimit(12)).toBe('12')
  })
})
