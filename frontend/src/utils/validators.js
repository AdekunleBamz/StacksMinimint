
export const isValidTokenId = (v) => Number.isInteger(Number(v)) && Number(v) >= 0;

export const isValidMintCount = (v) => Number.isInteger(Number(v)) && Number(v) >= 1;

export const isValidCID = (v) => typeof v === "string" && v.length >= 10;

export const isValidRoyaltyBps = (v) => !isNaN(Number(v)) && Number(v) >= 0 && Number(v) <= 10000;

export const isValidMetadataVersion = (v) => Number.isInteger(Number(v)) && Number(v) >= 1;

export const isValidBlockHeight = (v) => Number.isInteger(Number(v)) && Number(v) >= 0;

export const isValidCollectionName = (v) => typeof v === "string" && v.trim().length >= 1;
