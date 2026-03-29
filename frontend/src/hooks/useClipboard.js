// Module note: keeps useclipboard behavior responsibilities explicit.
import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * A custom hook for copying text to the clipboard with status feedback.
 * @param {number} timeout - Delay in milliseconds before resetting the copied status.
 * @returns {Object} { copied, copy, error }
 */
export function useClipboard(timeout = 2000) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);
  const timerRef = useRef(null);

  const copy = useCallback(async (text) => {
    if (text === null || text === undefined) return;
    const value = String(text);
    setError(null);

    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        if (typeof document === 'undefined') {
          throw new Error('Clipboard is not available in this environment');
        }
        const textarea = document.createElement('textarea');
        textarea.value = value;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setError(null);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => setCopied(false), timeout);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setError(err);
      setCopied(false);
    }
  }, [timeout]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return { copied, copy, error };
}

export default useClipboard;
