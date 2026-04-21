
export const isValidTokenId = (v) => Number.isInteger(Number(v)) && Number(v) >= 0;

export const isValidMintCount = (v) => Number.isInteger(Number(v)) && Number(v) >= 1;

export const isValidCID = (v) => typeof v === "string" && v.length >= 10;
