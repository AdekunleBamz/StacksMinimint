import { describe, expect, it } from 'vitest'
import { formatRelativeTime } from './collection'

// Regression note: preserve formatRelativeTime future values behavior coverage.
// Scope note: validates formatRelativeTime future values behavior for regressions.
describe('formatRelativeTime', () => {
  it('clamps future timestamps to just now', () => {
    const inTwoMinutes = Date.now() + 120000
    expect(formatRelativeTime(inTwoMinutes)).toBe('Just now')
  })
})
