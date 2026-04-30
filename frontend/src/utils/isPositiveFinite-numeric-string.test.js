import { describe, expect, it } from 'vitest'
import { isPositiveFinite } from './validators'

describe('isPositiveFinite', () => {
  it('accepts positive numeric strings', () => {
    expect(isPositiveFinite('0.01')).toBe(true)
  })
})
