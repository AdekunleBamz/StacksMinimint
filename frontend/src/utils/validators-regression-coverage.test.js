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
