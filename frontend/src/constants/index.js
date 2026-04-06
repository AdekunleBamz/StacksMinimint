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

// Default to the deployed v-i28 contracts and allow env overrides.
export const CONTRACT_ADDRESS = import.meta.env?.VITE_CONTRACT_ADDRESS || MAINNET_DEPLOYER;
export const CONTRACT_NAME = import.meta.env?.VITE_CONTRACT_NAME || 'minimint-core-v-i28';
export const HUB_CONTRACT_ADDRESS = import.meta.env?.VITE_HUB_CONTRACT_ADDRESS || MAINNET_DEPLOYER;
export const HUB_CONTRACT_NAME = import.meta.env?.VITE_HUB_CONTRACT_NAME || 'minimint-hub-v-i28';

export const MINT_FEE = Number.isFinite(envMintFee) ? envMintFee : SDK_MINT_FEE; // micro-STX

export const FUNCTIONS = SDK_FUNCTIONS;
export const STACKS_NETWORK_CONFIG = SDK_STACKS_NETWORK_CONFIG;
export const MAX_SUPPLY = 10000;

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
  MAX_SUPPLY
}
