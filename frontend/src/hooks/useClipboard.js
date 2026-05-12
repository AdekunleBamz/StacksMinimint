/**
 * useClipboard hook for copying text to the clipboard.
 * 
 * Provides a simple interface for clipboard operations with
 * visual feedback on copy success. Handles permission requests.
 * 
 * @module useClipboard
 */
import { useCallback, useEffect, useRef, useState } from 'react';

/** Off-screen CSS left position to hide the fallback textarea from view. */
const CLIPBOARD_OFFSCREEN_OFFSET = '-9999px';

/**
 * A custom hook for copying text to the clipboard with status feedback.
 * @param {number} timeout - Delay in milliseconds before resetting the copied status.
 * @returns {Object} { copied, copy, error }
 */
export function useClipboard(timeout = 2000) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);
  const timerRef = useRef(null);
  const safeTimeout = typeof timeout === 'number' && timeout > 0 ? timeout : 2000;

  const copy = useCallback(async (text) => {
    if (text === null || text === undefined) return false;
    const value = String(text);
    if (!value) return false;
    setError(null);

    try {
      // Prefer the async Clipboard API; fall back for older embedded browsers.
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
        textarea.style.left = CLIPBOARD_OFFSCREEN_OFFSET;
        document.body.appendChild(textarea);
        textarea.select();
        const copiedSuccessfully = document.execCommand('copy');
        document.body.removeChild(textarea);
        if (!copiedSuccessfully) {
          throw new Error('Fallback clipboard copy command failed');
        }
      }
      setCopied(true);
      setError(null);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => setCopied(false), safeTimeout);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setError(err);
      setCopied(false);
    }
  }, [safeTimeout]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const reset = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setCopied(false);
    setError(null);
  }, []);

  return { copied, copy, error, reset };
}

export default useClipboard;
