
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

/**
 * formatListingPrice - Format a listing price with two decimal places.
 * @param {number|string} stx - Price in STX
 * @returns {string} Formatted price (e.g. "10.00 STX")
 */
export const formatListingPrice = (stx) => {
  const amount = Number(stx);
  if (!Number.isFinite(amount)) return '0.00 STX';
  return `${amount.toFixed(2)} STX`;
};

/**
 * formatBidAmount - Format a bid amount as a labelled STX string.
 * @param {number|null} stx - Bid amount in STX
 * @returns {string} Formatted bid label (e.g. "Bid: 5 STX")
 */
export const formatBidAmount = (stx) => "Bid: " + (stx ?? 0) + " STX";

/**
 * formatMintDate - Format a mint timestamp as a locale date string.
 * @param {number|null} ts - Unix timestamp in milliseconds
 * @returns {string} Locale date string or '—' for null/undefined
 */
export const formatMintDate = (ts) => {
  if (ts == null) return '—';
  return new Date(ts).toLocaleDateString();
};

/**
 * formatTxStatus - Capitalise a transaction status string for display.
 * @param {string|null|undefined} s - Raw status string (e.g. 'pending', 'success')
 * @returns {string} Capitalised status or 'Unknown' if blank
 */
export const formatTxStatus = (s) => {
  const normalizedStatus = typeof s === 'string' ? s.trim() : '';
  if (!normalizedStatus) return 'Unknown';
  return normalizedStatus.charAt(0).toUpperCase() + normalizedStatus.slice(1);
};

/**
 * formatNFTName - Combine an NFT name and token ID into a display label.
 * @param {string|null} name - NFT collection name
 * @param {number|null} id - Token ID
 * @returns {string} Combined label (e.g. "Genesis #42")
 */
export const formatNFTName = (name, id) => (name ?? 'NFT') + " #" + (id ?? 0);

/**
 * formatIPFSUrl - Build an ipfs:// URI from a CID.
 * @param {string|null} cid - IPFS content identifier
 * @remarks Does not validate the CID; callers should validate before display.
 * @returns {string} ipfs:// URI (e.g. "ipfs://QmAbc123")
 */
export const formatIPFSUrl = (cid) => "ipfs://" + (cid ?? '');

/**
 * formatGatewayUrl - Build an IPFS HTTP gateway URL from a CID.
 * @param {string|null} cid - IPFS content identifier
 * @returns {string} Public gateway URL via ipfs.io
 */
export const formatGatewayUrl = (cid) => {
  const normalizedCid = String(cid ?? "").replace(/^\/+/, "");
  return "https://ipfs.io/ipfs/" + normalizedCid;
};

/**
 * formatMicroStx - Format a micro-STX value as a full STX string with 6 decimals.
 * @param {number|null} v - Amount in micro-STX
 * @returns {string} STX string with 6 decimal places (e.g. "1.500000 STX")
 */
export const formatMicroStx = (v) => {
  if (v == null) return '0.000000 STX';
  return (v / 1e6).toFixed(6) + " STX";
};

/**
 * formatBlockTime - Format a block time in milliseconds as a minutes label.
 * @param {number|null} ms - Block time in milliseconds
 * @returns {string} Rounded minutes label (e.g. "10 min")
 */
export const formatBlockTime = (ms) => {
  if (ms == null) return '0 min';
  return Math.round(ms / 60000) + " min";
};

/**
 * formatTraitCount - Format a trait attribute count with a label.
 * @param {number|null} n - Trait count
 * @returns {string} Count with 'traits' label (e.g. "7 traits")
 */
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

/**
 * formatMintCount - Format a mint count with correct singular/plural label.
 * @param {number|string} count - Mint count
 * @returns {string} Count with 'mint'/'mints' label (e.g. "1 mint", "3 mints")
 */
export const formatMintCount = (count) => {
  const n = Number(count);
  if (!Number.isFinite(n)) return '0 mints';
  return n + " mint" + (n === 1 ? "" : "s");
};

/**
 * formatWhitelistWindow - Format a whitelist block range as a label.
 * @param {number} start - Whitelist start block
 * @param {number} end - Whitelist end block
 * @returns {string} Block range label (e.g. "WL 100000-105000")
 */
export const formatWhitelistWindow = (start, end) => "WL " + Number(start) + "-" + Number(end);

/**
 * formatOwnerTag - Format an owner address as a labelled string.
 * @param {string|null} address - Owner wallet address
 * @returns {string} Labelled address (e.g. "Owner: SP3HE...")
 */
export const formatOwnerTag = (address) => "Owner: " + String(address || "");

/**
 * formatPercentFromBps - Convert basis points to a percentage string.
 * @param {number} bps - Basis points (100 bps = 1%)
 * @returns {string} Percentage with 2 decimal places (e.g. "5.00%")
 */
export const formatPercentFromBps = (bps) => (Number(bps) / 100).toFixed(2) + "%";

/**
 * formatRevealDelay - Format a reveal delay block count as a label.
 * @param {number} blocks - Block delay count
 * @returns {string} Delay label (e.g. "144 blocks to reveal")
 */
export const formatRevealDelay = (blocks) => Number(blocks) + " blocks to reveal";

/**
 * formatTokenSymbol - Normalise and uppercase a token symbol string.
 * @param {string|null} symbol - Token ticker symbol
 * @returns {string} Trimmed uppercase symbol
 */
export const formatTokenSymbol = (symbol) => String(symbol || "").trim().toUpperCase();

/**
 * formatCollectionTitle - Return a safe collection title from a name string.
 * @param {string|null|undefined} name - Collection name
 * @returns {string} Trimmed name or 'Untitled Collection' fallback
 */
export const formatCollectionTitle = (name) => {
  const normalized = String(name ?? "").trim();
  return normalized || "Untitled Collection";
};

/**
 * formatFloorPrice - Format the floor price with a 'Floor' prefix.
 * @param {number|string} stx - Floor price in STX
 * @returns {string} Labelled floor price (e.g. "Floor 1.50 STX")
 */
export const formatFloorPrice = (stx) => {
  const amount = Number(stx);
  if (!Number.isFinite(amount)) return "Floor 0.00 STX";
  return "Floor " + amount.toFixed(2) + " STX";
};

/**
 * formatMintBatch - Format a mint batch quantity as a labelled string.
 * @param {number} qty - Number of NFTs in a batch
 * @returns {string} Batch label (e.g. "Batch x3")
 */
export const formatMintBatch = (qty) => "Batch x" + Number(qty);

/**
 * formatAddressShort - Truncate a wallet address for compact display.
 * @param {string|null} addr - Full wallet address
 * @returns {string} Truncated address (first 6 + '...' + last 4 chars)
 */
export const formatAddressShort = (addr) => {
  const s = String(addr || "").trim();
  return s.length > 10 ? s.slice(0, 6) + "..." + s.slice(-4) : s;
};
