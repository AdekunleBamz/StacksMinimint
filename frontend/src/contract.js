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
const EXPLORER_LABELS = {
  txid: 'Transaction',
  token: 'Token',
  address: 'Address'
}

export function normalizeExplorerType(type) {
  return EXPLORER_VALID_TYPES.includes(type) ? type : 'txid'
}

export function getExplorerLinkLabel(type, identifier) {
  const safeType = normalizeExplorerType(type)
  const baseLabel = EXPLORER_LABELS[safeType]
  const normalizedIdentifier = typeof identifier === 'string' ? identifier.trim() : identifier
  if (normalizedIdentifier == null || normalizedIdentifier === '') {
    return `Open ${baseLabel} in Explorer`
  }

  return `${baseLabel}: ${normalizedIdentifier}`
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
  // Falsy txId falls back to base explorer URL via getBaseExplorerUrl
  return getBaseExplorerUrl('txid', txId || '');
}

export function getTokenExplorerUrl(tokenId) {
  return getBaseExplorerUrl('token', tokenId);
}

export function getAddressExplorerUrl(address) {
  return getBaseExplorerUrl('address', address);
}

export function getTxExplorerLinkLabel(txId) {
  return getExplorerLinkLabel('txid', txId)
}

export function getTokenExplorerLinkLabel(tokenId) {
  return getExplorerLinkLabel('token', tokenId)
}

export function getAddressExplorerLinkLabel(address) {
  return getExplorerLinkLabel('address', address)
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
