/**
 * useStacksContract hook for interacting with the StacksMinimint smart contract.
 * 
 * Provides contract read operations (total supply, mint fee) and write
 * operations (mint NFT). Handles wallet connection requirements and
 * post-condition validation for secure transactions.
 * 
 * @module useStacksContract
 */
import { useState, useCallback, useEffect } from 'react';
import { openContractCall } from '@stacks/connect';
import { STACKS_MAINNET, STACKS_TESTNET } from '@stacks/network';
import {
  fetchCallReadOnlyFunction,
  cvToValue,
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
import { validateTokenURI } from '../utils/collection';

/**
 * parseUint - Safely convert a Clarity uint value to a JavaScript number.
 *
 * Handles bigint, number, and numeric string inputs. Clamps negative values
 * to 0 and values above MAX_SAFE_INTEGER to Number.MAX_SAFE_INTEGER.
 *
 * @param {bigint|number|string} value - Raw Clarity uint value
 * @returns {number} Safe integer representation
 */
export const parseUint = (value) => {
  const MAX_SAFE_UINT = BigInt(Number.MAX_SAFE_INTEGER);

  if (typeof value === 'bigint') {
    if (value < 0n) return 0;
    return value > MAX_SAFE_UINT ? Number.MAX_SAFE_INTEGER : Number(value);
  }

  if (typeof value === 'number') {
    if (!Number.isFinite(value) || value <= 0) return 0;
    return Math.min(Math.floor(value), Number.MAX_SAFE_INTEGER);
  }

  if (typeof value === 'string' && /^\d+$/.test(value)) {
    const parsed = BigInt(value);
    return parsed > MAX_SAFE_UINT ? Number.MAX_SAFE_INTEGER : Number(parsed);
  }

  return 0;
};

/**
 * useStacksContract - React hook for read and write interaction with the Minimint NFT contract.
 *
 * Fetches on-chain collection metrics on mount and exposes a mint callback
 * that opens the Stacks wallet to sign and broadcast the transaction.
 *
 * @param {string|null} address - Connected wallet address used as the sender
 * @returns {{ isLoading: boolean, error: string|null, contractInfo: Object, mint: Function, fetchContractInfo: Function }}
 */
export function useStacksContract(address) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [contractInfo, setContractInfo] = useState({
    totalSupply: 0,
    maxSupply: MAX_SUPPLY,
    mintFee: MINT_FEE
  });
  const stacksNetwork = NETWORK === 'mainnet' ? STACKS_MAINNET : STACKS_TESTNET;

  /**
   * fetchContractInfo - Fetch on-chain collection metrics (supply, fee) via a read-only call.
   * Updates contractInfo state on success; silently ignores network errors.
   */
  const fetchContractInfo = useCallback(async () => {
    try {
      const response = await fetchCallReadOnlyFunction({
        contractAddress: CONTRACT_ADDRESS,
        contractName: CONTRACT_NAME,
        functionName: FUNCTIONS.GET_LAST_ID,
        functionArgs: [],
        network: stacksNetwork,
        senderAddress: address || CONTRACT_ADDRESS,
      });
      const lastTokenId = response?.type === 7 || response?.type === 8
        ? cvToValue(response.value)
        : cvToValue(response);
      const totalSupply = parseUint(lastTokenId);

      setContractInfo(prev => ({
        ...prev,
        totalSupply,
        maxSupply: MAX_SUPPLY,
        mintFee: MINT_FEE,
      }));
    } catch (fetchError) {
      // Non-critical: contract info will just stay at defaults
      console.warn('Failed to fetch contract info:', fetchError.message ?? fetchError);
    }
  }, [address, stacksNetwork]);

  useEffect(() => {
    if (!address) return undefined;

    let cancelled = false;
    const loadContractInfo = () => {
      if (!cancelled) {
        fetchContractInfo();
      }
    };

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(loadContractInfo, { timeout: 3000 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback?.(idleId);
      };
    }

    const timeoutId = window.setTimeout(loadContractInfo, 1500);
    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [address, fetchContractInfo]);

  /**
   * mint - Submit a mint transaction for the given token URI.
   *
   * Validates the token URI, builds the post-condition, and opens the
   * Stacks wallet to confirm. Returns a submission record on success or
   * null on cancel/error.
   *
   * @param {string} tokenURI - IPFS or HTTPS URI for the token metadata
   * @returns {Promise<Object|null>} Submission record or null
   */
  const mint = useCallback(async (tokenURI) => {
    if (!address) {
      setError('Wallet address is unavailable — reconnect and try again.');
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
    isSoldOut: contractInfo.totalSupply >= contractInfo.maxSupply,
    remainingSupply: Math.max(0, contractInfo.maxSupply - contractInfo.totalSupply),
    progressPct: contractInfo.maxSupply > 0
      ? Math.min(100, Math.round((contractInfo.totalSupply / contractInfo.maxSupply) * 100))
      : 0,
    hasError: Boolean(error),
    refetch: fetchContractInfo
  };
}

/**
 * Default export for useStacksContract hook.
 * @type {() => UseStacksContractReturn}
 */
export default useStacksContract
