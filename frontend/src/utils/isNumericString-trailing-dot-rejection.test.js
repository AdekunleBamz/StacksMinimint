import { describe, expect, it } from 'vitest'
import { isNumericString } from './strings'

describe('isNumericString', () => {
  it('rejects values with trailing decimal points', () => {
    expect(isNumericString('42.')).toBe(false)
  })
})
