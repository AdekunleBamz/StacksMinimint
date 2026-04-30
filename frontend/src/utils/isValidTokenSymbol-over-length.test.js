import { describe, expect, it } from 'vitest'
import { isValidTokenSymbol } from './validators'

describe('isValidTokenSymbol', () => {
  it('rejects symbols longer than eight characters', () => {
    expect(isValidTokenSymbol('TOOLONGSY')).toBe(false)
  })
})
