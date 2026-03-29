import { describe, expect, it } from 'vitest'
import { formatRelativeTime } from './collection'

// Regression note: preserve formatRelativeTime undefined input behavior coverage.
describe('formatRelativeTime', () => {
  it('returns Just now when timestamp is undefined', () => {
    expect(formatRelativeTime(undefined)).toBe('Just now')
  })
})
