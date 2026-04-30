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
