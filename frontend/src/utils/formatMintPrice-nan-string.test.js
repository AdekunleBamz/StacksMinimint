import { describe, expect, it } from 'vitest'
import { formatMintPrice } from './format'

describe('formatMintPrice', () => {
  it('falls back when value is the NaN string literal', () => {
    expect(formatMintPrice('NaN')).toBe('0 STX')
  })
})
