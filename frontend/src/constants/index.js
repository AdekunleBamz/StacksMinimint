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

export const MINT_FEE = Number.isFinite(envMintFee) ? envMintFee : SDK_MINT_FEE; // micro-STX

export const FUNCTIONS = SDK_FUNCTIONS;
export const STACKS_NETWORK_CONFIG = SDK_STACKS_NETWORK_CONFIG;
export const MAX_SUPPLY = 10000;

// --- UI Constants ---
// Values used for consistent UI behavior across components.

/** Maximum number of recent mints to display in the activity feed */
export const MAX_RECENT_MINTS = 5;

/** Scroll threshold (in pixels) to show the back-to-top button */
export const SCROLL_THRESHOLD = 400;

/** Toast notification auto-dismiss duration in milliseconds */
export const TOAST_DURATION = 5000;

/** Maximum number of toasts to display simultaneously */
export const MAX_TOASTS = 3;

// --- Network Labels ---
// Human-readable labels for network display.

/** Display name for mainnet network */
export const MAINNET_LABEL = 'Stacks Mainnet';

/** Display name for testnet network */
export const TESTNET_LABEL = 'Stacks Testnet';

// --- Explorer URLs ---
// Base URLs for Stacks explorers.

/** Hiro Explorer base URL */
export const HIRO_EXPLORER_URL = 'https://explorer.stacks.co';

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
