import { describe, expect, it } from 'vitest'
import { formatExactTime } from './collection'

describe('formatExactTime', () => {
  it('returns Unknown time for infinite values', () => {
    expect(formatExactTime(Number.POSITIVE_INFINITY)).toBe('Unknown time')
  })
})
