import { describe, expect, it } from 'vitest'
import { isNumericString } from './strings'

describe('isNumericString', () => {
  it('rejects exponent notation strings', () => {
    expect(isNumericString('1e6')).toBe(false)
  })
})
