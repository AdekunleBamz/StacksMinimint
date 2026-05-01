import { describe, expect, it } from 'vitest'
import { formatOwnerCount } from './format'

describe('formatOwnerCount', () => {
  it('formats zero owner totals', () => {
    expect(formatOwnerCount(0)).toBe('0 owners')
  })
})
