import { describe, expect, it } from 'vitest'
import { isValidTokenSymbol } from './validators'

describe('isValidTokenSymbol', () => {
  it('rejects lowercase token symbols', () => {
    expect(isValidTokenSymbol('mini')).toBe(false)
  })
})
