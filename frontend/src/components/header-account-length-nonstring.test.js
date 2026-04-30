import { describe, expect, it } from 'vitest'
import { getHeaderAccountLength } from './Header'

describe('getHeaderAccountLength', () => {
  it('returns zero for non-string account values', () => {
    expect(getHeaderAccountLength({ value: 'SP123' }, true)).toBe(0)
  })
})
