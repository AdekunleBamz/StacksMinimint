import { describe, expect, it } from 'vitest'
import { isValidTokenIdInSupply } from './validators'

describe('isValidTokenIdInSupply', () => {
  it('accepts token ids at the max supply boundary', () => {
    expect(isValidTokenIdInSupply(10000)).toBe(true)
  })
})
