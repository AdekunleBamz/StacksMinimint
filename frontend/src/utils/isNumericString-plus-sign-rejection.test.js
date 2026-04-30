import { describe, expect, it } from 'vitest'
import { isNumericString } from './strings'

describe('isNumericString', () => {
  it('rejects plus-prefixed numeric strings', () => {
    expect(isNumericString('+42')).toBe(false)
  })
})
