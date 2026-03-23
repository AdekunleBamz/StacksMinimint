import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

describe('formatSTX', () => {
  it('accepts exponent notation in string input', () => {
    expect(formatSTX('1e6')).toBe('1')
  })
})
