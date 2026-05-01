import { describe, expect, it } from 'vitest'
import { isBlank } from './strings'

describe('isBlank', () => {
  it('does not treat non-string primitives as blank', () => {
    expect(isBlank(0)).toBe(false)
  })
})
