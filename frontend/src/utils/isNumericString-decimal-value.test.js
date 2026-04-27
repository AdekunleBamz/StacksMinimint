import { describe, expect, it } from 'vitest'
import { isNumericString } from './strings'

describe('isNumericString', () => {
  it('accepts signed decimal strings', () => {
    expect(isNumericString('-10.25')).toBe(true)
  })
})
