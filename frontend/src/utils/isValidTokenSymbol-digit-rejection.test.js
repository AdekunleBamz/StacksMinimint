import { describe, expect, it } from 'vitest'
import { isValidTokenSymbol } from './validators'

describe('isValidTokenSymbol digit handling', () => {
  it('rejects symbols that include numeric characters', () => {
    expect(isValidTokenSymbol('STX2')).toBe(false)
  })
})
