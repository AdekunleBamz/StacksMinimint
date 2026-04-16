/**
 * useAsync hook for managing async operations with loading, error, and success states.
 * 
 * Provides a standardized way to handle async operations across the application
 * with automatic state management, cancellation, and error handling.
 * 
 * @module useAsync
 */

import { useState, useCallback, useRef, useEffect } from 'react';

/**
 * @typedef {Object} AsyncState
 * @property {any} data - The resolved data from the async operation
 * @property {Error|null} error - The error if the operation failed
 * @property {boolean} isLoading - Whether the operation is currently in progress
 * @property {boolean} isSuccess - Whether the operation completed successfully
 * @property {boolean} isError - Whether the operation failed
 * @property {() => void} reset - Function to reset the state to initial values
 */

/**
 * Custom hook for managing async operations with standardized state handling.
 * 
 * @template T
 * @param {() => Promise<T>} asyncFn - The async function to execute
 * @param {Object} [options] - Configuration options
 * @param {boolean} [options.immediate=false] - Whether to execute immediately on mount
 * @param {function(Error): void} [options.onError] - Error callback
 * @param {function(T): void} [options.onSuccess] - Success callback
 * @returns {AsyncState & { execute: ( ...args) => Promise<T> }}
 * 
 * @example
 * const { data, isLoading, error, execute } = useAsync(
 *   (tokenId) => fetchTokenData(tokenId),
 *   { immediate: true }
 * );
 */
export function useAsync(asyncFn, options = {}) {
  const { immediate = false, onError, onSuccess } = options;

  const [state, setState] = useState({
    data: null,
    error: null,
    isLoading: false,
    isSuccess: false,
    isError: false
  });

  const mountedRef = useRef(true);
  const promiseRef = useRef(null);

  // Set mounted state for cleanup
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  /**
   * Execute the async function with proper state management.
   * @param {...any} args - Arguments to pass to the async function
   * @returns {Promise<T>} The result of the async function
   */
  const execute = useCallback(async (...args) => {
    const promise = asyncFn(...args);
    promiseRef.current = promise;

    setState(prev => ({
      ...prev,
      isLoading: true,
      isError: false,
      isSuccess: false,
      error: null
    }));

    try {
      const data = await promise;

      // Only update state if component is still mounted and this is the latest request
      if (mountedRef.current && promiseRef.current === promise) {
        setState({
          data,
          error: null,
          isLoading: false,
          isSuccess: true,
          isError: false
        });

        onSuccess?.(data);
      }

      return data;
    } catch (error) {
      // Only update state if component is still mounted and this is the latest request
      if (mountedRef.current && promiseRef.current === promise) {
        setState({
          data: null,
          error,
          isLoading: false,
          isSuccess: false,
          isError: true
        });

        onError?.(error);
      }

      throw error;
    }
  }, [asyncFn, onError, onSuccess]);

  /**
   * Reset the state to initial values.
   */
  const reset = useCallback(() => {
    setState({
      data: null,
      error: null,
      isLoading: false,
      isSuccess: false,
      isError: false
    });
  }, []);

  // Execute immediately if requested
  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [immediate, execute]);

  return {
    ...state,
    execute,
    reset
  };
}

/**
 * Default export for useAsync hook.
 */
export default useAsync;