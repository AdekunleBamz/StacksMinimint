import { describe, expect, it } from 'vitest'
import { isPositiveFinite } from './validators'

describe('isPositiveFinite', () => {
  it('rejects zero values', () => {
    expect(isPositiveFinite(0)).toBe(false)
  })
})
