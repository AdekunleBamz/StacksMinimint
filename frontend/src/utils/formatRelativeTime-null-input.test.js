import { describe, expect, it } from 'vitest'
import { formatRelativeTime } from './collection'

// Regression note: preserve formatRelativeTime null input behavior coverage.
describe('formatRelativeTime', () => {
  it('returns Just now when timestamp is null', () => {
    expect(formatRelativeTime(null)).toBe('Just now')
  })
})
