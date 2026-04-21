
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
