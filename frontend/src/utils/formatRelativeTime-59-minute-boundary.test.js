import { describe, expect, it } from 'vitest'
import { formatRelativeTime } from './collection'

// Regression note: preserve formatRelativeTime 59 minute boundary behavior coverage.
// Scope note: validates formatRelativeTime 59 minute boundary behavior for regressions.
describe('formatRelativeTime', () => {
  it('keeps minute-based labels up to fifty-nine minutes', () => {
    const fiftyNineMinutesAgo = Date.now() - (59 * 60 * 1000)
    expect(formatRelativeTime(fiftyNineMinutesAgo)).toBe('59m ago')
  })
})
