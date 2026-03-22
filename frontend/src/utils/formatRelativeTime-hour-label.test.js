import { describe, expect, it } from 'vitest'
import { formatRelativeTime } from './collection'

describe('formatRelativeTime', () => {
  it('returns hour labels for multi-hour differences', () => {
    const twoHoursAgo = Date.now() - 2 * 60 * 60 * 1000
    expect(formatRelativeTime(twoHoursAgo)).toBe('2h ago')
  })
})
