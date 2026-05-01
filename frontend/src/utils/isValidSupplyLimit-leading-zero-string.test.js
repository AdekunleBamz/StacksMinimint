import { describe, expect, it } from 'vitest'
import { isValidSupplyLimit } from './validators'

describe('isValidSupplyLimit', () => {
  it('accepts leading-zero numeric strings', () => {
    expect(isValidSupplyLimit('0004')).toBe(true)
  })
})
