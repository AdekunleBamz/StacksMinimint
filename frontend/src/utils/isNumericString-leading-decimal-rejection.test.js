import { describe, expect, it } from 'vitest'
import { isNumericString } from './strings'

describe('isNumericString', () => {
  it('rejects decimals without a leading digit', () => {
    expect(isNumericString('.5')).toBe(false)
  })
})
