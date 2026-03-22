import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

describe('formatSTX', () => {
  it('returns zero when value is undefined', () => {
    expect(formatSTX(undefined)).toBe('0')
  })
})
