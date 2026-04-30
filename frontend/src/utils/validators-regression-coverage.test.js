import { describe, expect, it } from 'vitest'
import {
  isValidBatchTotal,
  isValidBidAmount,
  isValidBlockHeight,
  isValidCID,
  isValidCollectionName,
  isValidExplorerUrl,
  isValidListingPrice,
  isValidMaxPerWallet,
  isValidMetadataVersion,
  isValidMintBatch,
  isValidMintCount,
  isValidMintPrice,
  isValidMintPriceMicrostx,
  isValidOwnerAddress,
  isValidProvenanceHash,
  isValidRarityTier,
  isValidRevealDelay,
  isValidRoyaltyBps,
  isValidSupplyLimit,
  isValidTokenId,
  isValidTokenIdInSupply,
  isValidTokenSymbol,
  isValidTokenURI,
  isValidTraitCount,
  isValidTraitName,
  isValidTxId,
  isValidWalletLimit,
  isPositiveFinite,
} from './validators'

describe('validator regression coverage', () => {
  it('accepts trimmed numeric token id strings', () => {
    expect(isValidTokenId(' 42 ')).toBe(true)
  })
})

describe('token id boundaries', () => {
  it('rejects negative token ids', () => {
    expect(isValidTokenId(-1)).toBe(false)
  })
})

describe('token id decimals', () => {
  it('rejects decimal token ids', () => {
    expect(isValidTokenId('3.14')).toBe(false)
  })
})

describe('mint count coercion', () => {
  it('accepts numeric string mint counts', () => {
    expect(isValidMintCount('2')).toBe(true)
  })
})

describe('mint count lower bound', () => {
  it('rejects zero mint counts', () => {
    expect(isValidMintCount(0)).toBe(false)
  })
})

describe('mint count whole numbers', () => {
  it('rejects decimal mint counts', () => {
    expect(isValidMintCount('2.5')).toBe(false)
  })
})

describe('cid normalization', () => {
  it('accepts trimmed cid values', () => {
    expect(isValidCID('  QmYwAPJzv5CZsnAzt8auVTLnS4H7rZ5xR2QYtS85dFvJ7s  ')).toBe(true)
  })
})

describe('cid minimum length', () => {
  it('rejects short cid values', () => {
    expect(isValidCID('short')).toBe(false)
  })
})

describe('cid input type', () => {
  it('rejects non-string cid inputs', () => {
    expect(isValidCID(1234567890)).toBe(false)
  })
})

describe('royalty bounds', () => {
  it('accepts min and max royalty basis points', () => {
    expect(isValidRoyaltyBps(0)).toBe(true)
    expect(isValidRoyaltyBps(10000)).toBe(true)
  })
})

describe('royalty upper bound', () => {
  it('rejects royalty values above maximum', () => {
    expect(isValidRoyaltyBps(10001)).toBe(false)
  })
})

describe('royalty input type', () => {
  it('rejects non-numeric royalty values', () => {
    expect(isValidRoyaltyBps('not-a-number')).toBe(false)
  })
})

describe('metadata version coercion', () => {
  it('accepts numeric string metadata versions', () => {
    expect(isValidMetadataVersion('1')).toBe(true)
  })
})

describe('metadata version minimum', () => {
  it('rejects zero metadata version values', () => {
    expect(isValidMetadataVersion(0)).toBe(false)
  })
})

describe('metadata version whole numbers', () => {
  it('rejects decimal metadata versions', () => {
    expect(isValidMetadataVersion('1.5')).toBe(false)
  })
})

describe('block height lower bound', () => {
  it('accepts zero block height', () => {
    expect(isValidBlockHeight(0)).toBe(true)
  })
})

describe('block height negatives', () => {
  it('rejects negative block heights', () => {
    expect(isValidBlockHeight(-10)).toBe(false)
  })
})

describe('block height integer requirement', () => {
  it('rejects decimal block heights', () => {
    expect(isValidBlockHeight('12.2')).toBe(false)
  })
})

describe('collection name normalization', () => {
  it('accepts collection names with surrounding spaces', () => {
    expect(isValidCollectionName('  Mini Mint  ')).toBe(true)
  })
})

describe('collection name required value', () => {
  it('rejects whitespace-only collection names', () => {
    expect(isValidCollectionName('   ')).toBe(false)
  })
})

describe('collection name input type', () => {
  it('rejects non-string collection names', () => {
    expect(isValidCollectionName(null)).toBe(false)
  })
})

describe('transaction id case handling', () => {
  it('accepts uppercase hexadecimal tx ids', () => {
    expect(isValidTxId(`0x${'A'.repeat(64)}`)).toBe(true)
  })
})

describe('transaction id prefix requirement', () => {
  it('rejects tx ids without the 0x prefix', () => {
    expect(isValidTxId('f'.repeat(64))).toBe(false)
  })
})

describe('transaction id length', () => {
  it('rejects tx ids shorter than 64 hex chars', () => {
    expect(isValidTxId(`0x${'f'.repeat(63)}`)).toBe(false)
  })
})

