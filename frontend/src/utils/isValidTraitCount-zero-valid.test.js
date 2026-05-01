import { describe, expect, it } from 'vitest'
import { isValidTraitCount } from './validators'

describe('isValidTraitCount', () => {
  it('accepts zero trait counts', () => {
    expect(isValidTraitCount(0)).toBe(true)
  })
})
