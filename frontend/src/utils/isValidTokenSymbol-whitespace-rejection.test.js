import { describe, expect, it } from 'vitest'
import { isValidTokenSymbol } from './validators'

describe('isValidTokenSymbol', () => {
  it('rejects symbols with surrounding whitespace', () => {
    expect(isValidTokenSymbol(' MINI ')).toBe(false)
  })
})
