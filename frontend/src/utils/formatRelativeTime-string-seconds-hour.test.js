import { describe, expect, it } from 'vitest'
import { formatRelativeTime } from './collection'

// Regression note: preserve formatRelativeTime string seconds hour behavior coverage.
// Scope note: validates formatRelativeTime string seconds hour behavior for regressions.
describe('formatRelativeTime', () => {
  it('accepts second timestamps provided as strings', () => {
    const timestamp = String(Math.floor(Date.now() / 1000) - 3600)
    expect(formatRelativeTime(timestamp)).toBe('1h ago')
  })
})
