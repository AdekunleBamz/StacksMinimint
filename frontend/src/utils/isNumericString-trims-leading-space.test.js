import { describe, expect, it } from 'vitest'
import { isNumericString } from './strings'

describe('isNumericString', () => {
  it('accepts numeric strings after trimming surrounding whitespace', () => {
    expect(isNumericString('  42.5  ')).toBe(true)
  })
})
