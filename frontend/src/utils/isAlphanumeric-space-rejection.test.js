import { describe, expect, it } from 'vitest'
import { isAlphanumeric } from './strings'

describe('isAlphanumeric', () => {
  it('rejects values that include whitespace', () => {
    expect(isAlphanumeric('mini mint')).toBe(false)
  })
})
