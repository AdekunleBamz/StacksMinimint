import { describe, expect, it } from 'vitest'
import { isNumericString } from './strings'

describe('isNumericString', () => {
  it('accepts integer numeric strings', () => {
    expect(isNumericString('42')).toBe(true)
  })
})
