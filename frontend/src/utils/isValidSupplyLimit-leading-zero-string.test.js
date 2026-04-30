import { describe, expect, it } from 'vitest'
import { isValidSupplyLimit } from './validators'

describe('isValidSupplyLimit', () => {
  it('accepts integer strings with leading zeros', () => {
    expect(isValidSupplyLimit('001')).toBe(true)
  })
})
