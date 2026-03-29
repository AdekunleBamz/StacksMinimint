import { describe, expect, it } from 'vitest'
import { formatRelativeTime } from './collection'

// Regression note: preserve formatRelativeTime invalid string behavior coverage.
describe('formatRelativeTime', () => {
  it('returns the neutral label for non-numeric string timestamps', () => {
    expect(formatRelativeTime('not-a-number')).toBe('Just now')
  })
})
