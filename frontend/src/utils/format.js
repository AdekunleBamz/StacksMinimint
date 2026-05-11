
/**
 * formatTokenId - Format a token ID for display.
 * @param {number|string|null|undefined} id - Token ID
 * @returns {string} Token ID prefixed with '#', defaults to '#0'
 */
export const formatTokenId = (id) => id == null ? '#0' : '#' + id;

/**
 * formatMintPrice - Format a mint price in STX for display.
 * @param {number|string} stx - Price in STX
 * @returns {string} Formatted price string (e.g. "10 STX")
 */
export const formatMintPrice = (stx) => {
  const amount = Number(stx);
  if (!Number.isFinite(amount)) return '0 STX';
  return `${amount} STX`;
};

/**
 * formatSupply - Format minted/max supply as a ratio string.
 * @param {number|null} minted - Minted token count
 * @param {number|null} max - Maximum supply
 * @returns {string} Supply ratio (e.g. "150 / 10000")
 */
export const formatSupply = (minted, max) => (minted ?? 0) + " / " + (max ?? 0);

/**
 * formatRoyalty - Format royalty basis points as a percentage string.
 * @param {number|null} bps - Royalty in basis points (100 bps = 1%)
 * @returns {string} Formatted royalty percentage (e.g. "5.0%")
 */
export const formatRoyalty = (bps) => {
  if (bps == null) return '0.0%';
  return (bps / 100).toFixed(1) + "%";
};

/**
 * formatRarity - Capitalise a rarity tier label.
 * @param {string} tier - Rarity tier ('common', 'rare', 'epic', 'legendary')
 * @returns {string} Capitalised tier name or empty string for blank input
 */
export const formatRarity = (tier) => {
  const normalizedTier = typeof tier === 'string' ? tier.trim() : '';
  if (!normalizedTier) return '';
  return normalizedTier.charAt(0).toUpperCase() + normalizedTier.slice(1);
};

/**
 * formatCID - Truncate an IPFS CID for compact display.
 * @param {string|null|undefined} cid - IPFS content identifier
 * @returns {string} Truncated CID (first 8 + last 4 chars) or empty string
 */
export const formatCID = (cid) => cid ? cid.slice(0, 8) + '...' + cid.slice(-4) : "";

/**
 * formatBlocksRemaining - Format a remaining block count as a label.
 * @param {number|null} n - Block count
 * @returns {string} Block count with unit (e.g. "144 blocks")
 */
export const formatBlocksRemaining = (n) => (n == null ? 0 : n) + " blocks";

/**
 * formatTraitValue - Format a trait attribute value for display.
 * @param {*} v - Trait value (any type)
 * @returns {string} String representation, or '—' if null/undefined
 */
export const formatTraitValue = (v) => v == null ? '—' : String(v);

/**
 * formatCollectionSize - Format a collection item count with locale separators.
 * @param {number|string} n - Collection size
 * @returns {string} Formatted count with 'items' label
 */
export const formatCollectionSize = (n) => {
  const amount = Number(n)
  if (Number.isFinite(amount)) return amount.toLocaleString() + " items"
  return String(n) + " items"
};

/**
 * formatOwnerCount - Format an owner count with a label.
 * @param {number|null} n - Number of unique owners
 * @returns {string} Count with 'owners' label (e.g. "42 owners")
 */
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

export const formatBlockTime = (ms) => {
  if (ms == null) return '0 min';
  return Math.round(ms / 60000) + " min";
};

export const formatTraitCount = (n) => (n == null ? 0 : n) + " traits";

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

export const formatMintCount = (count) => {
  const n = Number(count);
  if (!Number.isFinite(n)) return '0 mints';
  return n + " mint" + (n === 1 ? "" : "s");
};

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
