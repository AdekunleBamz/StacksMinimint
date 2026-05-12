import { MIN_ROYALTY_BASIS_POINTS, MAX_ROYALTY_BASIS_POINTS, MAX_SUPPLY } from './constants.js';

/**
 * Validates token IDs accepted by local UI helpers.
 * @param {*} v - Candidate token ID
 * @returns {boolean} True when the value is an integer >= 0
 */
export const isValidTokenId = (v) => {
  if (v == null) return false;
  return Number.isInteger(Number(v)) && Number(v) >= 0;
};

export const isValidMintCount = (v) => {
  if (v == null) return false;
  return Number.isInteger(Number(v)) && Number(v) >= 1;
};

export const isValidCID = (v) => typeof v === "string" && v.trim().length >= 10 && v.trim().length <= 128;

export const isValidRoyaltyBps = (v) => {
  if (v == null) return false;
  return !isNaN(Number(v)) && Number(v) >= MIN_ROYALTY_BASIS_POINTS && Number(v) <= MAX_ROYALTY_BASIS_POINTS;
};

export const isValidMetadataVersion = (v) => Number.isInteger(Number(v)) && Number(v) >= 1;

export const isValidBlockHeight = (v) => {
  if (v == null) return false;
  return Number.isInteger(Number(v)) && Number(v) >= 0;
};

export const isValidCollectionName = (v) => typeof v === "string" && v.trim().length >= 1 && v.trim().length <= 64;

export const isValidTxId = (v) => {
  if (v == null) return false;
  return typeof v === "string" && /^0x[0-9a-f]{64}$/i.test(v);
};

export const isValidTraitName = (v) => typeof v === "string" && v.trim().length >= 1;

export const isValidListingPrice = (v) => !isNaN(Number(v)) && Number(v) > 0;

export const isValidBidAmount = (v) => !isNaN(Number(v)) && Number(v) > 0;

export const isValidOwnerAddress = (v) =>
  typeof v === 'string' && /^(S[PT])[0-9A-Z]{37,39}$/.test(v.trim());

export const isValidSupplyLimit = (v) => Number.isInteger(Number(v)) && Number(v) >= 1;

export const isValidMintBatch = (v) => Number.isInteger(Number(v)) && Number(v) >= 1 && Number(v) <= 10;

export const isValidRarityTier = (v) => ["common","rare","epic","legendary"].includes(v);

export const isValidRevealDelay = (v) => Number.isInteger(Number(v)) && Number(v) >= 0;

export const isValidProvenanceHash = (v) =>
  typeof v === 'string' && /^[0-9a-f]{64}$/i.test(v.trim());

export const isValidTokenSymbol = (v) => typeof v === "string" && /^[A-Z]{2,8}$/.test(v);

export const isValidMintPrice = (v) => !isNaN(Number(v)) && Number(v) >= 0;

export const isValidMaxPerWallet = (v) => Number.isInteger(Number(v)) && Number(v) >= 1;

/**
 * Validates that a token ID is within the collection's supply range.
 * @param {number} tokenId - The token ID to validate
 * @returns {boolean} True if token ID is valid and within supply limits
 */
export const isValidTokenIdInSupply = (v) => Number.isInteger(Number(v)) && Number(v) >= 1 && Number(v) <= MAX_SUPPLY;

export const isValidWalletLimit = (v) => Number.isInteger(Number(v)) && Number(v) >= 1 && Number(v) <= 1000;

export const isValidTokenURI = (v) => typeof v === "string" && /^(ipfs|https):\/\//i.test(v.trim());

export const isValidMintPriceMicrostx = (v) => Number.isInteger(Number(v)) && Number(v) >= 0;

export const isPositiveFinite = (v) => Number.isFinite(Number(v)) && Number(v) > 0;

export const isValidBatchTotal = (v) => Number.isInteger(Number(v)) && Number(v) >= 1 && Number(v) <= 50;

export const isValidTraitCount = (v) => Number.isInteger(Number(v)) && Number(v) >= 0 && Number(v) <= 64;

export const isValidExplorerUrl = (v) => typeof v === "string" && /^https:\/\//i.test(v.trim());
