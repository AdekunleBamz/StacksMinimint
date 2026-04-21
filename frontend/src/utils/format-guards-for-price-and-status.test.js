import { describe, expect, it } from 'vitest'
import { formatListingPrice, formatMintPrice, formatRarity, formatTxStatus } from './format'

// Regression note: preserve formatter guards for invalid values.
describe('format guards', () => {
  it('falls back for invalid mint price values', () => {
    expect(formatMintPrice(undefined)).toBe('0 STX')
  })

  it('falls back for invalid listing price values', () => {
    expect(formatListingPrice('not-a-number')).toBe('0.00 STX')
  })

  it('returns safe fallbacks for empty rarity and tx status values', () => {
    expect(formatRarity('')).toBe('')
    expect(formatTxStatus('')).toBe('Unknown')
  })
})
