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
    isError: false,
    executionCount: 0,
    lastExecutedAt: null
  });

  const mountedRef = useRef(true);
  /** Tracks the latest promise so stale async completions cannot overwrite state. */
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
    if (typeof asyncFn !== 'function') {
      throw new Error('useAsync: asyncFn must be a function');
    }
    const promise = asyncFn(...args);
    promiseRef.current = promise;
    lastArgsRef.current = args;

    setState(prev => ({
      ...prev,
      isLoading: true,
      isError: false,
      isSuccess: false,
      error: null,
      executionCount: prev.executionCount + 1,
      lastExecutedAt: Date.now()
    }));

    try {
      const data = await promise;

      if (mountedRef.current && promiseRef.current === promise) {
        setState((prev) => ({
          ...prev,
          data,
          error: null,
          isLoading: false,
          isSuccess: true,
          isError: false
        }));

        onSuccess?.(data);
      }

      return data;
    } catch (err) {
      if (mountedRef.current && promiseRef.current === promise) {
        setState((prev) => ({
          ...prev,
          data: null,
          error: err,
          isLoading: false,
          isSuccess: false,
          isError: true
        }));

        onError?.(err);
      }

      throw err;
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
      isError: false,
      executionCount: 0,
      lastExecutedAt: null
    });
  }, []);

  /**
   * Clear the current error without resetting the rest of the state.
   */
  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, error: null, isError: false }));
  }, []);

  /**
   * Re-execute the async function using the last known arguments.
   * @returns {Promise<T>}
   */
  const lastArgsRef = useRef([]);
  const retry = useCallback(() => execute(...lastArgsRef.current), [execute]);

  // Execute immediately if requested
  useEffect(() => {
    if (immediate) {
      void execute().catch(() => {});
    }
  }, [immediate, execute]);

  return {
    ...state,
    execute,
    reset,
    clearError,
    retry,
    hasRun: state.executionCount > 0,
    isIdle: !state.isLoading && state.executionCount === 0,
    setData: useCallback((value) => setState(prev => ({ ...prev, data: value })), []),
  };
}

/**
 * Default export for useAsync hook.
 */
export default useAsync;
