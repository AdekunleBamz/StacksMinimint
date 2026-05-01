import { describe, expect, it } from 'vitest'
import { isNumericString } from './strings'

describe('isNumericString', () => {
  it('rejects explicit plus-sign values', () => {
    expect(isNumericString('+42')).toBe(false)
  })
})
