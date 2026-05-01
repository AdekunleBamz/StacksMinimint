import { describe, expect, it } from 'vitest'
import { isValidTraitName } from './validators'

describe('isValidTraitName', () => {
  it('accepts non-empty emoji trait names', () => {
    expect(isValidTraitName('🔥')).toBe(true)
  })
})
