import { describe, expect, it } from 'vitest'
import { isValidTokenIdInSupply } from './validators'

describe('isValidTokenIdInSupply', () => {
  it('rejects zero token ids', () => {
    expect(isValidTokenIdInSupply(0)).toBe(false)
  })
})
