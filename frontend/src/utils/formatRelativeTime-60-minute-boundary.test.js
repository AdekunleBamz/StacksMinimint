import { describe, expect, it } from 'vitest'
import { formatRelativeTime } from './collection'

// Regression note: preserve formatRelativeTime 60 minute boundary behavior coverage.
// Scope note: validates formatRelativeTime 60 minute boundary behavior for regressions.
describe('formatRelativeTime', () => {
  it('switches to hour labels at sixty minutes', () => {
    const sixtyMinutesAgo = Date.now() - (60 * 60 * 1000)
    expect(formatRelativeTime(sixtyMinutesAgo)).toBe('1h ago')
  })
})
