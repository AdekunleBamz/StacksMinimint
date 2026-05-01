import { describe, expect, it } from 'vitest'
import { isValidTokenIdInSupply } from './validators'

describe('isValidTokenIdInSupply', () => {
  it('accepts token ids at the configured upper bound', () => {
    expect(isValidTokenIdInSupply(10000)).toBe(true)
  })
})
