import { describe, expect, it } from 'vitest'
import { isValidTraitCount } from './validators'

describe('isValidTraitCount', () => {
  it('rejects trait counts above the supported maximum', () => {
    expect(isValidTraitCount(65)).toBe(false)
  })
})
