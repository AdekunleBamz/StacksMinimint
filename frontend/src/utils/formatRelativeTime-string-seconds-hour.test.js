import { describe, expect, it } from 'vitest'
import { formatRelativeTime } from './collection'

describe('formatRelativeTime', () => {
  it('accepts second timestamps provided as strings', () => {
    const timestamp = String(Math.floor(Date.now() / 1000) - 3600)
    expect(formatRelativeTime(timestamp)).toBe('1h ago')
  })
})
