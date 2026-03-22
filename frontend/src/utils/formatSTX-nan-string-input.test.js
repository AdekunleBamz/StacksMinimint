import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

describe('formatSTX', () => {
  it('returns zero when NaN is provided as a string', () => {
    expect(formatSTX('NaN')).toBe('0')
  })
})
