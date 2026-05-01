import { describe, expect, it } from 'vitest'
import { isPositiveFinite } from './validators'

describe('isPositiveFinite', () => {
  it('accepts trimmed numeric string values above zero', () => {
    expect(isPositiveFinite(' 2.75 ')).toBe(true)
  })
})
