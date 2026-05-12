
/** Stacks address of the deployed minimint NFT core contract. */
export const NFT_CONTRACT_ADDRESS = "SP000000000000000000002Q6VF78"

/** Name of the minimint NFT core contract on Stacks. */
export const NFT_CONTRACT_NAME = "minimint-nft"

/** Base mint price per NFT in STX for display and default fee estimates. */
export const NFT_MINT_PRICE_STX = 10

/** Base mint price per NFT in micro-STX (1 STX = 1,000,000 micro-STX). */
export const NFT_MINT_PRICE_MICROSTX = NFT_MINT_PRICE_STX * 1_000_000

/** Maximum token supply for this collection. */
export const MAX_SUPPLY = 10000

/** Maximum number of NFTs a wallet can mint in a single batch transaction. */
export const MINT_BATCH_LIMIT = 5

/** Base URL for the Pinata IPFS HTTP gateway used to resolve token metadata. */
export const IPFS_GATEWAY_URL = "https://gateway.pinata.cloud/ipfs/"

/** Metadata schema version expected by the collection. */
export const METADATA_VERSION = 1

/** Number of Stacks blocks to wait before revealing token metadata after minting. */
export const REVEAL_DELAY_BLOCKS = 144

/** Default royalty rate in basis points (500 bps = 5%). */
export const ROYALTY_BASIS_POINTS = 500

/** Minimum royalty in basis points (0 = no royalty). */
export const MIN_ROYALTY_BASIS_POINTS = 0

/** Maximum royalty in basis points (10000 = 100%). */
export const MAX_ROYALTY_BASIS_POINTS = 10000

/** Maximum number of NFTs a single wallet is allowed to mint in this collection. */
export const MAX_PER_WALLET = 20

/** Stacks block height at which the whitelist mint phase begins. */
export const WHITELIST_BLOCK_START = 100000

/** Stacks block height at which the whitelist mint phase ends. */
export const WHITELIST_BLOCK_END = 105000

/** Stacks block height at which public minting opens. */
export const PUBLIC_MINT_BLOCK = 105000

/** Hashing algorithm used to compute the provenance hash for this collection. */
export const PROVENANCE_HASH_ALGORITHM = "sha256"

/** Base URL for the Stacks Mainnet node API. */
export const STACKS_API_BASE_URL = "https://stacks-node-api.mainnet.stacks.co"

/** Base URL for the Stacks Explorer web interface. */
export const EXPLORER_BASE_URL = "https://explorer.stacks.co"

/** Ticker symbol used to identify this collection's token in UIs. */
export const TOKEN_SYMBOL = "MINI"

/** Display name for this NFT collection. */
export const COLLECTION_NAME = "MiniMint"

/** Ordered list of trait rarity tiers from most common to most rare. */
export const TRAIT_RARITY_TIERS = ["common","rare","epic","legendary"]

/** Duration in ms for the token reveal animation on the gallery cards. */
export const ANIMATION_REVEAL_MS = 1200

/** IPFS CID used as the placeholder image before tokens are revealed. */
export const PLACEHOLDER_IMAGE_CID = "QmPlaceholder"

/** Default number of tokens to fetch per page in paginated gallery views. */
export const DEFAULT_PAGE_SIZE = 20

/** Timeout in ms for IPFS/HTTP metadata fetch requests before aborting. */
export const METADATA_FETCH_TIMEOUT_MS = 12000

/** Maximum number of recent transactions to keep in local session history. */
export const MAX_RECENT_TX = 25

/** Number of on-chain confirmations required before a mint tx is considered final. */
export const MINT_TX_CONFIRMATIONS = 1

/** Number of times to retry a failed IPFS metadata fetch before giving up. */
export const IPFS_FETCH_RETRIES = 2

/** Delay in ms between each card's reveal animation in a staggered sequence. */
export const REVEAL_ANIMATION_STAGGER_MS = 120

/** Maximum character length for a minted NFT label string. */
export const MAX_MINT_LABEL_LENGTH = 32

/** URI scheme prefixes accepted for token metadata URIs. */
export const SUPPORTED_METADATA_SCHEMES = ["ipfs://", "https://"]

/** Default hex accent colour used on NFT gallery cards without a trait colour. */
export const DEFAULT_CARD_ACCENT = "#2f7fca"
