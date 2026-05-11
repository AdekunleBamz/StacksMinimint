
/** Stacks address of the deployed minimint NFT core contract. */
export const NFT_CONTRACT_ADDRESS = "SP000000000000000000002Q6VF78"

/** Name of the minimint NFT core contract on Stacks. */
export const NFT_CONTRACT_NAME = "minimint-nft"

/** Base mint price per NFT in STX. */
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

export const PROVENANCE_HASH_ALGORITHM = "sha256"

export const STACKS_API_BASE_URL = "https://stacks-node-api.mainnet.stacks.co"

export const EXPLORER_BASE_URL = "https://explorer.stacks.co"

export const TOKEN_SYMBOL = "MINI"

export const COLLECTION_NAME = "MiniMint"

export const TRAIT_RARITY_TIERS = ["common","rare","epic","legendary"]

export const ANIMATION_REVEAL_MS = 1200

export const PLACEHOLDER_IMAGE_CID = "QmPlaceholder"

export const DEFAULT_PAGE_SIZE = 20

export const METADATA_FETCH_TIMEOUT_MS = 12000

export const MAX_RECENT_TX = 25

export const MINT_TX_CONFIRMATIONS = 1

export const IPFS_FETCH_RETRIES = 2

export const REVEAL_ANIMATION_STAGGER_MS = 120

export const MAX_MINT_LABEL_LENGTH = 32

export const SUPPORTED_METADATA_SCHEMES = ["ipfs://", "https://"]

export const DEFAULT_CARD_ACCENT = "#2f7fca"
