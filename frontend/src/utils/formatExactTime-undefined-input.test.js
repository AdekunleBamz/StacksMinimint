import { describe, expect, it } from 'vitest'
import { formatExactTime } from './collection'

describe('formatExactTime', () => {
  it('returns Unknown time for undefined values', () => {
    expect(formatExactTime(undefined)).toBe('Unknown time')
  })
})
