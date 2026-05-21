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
}
