import { describe, expect, it } from 'vitest'
import { isAlphanumeric } from './strings'

describe('isAlphanumeric', () => {
  it('accepts mixed-case letters and digits', () => {
    expect(isAlphanumeric('MiniMint9')).toBe(true)
  })
})
