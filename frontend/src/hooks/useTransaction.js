import { useCallback, useEffect, useRef, useState } from 'react';
import { STACKS_NETWORK_CONFIG, NETWORK } from '../constants';

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

    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    const controller = new AbortController();
    controllerRef.current = controller;
    setIsLoading(true);
    try {
      const apiUrl = STACKS_NETWORK_CONFIG[NETWORK].apiUrl;
      const response = await fetch(`${apiUrl}/extended/v1/tx/${txId}`, {
        signal: controller.signal
      });
      if (!response.ok) {
        throw new Error('Failed to fetch transaction status');
      }
      const data = await response.json();
      setStatus(data.tx_status);
      setError(null);
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
      const interval = setInterval(checkStatus, 10000); // Check every 10 seconds
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

  return { status, error, isLoading, refetch: checkStatus };
}
