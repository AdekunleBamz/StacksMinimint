// Module note: keeps usestackscontract behavior responsibilities explicit.
import { useState, useCallback, useEffect, useMemo } from 'react';
import { openContractCall } from '@stacks/connect';
import { STACKS_MAINNET, STACKS_TESTNET } from '@stacks/network';
import {
  stringAsciiCV,
  PostConditionMode,
  Pc
} from '@stacks/transactions';
import {
  CONTRACT_ADDRESS,
  CONTRACT_NAME,
  FUNCTIONS,
  MINT_FEE,
  MAX_SUPPLY,
  NETWORK
} from '../constants';
import { userSession } from './useStacksWallet';
import { validateTokenURI } from '../utils/collection';
import { MinimintClient } from 'stacksminimint-sdk';

const parseUint = (value) => {
  if (typeof value === 'bigint') {
    return Number(value);
  }
  if (typeof value === 'number') {
    return Number.isFinite(value) ? value : 0;
  }
  if (typeof value === 'string' && /^\d+$/.test(value)) {
    return Number(value);
  }
  return 0;
};

export function useStacksContract(address) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [contractInfo, setContractInfo] = useState({
    totalSupply: 0,
    maxSupply: MAX_SUPPLY,
    mintFee: MINT_FEE
  });
  const stacksNetwork = NETWORK === 'mainnet' ? STACKS_MAINNET : STACKS_TESTNET;
  const sdkClient = useMemo(() => new MinimintClient(NETWORK), []);

  const fetchContractInfo = useCallback(async () => {
    try {
      const lastTokenId = await sdkClient.getLastTokenId();
      const totalSupply = parseUint(lastTokenId);

      setContractInfo(prev => ({
        ...prev,
        totalSupply,
        maxSupply: MAX_SUPPLY,
        mintFee: MINT_FEE,
      }));
    } catch (fetchError) {
      console.warn('Failed to fetch contract info:', fetchError);
    }
  }, [sdkClient]);

  useEffect(() => {
    fetchContractInfo();
  }, [fetchContractInfo]);

  const mint = useCallback(async (tokenURI) => {
    if (!userSession.isUserSignedIn()) {
      setError('Please connect your wallet');
      return null;
    }

    if (!address) {
      setError('Wallet address is unavailable. Reconnect and try again.');
      return null;
    }

    setIsLoading(true);
    setError(null);

    try {
      const normalizedTokenURI = String(tokenURI || '').trim();
      const validation = validateTokenURI(normalizedTokenURI);
      if (!validation.isValid) {
        setError(validation.helper);
        setIsLoading(false);
        return null;
      }
      // Post-condition: User transfers 0.001 STX
      const postCondition = Pc.principal(address).willSendEq(MINT_FEE);

      return new Promise((resolve) => {
        openContractCall({
          contractAddress: CONTRACT_ADDRESS,
          contractName: CONTRACT_NAME,
          functionName: FUNCTIONS.MINT,
          functionArgs: [stringAsciiCV(normalizedTokenURI)],
          postConditions: [postCondition],
          postConditionMode: PostConditionMode.Deny,
          network: stacksNetwork,
          onFinish: (data) => {
            fetchContractInfo();
            setIsLoading(false);
            resolve({
              txId: data.txId,
              tokenId: data?.tokenId ?? null,
              tokenURI: normalizedTokenURI,
              to: address,
              minter: address,
              timestamp: Math.floor(Date.now() / 1000)
            });
          },
          onCancel: () => {
            setIsLoading(false);
            setError('Transaction cancelled');
            resolve(null);
          }
        });
      });
    } catch (err) {
      console.error('Minting error:', err);
      setError(err.message || 'Minting failed');
      setIsLoading(false);
      return null;
    }
  }, [address, fetchContractInfo, stacksNetwork]);

  return {
    mint,
    isLoading,
    error,
    contractInfo,
    refetch: fetchContractInfo
  };
}
