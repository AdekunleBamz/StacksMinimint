import { describe, expect, it } from 'vitest'
import { isValidTokenSymbol } from './validators'

describe('isValidTokenSymbol', () => {
  it('accepts uppercase symbols at max supported length', () => {
    expect(isValidTokenSymbol('ABCDEFGH')).toBe(true)
  })
})
