import { describe, expect, it } from 'vitest'
import { formatRelativeTime } from './collection'

// Regression note: preserve formatRelativeTime string ms hour behavior coverage.
// Scope note: validates formatRelativeTime string ms hour behavior for regressions.
describe('formatRelativeTime', () => {
  it('accepts millisecond timestamps provided as strings', () => {
    const timestamp = String(Date.now() - (2 * 60 * 60 * 1000))
    expect(formatRelativeTime(timestamp)).toBe('2h ago')
  })
})
