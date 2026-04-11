import { describe, expect, it } from 'vitest'
import { parseUint } from './useStacksContract'

describe('parseUint', () => {
  it('returns zero when a negative number is passed in', () => {
    expect(parseUint(-4)).toBe(0)
    expect(parseUint(-4n)).toBe(0)
  })

  it('floors decimal numbers before returning the value', () => {
    expect(parseUint(4.99)).toBe(4)
    expect(parseUint(12.9)).toBe(12)
  })

  it('caps huge inputs at Number.MAX_SAFE_INTEGER', () => {
    expect(parseUint('90071992547409931234')).toBe(Number.MAX_SAFE_INTEGER)
    expect(parseUint(90071992547409931234n)).toBe(Number.MAX_SAFE_INTEGER)
    expect(parseUint(Number.MAX_SAFE_INTEGER + 20)).toBe(Number.MAX_SAFE_INTEGER)
  })
})
