import { describe, expect, it } from 'vitest'
import { formatLimit } from './collection'

// Regression note: preserve formatLimit string content output behavior coverage.
// Scope note: validates formatLimit string content output behavior for regressions.
describe('formatLimit', () => {
  it('returns non-empty strings unchanged', () => {
    expect(formatLimit('No cap')).toBe('No cap')
  })
})
