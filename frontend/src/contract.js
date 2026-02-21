// Stacks Contract Configuration for NFTminimint
// Using @stacks/connect and @stacks/transactions

export const CONTRACT_ADDRESS = 'SP3H9XDH12...'; // Replace with actual deployed address
export const CONTRACT_NAME = 'nft-mint-controller';

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

export function getExplorerUrl(txId) {
  const baseUrl = STACKS_NETWORK_CONFIG[NETWORK].explorerUrl;
  return `${baseUrl}/txid/${txId}?chain=${NETWORK}`;
}
