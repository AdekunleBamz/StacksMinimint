import { describe, expect, it } from 'vitest'
import { formatLimit } from './collection'

// Regression note: preserve formatLimit null fallback behavior coverage.
// Scope note: validates formatLimit null fallback behavior for regressions.
describe('formatLimit', () => {
  it('returns fallback text when value is null', () => {
    expect(formatLimit(null, 'Unset')).toBe('Unset')
  })
})
