import { describe, expect, it } from 'vitest'
import { formatRelativeTime } from './collection'

// Regression note: preserve formatRelativeTime 24 hour boundary behavior coverage.
// Scope note: validates formatRelativeTime 24 hour boundary behavior for regressions.
describe('formatRelativeTime', () => {
  it('switches to day labels at twenty-four hours', () => {
    const twentyFourHoursAgo = Date.now() - (24 * 60 * 60 * 1000)
    expect(formatRelativeTime(twentyFourHoursAgo)).toBe('1d ago')
  })
})
