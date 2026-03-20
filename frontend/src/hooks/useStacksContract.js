import { useState, useCallback, useEffect } from 'react';
import { openContractCall } from '@stacks/connect';
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
  NETWORK
} from '../constants';
import { userSession } from './useStacksWallet';
import { validateTokenURI } from '../utils/collection';

export function useStacksContract(address) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [contractInfo, setContractInfo] = useState({
    totalSupply: 0,
    maxSupply: 10000,
    mintFee: MINT_FEE
  });

  // Mock fetch for now, as we'd need read-only calls
  const fetchContractInfo = useCallback(async () => {
    // In a real app, use callReadOnlyFunction from @stacks/transactions
    setContractInfo(prev => ({ ...prev }));
  }, []);

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
          network: NETWORK === 'mainnet' ? 'mainnet' : 'testnet',
          onFinish: (data) => {
            setIsLoading(false);
            resolve({
              txId: data.txId,
              tokenId: data?.tokenId ?? null,
              tokenURI: normalizedTokenURI,
              to: address
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
  }, [address]);

  return {
    mint,
    isLoading,
    error,
    contractInfo,
    refetch: fetchContractInfo
  };
}
