import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

describe('formatSTX', () => {
  it('returns zero when value is null', () => {
    expect(formatSTX(null)).toBe('0')
  })
})