describe('trait name normalization', () => {
  it('accepts trimmed trait names', () => {
    expect(isValidTraitName('  Background  ')).toBe(true)
  })
})

describe('trait name blank values', () => {
  it('rejects whitespace-only trait names', () => {
    expect(isValidTraitName('\n\t')).toBe(false)
  })
})

describe('trait name input type', () => {
  it('rejects non-string trait names', () => {
    expect(isValidTraitName(undefined)).toBe(false)
  })
})

describe('listing price coercion', () => {
  it('accepts decimal string listing prices', () => {
    expect(isValidListingPrice('0.5')).toBe(true)
  })
})

describe('listing price lower bound', () => {
  it('rejects zero listing prices', () => {
    expect(isValidListingPrice(0)).toBe(false)
  })
})

describe('listing price input type', () => {
  it('rejects non-numeric listing prices', () => {
    expect(isValidListingPrice('price')).toBe(false)
  })
})

describe('bid amount coercion', () => {
  it('accepts decimal string bid amounts', () => {
    expect(isValidBidAmount('1.25')).toBe(true)
  })
})

describe('bid amount lower bound', () => {
  it('rejects negative bid amounts', () => {
    expect(isValidBidAmount(-3)).toBe(false)
  })
})

describe('bid amount input type', () => {
  it('rejects non-numeric bid amounts', () => {
    expect(isValidBidAmount('bid')).toBe(false)
  })
})

describe('owner address trimming', () => {
  it('accepts uppercase owner addresses with surrounding spaces', () => {
    expect(isValidOwnerAddress('  SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT  ')).toBe(true)
  })
})

describe('owner address casing', () => {
  it('rejects lowercase owner addresses', () => {
    expect(isValidOwnerAddress('sp5k2rhmsbh4pap4pgx77mcvnk1zeed07cwx9tjt')).toBe(false)
  })
})

describe('owner address spacing', () => {
  it('rejects owner addresses with internal spaces', () => {
    expect(isValidOwnerAddress('SP5K2RHMSBH4PAP4PGX77MCVNK1 ZEED07CWX9TJT')).toBe(false)
  })
})

describe('supply limit coercion', () => {
  it('accepts numeric string supply limits', () => {
    expect(isValidSupplyLimit('9')).toBe(true)
  })
})

describe('supply limit minimum', () => {
  it('rejects zero supply limits', () => {
    expect(isValidSupplyLimit(0)).toBe(false)
  })
})

describe('supply limit whole number requirement', () => {
  it('rejects decimal supply limits', () => {
    expect(isValidSupplyLimit('2.4')).toBe(false)
  })
})

describe('mint batch upper bound', () => {
  it('accepts the maximum mint batch size', () => {
    expect(isValidMintBatch(10)).toBe(true)
  })
})

describe('mint batch overflow', () => {
  it('rejects mint batch values above ten', () => {
    expect(isValidMintBatch(11)).toBe(false)
  })
})

describe('mint batch minimum', () => {
  it('rejects zero mint batch values', () => {
    expect(isValidMintBatch(0)).toBe(false)
  })
})

describe('rarity tier acceptance', () => {
  it('accepts a known rarity tier', () => {
    expect(isValidRarityTier('common')).toBe(true)
  })
})

describe('rarity tier casing', () => {
  it('rejects uppercase rarity tiers', () => {
    expect(isValidRarityTier('COMMON')).toBe(false)
  })
})

describe('rarity tier whitelist', () => {
  it('rejects unsupported rarity tier values', () => {
    expect(isValidRarityTier('mythic')).toBe(false)
  })
})

describe('reveal delay lower bound', () => {
  it('accepts zero reveal delay', () => {
    expect(isValidRevealDelay(0)).toBe(true)
  })
})

describe('reveal delay negatives', () => {
  it('rejects negative reveal delay values', () => {
    expect(isValidRevealDelay(-1)).toBe(false)
  })
})

describe('reveal delay integer requirement', () => {
  it('rejects decimal reveal delay values', () => {
    expect(isValidRevealDelay('3.3')).toBe(false)
  })
})

describe('provenance hash case handling', () => {
  it('accepts uppercase hexadecimal provenance hashes', () => {
    expect(isValidProvenanceHash('A'.repeat(64))).toBe(true)
  })
})

describe('provenance hash format', () => {
  it('rejects provenance hashes with 0x prefix', () => {
    expect(isValidProvenanceHash(`0x${'a'.repeat(64)}`)).toBe(false)
  })
})

describe('provenance hash whitespace', () => {
  it('rejects provenance hashes with internal spaces', () => {
    expect(isValidProvenanceHash(`aaaa aaaa${'a'.repeat(56)}`)).toBe(false)
  })
})

describe('token symbol upper bound length', () => {
  it('accepts eight-character uppercase token symbols', () => {
    expect(isValidTokenSymbol('ABCDEFGH')).toBe(true)
  })
})

describe('token symbol casing', () => {
  it('rejects lowercase token symbols', () => {
    expect(isValidTokenSymbol('mini')).toBe(false)
  })
})

