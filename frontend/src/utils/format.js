
export const formatTokenId = (id) => "#" + id;

export const formatMintPrice = (stx) => stx + " STX";

export const formatSupply = (minted, max) => minted + " / " + max;

export const formatRoyalty = (bps) => (bps / 100).toFixed(1) + "%";

export const formatRarity = (tier) => tier.charAt(0).toUpperCase() + tier.slice(1);
