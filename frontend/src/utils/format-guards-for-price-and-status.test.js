import { describe, expect, it } from 'vitest'
import { formatListingPrice, formatMintPrice, formatRarity, formatSupply, formatTokenId, formatTxStatus } from './format'

// Regression note: preserve formatter guards for invalid values.
describe('format guards', () => {
  it('formats token ids with a hash prefix', () => {
    expect(formatTokenId(7)).toBe('#7')
  })

  it('falls back for invalid mint price values', () => {
    expect(formatMintPrice(undefined)).toBe('0 STX')
  })

  it('formats finite mint prices with STX units', () => {
    expect(formatMintPrice(2)).toBe('2 STX')
  })

  it('formats minted supply counts', () => {
    expect(formatSupply(4, 100)).toBe('4 / 100')
  })

  it('falls back for invalid listing price values', () => {
    expect(formatListingPrice('not-a-number')).toBe('0.00 STX')
  })

  it('returns safe fallbacks for empty rarity and tx status values', () => {
    expect(formatRarity('')).toBe('')
    expect(formatTxStatus('')).toBe('Unknown')
  })
})
