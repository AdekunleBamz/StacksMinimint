import { describe, expect, it } from 'vitest'
import { isNumericString } from './strings'

describe('isNumericString', () => {
  it('rejects empty string values', () => {
    expect(isNumericString('')).toBe(false)
  })
})
