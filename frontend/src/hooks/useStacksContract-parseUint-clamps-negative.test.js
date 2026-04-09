import { describe, expect, it } from 'vitest'
import { parseUint } from './useStacksContract'

describe('parseUint', () => {
  it('returns zero when a negative number is passed in', () => {
    expect(parseUint(-4)).toBe(0)
    expect(parseUint(-4n)).toBe(0)
  })
})
