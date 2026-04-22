import { describe, expect, it } from 'vitest'
import { formatBlocksRemaining, formatCID, formatCollectionSize, formatListingPrice, formatMintPrice, formatOwnerCount, formatRarity, formatRoyalty, formatSupply, formatTokenId, formatTraitValue, formatTxStatus } from './format'

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

  it('formats basis point royalties as percentages', () => {
    expect(formatRoyalty(250)).toBe('2.5%')
  })

  it('falls back for invalid listing price values', () => {
    expect(formatListingPrice('not-a-number')).toBe('0.00 STX')
  })

  it('returns safe fallbacks for empty rarity and tx status values', () => {
    expect(formatRarity('')).toBe('')
    expect(formatTxStatus('')).toBe('Unknown')
  })

  it('trims rarity labels before title casing', () => {
    expect(formatRarity(' rare ')).toBe('Rare')
  })

  it('shortens CID labels for compact display', () => {
    expect(formatCID('bafybeigdyrzt')).toBe('bafybeigdy...')
  })

  it('returns empty CID labels for missing values', () => {
    expect(formatCID('')).toBe('')
  })

  it('formats remaining block labels', () => {
    expect(formatBlocksRemaining(12)).toBe('12 blocks')
  })

  it('stringifies trait values for display', () => {
    expect(formatTraitValue(42)).toBe('42')
  })

  it('formats collection sizes with item units', () => {
    expect(formatCollectionSize(1200)).toBe('1,200 items')
  })

  it('formats owner count labels', () => {
    expect(formatOwnerCount(5)).toBe('5 owners')
  })
})
