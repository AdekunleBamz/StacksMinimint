import { describe, expect, it } from 'vitest'
import { isValidTokenIdInSupply } from './validators'

describe('isValidTokenIdInSupply', () => {
  it('rejects token ids above max supply', () => {
    expect(isValidTokenIdInSupply(10001)).toBe(false)
  })
})
