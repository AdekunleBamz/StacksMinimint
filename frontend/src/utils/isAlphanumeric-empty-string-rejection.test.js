import { describe, expect, it } from 'vitest'
import { isAlphanumeric } from './strings'

describe('isAlphanumeric', () => {
  it('rejects empty strings', () => {
    expect(isAlphanumeric('')).toBe(false)
  })
})
