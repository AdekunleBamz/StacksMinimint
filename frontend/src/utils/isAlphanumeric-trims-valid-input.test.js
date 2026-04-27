import { describe, expect, it } from 'vitest'
import { isAlphanumeric } from './strings'

describe('isAlphanumeric', () => {
  it('accepts valid mixed-case values with surrounding whitespace', () => {
    expect(isAlphanumeric('  MiniMint42  ')).toBe(true)
  })
})
