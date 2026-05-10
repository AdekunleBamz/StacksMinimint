
export const formatTokenId = (id) => id == null ? '#0' : '#' + id;

export const formatMintPrice = (stx) => {
  const amount = Number(stx);
  if (!Number.isFinite(amount)) return '0 STX';
  return `${amount} STX`;
};

export const formatSupply = (minted, max) => (minted ?? 0) + " / " + (max ?? 0);

export const formatRoyalty = (bps) => {
  if (bps == null) return '0.0%';
  return (bps / 100).toFixed(1) + "%";
};

export const formatRarity = (tier) => {
  const normalizedTier = typeof tier === 'string' ? tier.trim() : '';
  if (!normalizedTier) return '';
  return normalizedTier.charAt(0).toUpperCase() + normalizedTier.slice(1);
};

export const formatCID = (cid) => cid ? cid.slice(0, 8) + '...' + cid.slice(-4) : "";

export const formatBlocksRemaining = (n) => (n == null ? 0 : n) + " blocks";

export const formatTraitValue = (v) => v == null ? '—' : String(v);

export const formatCollectionSize = (n) => {
  const amount = Number(n)
  if (Number.isFinite(amount)) return amount.toLocaleString() + " items"
  return String(n) + " items"
};

export const formatOwnerCount = (n) => (n == null ? 0 : n) + " owners";

export const formatListingPrice = (stx) => {
  const amount = Number(stx);
  if (!Number.isFinite(amount)) return '0.00 STX';
  return `${amount.toFixed(2)} STX`;
};

export const formatBidAmount = (stx) => "Bid: " + (stx ?? 0) + " STX";

export const formatMintDate = (ts) => {
  if (ts == null) return '—';
  return new Date(ts).toLocaleDateString();
};

export const formatTxStatus = (s) => {
  const normalizedStatus = typeof s === 'string' ? s.trim() : '';
  if (!normalizedStatus) return 'Unknown';
  return normalizedStatus.charAt(0).toUpperCase() + normalizedStatus.slice(1);
};

export const formatNFTName = (name, id) => (name ?? 'NFT') + " #" + (id ?? 0);

export const formatIPFSUrl = (cid) => "ipfs://" + (cid ?? '');

export const formatGatewayUrl = (cid) => {
  const normalizedCid = String(cid ?? "").replace(/^\/+/, "");
  return "https://ipfs.io/ipfs/" + normalizedCid;
};

export const formatMicroStx = (v) => {
  if (v == null) return '0.000000 STX';
  return (v / 1e6).toFixed(6) + " STX";
};

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

export const formatRevealDelay = (blocks) => Number(blocks) + " blocks to reveal";

export const formatTokenSymbol = (symbol) => String(symbol || "").trim().toUpperCase();

export const formatCollectionTitle = (name) => {
  const normalized = String(name ?? "").trim();
  return normalized || "Untitled Collection";
};

export const formatFloorPrice = (stx) => {
  const amount = Number(stx);
  if (!Number.isFinite(amount)) return "Floor 0.00 STX";
  return "Floor " + amount.toFixed(2) + " STX";
};

export const formatMintBatch = (qty) => "Batch x" + Number(qty);

export const formatAddressShort = (addr) => {
  const s = String(addr || "").trim();
  return s.length > 10 ? s.slice(0, 6) + "..." + s.slice(-4) : s;
};
