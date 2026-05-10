/**
 * useTransaction hook for tracking Stacks transaction status.
 * 
 * Polls the Stacks API to monitor transaction confirmation status.
 * Handles request cancellation and automatic polling with cleanup.
 * 
 * @module useTransaction
 */
import { useCallback, useEffect, useRef, useState } from 'react';
import { STACKS_NETWORK_CONFIG, NETWORK } from '../constants';

/** Polling interval in ms for checking transaction confirmation status. */
const TX_POLL_INTERVAL_MS = 8_000;

/**
 * Hook to track the status of a Stacks transaction.
 * @param {string} txId - The transaction ID to track.
 * @returns {Object} { status, error, isLoading }
 */
export function useTransactionStatus(txId) {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const controllerRef = useRef(null);

  const checkStatus = useCallback(async () => {
    if (!txId) return;
    // Validate txId format before hitting the API to avoid unnecessary requests
    if (typeof txId !== 'string' || !/^0x[0-9a-f]{64}$/i.test(txId)) return;

    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    const controller = new AbortController();
    controllerRef.current = controller;
    setIsLoading(true);
    setStatus(null);
    setError(null);
    try {
      const networkConfig = STACKS_NETWORK_CONFIG[NETWORK] || STACKS_NETWORK_CONFIG.mainnet;
      const apiUrl = networkConfig.apiUrl;
      const encodedTxId = encodeURIComponent(txId);
      const response = await fetch(`${apiUrl}/extended/v1/tx/${encodedTxId}`, {
        signal: controller.signal
      });
      if (!response.ok) {
        throw new Error(`Transaction fetch failed with status ${response.status}`);
      }
      const data = await response.json();
      setStatus(data.tx_status);
    } catch (err) {
      if (err.name === 'AbortError') {
        return;
      }
      console.error('Error fetching transaction status:', err);
      setError(err.message || 'Unable to load transaction status');
    } finally {
      if (!controller.signal.aborted) {
        setIsLoading(false);
      }
    }
  }, [txId]);

  useEffect(() => {
    if (txId) {
      checkStatus();
      const interval = setInterval(checkStatus, TX_POLL_INTERVAL_MS); // Check every 8 seconds
      return () => clearInterval(interval);
    }

    setStatus(null);
    setError(null);
    setIsLoading(false);
  }, [txId, checkStatus]);

  useEffect(() => {
    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
    };
  }, []);

  return { status, error, isLoading, refetch: checkStatus, isConfirmed: status === 'success', isPending: status === 'pending', isFailed: status === 'abort_by_response' || status === 'abort_by_post_condition' };
}

/**
 * Default export for useTransactionStatus hook.
 * @type {() => UseTransactionStatusReturn}
 */
export default useTransactionStatus
