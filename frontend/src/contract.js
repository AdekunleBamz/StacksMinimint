/**
 * Contract utility functions for Stacks blockchain interaction.
 * 
 * Provides helpers for generating explorer URLs for transactions,
 * tokens, and addresses. Re-exports contract configuration from constants.
 * 
 * @module contract
 */

import {
  NETWORK,
  STACKS_NETWORK_CONFIG,
  CONTRACT_ADDRESS,
  CONTRACT_NAME
} from './constants';

export {
  CONTRACT_ADDRESS,
  CONTRACT_NAME,
  NETWORK,
  MINT_FEE,
  FUNCTIONS,
  STACKS_NETWORK_CONFIG
} from './constants';

const EXPLORER_VALID_TYPES = ['txid', 'token', 'address']

export function normalizeExplorerType(type) {
  return EXPLORER_VALID_TYPES.includes(type) ? type : 'txid'
}

/**
 * Generates an explorer URL for a given type (txid, token, address).
 * @param {string} type - The type of link ('txid', 'token', 'address').
 * @param {string} identifier - The identifier to link to.
 * @returns {string} The full explorer URL.
 */
function getBaseExplorerUrl(type, identifier) {
  const networkConfig = STACKS_NETWORK_CONFIG[NETWORK] || STACKS_NETWORK_CONFIG.mainnet;
  const baseUrl = networkConfig.explorerUrl;
  const safeType = normalizeExplorerType(type)
  const normalizedIdentifier = typeof identifier === 'string' ? identifier.trim() : identifier;
  if (normalizedIdentifier == null || normalizedIdentifier === '') {
    return `${baseUrl}?chain=${NETWORK}`;
  }
  const encodedIdentifier =
    typeof normalizedIdentifier === 'string'
      ? normalizedIdentifier
      : String(normalizedIdentifier);
  return `${baseUrl}/${safeType}/${encodeURIComponent(encodedIdentifier)}?chain=${NETWORK}`;
}

export function getExplorerUrl(txId) {
  return getBaseExplorerUrl('txid', txId);
}

export function getTokenExplorerUrl(tokenId) {
  return getBaseExplorerUrl('token', tokenId);
}

export function getAddressExplorerUrl(address) {
  return getBaseExplorerUrl('address', address);
}

/**
 * Generates a contract explorer URL for the current deployed contract.
 * @returns {string} The full explorer URL for the contract.
 */
export function getContractExplorerUrl() {
  const networkConfig = STACKS_NETWORK_CONFIG[NETWORK] || STACKS_NETWORK_CONFIG.mainnet;
  const baseUrl = networkConfig.explorerUrl;
  return `${baseUrl}/txid/${encodeURIComponent(`${CONTRACT_ADDRESS}.${CONTRACT_NAME}`)}?chain=${NETWORK}`;
}
