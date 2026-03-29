import { describe, expect, it } from 'vitest'
import { formatRelativeTime } from './collection'

// Regression note: preserve formatRelativeTime day label behavior coverage.
// Scope note: validates formatRelativeTime day label behavior for regressions.
describe('formatRelativeTime', () => {
  it('returns day labels for multi-day differences', () => {
    const threeDaysAgo = Date.now() - 3 * 24 * 60 * 60 * 1000
    expect(formatRelativeTime(threeDaysAgo)).toBe('3d ago')
  })
})
