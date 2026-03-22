import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

describe('formatSTX', () => {
  it('returns zero for Infinity provided as a string', () => {
    expect(formatSTX('Infinity')).toBe('0')
  })
})
