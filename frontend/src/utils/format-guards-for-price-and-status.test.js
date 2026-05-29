import { describe, expect, it } from 'vitest'
import { formatBidAmount, formatBlocksRemaining, formatBlockTime, formatCID, formatCollectionSize, formatGatewayUrl, formatIPFSUrl, formatListingPrice, formatMicroStx, formatMintPrice, formatNFTName, formatOwnerCount, formatRarity, formatRoyalty, formatSupply, formatTokenId, formatTraitCount, formatTraitValue, formatTxStatus } from './format'

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

  it('formats listing prices with fixed decimals', () => {
    expect(formatListingPrice(1.5)).toBe('1.50 STX')
  })

  it('formats bid amount labels', () => {
    expect(formatBidAmount(3)).toBe('Bid: 3 STX')
  })

  it('formats NFT names with token ids', () => {
    expect(formatNFTName('MiniMint', 9)).toBe('MiniMint #9')
  })

  it('formats IPFS URLs from CIDs', () => {
    expect(formatIPFSUrl('bafy')).toBe('ipfs://bafy')
  })

  it('formats IPFS gateway URLs from CIDs', () => {
    expect(formatGatewayUrl('bafy')).toBe('https://ipfs.io/ipfs/bafy')
  })

  it('formats micro-STX values with fixed precision', () => {
    expect(formatMicroStx(1500000)).toBe('1.500000 STX')
  })

  it('formats block times in minutes', () => {
    expect(formatBlockTime(120000)).toBe('2 min')
  })

  it('formats trait count labels', () => {
    expect(formatTraitCount(6)).toBe('6 traits')
  })

  it('returns safe fallbacks for empty rarity and tx status values', () => {
    expect(formatRarity('')).toBe('')
    expect(formatTxStatus('')).toBe('Unknown')
  })

  it('trims transaction status labels before title casing', () => {
    expect(formatTxStatus(' pending ')).toBe('Pending')
  })

  it('trims rarity labels before title casing', () => {
    expect(formatRarity(' rare ')).toBe('Rare')
  })

  it('shortens CID labels for compact display', () => {
    expect(formatCID('bafybeigdyrzt')).toBe('bafybeig...yrzt')
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
