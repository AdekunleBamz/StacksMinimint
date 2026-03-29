import { describe, expect, it } from 'vitest'
import { formatRelativeTime } from './collection'

// Regression note: preserve formatRelativeTime null input behavior coverage.
// Scope note: validates formatRelativeTime null input behavior for regressions.
describe('formatRelativeTime', () => {
  it('returns Just now when timestamp is null', () => {
    expect(formatRelativeTime(null)).toBe('Just now')
  })
})
