/**
 * Application constants and configuration.
 * 
 * Defines contract addresses, network settings, mint fees, and
 * function names used throughout the StacksMinimint frontend.
 * 
 * @module constants
 */
import {
  DEFAULT_NETWORK,
  FUNCTIONS as SDK_FUNCTIONS,
  MINT_FEE as SDK_MINT_FEE,
  STACKS_NETWORK_CONFIG as SDK_STACKS_NETWORK_CONFIG,
} from 'stacksminimint-sdk';

const MAINNET_DEPLOYER = 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT';

const envNetwork = import.meta.env?.VITE_STX_NETWORK;
const envMintFee = Number.parseInt(import.meta.env?.VITE_MINT_FEE ?? '', 10);

export const NETWORK = envNetwork === 'mainnet' || envNetwork === 'testnet'
  ? envNetwork
  : DEFAULT_NETWORK; // 'mainnet' or 'testnet'

// Default to the tracked v-i27 contracts and allow env overrides.
export const CONTRACT_ADDRESS = import.meta.env?.VITE_CONTRACT_ADDRESS || MAINNET_DEPLOYER;
export const CONTRACT_NAME = import.meta.env?.VITE_CONTRACT_NAME || 'minimint-core-v-i27';
export const HUB_CONTRACT_ADDRESS = import.meta.env?.VITE_HUB_CONTRACT_ADDRESS || MAINNET_DEPLOYER;
export const HUB_CONTRACT_NAME = import.meta.env?.VITE_HUB_CONTRACT_NAME || 'minimint-hub-v-i27';

export const MINT_FEE = Number.isInteger(envMintFee) && envMintFee >= 0 ? envMintFee : SDK_MINT_FEE; // micro-STX

export const FUNCTIONS = SDK_FUNCTIONS;
export const STACKS_NETWORK_CONFIG = SDK_STACKS_NETWORK_CONFIG;
export const MAX_SUPPLY = 10000;

// --- UI Constants ---
// Values used for consistent UI behavior across components.

/** Maximum number of recent mints to display in the activity feed */
export const MAX_RECENT_MINTS = 6;

/** Scroll threshold (in pixels) to show the back-to-top button */
export const SCROLL_THRESHOLD = 400;

/** Debounce delay in ms for scroll event handlers */
export const SCROLL_DEBOUNCE_MS = 100;

/** Minimum allowed custom mint fee in micro-STX (0 means default applies) */
export const MIN_MINT_FEE = 0;

/** Toast notification auto-dismiss duration in milliseconds */
export const TOAST_DURATION = 4500;

/** Maximum time in milliseconds to wait for a wallet transaction to confirm */
export const TRANSACTION_TIMEOUT_MS = 120_000;

/** Timeout in milliseconds before the clipboard copy status resets */
export const CLIPBOARD_TIMEOUT_MS = 2000;

/** Maximum number of toasts to display simultaneously */
export const MAX_TOASTS = 4;

/** Maximum number of times to retry a failed network request before giving up */
export const MAX_RETRIES = 3;

/** Maximum number of transaction submission attempts before surfacing an error */
export const TX_RETRY_LIMIT = 2;

/** Number of items to display per page in paginated lists */
export const DEFAULT_PAGINATION_SIZE = 12;

/** NFT token ID range boundaries */
export const NFT_ID_MIN = 1;
export const NFT_ID_MAX = MAX_SUPPLY;

/** Transaction lifecycle status codes */
export const TX_STATUS = Object.freeze({
  PENDING: 'pending',
  SUCCESS: 'success',
  FAILED: 'failed',
  CANCELLED: 'cancelled',
});

/** Minimum number of characters required for a Stacks address to display truncated */
export const MIN_DISPLAY_ADDRESS_LENGTH = 10;

// --- Network Labels ---
// Human-readable labels for network display.

/** Display name for mainnet network */
export const MAINNET_LABEL = 'Stacks Mainnet';

/** Display name for testnet network */
export const TESTNET_LABEL = 'Stacks Testnet';

/** Display name for local devnet */
export const DEVNET_LABEL = 'Devnet';

// --- Explorer URLs ---
// Base URLs for Stacks explorers.

/** Hiro Explorer base URL */
export const HIRO_EXPLORER_URL = 'https://explorer.stacks.co';

/** Duration in milliseconds for standard UI transition animations */
export const ANIMATION_DURATION_MS = 200;

// --- Contract Function Names ---
// Standardized function names for contract calls.

/** Mint function name in core contract */
export const MINT_FUNCTION = 'mint';

/** Transfer function name in core contract */
export const TRANSFER_FUNCTION = 'transfer';

/** Get total supply function name */
export const GET_TOTAL_SUPPLY = 'get-last-token-id';

// --- Default Values ---
// Fallback values for empty or undefined states.

/** Default display text for unknown addresses */
export const UNKNOWN_ADDRESS = 'Unknown';

/** Default display text for pending transactions */
export const PENDING_LABEL = 'Pending';

/** Default display text for failed transactions */
export const FAILED_LABEL = 'Failed';

/**
 * Get network display label based on current network.
 * @returns {string} The human-readable network name.
 */
export function getNetworkLabel() {
  return NETWORK === 'mainnet' ? MAINNET_LABEL : TESTNET_LABEL;
}

/**
 * Default export for constants module.
 */
export default {
  NETWORK,
  CONTRACT_ADDRESS,
  CONTRACT_NAME,
  HUB_CONTRACT_ADDRESS,
  HUB_CONTRACT_NAME,
  MINT_FEE,
  FUNCTIONS,
  STACKS_NETWORK_CONFIG,
  MAX_SUPPLY,
  MAX_RECENT_MINTS,
  SCROLL_THRESHOLD,
  TOAST_DURATION,
  MAX_TOASTS,
  MAINNET_LABEL,
  TESTNET_LABEL,
  HIRO_EXPLORER_URL,
  MINT_FUNCTION,
  TRANSFER_FUNCTION,
  GET_TOTAL_SUPPLY,
  UNKNOWN_ADDRESS,
  PENDING_LABEL,
  FAILED_LABEL,
  getNetworkLabel
}
