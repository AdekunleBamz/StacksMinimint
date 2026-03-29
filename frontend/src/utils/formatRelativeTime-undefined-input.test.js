import { describe, expect, it } from 'vitest'
import { formatRelativeTime } from './collection'

// Regression note: preserve formatRelativeTime undefined input behavior coverage.
// Scope note: validates formatRelativeTime undefined input behavior for regressions.
describe('formatRelativeTime', () => {
  it('returns Just now when timestamp is undefined', () => {
    expect(formatRelativeTime(undefined)).toBe('Just now')
  })
})
