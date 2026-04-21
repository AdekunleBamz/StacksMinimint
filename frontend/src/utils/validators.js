
export const isValidTokenId = (v) => Number.isInteger(Number(v)) && Number(v) >= 0;

export const isValidMintCount = (v) => Number.isInteger(Number(v)) && Number(v) >= 1;

export const isValidCID = (v) => typeof v === "string" && v.length >= 10;

export const isValidRoyaltyBps = (v) => !isNaN(Number(v)) && Number(v) >= 0 && Number(v) <= 10000;

export const isValidMetadataVersion = (v) => Number.isInteger(Number(v)) && Number(v) >= 1;

export const isValidBlockHeight = (v) => Number.isInteger(Number(v)) && Number(v) >= 0;

export const isValidCollectionName = (v) => typeof v === "string" && v.trim().length >= 1;

export const isValidTxId = (v) => typeof v === "string" && /^0x[0-9a-f]{64}$/i.test(v);

export const isValidTraitName = (v) => typeof v === "string" && v.trim().length >= 1;

export const isValidListingPrice = (v) => !isNaN(Number(v)) && Number(v) > 0;

export const isValidBidAmount = (v) => !isNaN(Number(v)) && Number(v) > 0;

export const isValidOwnerAddress = (v) => typeof v === "string" && v.length >= 30;

export const isValidSupplyLimit = (v) => Number.isInteger(Number(v)) && Number(v) >= 1;

export const isValidMintBatch = (v) => Number.isInteger(Number(v)) && Number(v) >= 1 && Number(v) <= 10;

export const isValidRarityTier = (v) => ["common","rare","epic","legendary"].includes(v);

export const isValidRevealDelay = (v) => Number.isInteger(Number(v)) && Number(v) >= 0;

export const isValidProvenanceHash = (v) => typeof v === "string" && v.length === 64;

export const isValidTokenSymbol = (v) => typeof v === "string" && /^[A-Z]{2,8}$/.test(v);

export const isValidMintPrice = (v) => !isNaN(Number(v)) && Number(v) >= 0;
