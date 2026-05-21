import { describe, expect, it } from 'vitest'
import * as collection from './collection'

describe('maintenance utility coverage', () => {
  it('formats compact zero STX with fixed decimals', () => {
    expect(collection.formatSTXCompact(0)).toBe('0.00 STX')
  })

  it('keeps negative compact STX values explicit', () => {
    expect(collection.formatSTXCompact(-1000000)).toBe('-1.00 STX')
  })

  it('formats exponent compact STX strings', () => {
    expect(collection.formatSTXCompact('1e6')).toBe('1.00 STX')
  })

  it('normalizes blank compact STX strings to zero', () => {
    expect(collection.formatSTXCompact('')).toBe('0.00 STX')
  })

  it('normalizes blank microstx strings as zero', () => {
    expect(collection.normalizeMicrostxInput('')).toBe(0)
  })

  it('preserves negative microstx normalization', () => {
    expect(collection.normalizeMicrostxInput('-42')).toBe(-42)
  })

  it('describes precise microstx conversions', () => {
    expect(collection.getSTXFormatDescriptor(1234567).formatted).toBe('1.234567')
  })

  it('marks negative microstx descriptors as valid numbers', () => {
    expect(collection.getSTXFormatDescriptor(-1000000).isValid).toBe(true)
  })

  it('formats maximum precision STX values', () => {
    expect(collection.formatSTX(123456789)).toBe('123.456789')
  })

  it('formats exponent STX strings', () => {
    expect(collection.formatSTX('1e6')).toBe('1')
  })

  it('formats addresses with no prefix segment', () => {
    expect(collection.formatAddress('SP1234567890', 0, 4)).toBe('...7890')
  })

  it('uses default address suffix when suffix length is invalid', () => {
    expect(collection.formatAddress('SP1234567890', 4, -1)).toBe('SP1234567890')
  })

  it('keeps false limit values visible', () => {
    expect(collection.isLimitFallback(false)).toBe(false)
  })

  it('formats false limit values as text', () => {
    expect(collection.getLimitText(false)).toBe('false')
  })

  it('describes custom fallback labels for missing limits', () => {
    expect(collection.describeLimit(undefined, 'Any')).toEqual({
      text: 'Any',
      isFallback: true,
      valueType: 'empty',
    })
  })

  it('normalizes blank relative timestamp strings to epoch zero', () => {
    expect(collection.normalizeRelativeTimestamp('')).toBe(0)
  })

  it('keeps millisecond timestamps at the detection boundary', () => {
    expect(collection.normalizeRelativeTimestamp(1000000000000)).toBe(1000000000000)
  })

  it('normalizes blank exact timestamp strings to epoch zero', () => {
    expect(collection.normalizeExactTimestamp('')).toBe(0)
  })

  it('labels matching relative timestamps as just now', () => {
    expect(collection.getRelativeTimeDescriptor(120000, 120000)).toEqual({
      label: 'Just now',
      unit: 'now',
      value: 0,
      isFuture: false,
    })
  })

  it('exposes exact descriptor ISO output for epoch timestamps', () => {
    expect(collection.getExactTimeDescriptor(0, 'en-US').iso).toBe('1970-01-01T00:00:00.000Z')
  })
}