describe('token symbol minimum length', () => {
  it('rejects single-character token symbols', () => {
    expect(isValidTokenSymbol('A')).toBe(false)
  })
})

describe('mint price lower bound', () => {
  it('accepts zero mint prices', () => {
    expect(isValidMintPrice(0)).toBe(true)
  })
})

describe('mint price negatives', () => {
  it('rejects negative mint prices', () => {
    expect(isValidMintPrice(-1)).toBe(false)
  })
})

describe('mint price input type', () => {
  it('rejects non-numeric mint prices', () => {
    expect(isValidMintPrice('mint')).toBe(false)
  })
})

describe('max per wallet coercion', () => {
  it('accepts numeric string wallet limits', () => {
    expect(isValidMaxPerWallet('2')).toBe(true)
  })
})

describe('max per wallet lower bound', () => {
  it('rejects zero max per wallet values', () => {
    expect(isValidMaxPerWallet(0)).toBe(false)
  })
})

describe('max per wallet integer requirement', () => {
  it('rejects decimal max per wallet values', () => {
    expect(isValidMaxPerWallet('1.1')).toBe(false)
  })
})

describe('token id in supply upper bound', () => {
  it('accepts token id equal to max supply', () => {
    expect(isValidTokenIdInSupply(10000)).toBe(true)
  })
})

describe('token id in supply lower bound', () => {
  it('rejects zero token id values', () => {
    expect(isValidTokenIdInSupply(0)).toBe(false)
  })
})

describe('token id in supply overflow', () => {
  it('rejects token id values above max supply', () => {
    expect(isValidTokenIdInSupply(10001)).toBe(false)
  })
})

describe('wallet limit upper bound', () => {
  it('accepts wallet limits at 1000', () => {
    expect(isValidWalletLimit(1000)).toBe(true)
  })
})

describe('wallet limit overflow', () => {
  it('rejects wallet limits above 1000', () => {
    expect(isValidWalletLimit(1001)).toBe(false)
  })
})

describe('wallet limit minimum', () => {
  it('rejects zero wallet limits', () => {
    expect(isValidWalletLimit(0)).toBe(false)
  })
})

describe('token uri trimming', () => {
  it('accepts trimmed https token uri values', () => {
    expect(isValidTokenURI('  https://example.com/meta.json  ')).toBe(true)
  })
})

describe('token uri scheme casing', () => {
  it('accepts uppercase ipfs token uri schemes', () => {
    expect(isValidTokenURI('IPFS://bafybeigdyrzt7mtr5n5h2xjv4gxn4q3du')).toBe(true)
  })
})

describe('token uri scheme validation', () => {
  it('rejects ftp token uri schemes', () => {
    expect(isValidTokenURI('ftp://example.com/metadata.json')).toBe(false)
  })
})

describe('mint price microstx lower bound', () => {
  it('accepts zero microstx mint prices', () => {
    expect(isValidMintPriceMicrostx(0)).toBe(true)
  })
})

describe('mint price microstx integer requirement', () => {
  it('rejects decimal microstx mint prices', () => {
    expect(isValidMintPriceMicrostx('1.2')).toBe(false)
  })
})

describe('mint price microstx negatives', () => {
  it('rejects negative microstx mint prices', () => {
    expect(isValidMintPriceMicrostx(-100)).toBe(false)
  })
})

describe('positive finite coercion', () => {
  it('accepts numeric string positive finite values', () => {
    expect(isPositiveFinite('4.5')).toBe(true)
  })
})

describe('positive finite lower bound', () => {
  it('rejects zero positive finite values', () => {
    expect(isPositiveFinite(0)).toBe(false)
  })
})

describe('positive finite infinity handling', () => {
  it('rejects infinity values', () => {
    expect(isPositiveFinite(Infinity)).toBe(false)
  })
})

describe('batch total upper bound', () => {
  it('accepts batch totals at fifty', () => {
    expect(isValidBatchTotal(50)).toBe(true)
  })
})

describe('batch total overflow', () => {
  it('rejects batch totals above fifty', () => {
    expect(isValidBatchTotal(51)).toBe(false)
  })
})

describe('batch total minimum', () => {
  it('rejects zero batch totals', () => {
    expect(isValidBatchTotal(0)).toBe(false)
  })
})

describe('trait count lower bound', () => {
  it('accepts zero trait count values', () => {
    expect(isValidTraitCount(0)).toBe(true)
  })
})

describe('trait count negatives', () => {
  it('rejects negative trait count values', () => {
    expect(isValidTraitCount(-1)).toBe(false)
  })
})

describe('trait count overflow', () => {
  it('rejects trait count values above sixty-four', () => {
    expect(isValidTraitCount(65)).toBe(false)
  })
})

describe('explorer url trimming', () => {
  it('accepts trimmed https explorer urls', () => {
    expect(isValidExplorerUrl('  https://explorer.stacks.co/txid/0xabc  ')).toBe(true)
  })
})

describe('explorer url secure scheme requirement', () => {
  it('rejects non-https explorer urls', () => {
    expect(isValidExplorerUrl('http://explorer.stacks.co')).toBe(false)
  })
})
