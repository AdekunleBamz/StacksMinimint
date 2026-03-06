import { useState, useCallback, useEffect } from 'react';
import { openContractCall } from '@stacks/connect';
import {
  stringAsciiCV,
  uintCV,
  noneCV,
  standardPrincipalCV,
  PostConditionMode,
  Pc
} from '@stacks/transactions';
import {
  CONTRACT_ADDRESS,
  CONTRACT_NAME,
  FUNCTIONS,
  MINT_FEE,
  NETWORK
} from '../contract';
import { userSession } from './useStacksWallet';

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

    setIsLoading(true);
    setError(null);

    try {
      // Post-condition: User transfers 0.001 STX
      const postCondition = Pc.principal(address).willSendEq(MINT_FEE);

      return new Promise((resolve) => {
        openContractCall({
          contractAddress: CONTRACT_ADDRESS,
          contractName: CONTRACT_NAME,
          functionName: FUNCTIONS.MINT,
          functionArgs: [stringAsciiCV(tokenURI)],
          postConditions: [postCondition],
          postConditionMode: PostConditionMode.Deny,
          network: NETWORK === 'mainnet' ? 'mainnet' : 'testnet',
          onFinish: (data) => {
            setIsLoading(false);
            resolve({
              txId: data.txId,
              tokenURI,
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
