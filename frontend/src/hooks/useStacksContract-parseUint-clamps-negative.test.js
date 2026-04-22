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

  it('floors fractional uints below one to zero', () => {
    expect(parseUint(0.99)).toBe(0)
  })

  it('caps huge inputs at Number.MAX_SAFE_INTEGER', () => {
    expect(parseUint('90071992547409931234')).toBe(Number.MAX_SAFE_INTEGER)
    expect(parseUint(90071992547409931234n)).toBe(Number.MAX_SAFE_INTEGER)
    expect(parseUint(Number.MAX_SAFE_INTEGER + 20)).toBe(Number.MAX_SAFE_INTEGER)
  })

  it('clamps bigint inputs just above the safe integer limit', () => {
    expect(parseUint(BigInt(Number.MAX_SAFE_INTEGER) + 1n)).toBe(Number.MAX_SAFE_INTEGER)
  })

  it('returns zero for non-digit numeric strings', () => {
    expect(parseUint('123abc')).toBe(0)
    expect(parseUint('12.3')).toBe(0)
  })

  it('returns zero for non-finite number input', () => {
    expect(parseUint(Number.POSITIVE_INFINITY)).toBe(0)
    expect(parseUint(Number.NaN)).toBe(0)
  })

  it('normalizes negative zero number input', () => {
    expect(parseUint(-0)).toBe(0)
  })

  it('preserves exact bigint values inside the safe integer range', () => {
    expect(parseUint(12345n)).toBe(12345)
    expect(parseUint(0n)).toBe(0)
  })

  it('parses digit strings with leading zeros', () => {
    expect(parseUint('00042')).toBe(42)
  })

  it('parses the zero string as zero', () => {
    expect(parseUint('0')).toBe(0)
  })

  it('preserves zero number inputs', () => {
    expect(parseUint(0)).toBe(0)
  })

  it('returns zero for negative numeric strings', () => {
    expect(parseUint('-1')).toBe(0)
  })

  it('returns zero for decimal-notation strings', () => {
    expect(parseUint('12.00')).toBe(0)
  })

  it('returns zero for plus-prefixed numeric strings', () => {
    expect(parseUint('+12')).toBe(0)
  })

  it('returns zero for exponential numeric strings', () => {
    expect(parseUint('1e3')).toBe(0)
  })

  it('returns zero for empty strings', () => {
    expect(parseUint('')).toBe(0)
  })

  it('preserves Number.MAX_SAFE_INTEGER exactly', () => {
    expect(parseUint(Number.MAX_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER)
  })

  it('preserves max safe bigint inputs exactly', () => {
    expect(parseUint(BigInt(Number.MAX_SAFE_INTEGER))).toBe(Number.MAX_SAFE_INTEGER)
  })

  it('preserves max safe integer strings exactly', () => {
    expect(parseUint(String(Number.MAX_SAFE_INTEGER))).toBe(Number.MAX_SAFE_INTEGER)
  })

  it('returns zero for object input values', () => {
    expect(parseUint({ value: 1 })).toBe(0)
  })

  it('returns zero for nullish input values', () => {
    expect(parseUint(null)).toBe(0)
    expect(parseUint(undefined)).toBe(0)
  })

  it('returns zero for symbol input values', () => {
    expect(parseUint(Symbol('amount'))).toBe(0)
  })

  it('returns zero for boolean input values', () => {
    expect(parseUint(true)).toBe(0)
    expect(parseUint(false)).toBe(0)
  })

  it('returns zero for array input values', () => {
    expect(parseUint([1])).toBe(0)
  })

  it('returns zero for whitespace-only strings', () => {
    expect(parseUint('   ')).toBe(0)
  })

  it('returns zero for padded numeric strings', () => {
    expect(parseUint(' 42 ')).toBe(0)
  })

  it('returns zero for tab-padded numeric strings', () => {
    expect(parseUint('\t42\t')).toBe(0)
  })
})
