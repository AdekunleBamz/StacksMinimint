// Stacks Contract Configuration for NFTminimint
// Using @stacks/connect and @stacks/transactions

import {
  NETWORK,
  STACKS_NETWORK_CONFIG
} from './constants';

export {
  CONTRACT_ADDRESS,
  CONTRACT_NAME,
  NETWORK,
  MINT_FEE,
  FUNCTIONS,
  STACKS_NETWORK_CONFIG
} from './constants';

/**
 * Generates an explorer URL for a given type (txid, token, address).
 * @param {string} type - The type of link ('txid', 'token', 'address').
 * @param {string} identifier - The identifier to link to.
 * @returns {string} The full explorer URL.
 */
function getBaseExplorerUrl(type, identifier) {
  const networkConfig = STACKS_NETWORK_CONFIG[NETWORK] || STACKS_NETWORK_CONFIG.mainnet;
  const baseUrl = networkConfig.explorerUrl;
  const normalizedIdentifier = typeof identifier === 'string' ? identifier.trim() : identifier;
  if (normalizedIdentifier === null || normalizedIdentifier === undefined || normalizedIdentifier === '') {
    return `${baseUrl}?chain=${NETWORK}`;
  }
  return `${baseUrl}/${type}/${encodeURIComponent(normalizedIdentifier)}?chain=${NETWORK}`;
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
