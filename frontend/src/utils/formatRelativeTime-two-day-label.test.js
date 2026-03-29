import { describe, expect, it } from 'vitest'
import { formatRelativeTime } from './collection'

// Regression note: preserve formatRelativeTime two day label behavior coverage.
// Scope note: validates formatRelativeTime two day label behavior for regressions.
describe('formatRelativeTime', () => {
  it('uses day labels for multi-day differences', () => {
    const timestamp = Date.now() - (2 * 24 * 60 * 60 * 1000)
    expect(formatRelativeTime(timestamp)).toBe('2d ago')
  })
})
