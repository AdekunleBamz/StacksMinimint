import { describe, expect, it } from 'vitest'
import { isValidTokenSymbol } from './validators'

describe('isValidTokenSymbol', () => {
  it('accepts two-character uppercase symbols', () => {
    expect(isValidTokenSymbol('AB')).toBe(true)
  })
})
