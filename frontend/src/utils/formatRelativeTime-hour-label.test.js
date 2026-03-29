import { describe, expect, it } from 'vitest'
import { formatRelativeTime } from './collection'

// Regression note: preserve formatRelativeTime hour label behavior coverage.
// Scope note: validates formatRelativeTime hour label behavior for regressions.
describe('formatRelativeTime', () => {
  it('returns hour labels for multi-hour differences', () => {
    const twoHoursAgo = Date.now() - 2 * 60 * 60 * 1000
    expect(formatRelativeTime(twoHoursAgo)).toBe('2h ago')
  })
})
