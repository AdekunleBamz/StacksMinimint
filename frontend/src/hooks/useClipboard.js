import { useState, useCallback } from 'react';

/**
 * A custom hook for copying text to the clipboard with status feedback.
 * @param {number} timeout - Delay in milliseconds before resetting the copied status.
 * @returns {Object} { copied, copy, error }
 */
export function useClipboard(timeout = 2000) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);

  const copy = useCallback(async (text) => {
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setError(null);
      setTimeout(() => setCopied(false), timeout);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setError(err);
      setCopied(false);
    }
  }, [timeout]);

  return { copied, copy, error };
}

export default useClipboard;
