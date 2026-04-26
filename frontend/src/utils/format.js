
export const formatTokenId = (id) => "#" + id;

export const formatMintPrice = (stx) => {
  const amount = Number(stx);
  if (!Number.isFinite(amount)) return '0 STX';
  return `${amount} STX`;
};

export const formatSupply = (minted, max) => minted + " / " + max;

export const formatRoyalty = (bps) => (bps / 100).toFixed(1) + "%";

export const formatRarity = (tier) => {
  const normalizedTier = typeof tier === 'string' ? tier.trim() : '';
  if (!normalizedTier) return '';
  return normalizedTier.charAt(0).toUpperCase() + normalizedTier.slice(1);
};

export const formatCID = (cid) => cid ? cid.slice(0,10) + "..." : "";

export const formatBlocksRemaining = (n) => n + " blocks";

export const formatTraitValue = (v) => String(v);

export const formatCollectionSize = (n) => n.toLocaleString() + " items";

export const formatOwnerCount = (n) => n + " owners";

export const formatListingPrice = (stx) => {
  const amount = Number(stx);
  if (!Number.isFinite(amount)) return '0.00 STX';
  return `${amount.toFixed(2)} STX`;
};

export const formatBidAmount = (stx) => "Bid: " + stx + " STX";

export const formatMintDate = (ts) => new Date(ts).toLocaleDateString();

export const formatTxStatus = (s) => {
  const normalizedStatus = typeof s === 'string' ? s.trim() : '';
  if (!normalizedStatus) return 'Unknown';
  return normalizedStatus.charAt(0).toUpperCase() + normalizedStatus.slice(1);
};

export const formatNFTName = (name, id) => name + " #" + id;

export const formatIPFSUrl = (cid) => "ipfs://" + cid;

export const formatGatewayUrl = (cid) => "https://ipfs.io/ipfs/" + cid;

export const formatMicroStx = (v) => (v / 1e6).toFixed(6) + " STX";

export const formatBlockTime = (ms) => Math.round(ms / 60000) + " min";

export const formatTraitCount = (n) => n + " traits";

/**
 * Calculates the total mint cost for a given quantity of NFTs.
 * @param {number} quantity - Number of NFTs to mint
 * @param {number} pricePerNFT - Price in STX per NFT (default: 10 STX)
 * @returns {string} Formatted total cost with STX unit
 */
export const calculateTotalMintCost = (quantity, pricePerNFT = 10) => {
  const qty = Number.isInteger(Number(quantity)) && Number(quantity) > 0 ? Number(quantity) : 0;
  const price = Number.isFinite(Number(pricePerNFT)) ? Number(pricePerNFT) : 10;
  const total = qty * price;
  return formatMintPrice(total);
};

export const formatMintCount = (count) => Number(count) + " mint" + (Number(count) === 1 ? "" : "s");

export const formatWhitelistWindow = (start, end) => "WL " + Number(start) + "-" + Number(end);

export const formatOwnerTag = (address) => "Owner: " + String(address || "");

export const formatPercentFromBps = (bps) => (Number(bps) / 100).toFixed(2) + "%";
