export const CONTRACT_ADDRESS = 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT';
export const CONTRACT_NAME = import.meta.env.VITE_CONTRACT_NAME || 'minimint-core';
export const NETWORK = 'mainnet'; // 'mainnet' or 'testnet'
export const MINT_FEE = 1000; // 0.001 STX (in micro-STX)

export const FUNCTIONS = {
  MINT: 'mint',
  GET_LAST_ID: 'get-last-token-id',
  GET_OWNER: 'get-owner',
  TRANSFER: 'transfer'
};

export const STACKS_NETWORK_CONFIG = {
  mainnet: {
    apiUrl: 'https://api.hiro.so',
    explorerUrl: 'https://explorer.hiro.so'
  },
  testnet: {
    apiUrl: 'https://api.testnet.hiro.so',
    explorerUrl: 'https://explorer.hiro.so'
  }
};
