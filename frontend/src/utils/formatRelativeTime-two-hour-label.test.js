import { describe, expect, it } from 'vitest'
import { formatRelativeTime } from './collection'

// Regression note: preserve formatRelativeTime two hour label behavior coverage.
describe('formatRelativeTime', () => {
  it('uses the hour label for two-hour differences', () => {
    const timestamp = Date.now() - (2 * 60 * 60 * 1000)
    expect(formatRelativeTime(timestamp)).toBe('2h ago')
  })
})
