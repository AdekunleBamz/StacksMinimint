import { describe, expect, it } from 'vitest'
import * as collection from './collection'
import * as format from './format'
import * as strings from './strings'
import * as utils from './index'
import * as validators from './validators'

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
    expect(collection.getRelativeTimeDescriptor(120, 120000)).toEqual({
      label: 'Just now',
      unit: 'now',
      value: 0,
      isFuture: false,
    })
  })

  it('exposes exact descriptor ISO output for epoch timestamps', () => {
    expect(collection.getExactTimeDescriptor(0, 'en-US').iso).toBe('1970-01-01T00:00:00.000Z')
  })

  it('formats zero mint price values explicitly', () => {
    expect(format.formatMintPrice(0)).toBe('0 STX')
  })

  it('trims numeric mint price strings through number coercion', () => {
    expect(format.formatMintPrice(' 3 ')).toBe('3 STX')
  })

  it('uses zero supply defaults for missing values', () => {
    expect(format.formatSupply(undefined, undefined)).toBe('0 / 0')
  })

  it('formats non-round royalty basis points', () => {
    expect(format.formatRoyalty(333)).toBe('3.3%')
  })

  it('capitalizes multiword rarity labels only at the front', () => {
    expect(format.formatRarity('mythic rare')).toBe('Mythic rare')
  })

  it('keeps compact CID output deterministic for nine character values', () => {
    expect(format.formatCID('123456789')).toBe('12345678...6789')
  })

  it('preserves boolean block labels through display formatting', () => {
    expect(format.formatBlocksRemaining(false)).toBe('false blocks')
  })

  it('formats zero trait values without falling back', () => {
    expect(format.formatTraitValue(0)).toBe('0')
  })

  it('formats million-scale collection sizes with separators', () => {
    expect(format.formatCollectionSize(1000000)).toBe('1,000,000 items')
  })

  it('uses zero owner defaults for undefined counts', () => {
    expect(format.formatOwnerCount(undefined)).toBe('0 owners')
  })

  it('formats zero listing prices with two decimals', () => {
    expect(format.formatListingPrice(0)).toBe('0.00 STX')
  })

  it('formats string bid amounts without numeric coercion', () => {
    expect(format.formatBidAmount('7.5')).toBe('Bid: 7.5 STX')
  })

  it('capitalizes multiword transaction statuses once', () => {
    expect(format.formatTxStatus('confirmed success')).toBe('Confirmed success')
  })

  it('keeps zero NFT ids visible in names', () => {
    expect(format.formatNFTName('Art', 0)).toBe('Art #0')
  })

  it('coerces boolean CIDs into IPFS URLs', () => {
    expect(format.formatIPFSUrl(true)).toBe('ipfs://true')
  })

  it('removes repeated leading slashes from gateway CIDs', () => {
    expect(format.formatGatewayUrl('///Qmabc')).toBe('https://ipfs.io/ipfs/Qmabc')
  })

  it('formats string microstx values with fixed precision', () => {
    expect(format.formatMicroStx('2500000')).toBe('2.500000 STX')
  })

  it('rounds sub-half-minute block times down', () => {
    expect(format.formatBlockTime(29999)).toBe('0 min')
  })

  it('keeps blank trait count strings visible', () => {
    expect(format.formatTraitCount('')).toBe(' traits')
  })

  it('calculates mint cost for padded quantity strings', () => {
    expect(format.calculateTotalMintCost('02', 5)).toBe('10 STX')
  })

  it('uses singular mint labels for numeric strings', () => {
    expect(format.formatMintCount('1')).toBe('1 mint')
  })

  it('normalizes padded whitelist window bounds', () => {
    expect(format.formatWhitelistWindow('001', '002')).toBe('WL 1-2')
  })

  it('formats numeric owner tags through string coercion', () => {
    expect(format.formatOwnerTag(123)).toBe('Owner: 123')
  })

  it('formats zero basis points with two decimals', () => {
    expect(format.formatPercentFromBps(0)).toBe('0.00%')
  })

  it('formats null reveal delays as zero blocks', () => {
    expect(format.formatRevealDelay(null)).toBe('0 blocks to reveal')
  })

  it('uppercases token symbols without stripping internal punctuation', () => {
    expect(format.formatTokenSymbol('stx-1')).toBe('STX-1')
  })

  it('keeps numeric collection titles visible', () => {
    expect(format.formatCollectionTitle(0)).toBe('0')
  })

  it('formats zero floor prices with a floor label', () => {
    expect(format.formatFloorPrice(0)).toBe('Floor 0.00 STX')
  })

  it('formats null mint batches as zero quantity', () => {
    expect(format.formatMintBatch(null)).toBe('Batch x0')
  })

  it('trims long addresses before short display formatting', () => {
    expect(format.formatAddressShort('  SP1234567890  ')).toBe('SP1234...7890')
  })

  it('does not treat numeric zero as blank text', () => {
    expect(strings.isBlank(0)).toBe(false)
  })

  it('does not treat false as blank text', () => {
    expect(strings.isBlank(false)).toBe(false)
  })

  it('slugifies names with punctuation removed', () => {
    expect(strings.slugify('Stacks & Bitcoin NFTs')).toBe('stacks-bitcoin-nfts')
  })

  it('collapses underscore-heavy slugs at the edges', () => {
    expect(strings.slugify('___Stacks___Mint___')).toBe('stacks-mint')
  })

  it('keeps plural labels for string one counts', () => {
    expect(strings.pluralize('1', 'mint')).toBe('mints')
  })

  it('zero-pads negative zero values consistently', () => {
    expect(strings.zeroPad(-0, 4)).toBe('0000')
  })

  it('accepts negative decimal numeric strings', () => {
    expect(strings.isNumericString('-42.5')).toBe(true)
  })

  it('accepts uppercase alphanumeric strings', () => {
    expect(strings.isAlphanumeric('ABC123')).toBe(true)
  })

  it('formats trimmed addresses with no prefix segment', () => {
    expect(strings.truncateAddress(' SP1234567890 ', 0, 4)).toBe('...7890')
  })

  it('capitalizes after leading spaces', () => {
    expect(strings.capitalize(' hello')).toBe('Hello')
  })

  it('accepts maximum length CID values', () => {
    expect(validators.isValidCID('a'.repeat(128))).toBe(true)
  })

  it('rejects overlong CID values', () => {
    expect(validators.isValidCID('a'.repeat(129))).toBe(false)
  })

  it('accepts maximum royalty basis points', () => {
    expect(validators.isValidRoyaltyBps(10000)).toBe(true)
  })

  it('rejects royalty basis points over the maximum', () => {
    expect(validators.isValidRoyaltyBps(10001)).toBe(false)
  })

  it('keeps rarity tier validation case-sensitive', () => {
    expect(validators.isValidRarityTier('Legendary')).toBe(false)
  })

  it('rejects lowercase owner address prefixes', () => {
    expect(validators.isValidOwnerAddress(`sp${'A'.repeat(37)}`)).toBe(false)
  })

  it('accepts trimmed explorer HTTPS URLs', () => {
    expect(validators.isValidExplorerUrl(' https://explorer.stacks.co ')).toBe(true)
  })

  it('exposes compact STX formatting from the utility barrel', () => {
    expect(utils.formatSTXCompact(1500000)).toBe('1.50 STX')
  })

  it('exposes string defaults from the utility barrel', () => {
    expect(utils.stringsDefault.slugify('Mini Mint')).toBe('mini-mint')
  })

  it('exposes collection defaults from the utility barrel', () => {
    expect(utils.collectionDefault.formatSTX(1000000)).toBe('1')
  })
})
