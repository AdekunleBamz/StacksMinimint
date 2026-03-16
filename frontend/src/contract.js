// Stacks Contract Configuration for NFTminimint
// Using @stacks/connect and @stacks/transactions

export const CONTRACT_ADDRESS = 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT'; // Current deployer address
export const CONTRACT_NAME = 'minimint-core';

export const NETWORK = 'mainnet'; // 'mainnet' or 'testnet'

export const MINT_FEE = 1000; // 0.001 STX (in micro-STX)

// Contract functions
export const FUNCTIONS = {
  MINT: 'mint',
  GET_LAST_ID: 'get-last-token-id',
  GET_OWNER: 'get-owner',
  TRANSFER: 'transfer'
}

// Network-specific configuration
export const STACKS_NETWORK_CONFIG = {
  mainnet: {
    apiUrl: 'https://api.hiro.so',
    explorerUrl: 'https://explorer.hiro.so'
  },
  testnet: {
    apiUrl: 'https://api.testnet.hiro.so',
    explorerUrl: 'https://explorer.hiro.so'
  }
}

/**
 * Generates an explorer URL for a given type (txid, token, address).
 * @param {string} type - The type of link ('txid', 'token', 'address').
 * @param {string} identifier - The identifier to link to.
 * @returns {string} The full explorer URL.
 */
function getBaseExplorerUrl(type, identifier) {
  const baseUrl = STACKS_NETWORK_CONFIG[NETWORK].explorerUrl;
  return `${baseUrl}/${type}/${identifier}?chain=${NETWORK}`;
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
