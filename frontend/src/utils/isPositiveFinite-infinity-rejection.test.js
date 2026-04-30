import { describe, expect, it } from 'vitest'
import { isPositiveFinite } from './validators'

describe('isPositiveFinite', () => {
  it('rejects Infinity values', () => {
    expect(isPositiveFinite(Infinity)).toBe(false)
  })
})
