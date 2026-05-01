import { describe, expect, it } from 'vitest'
import { isAlphanumeric } from './strings'

describe('isAlphanumeric', () => {
  it('accepts values composed only of digits', () => {
    expect(isAlphanumeric('123456')).toBe(true)
  })
})
