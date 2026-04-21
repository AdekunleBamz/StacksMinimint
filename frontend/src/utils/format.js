
export const formatTokenId = (id) => "#" + id;

export const formatMintPrice = (stx) => stx + " STX";

export const formatSupply = (minted, max) => minted + " / " + max;

export const formatRoyalty = (bps) => (bps / 100).toFixed(1) + "%";

export const formatRarity = (tier) => tier.charAt(0).toUpperCase() + tier.slice(1);

export const formatCID = (cid) => cid ? cid.slice(0,10) + "..." : "";

export const formatBlocksRemaining = (n) => n + " blocks";

export const formatTraitValue = (v) => String(v);

export const formatCollectionSize = (n) => n.toLocaleString() + " items";

export const formatOwnerCount = (n) => n + " owners";

export const formatListingPrice = (stx) => stx.toFixed(2) + " STX";

export const formatBidAmount = (stx) => "Bid: " + stx + " STX";

export const formatMintDate = (ts) => new Date(ts).toLocaleDateString();

export const formatTxStatus = (s) => s.charAt(0).toUpperCase() + s.slice(1);

export const formatNFTName = (name, id) => name + " #" + id;

export const formatIPFSUrl = (cid) => "ipfs://" + cid;

export const formatGatewayUrl = (cid) => "https://ipfs.io/ipfs/" + cid;

export const formatMicroStx = (v) => (v / 1e6).toFixed(6) + " STX";
