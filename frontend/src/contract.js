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
  TRANSFER: 'transfer',
  // New functions from enhanced contract
  GET_MINT_FEE: 'get-mint-fee',
  GET_MAX_SUPPLY: 'get-max-supply',
  GET_CURRENT_SUPPLY: 'get-current-supply',
  GET_REMAINING_SUPPLY: 'get-remaining-supply',
  UPDATE_MINT_FEE: 'update-mint-fee',
  WITHDRAW_FEES: 'withdraw-fees',
  // NFT Core functions
  GET_TOTAL_SUPPLY: 'get-total-supply',
  TOKEN_EXISTS: 'token-exists',
  BURN: 'burn',
  SET_AUTHORIZED_MINTER: 'set-authorized-minter'
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

// Contract addresses for different networks
export const CONTRACTS = {
  mainnet: {
    nftCore: 'nft-core',
    nftMetadata: 'nft-metadata',
    nftMintController: 'nft-mint-controller'
  },
  testnet: {
    nftCore: 'nft-core',
    nftMetadata: 'nft-metadata',
    nftMintController: 'nft-mint-controller'
  }
}

export function getExplorerUrl(txId) {
  const baseUrl = STACKS_NETWORK_CONFIG[NETWORK].explorerUrl;
  return `${baseUrl}/txid/${txId}?chain=${NETWORK}`;
}

export function getContractAddress(network = NETWORK) {
  return CONTRACT_ADDRESS;
}
