import { describe, expect, it } from 'vitest'
import { isValidTraitCount } from './validators'

describe('isValidTraitCount', () => {
  it('accepts trait counts at the supported maximum', () => {
    expect(isValidTraitCount(64)).toBe(true)
  })
})
