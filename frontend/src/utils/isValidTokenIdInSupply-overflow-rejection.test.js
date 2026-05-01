import { describe, expect, it } from 'vitest'
import { isValidTokenIdInSupply } from './validators'

describe('isValidTokenIdInSupply', () => {
  it('rejects token ids above the supply limit', () => {
    expect(isValidTokenIdInSupply(10001)).toBe(false)
  })
})
