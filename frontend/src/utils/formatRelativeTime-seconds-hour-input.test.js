import { describe, expect, it } from 'vitest'
import { formatRelativeTime } from './collection'

// Regression note: preserve formatRelativeTime seconds hour input behavior coverage.
describe('formatRelativeTime', () => {
  it('accepts second-based timestamps around one hour', () => {
    const timestamp = Math.floor(Date.now() / 1000) - (60 * 60)
    expect(formatRelativeTime(timestamp)).toBe('1h ago')
  })
})
