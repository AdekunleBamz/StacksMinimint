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
